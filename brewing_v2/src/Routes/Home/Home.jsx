import React, { lazy, Suspense } from 'react'
import './Home.style.css'
import HomeBanner from './Components/HomeBanner'
// import HomeSlider from './Components/HomeSlider'
import HomeAbout from './Components/HomeAbout'
import HomeVideo from './Components/HomeVideo'
import Spinner from '../../GeneralComponents/Spinner'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const HomeSlider = lazy(() => import('./Components/HomeSlider'))

const Home = () => {

  return (
    <div className="home">
      <main className="hero">
        <div className="hero-text">
          <h1>WizardHops</h1>
          <h2>Brewing is more then craft</h2>
          <h2>It's alchemy</h2>
        </div>
        <div>
          {/* <img src="/wizard_logo_simple.png" alt="" /> */}
        </div>
      </main>
    </div>
    
  )
}

export default Home

