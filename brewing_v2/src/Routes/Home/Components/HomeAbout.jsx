import React from 'react'
import { GiHops, GiWheat, GiBeerStein } from "react-icons/gi";

const HomeAbout = () => {
  return (
    <div className='home-about'>
        <div className='about-title'>
            <p><GiHops /></p>
            <h2>About Neko Kaiju</h2>
            <p><GiHops /></p>
        </div>
        <div className='about-text'>
            <p>
                <span><GiWheat /></span> At Neko Kaiju, we brew beers with the heart of a lucky cat and the roar of a monster. 
                Each recipe is crafted in true kaiju spirit—bold, flavorful, and just a little mischievous. 
                From hop-chopping samurais to sumo-sized stouts, our beers blend Japanese inspiration with craft beer creativity. <span><GiWheat /></span>
            </p>
            <p>
                <span><GiBeerStein /></span> We don't just pour beer, we pour stories—fun, adventurous, and ready to bring a smile (and maybe a roar). 
                So crack open a bottle, take a sip, and hop in for a good time. <span><GiBeerStein /></span>
            </p>
        </div>
    </div>
  )
}

export default HomeAbout