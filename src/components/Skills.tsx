"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiVuedotjs, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiPython,
  SiFastapi, SiNestjs, SiGraphql, SiPostgresql, SiMongodb, SiRedis,
  SiMysql, SiPrisma, SiDocker, SiKubernetes,
  SiGithubactions, SiVercel, SiLinux, SiGit,
  SiFigma, SiPostman, SiJest
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { skills, skillCategories, type Skill } from "@/data/skills";

const iconMap: { [key: string]: React.ElementType } = {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiVuedotjs, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiPython,
  SiFastapi, SiNestjs, SiGraphql, SiPostgresql, SiMongodb, SiRedis,
  SiMysql, SiPrisma, SiDocker, SiKubernetes, FaAws,
  SiGithubactions, SiVercel, SiLinux, SiGit, VscCode,
  SiFigma, SiPostman, SiJest
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[var(--primary)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 diagonal-lines opacity-5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 border-2 border-[var(--accent)]/20 rounded-full" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 border-2 border-[var(--accent)]/20 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Les technologies et outils que j&apos;utilise pour créer des applications modernes et performantes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-[var(--accent)] text-[var(--background)]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Toutes
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-[var(--accent)] text-[var(--background)]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: Skill;
  index: number;
  isInView: boolean;
}) {
  const Icon = iconMap[skill.icon];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-4 bg-[var(--background)]/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[var(--accent)]/50 transition-all group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center mb-3 text-[var(--accent)] group-hover:scale-110 transition-transform">
          {Icon && <Icon size={36} />}
        </div>
        <h3 className="text-sm font-medium text-white mb-2">{skill.name}</h3>
        
        {/* Skill level indicator */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < skill.level
                  ? "bg-[var(--accent)]"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
