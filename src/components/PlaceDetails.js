import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <div className="place-card">

      <div className="place-card-header">
      <img src={place.photo? place.photo.images.large.url : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'} alt="" />
        <h2>{place.name}</h2>
      </div>
      <div className="place-card-footer">
          <section className="place-card-ranking-price">
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
          <section className="place-card-cusine">
          {place?.cuisine?.map(({name})=>(
            <div key={name}className="">
              {name}
            </div>
          ))}
          </section>
        </div>
      </div>
  )
}

export default PlaceDetails