import React from 'react'
import { GiPotionBall } from "react-icons/gi";

const HomeAbout = () => {
  return (
    <div className='home-about'>
        <div className='about-title'>
            <p><GiPotionBall /></p>
            <h2>About WizardHops</h2>
            <p><GiPotionBall /></p>
        </div>
        <div className='about-text'>
            <img src="images/parallax_viles.png" alt="" />
            <p>
                WizardHops was created to bring a bit more imagination into craft beer. 
                We take familiar styles, add our own twist, 
                and occasionally open Pandora's Box just to see what happens.
            </p>
            <p>
                Whether you're here for something light and refreshing or dark and mysterious, 
                there's always a new flavor waiting to be discovered.
            </p>
            <p>
                Go on—unlock the spell of great beer.
            </p>
        </div>
    </div>
  )
}

export default HomeAbout