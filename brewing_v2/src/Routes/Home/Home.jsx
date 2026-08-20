import React, { lazy, Suspense } from 'react'
import './Home.style.css'
import HomeAbout from './Components/HomeAbout'
import HomeVideo from './Components/HomeVideo'
import Spinner from '../../GeneralComponents/Spinner'
import HomeHero from './Components/HomeHero'

const Home = () => {

  return (
    <div className="home">
      <HomeHero />
      <HomeAbout />
    </div>
    
  )
}

export default Home

