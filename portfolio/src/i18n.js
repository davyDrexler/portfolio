import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Titre-dev": "Front-end developer",
      "description": "I have been passionate about informatics ever since I was a kid. I discovered web development in high school and I loved it right away. That's why I'm here today to make the website of your dreams.",
      "Diplomas": "My Diplomas",
      "diploma1Type": "Professional Baccalaureate",
      "diploma1Specialty": "in Digital Systems, IT and Networks",
      "diploma2Type": "Web Developer Certification",
      "diploma2Specialty": "Specialty in front-end",
      "ContactTitle": "Want to talk about an idea?",
    }
  },
  fr: {
    translation: {
      "Titre-dev": "Développeur front-end",
      "description": "Passioné d'informatique depuis le plus jeune âge, c'est en arrivant au lycée que j'ai pu découvrir le développement web qui m'a directement passionné, c'est pour ça qu'aujourd'hui je suis là pour réaliser votre site de rêve.",
      "Diplomas": "Mes Diplômes",
      "diploma1Type": "Bac Pro",
      "diploma1Specialty": "Systèmes Numériques, Informatique et Réseaux",
      "diploma2Type": "Certification Développeur Web",
      "diploma2Specialty": "Spécialité en développement frond-end",
      "ContactTitle": "Envie de me parler d'une idée ?",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // Langue par défaut
    fallbackLng: "en", // Langue de repli si une traduction est manquante
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;