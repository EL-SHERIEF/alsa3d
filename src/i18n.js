import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
import imgs from './locales/img.json';

const resources = {
  en: {
    translation: translationEN,
    images: imgs
  },
  ar: {
    translation: translationAR,
    images: imgs
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    dir: (lng) => (['ar'].includes(lng) ? 'rtl' : 'ltr'),
  });

export default i18n;
