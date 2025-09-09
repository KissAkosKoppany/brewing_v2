import { useState } from 'react'

const ShopFilters = ({ applyFilter }) => {

  const [activeButton, setActiveButton] = useState("all")

  const toggleActiveButton = (link) => {
        setActiveButton(link)
    }

  return (
    <div className='shop-filters-container'>
        <ul>
            <li 
              onClick={() => {
                applyFilter("all")
                toggleActiveButton('all')
              }}
              className={`${activeButton === "all" ? "active-link" : ""} `}
            >
              All
            </li>
            <li 
              onClick={() => {
                applyFilter("IPA")
                toggleActiveButton('IPA')
              }}
              className={`${activeButton === "IPA" ? "active-link" : ""} `}
            >
              IPA
            </li>
            <li 
              onClick={() => {
                applyFilter("stout")
                toggleActiveButton('stout')
              }}
              className={`${activeButton === "stout" ? "active-link" : ""} `}
            >
              Stout
            </li>
            <li 
              onClick={() => {
                applyFilter("porter")
                toggleActiveButton('porter')
              }}
              className={`${activeButton === "porter" ? "active-link" : ""} `}
            >
              Porter
            </li>
            <li 
              onClick={() => {
                applyFilter("weizen")
                toggleActiveButton('weizen')
              }}
              className={`${activeButton === "weizen" ? "active-link" : ""} `}
            >
              Weizen
            </li>
        </ul>
    </div>
  )
}

export default ShopFilters