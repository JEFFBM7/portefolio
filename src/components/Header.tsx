"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
      {/* Menu Drawer - TOUJOURS visible et fixe en arrière plan (style Flutter) */}
      <div 
        className="fixed top-0 left-0 bottom-0 w-[230px] md:hidden"
        style={{ 
          zIndex: 5,
          backgroundColor: "#1a2e2e",
        }}
      >
        <div className="flex flex-col h-full p-5 pt-16">
          {/* Profil */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0.3, 
              x: isMenuOpen ? 0 : -20,
            }}
            transition={{ delay: isMenuOpen ? 0.15 : 0, duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/20">
              <span className="text-lg font-bold text-[var(--background)]">JB</span>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">JEFF BOPE</h3>
              <p className="text-xs text-gray-400">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: isMenuOpen ? 1 : 0, 
                      x: isMenuOpen ? 0 : -30,
                    }}
                    transition={{ 
                      delay: isMenuOpen ? 0.1 + index * 0.05 : 0,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
                    >
                      <Icon className="text-base text-gray-500 group-hover:text-[var(--accent)] transition-colors" />
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom section - CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              y: isMenuOpen ? 0 : 20,
            }}
            transition={{ delay: isMenuOpen ? 0.4 : 0, duration: 0.3 }}
            className="pt-4 border-t border-white/10"
          >
            <Link
              href="/cv-jeff-bope.pdf"
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all text-sm"
            >
              <FaDownload className="text-base" />
              <span className="font-medium">Télécharger CV</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Header principal - se déplace avec le contenu */}
      <header
        className={`sticky top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled && !isMenuOpen
            ? "bg-[var(--background)]/90 backdrop-blur-md shadow-lg"
            : "bg-[var(--background)]"
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
                href="/cv-jeff-bope.pdf"
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
