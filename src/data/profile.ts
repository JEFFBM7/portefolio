export const profile = {
  name: "JEFF BOPE",
  title: "Développeur Full-Stack",
  tagline: "Je crée des expériences web modernes et performantes",
  email: "jeffhdbope@gmail.com",
  phone: "+243 97 54 81 773",
location: "LUBUMBASHI, RDC",
  avatar: "/images/profile.jpg",
  
  bio: `Développeur Full-Stack passionné avec plus de 5 ans d'expérience dans la création d'applications web et mobiles. 
  
Je me spécialise dans les technologies JavaScript/TypeScript modernes côté frontend (React, Next.js) et backend (Node.js, Express, NestJS). 

Mon approche combine une attention particulière à l'expérience utilisateur, des architectures scalables et des bonnes pratiques de développement (tests, CI/CD, clean code).`,

  socialLinks: {
    github: "https://github.com/alexmartin",
    linkedin: "https://linkedin.com/in/alexmartin",
    twitter: "https://twitter.com/alexmartin_dev",
  },

  resumeUrl: "/cv-alex-martin.pdf",

  stats: [
    { label: "Années d'expérience", value: "5+" },
    { label: "Projets réalisés", value: "50+" },
    { label: "Clients satisfaits", value: "30+" },
    { label: "Technologies maîtrisées", value: "20+" },
  ],

  services: [
    {
      title: "Développement Frontend",
      description: "Interfaces utilisateur modernes, responsives et accessibles avec React, Next.js et Tailwind CSS.",
      icon: "FaCode",
    },
    {
      title: "Développement Backend",
      description: "APIs robustes et scalables avec Node.js, Express, NestJS et bases de données SQL/NoSQL.",
      icon: "FaServer",
    },
    {
      title: "Architecture Cloud",
      description: "Déploiement et gestion d'infrastructures sur AWS, GCP ou Vercel avec CI/CD automatisé.",
      icon: "FaCloud",
    },
    {
      title: "Consulting Technique",
      description: "Audit de code, optimisation des performances et accompagnement sur les choix technologiques.",
      icon: "FaLightbulb",
    },
  ],
};

export type Profile = typeof profile;
