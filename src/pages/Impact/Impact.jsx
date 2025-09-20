import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaChartLine, FaQuoteLeft } from 'react-icons/fa';
import CountUp from 'react-countup';

const Impact = () => {

  const sectionStyles = {
    padding: '6rem 5%',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
  };

  const titleStyles = {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#444',
    marginBottom: '3rem',
    position: 'relative',
    display: 'inline-block',
  };

  const statGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    justifyContent: 'center',
  };

  const statCardStyles = {
    background: '#fff',
    border: '1px solid #ddd',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconWrapperStyles = {
    display: 'inline-flex',
    backgroundColor: '#5688d9',
    color: '#fff',
    padding: '1.5rem',
    borderRadius: '50%',
    marginBottom: '1rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const iconStyles = {
    fontSize: '2.5rem',
  };

  const valueStyles = {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#444',
    margin: '0.5rem 0',
  };

  const titleTextStyles = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#555',
    marginBottom: '0.5rem',
  };

  const subtitleTextStyles = {
    fontSize: '1rem',
    color: '#777',
    opacity: '0.9',
    lineHeight: '1.5',
  };

  // New styles for Testimonial Section
  const testimonialSectionStyles = {
    ...sectionStyles,
    backgroundColor: '#eef3f7',
  };

  const testimonialsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    marginTop: '3rem',
  };

  const testimonialCardStyles = {
    position: 'relative',
    background: '#fff',
    padding: '3rem 2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    textAlign: 'left',
    border: '1px solid #e0e0e0',
    overflow: 'hidden',
  };

  const quoteIconStyles = {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    fontSize: '3rem',
    color: '#e0e0e0',
    opacity: '0.7',
  };

  const testimonialHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  };

  const profileImageStyles = {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #5688d9',
  };

  const testimonialInfoStyles = {
    // No specific styles needed here, let child components handle styling
  };

  const nameStyles = {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#1a2a44',
  };

  const roleStyles = {
    fontSize: '1rem',
    color: '#777',
    opacity: '0.9',
  };

  const quoteStyles = {
    fontStyle: 'italic',
    lineHeight: '1.8',
    color: '#555',
  };

  // New styles for Before and After Section
  const beforeAfterSectionStyles = {
    ...sectionStyles,
    backgroundColor: '#f7f7f7',
  };

  const beforeAfterGridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    marginTop: '3rem',
  };

  const scenarioCardStyles = {
    background: '#fff',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const beforeCardStyles = {
    ...scenarioCardStyles,
    backgroundColor: '#fff5f5',
    border: '1px solid #f4c2c2',
  };

  const afterCardStyles = {
    ...scenarioCardStyles,
    backgroundColor: '#f5faff',
    border: '1px solid #c2d5f4',
  };

  const scenarioContentStyles = {
    flexGrow: '1',
    marginBottom: '1.5rem',
  };

  const scenarioTitleStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a2a44',
    marginBottom: '1rem',
  };

  const scenarioTextStyles = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
  };

  const scenarioImageStyles = {
    width: '100%',
    maxWidth: '450px',
    borderRadius: '12px',
    marginTop: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };


  return (
    <div className="impact-container">
      <main className="main-content">
        {/* Hero Section */}
        <motion.section
          className="impact-hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="impact-hero-text">
            <h1 className="impact-hero-title">The Impact: Showcasing Success Stories ✨</h1>
            <p className="impact-hero-slogan">
              Our mission comes to life through real-world results. Discover how Gyanoday is transforming education, one student at a time.
            </p>
          </div>
        </motion.section>

        {/* Quantitative Data Section */}
        <section style={{...sectionStyles, marginTop: '-30px'}}>
          <h2 style={titleStyles}>Key Metrics & Milestones</h2>
          <div style={statGridStyles}>
            <motion.div
              style={statCardStyles}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div style={iconWrapperStyles}>
                <FaGraduationCap style={iconStyles} />
              </div>
              <h3 style={valueStyles}>
                <CountUp end={50000} duration={3} separator="," />+
              </h3>
              <p style={titleTextStyles}>Students Empowered</p>
              <p style={subtitleTextStyles}>Gyanoday has been a catalyst for learning for over 50,000 students across the region, providing them with essential skills for a brighter future.</p>
            </motion.div>
            
            <motion.div
              style={statCardStyles}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div style={iconWrapperStyles}>
                <FaSchool style={iconStyles} />
              </div>
              <h3 style={valueStyles}>
                <CountUp end={200} duration={3} separator="," />+
              </h3>
              <p style={titleTextStyles}>Schools Transformed</p>
              <p style={subtitleTextStyles}>We've partnered with over 200 schools to integrate our app into their curriculum, bridging the digital divide in communities that need it most.</p>
            </motion.div>

            <motion.div
              style={statCardStyles}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div style={iconWrapperStyles}>
                <FaChartLine style={iconStyles} />
              </div>
              <h3 style={valueStyles}>
                <CountUp end={35} duration={3} separator="," />%
              </h3>
              <p style={titleTextStyles}>Knowledge Gaps Bridged</p>
              <p style={subtitleTextStyles}>On average, students using Gyanoday have shown a remarkable 35% increase in digital literacy and core subject scores, proving the app's effectiveness.</p>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials and Case Studies - Redesigned with Inline Styles */}
        <section style={testimonialSectionStyles}>
          <h2 style={titleStyles}>Success Stories from Our Community</h2>
          <div style={testimonialsGridStyles}>
            <motion.div
              style={testimonialCardStyles}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaQuoteLeft style={quoteIconStyles} />
              <div style={testimonialHeaderStyles}>
                <img
                  src="https://placehold.co/120x120/5688d9/ffffff?text=P"
                  alt="Profile picture of Priya Sharma"
                  style={profileImageStyles}
                />
                <div style={testimonialInfoStyles}>
                  <h3 style={nameStyles}>Priya Sharma</h3>
                  <p style={roleStyles}>10th Grade Student</p>
                </div>
              </div>
              <p style={quoteStyles}>
                "I used to struggle with history, but the interactive timelines and story-based lessons on Gyanoday made it click. My test scores went from average to one of the highest in my class! It completely changed how I see learning."
              </p>
            </motion.div>
            <motion.div
              style={testimonialCardStyles}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaQuoteLeft style={quoteIconStyles} />
              <div style={testimonialHeaderStyles}>
                <img
                  src="https://placehold.co/120x120/5688d9/ffffff?text=S"
                  alt="Profile picture of Sunita Patel"
                  style={profileImageStyles}
                />
                <div style={testimonialInfoStyles}>
                  <h3 style={nameStyles}>Sunita Patel</h3>
                  <p style={roleStyles}>Elementary School Teacher</p>
                </div>
              </div>
              <p style={quoteStyles}>
                "Gyanoday is a game-changer for my classroom. The dashboard allows me to easily track each student's progress and identify who needs extra help. It's saved me countless hours and allowed me to personalize my teaching more effectively."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Before and After Section - Redesigned with Inline Styles */}
        <section style={beforeAfterSectionStyles}>
          <h2 style={titleStyles}>Life Before and After Gyanoday</h2>
          <div style={beforeAfterGridStyles}>
            <motion.div
              style={beforeCardStyles}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={scenarioContentStyles}>
                <h3 style={scenarioTitleStyles}>Before Gyanoday</h3>
                <p style={scenarioTextStyles}>
                  A student feels overwhelmed by textbook learning, struggles to find extra resources, and loses motivation.
                </p>
              </div>
              <img src="/images/before.png" alt="Student looking at a confusing textbook" style={scenarioImageStyles} />
            </motion.div>
            <motion.div
              style={afterCardStyles}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={scenarioContentStyles}>
                <h3 style={scenarioTitleStyles}>After Gyanoday</h3>
                <p style={scenarioTextStyles}>
                  The same student learns new skills, gains confidence through engaging content, and feels empowered to achieve their goals.
                </p>
              </div>
              <img src="/images/after.png" alt="Student confidently using a tablet" style={scenarioImageStyles} />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Impact;