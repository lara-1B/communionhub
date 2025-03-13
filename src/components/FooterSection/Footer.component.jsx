import React from "react";
import Images from "../../utils/importImages";
import "./Footer.component.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={Images.reverseLogo} alt="CommunionHub Logo" className="footer-logo" />
          <p>
            Discover the power of connection with CommunionHub. Uniting diverse
            communities through spirituality and innovation, we foster
            inclusivity, collaboration, and social cohesion for a better world.
          </p>
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Communities</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Leaders</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Profile</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>contact@communionhub.org</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024. All rights reserved to CommunionHub</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
