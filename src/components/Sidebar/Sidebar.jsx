import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCog, FaTachometerAlt } from 'react-icons/fa';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Sidebar.css';

const sidebarVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: '100%', opacity: 0 },
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="sidebar"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="sidebar-header">
            <span className="sidebar-logo">Gyanoday</span>
            <button className="close-button" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>
          <ul className="sidebar-links">
            <li>
              <Link to="/auth" onClick={toggleSidebar}>
                <FaCog /> Authorization
              </Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={toggleSidebar}>
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>
            <li>
              <div className="dropdown-container">
                <span className="dropdown-label">Language:</span>
                <LanguageSwitcher />
              </div>
            </li>
            {/* The ThemeToggle is now here, right after the language option */}
            <li>
              <div className="dropdown-container">
                <span className="dropdown-label">Theme:</span>
                <ThemeToggle />
              </div>
            </li>
          </ul>
          {/* The sidebar-controls section is now empty */}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;