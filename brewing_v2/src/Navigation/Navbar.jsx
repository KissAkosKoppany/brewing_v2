import React from 'react'
import { Link } from 'react-router'
import './Navbar.style.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            Ren's brewery
        </div>
        <div className='nav-buttons'>
            <Link className='link' to='recipes'>
                <div className='nav-item'>
                    Recipes
                </div>
            </Link>
            <Link className='link' to='stock'>
                <div className='nav-item'>
                    Stock
                </div>
            </Link>
            <Link className='link' to='brewings'>
                <div className='nav-item'>
                    Brewings
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar