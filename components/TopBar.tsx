import React from 'react';
import { motion } from 'motion/react';

export const TopBar: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#636363] text-white text-sm py-3 lg:py-2"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 max-w-[1200px]">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <a href="tel:31995296719" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <i className="fa-solid fa-phone text-secondary"></i>
            <strong>(31) 99529-6719</strong>
          </a>
          <span className="hidden sm:inline text-white/40">|</span>
          <a href="tel:3131577244" className="hover:text-secondary transition-colors">
            (31) 3157-7244
          </a>
          
          <span className="hidden lg:flex items-center gap-2 ml-4 border-l border-white/20 pl-6">
            <i className="fa-regular fa-envelope text-secondary"></i>
            comercial@contabilidadeconttrole.com.br
          </span>
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: 'fa-instagram', label: 'Instagram', href: '#' },
            { icon: 'fa-youtube', label: 'YouTube', href: '#' },
            { icon: 'fa-tiktok', label: 'TikTok', href: '#' },
            { icon: 'fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/5531995296719' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/35 transition-all duration-300 hover:bg-secondary hover:text-[#041018] hover:border-secondary hover:scale-110 active:scale-95"
            >
              <i className={`fab ${social.icon} text-sm`}></i>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};