import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/cards/logo1.png';
import search from '../../assets/cards/search2.png';
import bell from '../../assets/cards/bell2.png';
import profile from '../../assets/cards/profile1.png';
import caret from '../../assets/cards/caret.png';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add('nav-dark');
      } else {
        navRef.current?.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar' ref={navRef}>
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
          <div className="dropdown">
            <p onClick={() => logout()}>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
