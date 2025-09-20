import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="social-media">
          <a href="/contact"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/anshulmunjal/"><FaLinkedin /></a>
          <a href="https://github.com/anshulmunjal01"><FaGithub /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gyanoday. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;