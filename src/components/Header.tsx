"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--accent)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--card-bg)] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cv-alex-martin.pdf"
                target="_blank"
                className="block px-4 py-3 mt-4 text-center bg-[var(--accent)] text-[var(--background)] font-medium rounded-lg"
              >
                Télécharger CV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
