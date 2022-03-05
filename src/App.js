import React from 'react'
import {  CssBaseline, Grid} from '@material-ui/core'

import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import PlaceDetails from "./components/PlaceDetails";

const App = () => {
  return (
    <div>
        <CssBaseline />
        <Header />
        <List />
        <Map />
    </div>
  );
}

export default App
