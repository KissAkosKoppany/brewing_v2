import React from 'react'
import { useDispatch } from 'react-redux'
import { setBeerFilter } from '../../../store/beer/beer.action'

const ShopFilters = () => {

  //dispatch to setbeerfilter reducer
  // const [filter, setFilter] = useState("all")

  const changeBeerFilter = (filter) => {
    const dispatch = useDispatch()
    console.log('filter func', filter)
    dispatch(setBeerFilter(filter))
  }

  return (
    <div className='shop-filters-container'>
        <ul>
            <li onClick={() => changeBeerFilter("all")}>All</li>
            <li onClick={() => changeBeerFilter("IPA")}>IPA</li>
            <li onClick={() => changeBeerFilter("stout")}>Stout</li>
            <li>Other</li>
        </ul>
    </div>
  )
}

export default ShopFilters