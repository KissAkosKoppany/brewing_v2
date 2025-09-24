import React from 'react'
import './Home.style.css'
import HomeBanner from './Components/HomeBanner'
import HomeSlider from './Components/HomeSlider'
import HomeAbout from './Components/HomeAbout'
import HomeVideo from './Components/HomeVideo'

const Home = () => {

  return (
    <div className="home">
      <HomeBanner />
      <HomeSlider />
      <HomeAbout />
      <HomeVideo />
    </div>
  )
}

export default Home

