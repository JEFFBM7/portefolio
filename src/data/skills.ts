export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "devops" | "tools" | "database";
  level: number; // 1-5
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "SiReact", category: "frontend", level: 5 },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend", level: 5 },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend", level: 5 },
  { name: "JavaScript", icon: "SiJavascript", category: "frontend", level: 5 },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "frontend", level: 5 },
  { name: "Vue.js", icon: "SiVuedotjs", category: "frontend", level: 4 },
  { name: "HTML5", icon: "SiHtml5", category: "frontend", level: 5 },
  { name: "CSS3", icon: "SiCss3", category: "frontend", level: 5 },
  
  // Backend
  { name: "Node.js", icon: "SiNodedotjs", category: "backend", level: 5 },
  { name: "Express", icon: "SiExpress", category: "backend", level: 5 },
  { name: "Python", icon: "SiPython", category: "backend", level: 4 },
  { name: "FastAPI", icon: "SiFastapi", category: "backend", level: 4 },
  { name: "NestJS", icon: "SiNestjs", category: "backend", level: 4 },
  { name: "GraphQL", icon: "SiGraphql", category: "backend", level: 4 },
  
  // Database
  { name: "PostgreSQL", icon: "SiPostgresql", category: "database", level: 5 },
  { name: "MongoDB", icon: "SiMongodb", category: "database", level: 5 },
  { name: "Redis", icon: "SiRedis", category: "database", level: 4 },
  { name: "MySQL", icon: "SiMysql", category: "database", level: 4 },
  { name: "Prisma", icon: "SiPrisma", category: "database", level: 5 },
  
  // DevOps
  { name: "Docker", icon: "SiDocker", category: "devops", level: 5 },
  { name: "Kubernetes", icon: "SiKubernetes", category: "devops", level: 3 },
  { name: "AWS", icon: "FaAws", category: "devops", level: 4 },
  { name: "GitHub Actions", icon: "SiGithubactions", category: "devops", level: 5 },
  { name: "Vercel", icon: "SiVercel", category: "devops", level: 5 },
  { name: "Linux", icon: "SiLinux", category: "devops", level: 4 },
  
  // Tools
  { name: "Git", icon: "SiGit", category: "tools", level: 5 },
  { name: "VS Code", icon: "VscCode", category: "tools", level: 5 },
  { name: "Figma", icon: "SiFigma", category: "tools", level: 4 },
  { name: "Postman", icon: "SiPostman", category: "tools", level: 5 },
  { name: "Jest", icon: "SiJest", category: "tools", level: 4 },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", color: "#61DAFB" },
  { id: "backend", label: "Backend", color: "#68A063" },
  { id: "database", label: "Base de données", color: "#336791" },
  { id: "devops", label: "DevOps & Cloud", color: "#2496ED" },
  { id: "tools", label: "Outils", color: "#F05032" },
];

export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};
