import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <div className="place-card">

      <div className="">
        <h2>{place.name}</h2>
        <img style={{height: 250}} src={place.photo? place.photo.images.large.url : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
      </div>
      <div className="place-card-footer">#
          <div className="subtitle-1">{place.price_level}</div>
          <div className="place-ranking">Ranking</div>
      </div>
    </div>
  )
}

export default PlaceDetails