import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import '../navbar/Navbar.css';
import Logo from '../images/logo-no-background.png';
import Resume from "../resume/Mayur'sResume.pdf";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div>
    <nav className="navbar">
    <div className="container4">
      <div className="logo">
      <a href='#home'><img className='logo' src={Logo} alt='Logo' /></a>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
      
      <i className="fas fa-bars"></i>
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
          <a href='#home'>HOME</a>
          </li>
          <li>
          <Link to='about' smooth={true} duration={600}>ABOUT</Link>
          </li>
          <li>
          <a href={Resume} target='_blank' rel='noreferrer'>RESUME</a>
          </li>
          <li>
          <Link to='education' smooth={true} duration={600}>EDUCATION</Link>
          </li>
          <li>
          <Link to='skills' smooth={true} duration={600}>SKILL</Link>
          </li>
          <li>
          <Link to='contact' smooth={true} duration={600}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  </div>

  );
}
