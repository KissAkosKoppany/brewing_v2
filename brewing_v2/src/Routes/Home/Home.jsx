import React, { lazy, Suspense } from 'react'
import './Home.style.css'
import HomeAbout from './Components/HomeAbout'
import HomeVideo from './Components/HomeVideo'
import Spinner from '../../GeneralComponents/Spinner'
import HomeHero from './Components/HomeHero'
import HomeBeers from './Components/HomeBeers'

const Home = () => {

  return (
    <div className="home">
      <HomeHero />
      <HomeAbout />
      <HomeBeers />
    </div>
    
  )
}

export default Home

