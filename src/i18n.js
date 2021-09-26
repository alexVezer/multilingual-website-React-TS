import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ro: {
        intro: {
          
              'p1':'Cand ai nevoie de un site, ai nevoie de fapt de o identitate.',
              'p2': 'Aceasta te va reprezenta cat e WWW-ul de intins.'
        
        }
      },
      en: {
          intro: {
                p1:'When you need a website, what you actually need is an identity.',
                p2: 'This one will present you as far as WWW goes.'
            }
          
      }
    }
});

export default i18n;