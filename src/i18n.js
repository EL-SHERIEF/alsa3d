import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json'

// Define the resources with translations for each language
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources,
    lng: 'ar', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    // Function to determine the direction of text based on the language
    react: {
      useSuspense: false,
    },
    // Add a function to get the direction of the text
    dir: (lng) => (['ar'].includes(lng) ? 'rtl' : 'ltr'),
  });

export default i18n;
