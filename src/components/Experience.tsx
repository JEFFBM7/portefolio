"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { experiences, formatDate, type Experience } from "@/data/experiences";

const typeLabels = {
  fulltime: "CDI",
  freelance: "Freelance",
  internship: "Stage",
};

const typeColors = {
  fulltime: "bg-green-500/20 text-green-400",
  freelance: "bg-blue-500/20 text-blue-400",
  internship: "bg-purple-500/20 text-purple-400",
};

export default function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--primary)]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="gradient-text">Expérience</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6" />
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Mon parcours professionnel et les entreprises avec lesquelles j&apos;ai eu le plaisir de collaborer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--accent)]/30 transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isInView={isInView}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isInView,
  isEven,
}: {
  experience: Experience;
  index: number;
  isInView: boolean;
  isEven: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[var(--accent)] rounded-full transform md:-translate-x-1/2 border-4 border-[var(--card-bg)] z-10" />

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
        <div className="p-6 bg-[var(--background)] rounded-xl border border-white/5 hover:border-[var(--accent)]/30 transition-all">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                {experience.title}
              </h3>
              <p className="text-[var(--accent)] font-medium">{experience.company}</p>
            </div>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${typeColors[experience.type]}`}>
              {typeLabels[experience.type]}
            </span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt size={12} />
              {experience.location}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt size={12} />
              {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : "Présent"}
            </span>
          </div>

          {/* Description */}
          <p className="text-[var(--text-muted)] mb-4">{experience.description}</p>

          {/* Responsibilities */}
          <ul className="space-y-2 mb-4">
            {experience.responsibilities.slice(0, 3).map((resp, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <span className="text-[var(--accent)] mt-1">▹</span>
                {resp}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-[var(--primary)]/50 text-[var(--accent)] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty space for timeline alignment */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}
