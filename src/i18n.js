import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Fisierele de traducere
import translationEN from './locales/en/translation.json';
import translationRO from './locales/ro/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ro: {
    translation: translationRO
  }
};

i18n
  .use(LanguageDetector) // Detecteaza limba utilizatorului
  .use(initReactI18next) // Paseaza instanta i18n catre react-i18next
  .init({
    resources,
    fallbackLng: "ro", // Limba folosita daca cea detectata nu e disponibila
    interpolation: {
      escapeValue: false // Nu este necesar pentru React, deoarece face deja escape la XSS
    }
  });

export default i18n;