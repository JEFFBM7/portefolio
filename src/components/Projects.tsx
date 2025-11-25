"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";

const categories = [
  { id: "all", label: "Tous" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[var(--background)] relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[var(--accent)]/20 rounded-full" />
      <div className="absolute bottom-40 left-10 w-48 h-48 border-2 border-[var(--primary)]/30 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6" />
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Une sélection de projets sur lesquels j&apos;ai travaillé, du développement frontend au backend en passant par les applications mobiles.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? "bg-[var(--accent)] text-[var(--background)]"
                  : "bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--primary)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[var(--card-bg)] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--accent)]/30 transition-all"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-[var(--primary)]">
        <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary-light)]/40 flex items-center justify-center">
          <span className="text-6xl font-bold text-[var(--accent)]/20">
            {project.title.charAt(0)}
          </span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[var(--background)]/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--background)] hover:scale-110 transition-transform"
              aria-label="Voir sur GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] hover:scale-110 transition-transform"
              aria-label="Voir le site"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--accent)] text-[var(--background)] text-xs font-semibold rounded-full">
          {project.year}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-[var(--primary)]/50 text-[var(--accent)] rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-[var(--primary)]/50 text-[var(--text-muted)] rounded">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
