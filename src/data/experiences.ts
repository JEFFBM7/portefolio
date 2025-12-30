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
    id: "freelance-dev",
    title: "Développeur Freelance",
    company: "Indépendant",
    location: "Lubumbashi, RDC",
    startDate: "2023-01",
    endDate: null,
    description: "Développement d'applications web, mobile et desktop sur mesure pour différents clients.",
    responsibilities: [
      "Conception d'un site web pour COSTARITA Hôtel",
      "Conception d'une application mobile pour un restaurant",
      "Conception d'une application web de e-Commerce",
      "Conception d'une application desktop de gestion de stock",
    ],
    technologies: ["PHP", "Laravel", "HTML5", "CSS3", "JavaScript", "Java", "Kotlin"],
    type: "freelance",
  },
  {
    id: "personal-projects",
    title: "Développeur Personnel",
    company: "Projets Personnels",
    location: "Lubumbashi, RDC",
    startDate: "2022-01",
    endDate: null,
    description: "Développement de projets innovants et systèmes intelligents.",
    responsibilities: [
      "Développement de détection de texte généré par IA",
      "Développement d'une application de gestion d'un parc automobile",
      "Mise en place d'un système d'ouverture automatique à l'aide de carte RFID",
      "Exploration de technologies émergentes et solutions IoT",
    ],
    technologies: ["Python", "Django", "FastAPI", "C", "Arduino", "Machine Learning"],
    type: "freelance",
  },
  {
    id: "education",
    title: "Étudiant en Génie Logiciel",
    company: "Université Don Bosco",
    location: "Lubumbashi, RDC",
    startDate: "2021-09",
    endDate: "2025-06",
    description: "Formation en génie logiciel avec spécialisation en développement mobile, web et desktop.",
    responsibilities: [
      "Apprentissage des fondamentaux de l'ingénierie logicielle",
      "Développement de projets académiques et pratiques",
      "Maîtrise des architectures de données et systèmes",
      "Participation à des projets collaboratifs",
    ],
    technologies: ["Java", "C", "Python", "PHP", "Kotlin", "SQL", "Git"],
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
