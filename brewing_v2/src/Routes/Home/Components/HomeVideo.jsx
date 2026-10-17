import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { IoIosBeer } from "react-icons/io";
import { GiWheat, GiCampCookingPot } from "react-icons/gi";
import { Link } from 'react-router';

const HomeVideo = () => {

  return (
    <div className='home-video'>
        <h2>How we make the magic</h2>
        <div className='video'>
          <h3>From grain to galss</h3>
          <iframe src="https://www.youtube.com/embed/l-_SWgB0N34?si=IUE_U9zASfCCj7JQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div className='video-title'>
            <FaPlayCircle />
            <Link className='link' to="behind-the-brew">
              <h4>Step inside the brewery <span>· Behind the brew</span></h4>
            </Link>
          </div>
          <div className="video-process">
            <div className='video-process-element'>
              <GiWheat />
              <p>The ingredients</p>
            </div>
            <div className='video-process-element'>
              <GiCampCookingPot />
              <p>The process</p>
            </div>
            <div className='video-process-element'>
              <IoIosBeer />
              <p>The result</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeVideo