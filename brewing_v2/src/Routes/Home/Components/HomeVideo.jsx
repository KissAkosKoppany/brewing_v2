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
            <iframe src="https://www.youtube.com/embed/l-_SWgB0N34?si=IUE_U9zASfCCj7JQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default HomeVideo