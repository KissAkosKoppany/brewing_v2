import React, {useState, useRef, useEffect} from 'react'
import SliderNav from './SliderNav'
import Spinner from '../../../GeneralComponents/Spinner'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'
import HTMLFlipBook from 'react-pageflip';

const HomeSlider = () => {

    const beers = useSelector(state => state.rootReducer.beer.allBeers)

    const { currentItem, handleItemChangeOnClick } = useHandleSlideChange()

  return (
    <div className='home-silder'>
      {
        beers ?
        
        <div className='slider-container'>
          <HTMLFlipBook 
            width={500} 
            height={595}
            maxShadowOpacity={0.8}
            drawShadow={true}
            showCover={true}
            flippingTime={1500}
          >
            <div className='book-page cover'>
              <div className='book-img-container'>
                <img src="wizardhops_logo.png" alt="book logo" />
              </div>
            </div>

            <div className='book-page'>
              <div className='book-img-container'>
                <img src={beers[0].images[0]} alt="book-image" />
              </div>
            </div>

            <div className='book-page'>
              <div className='book-info'>
                <h3>{beers[0].name}</h3>
                <p>{beers[0].description}</p>
              </div>
            </div>

            <div className='book-page'>
              <div className='book-img-container'>
                <img src={beers[1].images[0]} alt="book-image" />
              </div>
            </div>

            <div className='book-page'>
              <div className='book-info'>
                <h3>{beers[1].name}</h3>
                <p>{beers[1].description}</p>
              </div>
            </div>

            <div className='book-page'>
              <div className='book-img-container'>
                <img src={beers[2].images[0]} alt="book-image" />
              </div>
            </div>

            <div className='book-page'>
              <div className='book-info'>
                <h3>{beers[2].name}</h3>
                <p>{beers[2].description}</p>
              </div>
            </div>

            <div className='book-page'>
              <div className='book-img-container'>
                <img src={beers[3].images[0]} alt="book-image" />
              </div>
            </div>

            <div className='book-page'>
              <div className='book-info'>
                <h3>{beers[3].name}</h3>
                <p>{beers[3].description}</p>
              </div>
            </div>

            <div className='book-page cover'>
              <div className='book-img-container'>
                <img src="wizardhops_logo.png" alt="book logo" />
              </div>
            </div>
            {/* {
              beers.map((beer) => (
                
                <div className='book-page'>
                  <div className='book-img-container'>
                    <img src={beer.images[0]} alt="book-image" />
                  </div>
                </div>
              
                
              ))
            } */}
          </HTMLFlipBook>
            {/* <div className={`slider-element ${beers[currentItem]?.color_scheme}`}>
              <div className={`slider-image ${beers[currentItem]?.color_scheme}`}>
                <div className='slider-image-container'>
                  <img src={beers[currentItem]?.banner_img} alt="slider-image" />
                </div>
              </div>
              <div className={`slider-description ${beers[currentItem]?.color_scheme}`}>
                <h3>{beers[currentItem]?.name}</h3>
                <p>{beers[currentItem]?.description}</p>
                <Link to={`beers/${beers[currentItem].name}`}>
                  <button>CLICK HERE</button>
                </Link>
              </div>
            </div>
        <SliderNav currentItem={currentItem} handleItemChangeOnClick={handleItemChangeOnClick} /> */}
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