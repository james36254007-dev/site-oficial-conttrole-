import React from 'react';
import { motion } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://wa.me/5531995296719"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 lg:left-6 lg:right-auto bg-[#25d366] text-white pl-4 pr-5 py-3 rounded-full flex items-center gap-2.5 font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.4)] z-30 hover:brightness-110 transition-all duration-300 text-sm sm:text-base group"
      aria-label="Fale conosco no WhatsApp"
      style={{
        boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)"
      }}
    >
      <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
        <i className="fab fa-whatsapp text-lg"></i>
      </div>
      <span className="hidden sm:inline">Fale com o especialista</span>
      <span className="sm:hidden">WhatsApp</span>
    </motion.a>
  );
};