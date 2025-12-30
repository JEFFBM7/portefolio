export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  category: "frontend" | "backend" | "fullstack" | "mobile";
}

export const projects: Project[] = [
  {
    id: "portefolio",
    title: "Portfolio Personnel",
    description: "Portfolio moderne et responsive construit avec Next.js et TypeScript.",
    longDescription: "Un portfolio personnel moderne présentant mes projets, compétences et expériences. Construit avec Next.js 15, TypeScript et Tailwind CSS avec des animations fluides et un design épuré.",
    image: "/images/projects/portefolio.jpg",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/JEFFBM7/portefolio",
    year: "2024",
    category: "frontend",
  },
  {
    id: "formatlaravel",
    title: "Format Laravel",
    description: "Application web développée avec le framework Laravel et PHP.",
    longDescription: "Projet Laravel démontrant l'utilisation du framework PHP pour créer des applications web robustes et scalables avec une architecture MVC propre.",
    image: "/images/projects/formatlaravel.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/JEFFBM7/Formatlaravel",
    year: "2024",
    category: "fullstack",
  },
  {
    id: "jakarta",
    title: "Jakarta",
    description: "Application web développée avec HTML et technologies frontend.",
    longDescription: "Projet frontend mettant en avant les compétences en HTML, CSS et JavaScript pour créer des interfaces utilisateur modernes et interactives.",
    image: "/images/projects/jakarta.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/JEFFBM7/Jakarta",
    year: "2024",
    category: "frontend",
  },
  {
    id: "hotels",
    title: "Gestion d'Hôtel",
    description: "Système de gestion hôtelière avec réservations et administration.",
    longDescription: "Application complète de gestion d'hôtel permettant la gestion des réservations, des chambres et des clients avec une interface moderne développée avec SCSS.",
    image: "/images/projects/hotels.jpg",
    technologies: ["PHP", "MySQL", "SCSS", "JavaScript"],
    githubUrl: "https://github.com/JEFFBM7/Hotels",
    year: "2024",
    category: "fullstack",
  },
  {
    id: "app-gestion-produit",
    title: "Application de Gestion de Produits",
    description: "Application Java pour la gestion de produits et d'inventaire.",
    longDescription: "Application desktop développée en Java pour gérer un catalogue de produits avec fonctionnalités CRUD complètes et gestion d'inventaire.",
    image: "/images/projects/app-produit.jpg",
    technologies: ["Java", "MySQL", "JavaFX"],
    githubUrl: "https://github.com/JEFFBM7/App_gestion_Produit",
    year: "2024",
    category: "backend",
  },
  {
    id: "mini-sgbr",
    title: "Mini SGBD",
    description: "Système de gestion de base de données minimal développé en C.",
    longDescription: "Implémentation d'un système de gestion de base de données minimal en langage C, démontrant la compréhension des structures de données et de la gestion de fichiers.",
    image: "/images/projects/mini-sgbr.jpg",
    technologies: ["C", "Structures de données"],
    githubUrl: "https://github.com/JEFFBM7/Mini_SGBR",
    year: "2024",
    category: "backend",
  },
  {
    id: "inventory-app",
    title: "Application d'Inventaire",
    description: "Application mobile Android pour la gestion d'inventaire développée en Kotlin.",
    longDescription: "Application mobile native Android permettant la gestion d'inventaire avec interface moderne suivant les guidelines Material Design.",
    image: "/images/projects/inventory.jpg",
    technologies: ["Kotlin", "Android", "Room Database"],
    githubUrl: "https://github.com/JEFFBM7/Iventory",
    year: "2024",
    category: "mobile",
  },
  {
    id: "foodapp",
    title: "Food App",
    description: "Application mobile de livraison de nourriture développée en Java.",
    longDescription: "Application Android pour la commande et livraison de nourriture avec interface utilisateur intuitive et gestion des commandes en temps réel.",
    image: "/images/projects/foodapp.jpg",
    technologies: ["Java", "Android", "Firebase"],
    githubUrl: "https://github.com/jeffbm77/FoodApp",
    year: "2024",
    category: "mobile",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: Project["category"]): Project[] => {
  return projects.filter((project) => project.category === category);
};
