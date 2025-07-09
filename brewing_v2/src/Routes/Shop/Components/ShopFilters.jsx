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
                applyFilter("other")
                toggleActiveButton('other')
              }}
              className={`${activeButton === "other" ? "active-link" : ""} `}
            >
              Other
            </li>
        </ul>
    </div>
  )
}

export default ShopFilters