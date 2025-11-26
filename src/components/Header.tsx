"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaEnvelope, FaDownload } from "react-icons/fa";
import { useMenu } from "@/context/MenuContext";

const navLinks = [
  { href: "#hero", label: "Accueil", icon: FaHome },
  { href: "#about", label: "À propos", icon: FaUser },
  { href: "#skills", label: "Compétences", icon: FaCode },
  { href: "#projects", label: "Projets", icon: FaProjectDiagram },
  { href: "#experience", label: "Expérience", icon: FaBriefcase },
  { href: "#contact", label: "Contact", icon: FaEnvelope },
];

// Animation variants pour le drawer
const drawerVariants: Variants = {
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMenuOpen, setIsMenuOpen, toggleMenu } = useMenu();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Menu Drawer - Position fixe en arrière plan */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed top-0 left-0 bottom-0 w-[70%] max-w-[280px] bg-[#0a0a0a] z-10 md:hidden"
          >
            <div className="flex flex-col h-full p-6 pt-8">
              {/* Profil */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/30">
                  <span className="text-xl font-bold text-[var(--background)]">JB</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">JEFF BOPE</h3>
                  <p className="text-sm text-gray-400">Développeur Full-Stack</p>
                </div>
              </motion.div>

              {/* Bouton fermer */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>

              {/* Navigation Links */}
              <nav className="flex-1 mt-4">
                <ul className="space-y-1">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.li
                        key={link.href}
                        initial="closed"
                        animate="open"
                        variants={itemVariants}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all group"
                        >
                          <Icon className="text-lg text-gray-500 group-hover:text-[var(--accent)] transition-colors" />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom section - CV Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-white/10"
              >
                <Link
                  href="/cv-alex-martin.pdf"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                >
                  <FaDownload className="text-lg" />
                  <span className="font-medium">Télécharger CV</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header principal */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled && !isMenuOpen
            ? "bg-[var(--background)]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#hero" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-[var(--accent)]">{"<"}</span>
                JB
                <span className="text-[var(--accent)]">{"/>"}</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/cv-alex-martin.pdf"
                target="_blank"
                className="ml-4 px-5 py-2 bg-[var(--accent)] text-[var(--background)] font-medium rounded-full hover:bg-[var(--accent-light)] transition-colors"
              >
                CV
              </Link>
            </div>

            {/* Mobile Menu Button - Hamburger animé */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-[var(--foreground)] origin-center block"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-[var(--foreground)] block"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-[var(--foreground)] origin-center block"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
