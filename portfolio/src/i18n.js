import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Titre-dev": "Front-end developer",
      "description": "I have been passionate about informatics ever since I was a kid. I discovered web development in high school and I loved it right away. That's why I'm here today to make the website of your dreams.",
      "Diplomas": "My Diplomas :",
      "diploma1Type": "Professional Baccalaureate",
      "diploma1Specialty": "in Digital Systems, IT and Networks",
      "diploma2Type": "Web Developer Certification",
      "diploma2Specialty": "Specialty in front-end",
      "projetcs": "My projects",
      "SkillsTitle": "My skills",
      "website": "Website",
      "websitetext": "Whether it's a web application or a showcase website, I can create it for you.",
      "seo-text": "Need to get noticed with great visibility? SEO is here to help.",
      "accessibility": "accessibility",
      "accessibility-text": "For a web accessible to everyone.",
      "ContactTitle": "Want to talk about an idea?",
      "argentbank-txt": "Development of a banking application using React and Redux. Management of user login and data modification.",
      "724event-txt": "Taught me to work on code that is not my own, to fix and modify it.",
      "kasa-txt": "Set up a web application with React, managing components and the user interface.",
    }
  },
  fr: {
    translation: {
      "Titre-dev": "Développeur front-end",
      "description": "Passioné d'informatique depuis le plus jeune âge, c'est en arrivant au lycée que j'ai pu découvrir le développement web qui m'a directement passionné, c'est pour ça qu'aujourd'hui je suis là pour réaliser votre site de rêve.",
      "Diplomas": "Mes Diplômes :",
      "diploma1Type": "Bac Pro",
      "diploma1Specialty": "Systèmes Numériques, Informatique et Réseaux",
      "diploma2Type": "Certification Développeur Web",
      "diploma2Specialty": "Spécialité en développement frond-end",
      "projetcs": "Mes projets",
      "SkillsTitle": "Mes compétences",
      "website": "Site Web",
      "websitetext": "Que ce soit une application web ou un site vitrine je peux vous le réaliser",
      "seo-text": "Besoin de vous faire connaître grâce à un bon référencement ? Le SEO est là pour vous.",
      "accessibility": "Accessibilité",
      "accessibility-text": "Pour un web accessible à tous et toutes.",
      "ContactTitle": "Envie de me parler d'une idée ?",
      "argentbank-txt": "Développement d’une application bancaire en utilisant React et Redux. Gestion de la connexion et des données utilisateur.",
      "724event-txt": "M’a appris à travailler sur du code qui n’est pas le mien, à le corriger et à le modifier.",
      "kasa-txt": "Mise en place d’une application web avec React, gestion des composants et de l’interface utilisateur.",
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