import React from 'react'
import { RxDotFilled, RxDot } from 'react-icons/rx'

const SliderNav = ({ currentItem, handleItemChangeOnClick }) => {
  return (
    <div className='reel-nav-container'>
          { currentItem === 0 ? <RxDot className='reel-nav-dot' /> : <RxDotFilled onClick={() => handleItemChangeOnClick(0)} className='reel-nav-dot' />}
          { currentItem === 1 ? <RxDot className='reel-nav-dot' /> : <RxDotFilled onClick={() => handleItemChangeOnClick(1)} className='reel-nav-dot' />}
          { currentItem === 2 ? <RxDot className='reel-nav-dot' /> : <RxDotFilled onClick={() => handleItemChangeOnClick(2)} className='reel-nav-dot' />}
          { currentItem === 3 ? <RxDot className='reel-nav-dot' /> : <RxDotFilled onClick={() => handleItemChangeOnClick(3)} className='reel-nav-dot' />}
          { currentItem === 4 ? <RxDot className='reel-nav-dot' /> : <RxDotFilled onClick={() => handleItemChangeOnClick(4)} className='reel-nav-dot' />}
    </div>
  )
}

export default SliderNav