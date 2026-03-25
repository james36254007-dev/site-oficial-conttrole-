import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white drop-shadow-md flex items-center justify-center shadow-[0_0_20px_rgba(39,175,232,0.4)] hover:shadow-[0_0_30px_rgba(39,175,232,0.6)] hover:scale-110 transition-all focus:outline-none"
          aria-label="Voltar ao topo"
        >
          <i className="fa-solid fa-arrow-up text-lg"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
