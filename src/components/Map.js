import React from 'react'
import GoogleMapReact from 'google-map-react'
import {  useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import mapStyles from './mapStyles'

const Map = ( { setCoordinates, places, setBounds, coordinates, setChildClicked, weatherData }) => {

  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <div className="map-section">
      <h2 className="map-header">Search Local Restaurants, Hotels and Attractions </h2>
      <div className="map-render" style={{width: '66vw', height: '80vh'}}> 
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI:true, zoomControl:true, styles: mapStyles }}
        onChange={(e) =>{
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i)=> (
          <div 
            className="marker-container"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <div className="place-landmark-icons">
                  <h4>{place.name}</h4>
                  <img src={place.photo? place.photo.images.large.url : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} alt={place.name} />
                </div>
              )
            }

          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon} className="">
            <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
          </div>
        ))}
      </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map