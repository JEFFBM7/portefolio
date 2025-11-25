export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null = présent
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: "fulltime" | "freelance" | "internship";
}

export const experiences: Experience[] = [
  {
    id: "senior-fullstack",
    title: "Développeur Full-Stack Senior",
    company: "Tech Innovation Labs",
    location: "Paris, France",
    startDate: "2023-03",
    endDate: null,
    description: "Lead technique sur des projets d'applications web et mobiles pour des clients grands comptes.",
    responsibilities: [
      "Architecture et développement de solutions full-stack scalables",
      "Mentorat de développeurs juniors et revue de code",
      "Mise en place de pipelines CI/CD et bonnes pratiques DevOps",
      "Collaboration avec les équipes produit et design",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    type: "fulltime",
  },
  {
    id: "freelance-dev",
    title: "Développeur Full-Stack Freelance",
    company: "Indépendant",
    location: "Remote",
    startDate: "2021-06",
    endDate: "2023-02",
    description: "Développement d'applications sur mesure pour startups et PME.",
    responsibilities: [
      "Conception et développement d'applications web complètes",
      "Intégration d'APIs tierces (paiement, CRM, analytics)",
      "Optimisation des performances et SEO technique",
      "Support et maintenance des applications déployées",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe", "Vercel"],
    type: "freelance",
  },
  {
    id: "fullstack-dev",
    title: "Développeur Full-Stack",
    company: "Digital Agency Pro",
    location: "Lyon, France",
    startDate: "2019-09",
    endDate: "2021-05",
    description: "Développement d'applications web pour des clients variés dans les secteurs retail et B2B.",
    responsibilities: [
      "Développement frontend avec React et Vue.js",
      "Création d'APIs RESTful avec Node.js",
      "Gestion de bases de données relationnelles et NoSQL",
      "Tests unitaires et d'intégration",
    ],
    technologies: ["React", "Vue.js", "Node.js", "MySQL", "MongoDB"],
    type: "fulltime",
  },
  {
    id: "internship",
    title: "Développeur Web Stagiaire",
    company: "StartupXYZ",
    location: "Bordeaux, France",
    startDate: "2019-02",
    endDate: "2019-08",
    description: "Stage de fin d'études avec focus sur le développement frontend et l'UX.",
    responsibilities: [
      "Développement de composants UI réutilisables",
      "Intégration de maquettes Figma",
      "Participation aux sprints agiles",
      "Documentation technique",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Git"],
    type: "internship",
  },
];

export const formatDate = (date: string): string => {
  const [year, month] = date.split("-");
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
};

export const getExperiencesByType = (type: Experience["type"]): Experience[] => {
  return experiences.filter((exp) => exp.type === type);
};
