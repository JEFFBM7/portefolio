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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement Stripe et gestion des commandes.",
    longDescription: "Une application e-commerce moderne construite avec Next.js et Node.js. Elle inclut un système d'authentification, un panier persistant, l'intégration Stripe pour les paiements, un tableau de bord admin et une gestion complète des stocks.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    year: "2024",
    category: "fullstack",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Application de gestion de tâches avec collaboration en temps réel et notifications.",
    longDescription: "Une application de productivité permettant aux équipes de gérer leurs projets avec des fonctionnalités de drag-and-drop, collaboration en temps réel via WebSockets, système de notifications et intégration calendrier.",
    image: "/images/projects/taskapp.jpg",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Redis", "Docker"],
    githubUrl: "https://github.com/username/taskapp",
    liveUrl: "https://taskapp-demo.vercel.app",
    year: "2024",
    category: "fullstack",
  },
  {
    id: "api-gateway",
    title: "API Gateway Microservices",
    description: "Architecture microservices avec API Gateway, authentification JWT et rate limiting.",
    longDescription: "Une infrastructure backend scalable utilisant une architecture microservices. Inclut un API Gateway centralisé, authentification JWT, rate limiting, logging distribué et monitoring avec Prometheus/Grafana.",
    image: "/images/projects/api.jpg",
    technologies: ["Node.js", "Express", "RabbitMQ", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/username/api-gateway",
    year: "2023",
    category: "backend",
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec visualisations de données en temps réel.",
    longDescription: "Un dashboard moderne pour visualiser des métriques business avec des graphiques interactifs, filtres dynamiques, export PDF/Excel et actualisation en temps réel des données.",
    image: "/images/projects/dashboard.jpg",
    technologies: ["React", "TypeScript", "D3.js", "Recharts", "TanStack Query", "Tailwind"],
    githubUrl: "https://github.com/username/dashboard",
    liveUrl: "https://dashboard-demo.vercel.app",
    year: "2023",
    category: "frontend",
  },
  {
    id: "mobile-fitness",
    title: "Fitness Tracker Mobile",
    description: "Application mobile de suivi fitness avec plans d'entraînement personnalisés.",
    longDescription: "Application React Native pour le suivi des entraînements, avec création de programmes personnalisés, tracking GPS des courses, intégration HealthKit/Google Fit et statistiques détaillées.",
    image: "/images/projects/fitness.jpg",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/fitness-app",
    year: "2023",
    category: "mobile",
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Bot",
    description: "Chatbot intelligent utilisant GPT pour le support client automatisé.",
    longDescription: "Un chatbot alimenté par l'IA qui gère les demandes client, avec apprentissage contextuel, escalade intelligente vers agents humains, analytics des conversations et intégration multi-canal.",
    image: "/images/projects/chatbot.jpg",
    technologies: ["Python", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "React"],
    githubUrl: "https://github.com/username/ai-chatbot",
    liveUrl: "https://chatbot-demo.vercel.app",
    year: "2024",
    category: "fullstack",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: Project["category"]): Project[] => {
  return projects.filter((project) => project.category === category);
};
