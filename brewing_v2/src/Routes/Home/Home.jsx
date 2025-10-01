import React, { lazy, Suspense } from 'react'
import './Home.style.css'
import HomeBanner from './Components/HomeBanner'
// import HomeSlider from './Components/HomeSlider'
import HomeAbout from './Components/HomeAbout'
import HomeVideo from './Components/HomeVideo'
import Spinner from '../../GeneralComponents/Spinner'

const HomeSlider = lazy(() => import('./Components/HomeSlider'))

const Home = () => {

  return (
    <div className="home">
      <HomeBanner />
      <Suspense fallback={<Spinner />}>
        <HomeSlider />
      </Suspense>
      <HomeAbout />
      <HomeVideo />
    </div>
  )
}

export default Home

