import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020b16] border-t border-primary/20 text-white py-8 mt-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 text-center text-sm"
      >
        <div className="flex justify-center gap-4 mb-4">
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
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>
        <p className="font-semibold text-white mb-2">(31) 99529-6719 &nbsp;|&nbsp; (31) 3157-7244</p>
        <p className="mb-2">
          Rua Pedro da Costa Correia, 22 – Sala 05 – Várzea Alegre, Ribeirão das
          Neves – MG, 33.805-570
        </p>
        <p className="opacity-80 text-xs mt-4">
          Copyright © 2025 – CONTABILIDADE CONTTROLE LTDA – Desenvolvido por
          Construsite Brasil – Criação de Sites
        </p>
      </motion.div>
    </footer>
  );
};