import React, { useState } from 'react'
import PlaceDetails from './PlaceDetails'

const List = ({places, childClicked}) => {

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('restaurants')
  console.log({childClicked})

  return (
    <div className="list-section">
      <h4>Restaurants, hotels and Attractions near you</h4>
      <form action="">
        <label htmlFor="">Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} id="">
          <option value="restaurants">Restaurants</option>
          <option value="hotels">hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </form>
      <form action="">
        <label htmlFor="">Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} id="">
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.5</option>
          <option value={5}>Above 5.0</option>
        </select>
      </form>
      <div className="">
          {places?.map((place, i) => (
            <div className="" item key={i}>
              <PlaceDetails place={place} />
              </div>
          ))}
      </div>
    </div>
  )
}

export default List