import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import MediaCard from './MediaCard';

import { Box} from '@material-ui/core';

import { useState, useContext, useEffect} from 'react'

import MyDrawer from './MyDrawer'
import PlaceDetail from './PlaceDetail'

import { AppContext, } from './MyContext'

const styles = {
};

function PlaceCard(props){
  const {place} = props;
  const [openDrawer, setOpenDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => {
    setOpenDrawer({ ...openDrawer, [anchor]: open });
  };
  const handleClick = () => {
    toggleDrawer('bottom', true)
  }
  return(
    <Box>
      <Box><MediaCard place={place} onClick={handleClick} onClickAdd={props.onClickAdd} onClickDelete={props.onClickDelete}/></Box>
      <MyDrawer drawer={<PlaceDetail place={place}/>} toggleDrawer={toggleDrawer} state={openDrawer} anchor={'bottom'}/>
    </Box>
  )
}

const Carousel = (props) => {
  const { chipIndex, markers, setMarkers} = props
  // const [places, setPlaces] = useState(props.places);
  const { places, setPlaces, } = props
  // const [value, setValue] = useState(0);
  const { map, plan, setPlan, snackbarState, } = useContext(AppContext)

  const handleChangeIndex = (index) => {
    props.setCarouselIndex(index);
    map.panTo({lat: places[index].geometry.location.lat(), lng: places[index].geometry.location.lng()})
  }


  // useEffect(() => {
  //   setValue(0);
  // }, [chipIndex])
  //
  // useEffect(() => {
  //   if(markers == null) return;
  //   markers.markers.map((marker, id) => {
  //     marker.addListener('click', ()=>{
  //       // setValue(id);
  //       for(var i = 0; i < props.places.length; i++){
  //         if(props.places[i].name == marker.title){
  //           setValue(i)
  //           break;
  //         }
  //       }
  //     })
  //   })
  //   setMarkers(markers)
  //   // setPlaces(props.places);
  // }, [markers])


  if(places == null) return;
  return(
    <SwipeableViews enableMouseEvents index={props.carouselIndex} onChangeIndex={(index) => handleChangeIndex(index)} style={{padding: '0 30px'}}>
      {places.map((place, id) => (
        <Box px={1}><PlaceCard place={place} onClickDelete={() => props.handleClickDelete(id)} onClickAdd={() => props.handleClickAdd(id)}/></Box>
      ))}
    </SwipeableViews>
  )
};

export default Carousel;
