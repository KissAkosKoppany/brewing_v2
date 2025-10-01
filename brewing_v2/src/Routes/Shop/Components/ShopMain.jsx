import { lazy, useState, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ShopFilters from './ShopFilters'
import Spinner from '../../../GeneralComponents/Spinner'
// import ShopItems from './ShopItems'
const ShopItems = lazy(() => import('./ShopItems'))

const ShopMain = () => {

    const beers = useSelector(state => state.rootReducer.beer.allBeers)

    const [allBeers, setAllBeers] = useState(beers)
    
    useEffect(() => {
      if(beers) {
        setAllBeers(beers)
      }
    }, [beers])

    const applyFilter = (category) => {
        const filteredBeers = beers.filter(beer => beer.type === category || category === "all")
        setAllBeers(filteredBeers)
    }

  return (
    <>
        <ShopFilters applyFilter={applyFilter} />
        <Suspense fallback={<Spinner />}>
          <ShopItems beers={allBeers} />
        </Suspense>
    </>
  )
}

export default ShopMain