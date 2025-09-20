import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import './Home.css';
import { FaUserGraduate, FaLightbulb, FaRocket, FaGlobe, FaCloudDownloadAlt, FaChalkboard, FaQuoteRight, FaCheckCircle, FaBookOpen, FaSeedling, FaStar } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  const scrollVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const modules = [
    { id: 'core-learning', title: t('features.module1.title'), description: t('features.module1.description'), link: '/interactive-learning', icon: FaUserGraduate },
    { id: 'gamification', title: t('features.module2.title'), description: t('features.module2.description'), link: '/gamification', icon: FaLightbulb },
    { id: 'personalized-learning', title: t('features.module3.title'), description: t('features.module3.description'), link: '/personalized-learning', icon: FaRocket },
    { id: 'digital-literacy', title: t('Career Guidance'), description: t('Resources and mentorship for students exploring future careers.'), link: '/Career-Guidance', icon: FaGlobe },
    { id: 'basic-math', title: t('Community and Collaborative Hub'), description: t('A space for students to connect, share, and collaborate.'), link: '/community-hub', icon: FaCheckCircle },
    { id: 'english', title: t('Parent & Community Engagement'), description: t('Fostering strong communication and partnership with parents.'), link: '/parent-engagement', icon: FaBookOpen },
  ];

  const testimonials = [
    { text: "Gyanoday has made learning exciting and easy. I can now study even when there is no internet!", author: 'Priya, Student from Nabha' },
    { text: "This app has transformed my classroom. The progress tracking dashboard helps me identify and support students who need extra help.", author: 'Mr. Sharma, Teacher' },
    { text: "My daughter loves the virtual garden. It's amazing to see her so motivated to learn and grow her 'crops'!", author: 'Anil Kumar, Parent' },
  ];

  return (
    <div className={`home-container ${theme}-theme`}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <motion.main
        className="main-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section className="hero-section" variants={itemVariants}>
          <div className="hero-text-content">
            <h1 className="hero-title">Gyanoday: 𝐋𝐢𝐠𝐡𝐭𝐢𝐧𝐠 𝐭𝐡𝐞 𝐰𝐚𝐲 𝐟𝐨𝐫 𝐚 𝐛𝐫𝐢𝐠𝐡𝐭𝐞𝐫 𝐟𝐮𝐭𝐮𝐫𝐞.</h1>
            <p className="hero-slogan">Unlock knowledge and empower your community, one lesson at a time.</p>
            <a href="interactive-learning">
  <motion.button
    className="cta-button"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Start Learning Now
  </motion.button>
</a>
          </div>
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.0 }}
          >
            <img src="/images/pic.png" alt="Student Learning" className="hero-image" />
          </motion.div>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section 
          className="mission-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="mission-flashcard" variants={itemVariants}>
            <h2 className="mission-title">Our Mission: Bridging the Digital Divide</h2>
            <p className="mission-subtitle">To empower every student in Nabha with the skills and resources they need to thrive in a digital world, no matter their location.</p>
            
            <div className="mission-points">
              <div className="mission-point-card">
                <FaCloudDownloadAlt className="mission-icon" />
                <h3>Offline-First Learning</h3>
                <p>Our app is designed to work seamlessly without internet, ensuring continuous learning for every student.</p>
              </div>
              <div className="mission-point-card">
                <FaGlobe className="mission-icon" />
                <h3>Interactive Lessons in Local Languages</h3>
                <p>Lessons are crafted in Punjabi to improve engagement and comprehension, making education feel familiar and personal.</p>
              </div>
              <div className="mission-point-card">
                <FaRocket className="mission-icon" />
                <h3>Digital Literacy for All</h3>
                <p>We provide foundational digital literacy modules, giving students the skills essential for future academic and professional success.</p>
              </div>
            </div>
          </motion.div>
          <motion.a 
  href="/impact" 
  className="mission-cta-link"
  whileHover={{ scale: 1.05, color: '#4a5568' }}
>
  Learn More About Our Impact
</motion.a>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          className="how-it-works-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="centered-content">
          <h2>How It Works: Your Journey to Knowledge</h2>
          </div>
          <div className="timeline-container">
            <motion.div className="timeline-item" variants={scrollVariants}>
              <div className="icon-wrapper"><FaCloudDownloadAlt /></div>
              <h3>Step 1</h3>
              <p>Download the app and your desired learning modules for seamless offline access.</p>
            </motion.div>
            <motion.div className="timeline-item" variants={scrollVariants}>
              <div className="icon-wrapper"><FaBookOpen /></div>
              <h3>Step 2</h3>
              <p>Explore engaging micro-lessons and interactive quizzes designed to be fun and effective.</p>
            </motion.div>
            <motion.div className="timeline-item" variants={scrollVariants}>
              <div className="icon-wrapper"><FaStar /></div>
              <h3>Step 3</h3>
              <p>Earn badges, grow your virtual garden, and track your progress as you master new skills.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Modules & Subjects Section */}
        <motion.section 
          className="features-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="centered-content">
          <h2>{t('features_heading')}</h2>
          </div>
          <div className="feature-cards-grid">
            {modules.map((module) => (
              <FeatureCard 
                key={module.id} 
                module={module} 
                variants={itemVariants}
                icon={module.icon}
              />
            ))}
          </div>
        </motion.section>

        {/* Teacher's Corner Section */}
        <motion.section 
          className="teachers-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaChalkboard className="teacher-icon" />
          <div className="centered-content">
          <h2>For Teachers: A Partner in Education</h2>
          <p>Gyanoday provides a powerful dashboard to track student progress, identify learning gaps, and deliver targeted support, even in offline environments.</p>
          </div>
          <a href="dashboard">
  <motion.button
    className="teachers-cta"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    See Your Dashboard
  </motion.button>
</a>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="testimonials-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="centered-content">
          <h2>Our Community's Voice</h2>
          </div>
          <div className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <FaQuoteRight className="quote-icon" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Home;
