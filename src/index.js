import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './locale/en';
import { ru } from './locale/ru';
import { am } from './locale/am';
import { fr } from './locale/fr';

const defaultLanguage = localStorage.getItem('lng') || 'ru'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      ru: ru,
      am: am,
      fr: fr
    },
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
