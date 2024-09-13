import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css'
import Project from '../../components/Project/index';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className='presentation'>
        <div className='all-content'></div>
          <div className='top-title'>
            <h1>{t('Drexler Davy')}</h1>
            <h2>{t('Titre-dev')}</h2>
        </div>
        <p>{t('description')}</p>
        <a href="https://github.com/davyDrexler" target="_blank" rel="noopener noreferrer">
          <button className="github-button">{t('GitHub')}</button>
        </a>
      </div>

      <div className='etude'>
        <h2>{t('Diplomas')}</h2>
        <ul>
          <li>
            <strong className='diplo'>{t('diploma1Type')}:</strong> <br />
            {t('diploma1Specialty')}
          </li>
          <li>
            <strong className='diplo'>{t('diploma2Type')}:</strong> <br />
            {t('diploma2Specialty')}
          </li>
        </ul>
      </div>

      <div  id='projects' className="portfolio">
        <h2>{t('Mes projets')}</h2>
        <Project
          title="ArgentBank"
          description={t('Développement d une application bancaire en utilisant React et Redux')}
          link="https://github.com/davyDrexler/argentBank"
          image="https://via.placeholder.com/150"
        />
        <Project
          title="724 EVENT"
          description={t('Récuperation du code et correction.')}
          link="https://github.com/davyDrexler/724event"
          image="https://via.placeholder.com/150"
        />
      </div>

      <div id='contact' className="contact-section">
        <h2>{t('ContactTitle')}</h2>
        <p>
          <a href="mailto:davy.drexler@gmail.com" className="contact-email">davy.drexler@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
