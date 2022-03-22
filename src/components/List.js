import React, { useState, useEffect, createRef, elRefs } from 'react'
import PlaceDetails from './PlaceDetails'

import Loader from '../components/Loader'

const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
  const [elRefs, setElRefs] = useState([])

  useEffect(()=> {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())
    
    setElRefs(refs)
  }, [places])

  return (
    <div className="list-section">
      {isLoading? (
        <Loader />
      ) : (
        <>
        <div className="filters">
          <form action="" className="type">
            <label htmlFor="">Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} id="">
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </form>
          <form action="" className="rating">
            <label htmlFor="">Rating</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)} id="">
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.5</option>
              <option value={5}>Above 5.0</option>
            </select>
          </form>
        </div>
      
      <div className="places-list">
          {places?.map((place, i) => (
            <div key={i} item className="">
              <PlaceDetails 
                place={place} 
                selected={Number(childClicked) === i}
                refProp={elRefs[i]}
                />
              </div>
          ))}
      </div>
      </>
      )}
    </div>
  )
}

export default List