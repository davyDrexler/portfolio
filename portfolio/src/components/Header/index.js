import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header className="main-header">
        <div className="round-header"></div>
        <div className='language-control'>
          <button onClick={() => changeLanguage('fr')}>Français</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
        <nav className="nav-links">
          <a href="#projects">{t('Projects')}</a>
          <a href="#contact">{t('Contact')}</a>
        </nav>
      </header>
    </div>
  )
}

export default Home;
