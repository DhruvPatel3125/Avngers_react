import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              We are a tech company that strives to create innovative solutions that
              help businesses and individuals thrive in the digital age. Our mission
              is to bridge the gap between technology and users, providing intuitive
              products and services that make a difference.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Signup and Social Media Section */}
          <div className="col-md-4">
            <h3>Stay Updated</h3>
            <form action="#" method="post" className="newsletter-form">
              <input type="email" name="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="#" aria-label="Facebook">Facebook<i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" aria-label="Twitter">Twitter<i className="fab fa-twitter"></i></a></li>
              <li><a href="_.dhruv._312" aria-label="Instagram">Instagram<i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <p><strong>Contact Us:</strong> Nana Varachha,Surat</p>
        <p><strong>Phone:</strong> 9824934361</p>
        <p><strong>Email:</strong> dhruvjpatel5@gmail.com</p>
      </div>

      {/* Copyright Section */}
      <div className="copyright text-center">
        <p>&copy; 2024 Tech Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
