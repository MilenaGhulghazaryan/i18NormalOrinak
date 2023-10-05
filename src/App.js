import './App.css';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function App() {

  const { t } = useTranslation()

  return (
    <div className="App">
      <Header />
      <p>{t('hello')}</p>
      <p>{t('ok')}</p>
      <p>{t('cancel')}</p>

    </div>
  );
}

export default App;
