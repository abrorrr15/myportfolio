import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './src/locales/en.json';
import ru from './src/locales/ru.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: savedLanguage, // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
