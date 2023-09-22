import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../../locales/en/translation.json';
import translationsInCzech from '../../locales/cz/translation.json';


// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  cz: {
    translation: translationsInCzech
  },
  
};

i18n
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources, // resources - important to load translations
    lng: "cz", // default language 
    debug: true,
    fallbackLng: "en", // if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;