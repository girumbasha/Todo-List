
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {GiHamburgerMenu } from 'react-icons/gi'
import {  MdOutlineCancel } from 'react-icons/md'
function Navbar() {
    
    const  [toggleMenu,setToggleMenu]=useState(false)
  
  return (
    <div>
    <nav className='links'>
  <Link to='/' className='link__list'>Home</Link>
  <Link to='about' className='link__list'>About</Link>
  <Link to='page' className='link__list'>Page</Link>
  <Link to='shop' className='link__list'>Shop</Link>
  <Link to='blog' className='link__list'>Blog</Link>
  <Link to='contact' className='link__list'>Contact</Link>
</nav>
<div className='app__navbar-smallscreen '>
  <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
  {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay'>
      <MdOutlineCancel color='#fff' className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} />

      <nav className='app__navbar-smallscreen_links'>
        <Link to='/' className='link__list'>Home</Link>
        <Link to='about' className='link__list'>About</Link>
        <Link to='page' className='link__list'>Page</Link>
        <Link to='shop' className='link__list'>Shop</Link>
        <Link to='blog' className='link__list'>Blog</Link>
        <Link to='contact' className='link__list'>Contact</Link>
      </nav>
    </div>
  )}
</div>

    </div>
  )
}

export default Navbar



