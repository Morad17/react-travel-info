import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api' 
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


const Header = ( {setCoordinates}) => {

    const [autocomplete, setAutoComplete] = useState(null)

    const onLoad = (autoC) => setAutoComplete(autoC)

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng })
    }

    return (
        <nav className="main-nav">
            <ul className="left-nav">
                <h2>Travel Adviser</h2>
            </ul>
            <ul className="right-nav">
                <li>
                    <h2>Explore New Places</h2>
                </li>
                <li>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div  className="search-bar">
                            <SearchIcon />
                            <InputBase placeholder="Search"/>
                        </div>
                    </Autocomplete>
                </li>
            </ul>
        </nav>
  )
}

export default Header