import { useTranslation } from 'react-i18next';
import './index.css';
import Project from '../../components/Project/index';
import SkillCard from '../../components/SkillCard';
import webdesign from '../../assets/webdesign.webp';
import eventlogo from '../../assets/eventlogo.png';
import ab from '../../assets/argentbank.png';
import kasalogo from '../../assets/kasalogo.png';
import seo from '../../assets/seo.webp';
import accessibility from '../../assets/accessibility.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const { t } = useTranslation();

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
        <Project
          title={t('ArgentBank')}
          description={t('argentbank-txt')}
          link="https://github.com/davyDrexler/argentBank"
          image={ab}
        />
        <Project
          title={t('724Event')}
          description={t('724event-txt')}
          link="https://github.com/davyDrexler/724event"
          image={eventlogo}
        />
        <Project
          title={t('Kasa')}
          description={t('kasa-txt')}
          link="https://github.com/davyDrexler/724event"
          image={kasalogo}
        />
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
