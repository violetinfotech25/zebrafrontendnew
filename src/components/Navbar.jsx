import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/Navbar.css';
import logo from '../assets/image/logo/zebra-elevation4.png';

const HeaderNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Header Section */}
      <header className="header">
  <div className="header-content">
    {/* Phone */}
    <a
      href="tel:+919843099624"
      className="contact-item"
    >
      <i className="bi bi-telephone-fill"></i>
      <span>+91 98430 99624 | +91 88071 99880</span>
    </a>

    {/* Email */}
    <a
      href="mailto:zebrasignworld@gmail.com"
      className="contact-item"
    >
      <i className="bi bi-envelope-fill"></i>
      <span>zebrasignworld@gmail.com</span>
    </a>

    {/* Social icons */}
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=61560964190153" target="_blank" rel="noreferrer">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://www.instagram.com/zebra_sign_world/" target="_blank" rel="noreferrer">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://wa.me/919843099624" target="_blank" rel="noreferrer">
        <i className="bi bi-whatsapp"></i>
      </a>
      <a href="https://www.youtube.com/@zebrasignworld" target="_blank" rel="noreferrer">
        <i className="bi bi-youtube"></i>
      </a>
    </div>
  </div>
</header>


      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/" onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeMenu}> 
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/gallery" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderNavbar;
