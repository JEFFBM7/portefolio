"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useMenu } from "@/context/MenuContext";
import { ReactNode, useEffect } from "react";

interface MainWrapperProps {
  children: ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const controls = useAnimationControls();

  // Animation values - style Johannes Milke Flutter Drawer
  const xTranslate = 230; // pixels de décalage horizontal
  const scaleFactor = 0.88; // facteur de réduction
  const yTranslate = 30; // léger décalage vertical
  const rotationY = -12; // rotation 3D sur axe Y (effet perspective)

  useEffect(() => {
    if (isMenuOpen) {
      controls.start({
        x: xTranslate,
        y: yTranslate,
        scale: scaleFactor,
        rotateY: rotationY,
        borderRadius: "20px",
      });
      document.body.style.overflow = "hidden";
    } else {
      controls.start({
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        borderRadius: "0px",
      });
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, controls]);

  return (
    <>
      {/* Background du menu (couleur sombre derrière tout) */}
      <div 
        className={`fixed inset-0 transition-colors duration-500 md:hidden`}
        style={{ 
          zIndex: 0,
          backgroundColor: "#1a2e2e",
        }}
      />

      {/* Container principal avec perspective 3D */}
      <div 
        className="fixed inset-0 md:relative md:block"
        style={{ 
          perspective: "1000px",
          perspectiveOrigin: "left center",
          zIndex: 10,
        }}
      >
        {/* Main content wrapper avec animation 3D style Flutter */}
        <motion.div
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            borderRadius: "0px",
          }}
          animate={controls}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 40,
            mass: 1,
          }}
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
          className="min-h-screen h-full bg-[var(--background)] relative md:!transform-none overflow-auto"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            zIndex: isMenuOpen ? 20 : 1,
            boxShadow: isMenuOpen 
              ? "-10px 0 50px rgba(0, 0, 0, 0.5), -5px 0 20px rgba(0, 0, 0, 0.3)" 
              : "none",
          }}
        >
          {/* Overlay cliquable pour fermer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 md:hidden ${isMenuOpen ? "pointer-events-auto cursor-pointer" : "pointer-events-none"}`}
            style={{ zIndex: 50 }}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Bordure arrondie décorative */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-[20px] pointer-events-none md:hidden"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              zIndex: 100,
            }}
          />
          
          {children}
        </motion.div>
      </div>
    </>
  );
}
