"use client";

import { motion, Variants } from "framer-motion";
import { useMenu } from "@/context/MenuContext";
import { ReactNode, useEffect } from "react";

const contentVariants: Variants = {
  closed: {
    x: 0,
    scale: 1,
    borderRadius: "0px",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: "70%",
    scale: 0.85,
    borderRadius: "32px",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
    },
  },
};

interface MainWrapperProps {
  children: ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Background sombre fixe (visible quand menu ouvert) */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 5 }}
      />

      {/* Main content wrapper avec animation */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={contentVariants}
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
        className="min-h-screen bg-[var(--background)] relative md:!transform-none"
        style={{
          transformOrigin: "left center",
          zIndex: isMenuOpen ? 20 : 1,
          boxShadow: isMenuOpen ? "-20px 0 60px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Overlay pour cliquer et fermer le menu */}
        {isMenuOpen && (
          <div 
            className="absolute inset-0 z-50 md:hidden cursor-pointer" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        {/* Bordure décorative dorée/accent quand ouvert */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-[32px] pointer-events-none md:hidden"
          style={{
            border: "3px solid var(--accent)",
            zIndex: 100,
          }}
        />
        
        {children}
      </motion.div>
    </>
  );
}
