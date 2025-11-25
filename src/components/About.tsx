"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaServer, FaCloud, FaLightbulb } from "react-icons/fa";
import { profile } from "@/data/profile";

const iconMap: { [key: string]: React.ElementType } = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaCloud: FaCloud,
  FaLightbulb: FaLightbulb,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-[var(--background)] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--foreground)]">
              {profile.title} passionné
            </h3>
            
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              {profile.bio.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services/What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {profile.services.map((service, index) => {
              const Icon = iconMap[service.icon] || FaCode;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-6 bg-[var(--card-bg)] rounded-xl border border-white/5 hover:border-[var(--accent)]/30 transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
