import React from 'react'

const BrewingItem = ({ brewing }) => {

  return (
    <div className='brewing-item'>
      <h1>{brewing.beer_name}</h1>
      
      <div className='brewing-item-group'>
        <div className='brewing-item-info'>
          <p>Brew date:</p>
          <p>{brewing.brew_date}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Water PH:</p>
          <p>{brewing.water_ph}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Water chemistry:</p>
          <p>{brewing.water_chemistry}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Preboil gravity:</p>
          <p>{brewing.preboil_gr}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Prebiol volume:</p>
          <p>{brewing.preboil_v} liter</p>
        </div>
        <div className='brewing-item-info'>
          <p>Postboil volume:</p>
          <p>{brewing.postboil_v} liter</p>
        </div>
        <div className='brewing-item-info'>
          <p>Original Gravity:</p>
          <p>{brewing.original_gr}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Pitching method:</p>
          <p>{brewing.pitching_method}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Yeast type:</p>
          <p>{brewing.yeast_type}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Aeration type:</p>
          <p>{brewing.aeration_type}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Aeration duration:</p>
          <p>{brewing.aeration_duration} min</p>
        </div>
      </div>

      <div className='brewing-item-group'>
        <div className='brewing-item-info'>
          <p>Gravity 4 days:</p>
          <p>{brewing.gravity_4_days}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Gravity 6 days:</p>
          <p>{brewing.gravity_6_days}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Final Gravity:</p>
          <p>{brewing.final_gravity}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Cold hop date:</p>
          <p>{brewing.cold_hop_date}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Cold hop duration:</p>
          <p>{brewing.cold_hop_length} days</p>
        </div>
        <div className='brewing-item-info'>
          <p>Temperature:</p>
          <p>{brewing.temp}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Wort PH:</p>
          <p>{brewing.worth_ph}</p>
        </div>
        <div className='brewing-item-info'>
          <p>ABV:</p>
          <p>{brewing.abv}%</p>
        </div>
      </div>

      <div className='brewing-item-group'>
        <div className='brewing-item-info'>
          <p>Bottling date:</p>
          <p>{brewing.bottling_date}</p>
        </div>
        <div className='brewing-item-info'>
          <p>Bottles filled:</p>
          <p>{brewing.bottles_filled} pcs</p>
        </div>
        <div className='brewing-item-info'>
          <p>Sugar per bottle:</p>
          <p>{brewing.sugar_per_bottle} g/bottle</p>
        </div>
      </div>
      
    </div>
  )
}

export default BrewingItem