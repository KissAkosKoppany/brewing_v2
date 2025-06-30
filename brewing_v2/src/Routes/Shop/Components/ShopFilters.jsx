import React from 'react'

const ShopFilters = ({ applyBeerFilter }) => {
  return (
    <div className='shop-filters-container'>
        <ul>
            <li onClick={applyBeerFilter("all")}>All</li>
            <li onClick={applyBeerFilter("IPA")}>IPA</li>
            <li onClick={applyBeerFilter("stout")}>Stout</li>
            <li>Other</li>
        </ul>
    </div>
  )
}

export default ShopFilters