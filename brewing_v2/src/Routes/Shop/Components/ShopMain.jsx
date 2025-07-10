import { useState } from 'react'
import { useSelector } from 'react-redux'
import ShopFilters from './ShopFilters'
import ShopItems from './ShopItems'

const ShopMain = () => {

    const beers = useSelector(state => state.rootReducer.beer.allBeers)

    const [allBeers, setAllBeers] = useState(beers)

    const applyFilter = (category) => {
        const filteredBeers = beers.filter(beer => beer.type === category || category === "all")
        setAllBeers(filteredBeers)
    }

  return (
    <>
        <ShopFilters applyFilter={applyFilter} />
        <ShopItems beers={allBeers} />
    </>
  )
}

export default ShopMain