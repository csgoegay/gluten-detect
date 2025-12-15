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
        <div className="container mx-auto px-6 py-4">
          <motion.div 
            className="flex items-center justify-between text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div 
                className="size-6 text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </motion.div>
              <h2 className="text-xl font-bold tracking-tight">{brandName}</h2>
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
                      link.label === 'Comprar agora'
                        ? 'bg-accent-gold text-white px-4 py-2 rounded-md hover:bg-accent-gold/90 shadow-sm'
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
                      className={`block py-2 px-3 text-white rounded-lg transition-colors text-base font-medium text-center ${
                        link.label === 'Comprar Agora'
                          ? 'bg-accent-gold hover:bg-accent-gold/90 shadow-sm'
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