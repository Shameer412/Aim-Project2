import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo1 from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-wrapper') && isMobileView) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileView]);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo1} alt="Aim Services" className="navbar-logo-img" />
        </div>
        <ul className={`navbar-links ${menuOpen && isMobileView ? 'menu-active' : ''}`}>
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about" className="navbar-link">About Us</Link></li>
          <li><Link to="/service" className="navbar-link">Services</Link></li>
          {/* <li><Link to="/portfolio" className="navbar-link">Portfolio</Link></li> */}
          {/* <li><Link to="/clients" className="navbar-link">Clients</Link></li> */}
          <li><Link to="/team" className="navbar-link">Our People</Link></li>
          {/* <li><Link to="/careers" className="navbar-link">Careers</Link></li> */}
          <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
        </ul>

        {isMobileView && (
          <button className="navbar-hamburger" onClick={toggleMenu}>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        )}
      </div>

      <style jsx>{`
      Link {

        text-decoration: none;

      }
        .navbar-wrapper {
          background-color: rgba(255, 255, 255, 0.1); /* Glassy background */
          backdrop-filter: blur(10px); /* Blur for glassmorphism */
          -webkit-backdrop-filter: blur(10px); /* For Safari */
          border-radius: 10px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow for glassmorphism */
          position: relative;
          z-index: 10;
         
        }

        .navbar-content {
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 20px;
        }

        .navbar-logo {
          flex: 1;
        }

        .navbar-logo-img {
          height: 80px;
          width: 100px;
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 35px;
          margin: 0;
          padding: 0;
          text-decoration: none;
        }
        .navbar-links :hover{
          text-decoration: none;
        }
        .navbar-link {
          color: black;
          text-decoration: none; /* Remove default underline */
          font-weight: bold;
          font-size: 14px;
          position: relative;
        }

        .navbar-link:hover {
          color: #ED1C24;
        }

        .navbar-link:active {
          text-decoration: none; /* Ensure no underline appears on click */
        }

        /* Keep hover animation with underline */
        .navbar-link::before {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: #ED1C24;
          transform-origin: bottom right;
          transform: scaleX(0);
          transition: transform 0.5s ease;
        }

        .navbar-link:hover::before {
          transform-origin: bottom left;
          transform: scaleX(1);
        }

        .navbar-hamburger {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          background: none;
          border: none;
        }

        .hamburger-bar {
          width: 25px;
          height: 3px;
          background-color: black; /* Hamburger color remains unchanged */
          margin: 2px 0;
          transition: 0.4s;
        }

        @media screen and (max-width: 768px) {
          .navbar-content {
            padding: 10px 20px;
          }
          .navbar-links {
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            position: absolute;
            top: 90px;
            left: 0;
            background-color: #ED1C24; /* Glassy background for mobile view */
            backdrop-filter: blur(15px); /* Stronger blur for mobile view */
            padding: 1rem;
            z-index: 3;
          }
          .menu-active {
            display: flex;
          }
          .navbar-link {
            color: white;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
