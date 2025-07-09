import { useState } from 'react'
import './Shop.style.css'
import ShopFilters from './Components/ShopFilters'
import ShopItems from './Components/ShopItems'
import { useSelector } from 'react-redux'


const Shop = () => {

  const beers = useSelector(state => state.rootReducer.beer.allBeers)

  const [allBeers, setAllBeers] = useState(beers)

  const applyFilter = (category) => {
    const filteredBeers = beers.filter(beer => beer.type === category || category === "all")
    setAllBeers(filteredBeers)
  }

  return (
    <div className='shop-container'>
        <ShopFilters applyFilter={applyFilter} />
        <ShopItems beers={allBeers} />
    </div>
  )
}

export default Shop