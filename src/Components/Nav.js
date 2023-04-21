import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Style.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'


const Nav = () => {
   const[isMobile,setIsMobile]=useState(false);
  return (
      <>
      <header>
         <div className='head'>
            <div className='the'>The </div>
            <div className='siren'> Siren</div>
             <button className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
                 {isMobile ? <RxCross2/> : <GiHamburgerMenu/> }
        </button>
          </div>

          <div className={isMobile ? "nav-links-mobile" : "nav"} onClick={()=>{setIsMobile(false)}}>
            <div><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notactive")} id="nav-link">Home</NavLink><hr id="hr"/></div>
            <div><NavLink to="/bollywood" className={({ isActive }) => (isActive ? "active" : "notactive")} id="nav-link">Bollywood</NavLink><hr id="hr"/></div>
            <div><NavLink to="/hollywood" className={({ isActive }) => (isActive ? "active" : "notactive")} id="nav-link">Hollywood</NavLink><hr id="hr"/></div>
            <div><NavLink to="/technology" className={({ isActive }) => (isActive ? "active" : "notactive")} id="nav-link">Technology</NavLink><hr id="hr"/></div>
            <div><NavLink to="/food" className={({ isActive }) => (isActive ? "active" : "notactive")} id="nav-link">Food</NavLink><hr id="hr"/></div>
            <div><NavLink to="/fitness" className={({ isActive }) => (isActive ? "active" : "notactive")} id="nav-link">Fitness</NavLink><hr id="hr"/></div>
         </div>

         

      </header>
      </>
  )
}

export default Nav