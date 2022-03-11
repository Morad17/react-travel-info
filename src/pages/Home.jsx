import React, { useEffect, useState } from 'react'
import {  CssBaseline, Grid} from '@material-ui/core'

import { getPlacesData } from '../api/index'
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";

const Home = () => {

  const [places, setPlaces ] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds ] = useState({})
  const [childClicked, setChildClicked ] = useState(null)
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
    <div className="home">
        <Header />
        <section className="content">
            <List 
              places={places}
              childClicked={childClicked} />
            <Map 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
        </section>
        
    </div>
  );
}

export default Home
