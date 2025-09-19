import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from './pages/Home/Home';

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
            <Route path="/core-learning" element={<PlaceholderPage />} />
            <Route path="/gamification" element={<PlaceholderPage />} />
            <Route path="/personalized-learning" element={<PlaceholderPage />} />
            <Route path="/community-hub" element={<PlaceholderPage />} />
          </Routes>
        </ThemeProvider>
      </I18nextProvider>
    </Router>
  );
}

export default App;