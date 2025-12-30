export const profile = {
  name: "JEFF BOPE",
  title: "Ingénieur Logiciel",
  tagline: "Développeur passionné par l'innovation et la résolution de problèmes complexes",
  email: "jeffhdbope@gmail.com",
  phone: "+243 97 54 81 773",
  location: "Lubumbashi, RDC",
  avatar: "/images/profile.jpg",
  
  bio: `Développeur de logiciels passionné par l'innovation et la résolution de problèmes complexes. 
  
Avec une expertise en développement mobile, développement web et une forte compréhension des architectures de données et des systèmes, je m'efforce de créer des solutions performantes et évolutives. 

Mon parcours m'a permis de maîtriser plusieurs langages de programmation et technologies, me permettant de concevoir des applications complètes allant du web au mobile en passant par le desktop.`,

  socialLinks: {
    github: "https://github.com/JEFFBM7",
    linkedin: "https://linkedin.com/in/jeff-bope",
    twitter: "",
  },

  resumeUrl: "/cv-jeff-bope.pdf",

  stats: [
    { label: "Années d'études", value: "4+" },
    { label: "Projets réalisés", value: "15+" },
    { label: "Clients satisfaits", value: "5+" },
    { label: "Technologies maîtrisées", value: "15+" },
  ],

  services: [
    {
      title: "Développement Web",
      description: "Applications web modernes et responsives avec PHP, Laravel, Vue.js, HTML5 et CSS3.",
      icon: "FaCode",
    },
    {
      title: "Développement Mobile",
      description: "Applications mobiles natives Android avec Java et Kotlin pour une expérience utilisateur optimale.",
      icon: "FaMobile",
    },
    {
      title: "Développement Desktop",
      description: "Applications desktop robustes et performantes avec Java pour la gestion d'entreprise.",
      icon: "FaDesktop",
    },
    {
      title: "Solutions IoT & IA",
      description: "Systèmes intelligents avec Arduino, détection de texte IA et solutions innovantes avec Python.",
      icon: "FaLightbulb",
    },
  ],
};

export type Profile = typeof profile;
