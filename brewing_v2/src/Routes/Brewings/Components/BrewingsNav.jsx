import React from 'react'
import { Link } from 'react-router'

const BrewingsNav = () => {
  return (
    <div className='brewings-nav-container'>
        <Link className='link' to="/brewings/brewings-list">
            <p>Brewings list</p>
        </Link>
        <Link className='link' to="/brewings/add-brewing">
            <p>Add brewing</p>
        </Link>
    </div>
  )
}

export default BrewingsNav