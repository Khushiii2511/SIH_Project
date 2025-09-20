import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaGraduationCap, FaTrophy, FaUserCheck, FaBrain, FaRocket, FaUsers, FaWifi, FaHeart } from 'react-icons/fa';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Link to="/" className="logo-link">
        <img src="/logo192.png" alt="Gyanoday Logo" className="logo-image" /> {/* Add the image here */}
        <h1 className="logo-text">Gyanoday</h1>
      </Link>
      <nav className="nav-menu">
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/interactive-learning" className="nav-icon-link" title="Interactive Micro-Learning">
              <FaGraduationCap />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/story-based-learning" className="nav-icon-link" title="Story-Based Learning">
              <FaBrain />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/gamification" className="nav-icon-link" title="Gamification & Progress">
              <FaTrophy />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/personalized-learning" className="nav-icon-link" title="Personalized Learning & AI">
              <FaUserCheck />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/career-guidance" className="nav-icon-link" title="AI-Powered Career Guidance">
              <FaRocket />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/community-hub" className="nav-icon-link" title="Community & Collaborative Hub">
              <FaUsers />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/offline-features" className="nav-icon-link" title="Offline & Accessibility Features">
              <FaWifi />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/parent-engagement" className="nav-icon-link" title="Parent & Community Engagement">
              <FaHeart />
            </Link>
          </motion.li>
        </ul>
      </nav>
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </motion.header>
  );
};

export default Header;