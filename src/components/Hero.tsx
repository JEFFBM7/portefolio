"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowDown } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--primary)]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle decorations */}
        <div className="circle-decoration w-96 h-96 -top-20 -right-20" />
        <div className="circle-decoration w-64 h-64 bottom-20 -left-10" />
        <div className="circle-decoration w-48 h-48 top-1/3 right-1/4" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--primary-light)] opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--accent)] font-medium mb-4"
            >
              Bonjour, je suis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              {profile.name.split(" ")[0]}
              <br />
              <span className="gradient-text">{profile.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              {profile.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-md mb-8 mx-auto lg:mx-0"
            >
              {profile.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-full hover:bg-[var(--accent-light)] transition-all hover:scale-105"
              >
                Voir mes projets
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-semibold rounded-full hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all flex items-center justify-center gap-2"
              >
                <FaDownload size={16} />
                Télécharger CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 border-2 border-[var(--accent)] rounded-full animate-pulse-ring" />
              
              {/* Image container */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--accent)] relative z-10 bg-[var(--card-bg)]">
                <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary-light)]/40 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-bold text-[var(--accent)]/30">
                    AM
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-[var(--accent)] text-[var(--background)] px-4 py-2 rounded-full font-semibold shadow-lg"
              >
                5+ ans d&apos;exp.
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
