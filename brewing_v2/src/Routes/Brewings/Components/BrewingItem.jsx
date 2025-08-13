import React from 'react'

const BrewingItem = ({ brewing }) => {

    console.log(brewing)

  return (
    <div className='brewing-item'>
        <p>{brewing.info.name}</p>
    </div>
  )
}

export default BrewingItem