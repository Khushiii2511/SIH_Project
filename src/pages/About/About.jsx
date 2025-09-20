import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaRocket, FaHandshake, FaBullseye, FaUsers, FaChartLine, FaMagic } from 'react-icons/fa';
import './About.css';

const sections = [
  {
    icon: FaBookReader,
    title: "Module 1: Core Learning Experience",
    functionality: "Offline-First Content Delivery, Multilingual Support, Interactive Micro-Learning, Story-Based Learning.",
    
  },
  {
    icon: FaChartLine,
    title: "Module 2: Gamification & Progress Tracking",
    functionality: "Learning Quests & Badges, Virtual Garden/Farm, Leaderboards.",
    
  },
  {
    icon: FaMagic,
    title: "Module 3: Personalized Learning & AI-Powered Support",
    functionality: "Adaptive Learning Paths, AI-powered 'Ask-a-Tutor' Chatbot.",
    
  },
  {
    icon: FaRocket,
    title: "Module 4: AI-Powered Career Guidance Pathways",
    functionality: "Based on student performance, interests, and learning patterns, the platform suggests suitable career pathways. Displays success stories to inspire students.",
    
  },
  {
    icon: FaHandshake,
    title: "Module 5: Community & Collaborative Hub",
    functionality: "Local Problem-Solving Hub, Skill-Sharing Marketplace, Student-Generated Content.",
    
  },
  {
    icon: FaUsers,
    title: "Module 6: Advanced Offline & Accessibility Features",
    functionality: "Offline Voice Recognition, Asynchronous Mentor/Teacher Feedback.",
    
  },
  {
    icon: FaBullseye,
    title: "Module 7: Parent & Community Engagement",
    functionality: "Multilingual Audio Summaries of a child's weekly progress, Accessible Communication via SMS.",
    
  },
];

const About = () => {
  return (
    <div className="about-container">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-hero-title">About Gyanoday</h1>
        <p className="about-hero-subtitle">
          A lightweight, offline-first web application to deliver an inclusive and engaging educational experience to students in rural areas.
        </p>
      </motion.section>

      <section className="about-section problem-section">
        <div className="about-content-block">
          <h2 className="section-title">Problem Statement</h2>
          <p className="section-description">
            Many government schools in Nabha and nearby rural areas lack updated computer infrastructure, reliable internet connectivity, and access to quality digital educational resources. Teachers and students struggle to use outdated systems, and digital literacy remains low. As a result, students face difficulties in learning essential digital skills and accessing modern educational content, leading to a widening gap between rural and urban education standards.
          </p>
        </div>
        <div className="about-content-block impact-block">
          <h3 className="section-title">Why this problem needs to be solved</h3>
          <p className="section-description">
            The lack of digital resources and skills limits students’ academic growth and future employability. With the increasing importance of digital literacy, students in rural Nabha risk being left behind, perpetuating cycles of educational and economic disadvantage. Addressing this problem is urgent to ensure equitable access to quality education and to empower rural youth with skills for the modern world.
          </p>
        </div>
      </section>

      <section className="about-section solution-section">
        <h2 className="section-title">Our Solution</h2>
        <p className="section-description">
          Gyanoday is designed to go beyond traditional e-learning by integrating gamification, personalized learning paths, and a community hub to foster critical thinking and practical skill development.
        </p>
        <div className="solution-outcomes">
          <div className="outcome-card">
            <h3>Expected Outcomes</h3>
            <ul>
              <li>A mobile and web-based digital learning app that works offline.</li>
              <li>Interactive lessons in local languages to improve engagement.</li>
              <li>Digital literacy modules tailored for rural students.</li>
              <li>Teacher dashboards to track student progress.</li>
              <li>Optimized for low-end devices and poor connectivity.</li>
            </ul>
          </div>
          <div className="outcome-card">
            <h3>Relevant Stakeholders</h3>
            <ul>
              <li>Rural school students and teachers in Nabha.</li>
              <li>School administrators and Parents.</li>
              <li>Punjab Education Department.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section modules-section">
        <h2 className="section-title">Key Features</h2>
        <div className="modules-grid">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="module-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="module-header">
                <div className="module-icon-wrapper">
                  <section.icon className="module-icon" />
                </div>
                <h3>{section.title}</h3>
              </div>
              <div className="module-content">
                <p><strong>Functionality:</strong> {section.functionality}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
