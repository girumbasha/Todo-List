import React, { useState } from 'react';
import './Navbar.css'
import {GiHamburgerMenu}from 'react-icons/gi'
import {MdOutlineCancel} from 'react-icons/md'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav>
      <div className="logo">Logo</div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li className='navbar-links'><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
       
        <li className='navbar-links'><a href="/">Page</a></li>
        <li className='navbar-links'><a href="/shop">Shop</a></li>
        <li className='navbar-links'><a href="/more">More</a></li>
        <li className='navbar-links'><a href="/contact">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <MdOutlineCancel
    style={{
      fontSize: '27px',
      color: ' rgb(255, 107, 107)',
      transition: 'color 0.3s ease',
    }}
    className="cancel-icon"
  /> : <GiHamburgerMenu style={{fontSize:'27px'}}/>}
      </button>
    </nav>
  );
};

export default Navbar;
