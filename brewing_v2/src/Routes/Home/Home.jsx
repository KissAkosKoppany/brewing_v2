import React from 'react'
import './Home.style.css'
import HomeBanner from './Components/HomeBanner'
import HomeSlider from './Components/HomeSlider'

const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <HomeSlider />
    </div>
  )
}

export default Home