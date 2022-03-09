import React from 'react'
import GoogleMapReact from 'google-map-react'
import {  Paper, Typography, useMediaQuery } from '@material-ui/core'
import Rating from '@material-ui/lab'


const Map = ( { setCoordinates, places, setBounds, coordinates }) => {

  return (
    <div>
      <h4>Test</h4>
      <div className="" style={{ height: '50vh', width: '50%' }}> 
      <GoogleMapReact 
        bootstrapURLKeys={{ key: 'AIzaSyBKRCW_jcdtXZc84oYiyjpiDhYli5Z174A' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) =>{
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={''}
      >
      </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map