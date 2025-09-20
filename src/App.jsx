import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home/Home';
import Impact from './pages/Impact/Impact';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService/TermsOFService';
import Gamification from './pages/Gamification/Gamification';

// Import the global styles here so they are available everywhere
import './styles.css';

// Create a placeholder component for the other pages
const PlaceholderPage = () => <h2>This is a placeholder page. Content coming soon!</h2>;

function App() {
  return (
    <Router>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interactive-learning" element={<PlaceholderPage />} />
            <Route path="/story-based-learning" element={<PlaceholderPage />} />
            {/* The corrected route for Gamification */}
            <Route path="/gamification" element={<Gamification />} />
            <Route path="/personalized-learning" element={<PlaceholderPage />} />
            <Route path="/career-guidance" element={<PlaceholderPage />} />
            <Route path="/community-hub" element={<PlaceholderPage />} />
            <Route path="/offline-features" element={<PlaceholderPage />} />
            <Route path="/parent-engagement" element={<PlaceholderPage />} />
            <Route path="/auth" element={<PlaceholderPage />} />
            <Route path="/dashboard" element={<PlaceholderPage />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            {/* Other placeholder routes */}
            <Route path="/learn" element={<PlaceholderPage />} />
            <Route path="/profile" element={<PlaceholderPage />} />
          </Routes>
        </ThemeProvider>
      </I18nextProvider>
    </Router>
  );
}

export default App;
