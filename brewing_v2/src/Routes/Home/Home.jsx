import React, { lazy, Suspense, useRef, useEffect } from 'react'
import './Home.style.css'
import HomeBanner from './Components/HomeBanner'
// import HomeSlider from './Components/HomeSlider'
import HomeAbout from './Components/HomeAbout'
import HomeVideo from './Components/HomeVideo'
import Spinner from '../../GeneralComponents/Spinner'

const HomeSlider = lazy(() => import('./Components/HomeSlider'))

const Home = () => {

  const bottles = [
    { src: "/images/beer_bottle.png", speed: 0.25 },
    { src: "/images/beer_bottle.png", speed: 0.45 },
    { src: "/images/beer_bottle.png", speed: 0.8 },
    { src: "/images/beer_bottle.png", speed: 0.45 },
    { src: "/images/beer_bottle.png", speed: 0.25 },
  ];

  const bottleRefs = useRef([])

  useEffect(() => {
    let animationFrame;

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        bottleRefs.current.forEach((bottle, index) => {
          if (!bottle) return;

          const speed = bottles[index].speed;

          bottle.style.transform = `translate3d(0, ${-scrollY * speed}px, 0)`;
        });

        animationFrame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="home">
      <main className="hero">
        <div className="hero-title">
          <div className='title-box'>
            <h1>WizardHops</h1>
            <h2>Brewing is more then craft</h2>
            <h2>It's alchemy</h2>
          </div>
        </div>
        <div className='hero-product'>
          <div className='hero-container'>
            {bottles.map((bottle, index) => (
              <img
                key={index}
                ref={(el) => (bottleRefs.current[index] = el)}
                className={`hero-bottle bottle-${index + 1}`}
                src={bottle.src}
                alt=""
              />
            ))}
          </div>
          <div className='hero-description'>
            {/* <p>WizardHops was created to bring more imagination into craft beer. 
              Whether you're here for something light and refreshing or dark and mysterious, 
              there's always a new flavor waiting to be discovered.</p> */}
          </div>
        </div>
      </main>
    </div>
    
  )
}

export default Home

