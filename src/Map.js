import { useState, useRef, useEffect, useContext } from 'react'

import { AppContext } from './MyContext'

export default function Map(props){
  const {google, map, setMap} = useContext(AppContext);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if(google == null || mapContainerRef == null) return;
    const initialConfig = {
      zoom: 15,
      center: { lat: 35.6432027, lng: 139.6729435 },
      disableDefaultUI: true,
    }
    const map = new google.maps.Map(mapContainerRef.current, initialConfig);
    map.addListener("click", props.handleClickPOI);
    setMap(map);
  }, [google, mapContainerRef]);

  return(
    <>
      <div ref={mapContainerRef} style={{height: '100%'}}>I can use the DOM with react ref</div>
    </>
  )
}
