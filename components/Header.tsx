import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fecha o menu ao redimensionar para desktop para evitar falhas na UI
  useEffect(() => {
    const handleResize = () => {
      // 768px é o breakpoint 'md' do Tailwind (Tablet/Desktop)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Previne rolagem do corpo quando o menu móvel está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleSubmenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Previne disparo do clique pai
    setExpandedSubmenu(expandedSubmenu === label ? null : label);
  };

  // Handler customizado para links âncora
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Fecha menu mobile
      setIsMenuOpen(false);

      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        // Offset para o cabeçalho fixo
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    {
      label: 'Serviços',
      href: '#servicos',
      submenu: [
        { label: 'Contabilidade para empresas', href: '#contabilidade-empresas' },
        { label: 'Contabilidade para MEI', href: '#contabilidade-mei' },
        { label: 'Contabilidade para negócios digitais', href: '#contabilidade-digitais' },
        { label: 'Contabilidade para pessoa física', href: '#contabilidade-pf' },
        { label: 'Contabilidade para o terceiro setor', href: '#contabilidade-terceiro-setor' },
        { label: 'Registro de marcas e patentes', href: '#registro-marcas' },
        { label: 'BPO Financeiro', href: '#bpo-financeiro' },
      ],
    },
    {
      label: 'Empresa',
      href: '#empresa',
      submenu: [
        { label: 'Nossa história', href: '#historia' },
        { label: 'Missão, visão e valores', href: '#missao-visao-valores' },
      ],
    },
    {
      label: 'Área do Cliente',
      href: '#area-cliente',
      submenu: [
        { label: 'Acesso ao sistema', href: 'https://vip.acessorias.com/contabilidadeconttrole' },
        { label: 'Conta PJ gratuita - Banco Cora', href: 'https://lp.cora.com.br/coraliados/?code=contabilidadeconttrole&n=CONTABILIDADE%20CONTTROLE' },
      ],
    },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <style>{`
        @keyframes glowingImage {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(39,175,232,0.2)); }
          50% { filter: drop-shadow(0 0 15px rgba(39,175,232,0.5)); }
        }
      `}</style>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#0a2540]/90 via-[#020b17]/95 to-[#0a2540]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="container mx-auto px-4 lg:px-6 py-4 flex items-center justify-between max-w-[1200px]">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex flex-col items-center z-[60] relative group mr-4" 
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            <div className="font-display font-bold tracking-wide select-none text-white drop-shadow-md flex justify-center">
              <img 
                src="/a.png" 
                alt="Conttrole" 
                className="h-[2.5em] lg:h-[3.5em] w-auto inline-block align-middle" 
                style={{ animation: 'glowingImage 3s ease-in-out infinite' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-[0.65rem] lg:text-xs text-muted/80 uppercase tracking-[0.12em] mt-1 select-none font-medium group-hover:text-white transition-colors text-center">
              Contabilidade digital
            </div>
          </a>

          {/* 
            BOTÃO MENU MOBILE (Sanduíche)
            Classe: md:hidden -> Esconde em telas >= 768px (Computadores/Tablets)
            Visível apenas em telas < 768px (Celulares)
          */}
          <button
            className="md:hidden relative z-[60] bg-white/5 border border-white/10 rounded-lg text-white w-10 h-10 flex items-center justify-center text-lg hover:bg-white/10 hover:border-primary/50 transition-all focus:outline-none active:scale-95 shadow-lg backdrop-blur-md"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

          {/* 
            NAVEGAÇÃO DESKTOP (Menu completo)
            Classe: hidden md:flex -> Escondido no mobile, Flex visível no Desktop >= 768px
            Ajustes de gap e texto para garantir que caiba em 768px+
          */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-6">
            <ul className="flex items-center gap-2 lg:gap-6 text-[0.7rem] lg:text-[0.95rem] uppercase tracking-wide">
              {navItems.map((item, index) => (
              <li key={index} className="relative group">
                  <a
                      href={item.href}
                      className="block text-white/80 hover:text-white hover:text-shadow-glow transition-all py-6 px-1 lg:px-0 whitespace-nowrap"
                      onClick={(e) => handleLinkClick(e, item.href)}
                  >
                      {item.label}
                      {item.submenu && (
                          <i className="fa-solid fa-chevron-down text-[0.6rem] lg:text-[0.7rem] ml-1.5 pt-0.5 opacity-70 group-hover:text-primary inline-block transition-colors"></i>
                      )}
                  </a>
                  
                  {/* Dropdown Desktop */}
                  {item.submenu && (
                  <ul className="hidden group-hover:block absolute top-[85%] left-0 bg-[#0a1e36]/95 backdrop-blur-xl min-w-[240px] py-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-xl border border-white/10 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-white/5">
                      {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                          <a
                          href={sub.href}
                          className="block px-5 py-2.5 text-sm text-muted/80 hover:bg-white/5 hover:text-white hover:pl-6 transition-all normal-case tracking-normal"
                          onClick={(e) => handleLinkClick(e, sub.href)}
                          >
                          {sub.label}
                          </a>
                      </li>
                      ))}
                  </ul>
                  )}
              </li>
              ))}
            </ul>
            <div className="hidden lg:flex items-center gap-4 ml-2 border-l border-white/10 pl-4">
              <a href="https://www.instagram.com/contabilidadeconttrole/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all"><i className="fab fa-instagram text-lg"></i></a>
              <a href="https://www.youtube.com/@conttrolecontabilidade2914" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all"><i className="fab fa-youtube text-lg"></i></a>
              <a href="https://www.tiktok.com/@conttrole_contabilidade" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all"><i className="fab fa-tiktok text-lg"></i></a>
            </div>
            <a
              href="#area-cliente"
              className="ml-2 bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white drop-shadow-md px-3 py-2 lg:px-6 lg:py-2.5 rounded-full font-semibold normal-case tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(39,175,232,0.3)] hover:shadow-[0_0_25px_rgba(39,175,232,0.5)] transform hover:-translate-y-0.5 text-xs lg:text-base whitespace-nowrap"
              onClick={(e) => handleLinkClick(e, '#area-cliente')}
            >
              Área do Cliente
            </a>
          </nav>
        </div>
      </motion.header>

      {/* 
        OVERLAY MENU MOBILE
        Classe: md:hidden -> Garante que desapareça em Desktop/Tablet >= 768px
      */}
      <div 
          className={`
              fixed inset-0 bg-gradient-to-b from-[#081b33] via-[#040e1a] to-[#02050a] z-40 pt-24 px-6 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
      >
        <ul className="flex flex-col gap-0 text-[0.95rem] uppercase tracking-wide w-full pb-10">
          {navItems.map((item, index) => (
          <li key={index} className="relative group border-b border-white/5 last:border-none">
            <div className="flex items-center justify-between w-full">
              <a
                href={item.href}
                className="block py-4 text-white/80 hover:text-white transition-colors flex-grow"
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>

              {/* Botão Expandir Mobile */}
              {item.submenu && (
                <button
                onClick={(e) => toggleSubmenu(item.label, e)}
                className="w-12 h-12 flex items-center justify-end text-muted hover:text-white focus:outline-none"
                aria-label="Expandir submenu"
                >
                <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${expandedSubmenu === item.label ? 'rotate-180' : ''}`}></i>
                </button>
              )}
            </div>

            {/* Submenu Mobile (Accordion) */}
            {item.submenu && (
            <div 
                className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${expandedSubmenu === item.label ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}
                `}
            >
                <ul className="bg-black/20 rounded-lg overflow-hidden border border-white/5">
                {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="border-b border-white/5 last:border-none">
                    <a
                        href={sub.href}
                        className="block px-5 py-3 text-sm text-muted hover:text-secondary hover:bg-white/5 normal-case tracking-normal transition-colors pl-8 border-l-2 border-transparent hover:border-l-secondary"
                        onClick={(e) => handleLinkClick(e, sub.href)}
                    >
                        {sub.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            )}
          </li>
          ))}
          
          <li className="mt-8">
            <div className="flex justify-center gap-8 mb-8">
              <a href="https://www.instagram.com/contabilidadeconttrole/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all"><i className="fab fa-instagram text-2xl"></i></a>
              <a href="https://www.youtube.com/@conttrolecontabilidade2914" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all"><i className="fab fa-youtube text-2xl"></i></a>
              <a href="https://www.tiktok.com/@conttrole_contabilidade" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:scale-110 transition-all"><i className="fab fa-tiktok text-2xl"></i></a>
            </div>
            <a
              href="#area-cliente"
              className="block w-full text-center bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white drop-shadow-md px-6 py-3.5 rounded-full font-semibold normal-case tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(39,175,232,0.4)]"
              onClick={(e) => handleLinkClick(e, '#area-cliente')}
            >
              Área do Cliente
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};