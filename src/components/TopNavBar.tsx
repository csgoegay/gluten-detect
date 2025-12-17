"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface TopNavBarProps {
  brandName?: string;
  navLinks?: NavLink[];
}

const TopNavBar = ({ 
  brandName = "GlutenDetect", 
  navLinks = [] 
}: TopNavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 font-display transition-all duration-300 bg-section-dark-blue"
        style={{
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
      >
        <div className="container mx-auto px-6 py-3">
          <motion.div 
            className="flex items-center justify-between text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                className="h-11 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <img
                  src="/img/glutendetect.png"
                  alt="GlutenDetect"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      link.label === 'Comprar agora' || link.label === 'Comprar Agora'
                        ? 'bg-accent-gold text-white px-5 py-2.5 rounded-md hover:bg-accent-gold/90 shadow-lg hover:shadow-xl transform hover:scale-105 border border-accent-gold/50 font-semibold'
                        : 'hover:text-white/80'
                    }`}
                  >
                    {link.label}
                    {link.label !== 'Comprar Agora' && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden mobile-menu-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <motion.div
          className="absolute top-0 right-0 h-full w-64 bg-section-dark-blue shadow-xl"
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="p-6">
              <div className="flex flex-col space-y-4 w-full max-w-xs mx-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : 20
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2.5 px-4 text-white rounded-lg transition-colors text-base font-medium text-center ${
                        link.label === 'Comprar Agora' || link.label === 'Comprar agora'
                          ? 'bg-accent-gold hover:bg-accent-gold/90 shadow-lg hover:shadow-xl transform hover:scale-105 border border-accent-gold/50 font-semibold'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TopNavBar;