import React from 'react'

const HomeAbout = () => {
  return (
    <div className='home-about'>
        <div className="about-description">
            <h2>Every brewery has a story<br /><span>Ours is still being written</span></h2>
            <p>WizardHops was created to bring more imagination into craft beer. Whether you're here for something light and refreshing or dark and mysterious, there's always a new flavor waiting to be discovered.</p>
        </div>
        <div className="about-image">
            <img src="/images/brewery.jpg" alt="brewery" />
        </div>
    </div>
  )
}

export default HomeAbout