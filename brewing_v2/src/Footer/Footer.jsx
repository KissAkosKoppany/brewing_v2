import React from 'react'
import "./Footer.style.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-logo'>
                <img src="/neko-kaiju-logo.png" alt="logo" />
            </div>
            <div className="footer-contact">
                <h2>CONTACT US</h2>
                <p>tel.: 0757 539 561</p>
                <p>e-mail: <a href="mailto:nekokaiju66@gmail.com">nekokaiju66@gmail.com</a></p>
            </div>
        </div>
        <p>© Copyright 2025 | Kiss Ákos Koppány</p>
    </div>
  )
}

export default Footer