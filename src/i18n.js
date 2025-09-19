import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './assets/translations/en.json';
import hi from './assets/translations/hi.json';
import pa from './assets/translations/pa.json';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  pa: {
    translation: pa,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // default language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;