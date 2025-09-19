import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../contexts/ThemeContext';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
  };

  const modules = [
    { id: 'core-learning', title: t('features.module1.title'), description: t('features.module1.description'), link: '/core-learning' },
    { id: 'gamification', title: t('features.module2.title'), description: t('features.module2.description'), link: '/gamification' },
    { id: 'personalized-learning', title: t('features.module3.title'), description: t('features.module3.description'), link: '/personalized-learning' },
  ];

  return (
    <div className={`home-container ${theme}-theme`}>
      <header className="header">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="logo-text">Gyanoday</h1>
        </motion.div>
        <div className="controls-container">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </header>

      <motion.main
        className="main-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-section" variants={itemVariants}>
          <h1 className="hero-title">{t('greeting')}</h1>
          <p className="hero-slogan">{t('slogan')}</p>
          <motion.button
            className="cta-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#4361ee', // A solid blue color
              color: '#fff', // White text
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            {t('cta')}
          </motion.button>
        </motion.div>
        
        {/* New Introduction Section */}
        <motion.section className="intro-section" variants={itemVariants}>
          <h2>{t('intro_heading')}</h2>
          <p className="intro-text">{t('intro_description')}</p>
        </motion.section>

        <motion.section className="features-section" variants={containerVariants}>
          <h2>{t('features_heading')}</h2>
          <div className="feature-cards-grid">
            {modules.map((module) => (
              <FeatureCard key={module.id} module={module} variants={itemVariants} />
            ))}
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Home;