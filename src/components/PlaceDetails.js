import React from 'react'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating  from '@material-ui/lab/Rating'

const PlaceDetails = ({ place, selected, refProp }) => {

  if(selected) refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start"})

  return (
    <div className="place-card">

      <div className="place-card-header">
      <img src={place.photo? place.photo.images.large.url : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
        <h2>{place.name}</h2>
      </div>
      <div className="place-card-footer">
          <section className="place-card-rating">
          <Rating size="small" value={Number(place.rating)} readOnly />
          <p>out of {place.num_reviews} reviews</p>
          </section>
          
          <section className="place-card-ranking-price" >
            <span>
              <div className="place-card-subtitles">Price</div> 
              <div className="place-ranking">Ranking</div>
            </span>
            <span className="place-card-info">
              <div className="">{place.price_level}</div>
              <div className="">{place.ranking}</div>
            </span>
          </section>
          
          <section className="place-card-awards">
            {place?.awards?.map((award)=>(
              <div className="award-card">
              <span className="">
                <img src={award.images.small} alt={award.display_name} />
              </span>
              <span className="award-display-name">
                {award.display_name}
                </span>
              </div>
            ))}
          </section>
          <section className="place-card-cuisine">
            {place?.cuisine?.map(({name})=>(
            <div key={name}className="cuisine-info">
              {name}
            </div>
            ))}
          </section>
          <section className="place-card-address">
            <LocationOnIcon /> 
            { place?.address && (
              <div className="place-address-info">
              {place.address}
              </div>
            )}
          </section>
          <section className="place-card-phone">
          <PhoneIcon /> 
            { place?.phone && (
              <div className="place-phone-info">
              {place.phone}
              </div>
            )}
          </section>
          <div className="">
              <button onClick={() => window.open(place.web_url, '_blank')}>Trip Adviser</button>
              <button onClick={() => window.open(place.website, '_blank')}>Website</button>
          </div>
          
        </div>
      </div>
  )
}

export default PlaceDetails