import React from 'react';
import './Footer.css'; // Make sure to style this file accordingly
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side: Logo and ISO certification */}
        <div className="footer-left">
          <img src={logo2} alt="Aim Services" className="footer-logo" />
          <img src="https://creative-junction.com/img/iso-cert1.png" alt="ISO 9001 Certified" className="footer-iso" />
        </div>

        {/* Center: Contact Information */}
        <div className="footer-center">
          <h2 className="footer-heading">Contact Us</h2>
          
          {/* Lahore Office */}
          <div className="footer-office">
            <h3>Head Office Lahore</h3>
            <p><i className="fas fa-map-marker-alt"></i> 478 A, Block A Revenue Employees Cooperative Housing Society, Lahore, Punjab 54000</p>
            <p><i className="fas fa-phone-alt"></i> +92-344523-289</p>
            <p className="footer-email"><i className="fas fa-envelope"></i> aimservicess123@gmail.com</p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/aimservices1"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/aimservicess/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/watch?v=1lvgG7g9Oqg"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          {/* Lahore Office 2 */}
          <div className="footer-office">
            <h3>Lahore Office 2</h3>
            <p><i className="fas fa-map-marker-alt"></i> Chohan Chowk, Street No. 2, A Block Sector A Phase 5 D.H.A, Lahore, Punjab, Pakistan</p>
            <p><i className="fas fa-phone-alt"></i> +92-344523-289</p>
          </div>
        </div>

        {/* Right side: Map */}
        <div className="footer-right">
          <h2 className="footer-heading">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.4547419976225!2d74.28028346916007!3d31.455067365906977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901245a2a054b%3A0xbafdb09c2ea4dcb8!2sCreative%20Junction%20(Pvt)!5e0!3m2!1sen!2s!4v1627744444732!5m2!1sen!2s"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Aim services"
          ></iframe>
        </div>
      </div>

      {/* Copyright and Powered By section */}
      <div className="footer-bottom">
        <p>© 2024 - Aim services (Pvt) Ltd - All Rights Reserved.</p>
        <p>Powered by <a href="https://aimservicess.com/">Aim services</a></p>
      </div>
    </footer>
  );
};

export default Footer;
