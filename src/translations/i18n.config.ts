import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { en, es } from '.';
import { RNLanguageDetector } from './RNLanguageDetector';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    // lng: 'es', // toggle to test language change
    //language to use if translations in user language are not available
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    keySeparator: false,
    nsSeparator: false,
  });

export default i18n;
