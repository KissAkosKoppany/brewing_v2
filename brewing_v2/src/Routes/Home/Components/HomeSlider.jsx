import React, {useState, useRef, useEffect} from 'react'
import SliderNav from './SliderNav'
import Spinner from '../../../GeneralComponents/Spinner'
import { useSelector } from 'react-redux'

const HomeSlider = () => {

    const beers = useSelector(state => state.rootReducer.beer.allBeers)

    const { currentItem, handleItemChangeOnClick } = useHandleSlideChange()

  return (
    <div className='home-silder'>
      {
        beers ?
        
        <div className='slider-container'>
            <div className={`slider-element ${beers[currentItem]?.color_scheme}`}>
              <div className={`slider-image ${beers[currentItem]?.color_scheme}`}>
                <div className='slider-image-container'>
                  <img src={beers[currentItem]?.banner_img} alt="slider-image" />
                </div>
              </div>
              <div className={`slider-description ${beers[currentItem]?.color_scheme}`}>
                <h3>{beers[currentItem]?.name}</h3>
                <p>{beers[currentItem]?.description}</p>
                <button>CLICK HERE</button>
              </div>
            </div>
        <SliderNav currentItem={currentItem} handleItemChangeOnClick={handleItemChangeOnClick} />
        </div>
        :
        <Spinner />
      }
    </div>
  )
}

export default HomeSlider

const useHandleSlideChange = () => {
  const [currentItem, setCurrentItem] = useState(0)
  const timeOutRef = useRef(null)

  const resetTimeout = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current)
    }
  }

  const handleItemChange = () => {
    if( currentItem === 4) {
      setCurrentItem(0)
    } else {
      setCurrentItem(prevItem => prevItem + 1)
    }
  }

  const handleItemChangeOnClick = (item) => {
    setCurrentItem(item)
  }

  useEffect(() => {
    resetTimeout()
    timeOutRef.current = setTimeout(() => {
      handleItemChange()
    }, 5000)
    return () => {
      resetTimeout()
    }
  }, [currentItem])
  return { currentItem, handleItemChangeOnClick }
}