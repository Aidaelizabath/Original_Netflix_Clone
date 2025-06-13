import React from 'react'
import './Navbar.css'
import logo from '../../assets/cards/logo1.png'
import search from '../../assets/cards/search1.png'
import bell from '../../assets/cards/bell1.png'
import profile from '../../assets/cards/profile1.png'
import caret from '../../assets/cards/caret1.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bell} alt="Notifications" className='icons' />
        <div className='profile'>
          <img src={profile} alt="Profile" className='icons' />
          <img src={caret} alt="Dropdown" className='icons' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
