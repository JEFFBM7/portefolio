"use client";

import { motion, Variants } from "framer-motion";
import { useMenu } from "@/context/MenuContext";
import { ReactNode, useEffect } from "react";

const contentVariants: Variants = {
  closed: {
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    rotateZ: 0,
    borderRadius: "0px",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 35,
    },
  },
  open: {
    x: "65%",
    y: "5%",
    scale: 0.75,
    rotateY: -15,
    rotateZ: -3,
    borderRadius: "24px",
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 32,
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
      {/* Background gradient sombre (visible quand menu ouvert) */}
      <div 
        className={`fixed inset-0 transition-opacity duration-500 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ 
          zIndex: 5,
          background: "linear-gradient(135deg, #0d1b1b 0%, #0a1414 50%, #061010 100%)",
        }}
      />

      {/* Main content wrapper avec animation 3D */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={contentVariants}
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
        className="min-h-screen bg-[var(--background)] relative md:!transform-none"
        style={{
          transformOrigin: "center center",
          transformStyle: "preserve-3d",
          perspective: "1200px",
          zIndex: isMenuOpen ? 20 : 1,
          boxShadow: isMenuOpen 
            ? "-25px 25px 80px rgba(0,0,0,0.6), -10px 10px 30px rgba(0,0,0,0.4)" 
            : "none",
        }}
      >
        {/* Overlay pour cliquer et fermer le menu */}
        {isMenuOpen && (
          <div 
            className="absolute inset-0 z-50 md:hidden cursor-pointer" 
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        
        {/* Bordure décorative subtile quand ouvert */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.4, delay: isMenuOpen ? 0.1 : 0 }}
          className="absolute inset-0 rounded-[24px] pointer-events-none md:hidden overflow-hidden"
          style={{
            border: "2px solid rgba(201, 162, 39, 0.3)",
            zIndex: 100,
          }}
        >
          {/* Reflet en haut de la carte */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/4 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
            }}
          />
        </motion.div>
        
        {children}
      </motion.div>
    </>
  );
}
