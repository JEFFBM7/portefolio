"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#hero" className="inline-block">
              <span className="text-2xl font-bold text-white">
                <span className="text-[var(--accent)]">{"<"}</span>
                JB
                <span className="text-[var(--accent)]">{"/>"}</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm max-w-xs">
              Développeur Full-Stack passionné par la création d&apos;expériences web innovantes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#projects", label: "Projets" },
                { href: "#experience", label: "Expérience" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--accent)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">{profile.email}</p>
            <p className="text-gray-300 text-sm mb-4">{profile.location}</p>
            
            <div className="flex space-x-4">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--accent)] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--accent)] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} {profile.name}
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--accent-light)] transition-colors"
            aria-label="Retour en haut"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
