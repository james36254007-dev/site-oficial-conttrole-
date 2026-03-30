import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-6 lg:pt-16 pb-16 lg:pb-32 overflow-hidden bg-[#020b16]"
    >
      {/* --- Premium Background Effects --- */}
      
      {/* 1. Deep Base Gradient - Adjusted to Blue Tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540] via-[#041221] to-[#020b16]"></div>
      
      {/* 2. Aurora/Northern Lights Effect (Animated) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[4s]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] bg-secondary/5 blur-[100px] rounded-full mix-blend-screen"></div>
      
      {/* 3. Subtle Noise Texture for Matte Finish */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none"></div>

      {/* --- Styles for Animations --- */}
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmerBorder {
          0% { border-color: rgba(255,255,255,0.1); box-shadow: 0 0 0 rgba(0,0,0,0); }
          50% { border-color: rgba(39,175,232,0.4); box-shadow: 0 0 20px rgba(39,175,232,0.2); }
          100% { border-color: rgba(255,255,255,0.1); box-shadow: 0 0 0 rgba(0,0,0,0); }
        }
        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glowingText {
          0%, 100% { text-shadow: 0 0 5px rgba(39,175,232,0.05); }
          50% { text-shadow: 0 0 25px rgba(39,175,232,0.4), 0 0 10px rgba(0,255,203,0.1); }
        }
        @keyframes glowingImage {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(39,175,232,0.2)); }
          50% { filter: drop-shadow(0 0 20px rgba(39,175,232,0.6)); }
        }
        .text-premium-gradient {
          background: linear-gradient(to right, #27afe8 20%, #ffffff 50%, #27afe8 80%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: textShimmer 5s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-[1200px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- Visual Content (Photo) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex justify-center lg:justify-start relative group perspective-[1000px] mt-12 lg:mt-0"
        >
           
           {/* Ambient Glow behind subject */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-primary/20 to-secondary/10 blur-[80px] rounded-full pointer-events-none"></div>
           
           {/* Geometric Accent Ring */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] rounded-full border border-white/5 shadow-[inset_0_0_50px_rgba(39,175,232,0.1)] pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] rounded-full border-t border-l border-primary/20 rotate-45 pointer-events-none"></div>
           
           {/* Image Container */}
           <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] mx-auto lg:mx-0 transition-transform duration-700 hover:scale-[1.02]">
             
             <img 
               src="/Gemini_Generated_Image_gbf7t8gbf7t8gbf7-Photoroom.png" 
               alt="Especialista Conttrole" 
               className="w-full h-auto object-cover relative z-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
               referrerPolicy="no-referrer"
               loading="lazy"
               style={{
                 maskImage: 'linear-gradient(to bottom, black 50%, transparent 98%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 98%)'
               }}
             />
             
             {/* --- Premium Badge --- */}
             <div 
                className="absolute top-[58%] -right-[5%] sm:-right-[10%] lg:-right-[15%] z-20 w-[180px] sm:w-[220px] bg-[#08101c]/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                style={{ 
                  animation: 'subtleFloat 6s ease-in-out infinite',
                  boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.7)'
                }}
             >
                {/* Glossy Reflection on top of badge */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                
                <div className="relative flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0f2e4a] to-[#051120] flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group-hover:border-primary/50 transition-colors shrink-0">
                      <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <i className="fa-solid fa-user-tie text-white text-sm relative z-10"></i>
                   </div>
                   
                   <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <strong className="block text-white text-[11px] sm:text-[12px] font-display font-semibold tracking-wide leading-none text-premium-gradient">Warleson Guimarães</strong>
                        <i className="fa-solid fa-certificate text-secondary text-[10px]" style={{ filter: 'drop-shadow(0 0 5px rgba(0,255,203,0.5))'}}></i>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-muted uppercase tracking-[0.1em] font-medium block leading-tight">
                        Especialista Contábil
                      </span>
                   </div>
                </div>
             </div>
           </div>
        </motion.div>

        {/* --- Text Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 text-center lg:text-left relative z-20"
        >
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg mb-6 group cursor-default hover:bg-white/10 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,255,203,0.8)] animate-pulse"></span>
            <span className="text-white/90 font-medium text-[0.7rem] uppercase tracking-[0.25em]">Contabilidade Digital Premium</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.1] mb-6 text-white tracking-tight">
            <span className="block text-white/40 font-light text-2xl lg:text-3xl mb-1 tracking-normal">Todo mundo precisa de</span>
            <span className="inline-block">
              <img 
                src="/a.png" 
                alt="Conttrole" 
                className="h-[1.8em] w-auto inline-block align-middle" 
                style={{ animation: 'glowingImage 3s ease-in-out infinite' }}
                referrerPolicy="no-referrer"
              />
            </span>
          </h1>
          
          <p className="text-muted text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Elevamos o padrão da contabilidade para empresas e profissionais que buscam <span className="text-white font-medium">inteligência, segurança e crescimento</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto mb-10">
            <a
              href="#contato"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white drop-shadow-md overflow-hidden shadow-[0_0_20px_rgba(39,175,232,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(39,175,232,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-3 text-sm uppercase tracking-wider">
                Solicite uma Proposta
                <i className="fa-solid fa-arrow-right text-xs text-white group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
            
            <a
              href="https://wa.me/5531995296719"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-wider backdrop-blur-sm"
            >
              <i className="fab fa-whatsapp text-lg text-white group-hover:scale-110 transition-transform"></i>
              Falar com Especialista
            </a>
          </div>
          
           <div className="border-t border-white/5 pt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-muted/60">
             <div className="flex items-center gap-2">
               <i className="fa-solid fa-check-circle text-white/50"></i>
               <span>Atendimento Humanizado</span>
             </div>
             <div className="flex items-center gap-2">
               <i className="fa-solid fa-check-circle text-white/50"></i>
               <span>Tecnologia de Ponta</span>
             </div>
             <div className="flex items-center gap-2">
               <i className="fa-solid fa-check-circle text-white/50"></i>
               <span>Cobertura Nacional</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};