import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

const FeatureCard = ({ module, variants }) => {
  return (
    <motion.div 
      className="feature-card"
      variants={variants}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    >
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      <Link to={module.link}>
        <button className="learn-more-button">Learn More →</button>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;