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
      <div className="parallax">
        <div className="hero">
          <div className="wrapper">
            <h1 className="hero__title">
              <span>At WizardHops,</span> brewing is more than craft—it's alchemy.
            </h1>
          </div>
        </div>
        <img className="parallax__last" src="images/parallax_last.png" alt="" />
        <img className="parallax__trees" src="images/parallax_trees.png" alt="" />
        <img className="parallax__bg" src="images/parallax_bg.png" alt="" />
        <img className="parallax__cloud" src="images/parallax_cloud2.png" alt="" />
        <img className="parallax__hut" src="images/parallax_hut.png" alt="" />
        <img className="parallax__shade" src="images/parallax_shade_3.png" alt="" />
      </div>
      {/* <div className='spacer'></div> */}
      <main className="main-content">
        <div className="wrapper">
          <Suspense fallback={<Spinner />}>
            <HomeSlider />
          </Suspense>
          <HomeAbout />
          <HomeVideo />
        </div>
      </main>

    </div>
    
  )
}

export default Home

