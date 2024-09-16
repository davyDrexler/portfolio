import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';
import logo from '../../assets/D_logo.webp';

function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="Logo" className="logo-header" />
        <div className="round-header"></div>
        <div className="language-control">
          <button 
            className="language-control-button" 
            onClick={() => changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
          >
            {i18n.language === 'fr' ? 'English' : 'Français'}
          </button>
        </div>
        <nav className="nav-links">
          <a href="#projects">{t('Projects')}</a>
          <a href="#contact">{t('Contact')}</a>
        </nav>
      </header>
    </div>
  );
}

export default Home;
