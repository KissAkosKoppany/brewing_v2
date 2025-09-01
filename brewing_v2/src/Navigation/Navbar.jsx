import React, { useState } from 'react'
import { Link } from 'react-router'
import './Navbar.style.css'
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {

    const [activeLink, setActiveLink] = useState(0)

    const toggleLink = (link) => {
        setActiveLink(link)
    }

  return (
    <div className='nav-container'>
        <div className='nav-buttons'>
            <Link className={`${activeLink === 1 ? "active-link" : ""} link`} to='shop'>
                <div onClick={() => toggleLink(1)} className='nav-item'>
                    Shop
                </div>
            </Link>
            <Link className={`${activeLink === 2 ? "active-link" : ""} link`} to='stock'>
                <div onClick={() => toggleLink(2)} className='nav-item'>
                    Stock
                </div>
            </Link>
            <Link className={`${activeLink === 3 ? "active-link" : ""} link`} to='brewings'>
                <div onClick={() => toggleLink(3)} className='nav-item'>
                    Brewings
                </div>
            </Link>
            <Link className={`${activeLink === 4 ? "active-link" : ""} link`} to='recipes'>
                <div onClick={() => toggleLink(4)} className='nav-item'>
                    Recipes
                </div>
            </Link>
            <Link className={`${activeLink === 5 ? "active-link" : ""} link`} to='cart'>
                <div onClick={() => toggleLink(5)} className='nav-item icon'>
                    <BsFillCartFill />
                </div>
            </Link>
        </div>
        <Link className='link' to="/">
            <div onClick={() => toggleLink(0)} className='logo'>
                Neko kaiju
            </div>
        </Link>
    </div>
  )
}

export default Navbar