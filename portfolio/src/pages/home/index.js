import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';
import Project from '../../components/Project/index';
import SkillCard from '../../components/SkillCard';
import webdesign from '../../assets/webdesign.webp';
import seo from '../../assets/seo.webp';
import accessibility from '../../assets/accessibility.webp';

function Home() {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'ArgentBank',
      description: t("Développement d'une application bancaire en utilisant React et Redux"),
      link: 'https://github.com/davyDrexler/argentBank',
      images: [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3',
      ],
    },
    {
      title: '724 EVENT',
      description: t('Récupération du code et correction.'),
      link: 'https://github.com/davyDrexler/724event',
      images: [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
      ],
    },
  ];

  return (
    <div>
      <div className="presentation">
        <div className="all-content"></div>
        <div className="top-title">
          <h1>{t('Drexler Davy')}</h1>
          <h2>{t('Titre-dev')}</h2>
        </div>
        <p>{t('description')}</p>
        <a href="https://github.com/davyDrexler" target="_blank" rel="noopener noreferrer">
          <button className="github-button">{t('GitHub')}</button>
        </a>
      </div>

      <div className="etude">
        <h2>{t('Diplomas')}</h2>
        <ul>
          <li>
            <strong className="diplo">{t('diploma1Type')}:</strong> <br />
            {t('diploma1Specialty')}
          </li>
          <li>
            <strong className="diplo">{t('diploma2Type')}:</strong> <br />
            {t('diploma2Specialty')}
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h2>{t('SkillsTitle')}</h2>
        <div className="skills-container">
          <SkillCard image={webdesign} title={t('website')} description={t('websitetext')} />
          <SkillCard image={seo} title={t('SEO')} description={t('seo-text')} />
          <SkillCard image={accessibility} title={t('accessibility')} description={t('accessibility-text')} />
        </div>
      </div>

      <div id="projects" className="portfolio">
        <h2>{t('Projects')}</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <Project title={project.title} description={project.description} image={project.images[0]} />
          </div>
        ))}
      </div>
      
      <div id="contact" className="contact-section">
        <h2>{t('ContactTitle')}</h2>
        <p>
          <a href="mailto:davy.drexler@gmail.com" className="contact-email">
            davy.drexler@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;