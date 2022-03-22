import React, { useEffect, useState } from 'react'

import { getPlacesData, getWeatherData } from '../api/index'
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";

const Home = () => {

  const [places, setPlaces ] = useState([])
  const [weatherData, setWeatherData ] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds ] = useState({})
  const [childClicked, setChildClicked ] = useState(null)
  const [isLoading, setIsLoading ] = useState(false);

  const [autocomplete, setAutoComplete] = useState(null)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('restaurants')

  useEffect(() => {

  navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })

  }, [])

  useEffect(()=> {
    const filteredPlaces = places.filter((place) => place.rating > rating)

    setFilteredPlaces(filteredPlaces)
  }, [rating])

  useEffect(() => {
    setIsLoading(true);
    let mounted = true
    if (bounds.sw && bounds.ne){
      getWeatherData(coordinates.lat, coordinates.lng)
        .then((data) => setWeatherData(data))

      getPlacesData( type, bounds.sw, bounds.ne)
        .then((data)=> {
        if(mounted){
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
          setFilteredPlaces([])
          setIsLoading(false);

          }
        })
    }
  }, [type, bounds])

  const onLoad = (autoC) => setAutoComplete(autoC)

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng })
    }

  return (
    <div className="home">
        <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
        <section className="content">
            <List 
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked} 
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
            <Map 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
              weatherData={weatherData}
            />
        </section>
        
    </div>
  );
}

export default Home
