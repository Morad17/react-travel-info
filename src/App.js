import React, { useEffect, useState } from 'react'
import {  CssBaseline, Grid} from '@material-ui/core'

import { getPlacesData } from './api/index'
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import PlaceDetails from "./components/PlaceDetails";

const App = () => {
  const [places, setPlaces ] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds ] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })

  }, [])

  useEffect(() => {
    let mounted = true
    if (bounds){
    
      getPlacesData( bounds.sw, bounds.ne)
      .then((data)=> {
          if(mounted){
          console.log(data)

          setPlaces(data)
          }
        })
    }
  }, [bounds, coordinates])

  return (
    <div>
        <Header />
        <List places={places} />
        <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
    </div>
  );
}

export default App
