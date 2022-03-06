import React from 'react'
import GoogleMapReact from 'google-map-react'
import {  Paper, Typography, useMediaQuery } from '@material-ui/core'
import Rating from '@material-ui/lab'


const Map = () => {

  const coordinates = { lat: 0, lng: 0}

  return (
    <div>
      <h4>Test</h4>
      <div className="" style={{ height: '50vh', width: '50%' }}> 
      <GoogleMapReact 
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map