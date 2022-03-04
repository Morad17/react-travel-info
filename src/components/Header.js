import React from 'react'
import { Autocomplete } from '@react-google-maps/api' 
import SearchIcon from '@material-ui/icons/Search'


const Header = () => {


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
                <div className="search-bar">
                    <SearchIcon />
                    <input placeholder="Search"/>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Header