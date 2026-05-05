import React from 'react'
import { GiCampCookingPot  } from "react-icons/gi";

const HomeVideo = () => {
  return (
    <div className='home-video'>
        <div className='video-title'>
            <p><GiCampCookingPot  /></p>
            <h2>How We Brew the Magic</h2>
            <p><GiCampCookingPot  /></p>
        </div>
        <div className='video'>
            <iframe src="https://www.youtube.com/embed/l-_SWgB0N34?si=IUE_U9zASfCCj7JQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default HomeVideo