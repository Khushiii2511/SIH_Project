import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Listen for language changes and update state
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
  };

  const supportedLanguages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'pa', label: 'Punjabi' },
    { code: 'as', label: 'Assamese' },
    { code: 'bn', label: 'Bengali' },
    { code: 'gu', label: 'Gujarati' },
    { code: 'kn', label: 'Kannada' },
    { code: 'ks', label: 'Kashmiri' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'mr', label: 'Marathi' },
    { code: 'ne', label: 'Nepali' },
    { code: 'or', label: 'Odia' },
    { code: 'sa', label: 'Sanskrit' },
    { code: 'sd', label: 'Sindhi' },
    { code: 'ta', label: 'Tamil' },
    { code: 'te', label: 'Telugu' },
    { code: 'ur', label: 'Urdu' },
  ];

  return (
    <select
      id="language-select"
      value={currentLanguage}
      onChange={handleLanguageChange}
      className="language-select"
    >
      {supportedLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;