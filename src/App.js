import React, { useEffect, useState } from 'react'
import {  CssBaseline, Grid} from '@material-ui/core'

import { getPlacesData } from './api/index'
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import PlaceDetails from "./components/PlaceDetails";

const App = () => {
  const [places, setPlaces ] = useState([])

  const [bounds, setBounds ] = useState(null)
  const [coordinates, setCoordinates] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })

  }, [])

  useEffect(() => {
    let bounds = true
    getPlacesData( bounds.sw, bounds.ne)
      .then((data)=> {
        console.log(data)

        setPlaces(data)
      })
  }, [coordinates, bounds])

  return (
    <div>
        <CssBaseline />
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
