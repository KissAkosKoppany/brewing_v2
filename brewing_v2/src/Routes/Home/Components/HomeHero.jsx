import React, { useState, useEffect } from 'react';
import { RiArrowDownWideLine } from "react-icons/ri";

const HomeHero = () => {

    const bottles = [
    { src: "/images/beer_bottle.png", className: "bottle-1" },
    { src: "/images/beer_bottle.png", className: "bottle-2" },
    { src: "/images/beer_bottle.png", className: "bottle-3" },
    { src: "/images/beer_bottle.png", className: "bottle-4" },
    { src: "/images/beer_bottle.png", className: "bottle-5" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="hero">
            <div className="hero-title">
              <div className='title-box'>
                <h1>Wizard<span>Hops</span></h1>
                <h2>Brewing is more then craft</h2>
                <h2>It's alchemy</h2>
              </div>
            </div>
            <div className='hero-product'>
              <div className={`hero-container ${scrolled ? "is-scrolled" : ""}`}>
                {bottles.map((bottle, i) => (
                  <img
                    key={i}
                    className={`hero-bottle ${bottle.className}`}
                    src={bottle.src}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className={`hero-footer ${scrolled ? "is-scrolled" : ""}`}>
              <p>Unlock the spell of beer</p>
              <p><RiArrowDownWideLine /></p>
            </div>
          </main>
  )
}

export default HomeHero