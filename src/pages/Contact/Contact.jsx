import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './contact.css'; // Import the CSS file

const ContactPage = () => {
  // Data for the team members.
  const teamMembers = [
    {
      id: 1,
      name: 'Anshul Munjal',
      phone: '9582008184',
      email: 'anshulmunjal01@gmail.com',
      imageUrl: '/images/a.jpeg',
    },
    {
      id: 2,
      name: 'Khushi Kapoor',
      phone: '9151090290',
      email: 'khushi.kapoor2511@gmail.com',
      imageUrl: '/images/kk.jpeg',
    },
    {
      id: 3,
      name: 'Khushi Tiwari',
      phone: '7007659997',
      email: 'khushimona184@gmail.com',
      imageUrl: '/images/kt.jpeg',
    },
    {
      id: 4,
      name: 'Mohit Jain',
      phone: '9582060885',
      email: 'mohitjain@gmail.com',
      imageUrl: '/images/m.jpeg',
    },
    {
      id: 5,
      name: 'Nitika Mathur',
      phone: '8595856403',
      email: 'nitkamathur13@gmail.com',
      imageUrl: '/images/n.jpeg',
    },
    {
      id: 6,
      name: 'Vaishnavi Mittal',
      phone: '9368928253',
      email: 'vaishnavimittal@gmail.com',
      imageUrl: '/images/v.jpeg',
    },
  ];

  // State to track which card is currently expanded.
  const [expandedId, setExpandedId] = useState(null);

  // Function to handle the click and toggle the card expansion.
  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
        
        {/* Header Section */}
        <header className="contact-header">
          <h1 className="contact-title">Meet Our Team</h1>
          <p className="contact-description">
            Our team is dedicated to providing the best learning experience. Click on a profile to reveal their contact details.
          </p>
        </header>

        {/* Team Cards Grid */}
        <section className="team-grid">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="team-card"
              onClick={() => handleCardClick(member.id)}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: member.id * 0.1 }}
            >
              <div className="card-header">
                <h3 className="member-name">{member.name}</h3>
                <motion.div
                  animate={{ rotate: expandedId === member.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="toggle-icon-container"
                >
                  {expandedId === member.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="toggle-icon"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="toggle-icon"><path fill="currentColor" d="M416 208H240V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v176H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h112v176c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h176c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                  )}
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedId === member.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="card-content"
                  >
                    <div className="image-container">
                      <motion.img
                        src={member.imageUrl}
                        alt={`Profile of ${member.name}`}
                        className="member-image"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="contact-details">
                      <div className="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="detail-icon"><path fill="currentColor" d="M511.2 387.1l-104.5-59.5c-9.1-5.2-19.9-7.2-30.8-5.4L299.7 348c-12.7 2.1-25.2-2.1-34.9-10.7l-98.3-98.3c-8.6-9.7-12.8-22.2-10.7-34.9l40.4-76.2c1.8-10.9-0.2-21.7-5.4-30.8L124.9.8c-9.2-15.6-29.4-19.8-44.1-9.9L10 24c-13.6 8.5-22.1 23.5-24 40.5-2.2 18.2-1.9 36.6 2.3 54.2l39.5 160.8c2.9 11.9 10.1 22.3 20.3 30.7l133.5 106.8c18.5 14.8 40.1 25.4 63.8 31.8l160.8 39.5c17.6 4.2 36.1 4.5 54.2 2.3 17-1.9 32-10.4 40.5-24l22.7-54.8c9.9-14.7 5.7-34.9-9.9-44.1z"/></svg>
                        <span className="detail-text">{member.phone}</span>
                      </div>
                      <div className="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="detail-icon"><path fill="currentColor" d="M502.3 190.1c-13.2-10.7-29.7-16.1-47.5-16.1H57.2c-17.8 0-34.3 5.4-47.5 16.1C2.3 201.7-3.1 216.5 0 231.8l52.6 156.9c7.2 21.6 27.5 36.4 49.6 36.4h304.6c22.1 0 42.4-14.8 49.6-36.4l52.6-156.9c3.1-15.3-2.3-30.1-15.5-40.7zM448 352H64v-16c0-10.8 3.3-21.1 9.4-29.9l69.6-104.4c6.1-9.1 14.3-15.8 23.8-20.2 9.5-4.4 19.8-6.6 30.1-6.6h176c10.3 0 20.6 2.2 30.1 6.6 9.5 4.4 17.7 11.1 23.8 20.2l69.6 104.4c6.1 8.8 9.4 19.1 9.4 29.9v16z"/></svg>
                        <span className="detail-text">{member.email}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </section>

        {/* Feedback Section */}
        <section className="feedback-section">
          <h2 className="feedback-title">Share Your Feedback</h2>
          <p className="feedback-description">
            Your insights help us grow. Please share your thoughts below.
          </p>
          <form className="feedback-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Feedback
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea"
                placeholder="Write your feedback here..."
              ></textarea>
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;
