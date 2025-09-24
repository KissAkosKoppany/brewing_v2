import React from 'react'
import { GiVideoCamera } from "react-icons/gi";

const HomeVideo = () => {
  return (
    <div className='home-video'>
        <div className='video-title'>
            <p><GiVideoCamera /></p>
            <h2>From Grain to Glass: The Neko Kaiju Way</h2>
            <p><GiVideoCamera /></p>
        </div>
        <div className='video'>
            <iframe width="700" height="394" src="https://www.youtube.com/embed/UKQqesuxLaE?si=4ysy1KmN5veKI2gb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default HomeVideo