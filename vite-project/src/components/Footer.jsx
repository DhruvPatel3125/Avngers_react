import React from 'react';
import './Footer.css'; // Ensure this file exists in the same directory

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <p><strong>Contact Us:</strong></p>
          <p>Surat, India</p>
          <p>Phone: 9824934361</p>
          <p>Email: dhruvjpatel5@gmail.com</p>
        </div>

        <div className="footer-social">
          <p><strong>Follow Us:</strong></p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100030030765034" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/@_dhruv_312" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/_.dhruv._312/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/dhruvpatel312" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Tech Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
