import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const HomeVideo = () => {
  return (
    <div className='home-video'>
        <h2>How we make the magic</h2>
        <div className='video'>
          <h3>From grain to galss</h3>
          <iframe src="https://www.youtube.com/embed/l-_SWgB0N34?si=IUE_U9zASfCCj7JQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div className='video-title'>
            <FaPlayCircle />
            <h4>Step inside the brewery <span>· Behind the brew</span></h4>
          </div>
        </div>
    </div>
  )
}

export default HomeVideo