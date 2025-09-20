import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Hypothetical function to call a translation API
const translateText = async (text, targetLang) => {
  if (targetLang === 'en') {
    return text; // No translation needed for English
  }
  
  try {
    // Replace this with your actual API call (e.g., Axios fetch to Google Translate API)
    // For demonstration, let's use a dummy translation
    const response = await new Promise(resolve => setTimeout(() => {
        const translations = {
            'Dashboard': { 'hi': 'डैशबोर्ड' },
            'Authorization': { 'hi': 'प्राधिकरण' },
            // Add other mock translations
        };
        resolve(translations[text]?.[targetLang] || text);
    }, 100));
    
    return response;
  } catch (error) {
    console.error('Translation failed:', error);
    return text; // Return original text on failure
  }
};

const useTranslation = (text) => {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const fetchTranslation = async () => {
      const translated = await translateText(text, language);
      setTranslatedText(translated);
    };

    fetchTranslation();
  }, [text, language]); // Re-run effect when the text or language changes

  return translatedText;
};

export default useTranslation;