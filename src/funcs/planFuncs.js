import { findPlace, findPlaces, drivingDirection, } from './googleMapAPI'

export async function makePlan(google, map, plan, condition){
  var {regionName, originName, destinationName, lunch, dinner, departureTime, arrivalTime, status} = condition;
  if(arrivalTime == null) arrivalTime = 21 * 3600
  var [origin] = await findPlace(google, map, originName);
  var [destination] = await findPlace(google, map, destinationName);
  var places = await getPlaces(google, map, plan, departureTime, arrivalTime, lunch, dinner, status, regionName);
  var waypts = places.map(place => {
    return{
      location: place.formatted_address,
      stopover: true,
    }
  });
  var direction = await drivingDirection(google, originName, destinationName, waypts);
  direction.routes[0].legs.map(leg => {
    leg.duration.value *= 2;
    leg.duration.newText = getDurationStr(leg.duration.value);
  });
  places = updatePlaces(direction, places, origin, destination);
  var itinerary = getItinerary(places, origin, destination, direction.routes[0].legs, departureTime);
  if(lunch) await insertPlace(google, map, itinerary, direction.routes[0].legs, places, 12 * 3600, '昼食');
  if(dinner) await insertPlace(google, map, itinerary, direction.routes[0].legs, places, 18 * 3600, '夕食');
  places.map(place => {place.type = 'plan'})
  return {places, origin, destination, itinerary, legs: direction.routes[0].legs};
}

async function getPlaces(google, map, plan, departureTime, arrivalTime, lunch, dinner, status, regionName){
  var duration = (arrivalTime - departureTime);
  if(lunch) duration -= 3600;
  if(dinner) duration -= 3600;
  var num = duration / (75 * 60)

  var places = []
  if(status != 'new') places = plan.places;
  const allPlaces = await findPlaces(google, map, regionName + ' 観光');
  places = places.concat(allPlaces.slice(0, num - places.length))
  return places;
}

const updatePlaces = (direction, places, origin, destination) => {
  origin.stayTime = {
    value: 0,
    text: getDurationStr(0),
  }
  destination.stayTime = {
    value: 0,
    text: getDurationStr(0),
  }
  return direction.routes[0].waypoint_order.map(i => {
    var place = places[i];
    place.stayTime = {
      value: 1 * 3600,
      text: getDurationStr(1 * 3600),
    };
    return place;
  });
}

const getItinerary = (places, origin, destination, legs, departureTime) => {
  var itinerary = places.slice();
  itinerary.unshift(origin);
  itinerary.push(destination);

  var time = departureTime;
  for(var i = 0; i < itinerary.length; i++){
    itinerary[i].arrivalTime = {
      text: getTimeStr(time),
      value: time,
    };
    time += itinerary[i].stayTime.value;
    itinerary[i].departureTime = {
      text: getTimeStr(time),
      value: time,
    }
    if(i < legs.length){
      time += legs[i].duration.value;
    }
  }
  return itinerary;
}

export const insertPlace = async (google, map, itinerary, legs, places, time, query) => {
  for(var i = 0; i < itinerary.length - 1; i++){
    if(itinerary[i].departureTime.value >= time){
      var [lunch] = await findPlace(google, map, query, itinerary[i].geometry.location);
      lunch.stayTime = {
        value: 3600,
        text: getDurationStr(3600),
      }
      var goDirection = await drivingDirection(google, itinerary[i].formatted_address, lunch.formatted_address);
      var goLeg = goDirection.routes[0].legs[0];
      var backDirection = await drivingDirection(google, lunch.formatted_address, itinerary[i+1].formatted_address);
      var backLeg = backDirection.routes[0].legs[0];
      goLeg.duration.value *= 2;
      goLeg.duration.newText = getDurationStr(goLeg.duration.value);
      backLeg.duration.value *= 2;
      backLeg.duration.newText = getDurationStr(backLeg.duration.value);
      var time = itinerary[i].departureTime.value + goLeg.duration.value;
      var duration = goLeg.duration.value + lunch.stayTime.value + backLeg.duration.value;
      lunch.arrivalTime = {
        value: time,
        text: getTimeStr(time),
      }
      time += lunch.stayTime.value;
      lunch.departureTime = {
        value: time,
        text: getTimeStr(time),
      }
      time += backLeg.duration.value;
      for(var j = i + 1; j < itinerary.length; j++){
        itinerary[j].arrivalTime.value += duration - legs[i].duration.value;
        itinerary[j].arrivalTime.text = getTimeStr(itinerary[j].arrivalTime.value)
        itinerary[j].departureTime.value += duration - legs[i].duration.value;
        itinerary[j].departureTime.text = getTimeStr(itinerary[j].departureTime.value);
      }
      itinerary.splice(i+1, 0, lunch);
      legs.splice(i, 1, goLeg, backLeg);
      places.splice(i+1, 0, lunch);
      break;
    }
  }
}



function getTimeStr(time){
  var h = Math.floor(time / 3600);
  var m = Math.floor((time % 3600) / 60);
  return `${('00' + h).slice(-2)}:${('00' + m).slice(-2)}`;
}
function getDurationStr(time){
  var h = Math.floor(time / 3600);
  var m = Math.floor((time % 3600) / 60);
  var str = '';
  if(h > 0) str += `${h}hour`;
  if((m == 0 && h == 0) || m > 0){
    str += `${m}min`;
  }
  return str;
}