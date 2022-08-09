import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from './en/translation.json';
import translationUA from './ua/translation.json';
import translationRU from './ru/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ua: {
    translation: translationUA
  },
  ru: {
    translation: translationRU
  }
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    load: "languageOnly",
    debug: true
  });

export default i18n;