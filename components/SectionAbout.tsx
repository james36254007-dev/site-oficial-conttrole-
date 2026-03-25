import React from 'react';
import { motion } from 'motion/react';

export const SectionAbout: React.FC = () => {
  return (
    <section id="empresa" className="relative bg-[#051424] py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"></div>
      {/* Glow Effects (Aurora) */}
      <div className="absolute top-[20%] left-0 w-[40%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-[6s]"></div>
      <div className="absolute bottom-[20%] right-0 w-[40%] h-[60%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-[6s]"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary/80 font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">
             Nossa Essência
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-white">
            Sobre a Conttrole
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Column 1: History (Premium Timeline) */}
          <motion.div 
            id="historia" 
            className="scroll-mt-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-white flex items-center gap-3 mb-10">
              <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base shadow-lg">
                <i className="fa-solid fa-hourglass-half text-secondary"></i>
              </span>
              Nossa Trajetória
            </h3>
            
            <div className="relative border-l border-white/10 ml-5 space-y-12 pb-4">
              {/* Timeline Item 1 */}
              <div className="relative pl-10 group">
                 <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary/20 border border-secondary shadow-[0_0_10px_rgba(0,255,203,0.5)] group-hover:scale-125 transition-transform"></div>
                 <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-1 block">2018</span>
                 <h4 className="text-white font-display font-bold text-xl mb-3">O Início de Tudo</h4>
                 <p className="text-muted/80 leading-relaxed font-light">
                    Fundada com o propósito audacioso de romper com a burocracia da contabilidade tradicional. Trouxemos atendimento humanizado para o centro da operação.
                 </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-10 group">
                 <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary/20 border border-white/30 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(39,175,232,0.5)] transition-all"></div>
                 <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">Hoje</span>
                 <h4 className="text-white font-display font-bold text-xl mb-3">Expansão Nacional</h4>
                 <p className="text-muted/80 leading-relaxed font-light">
                    Atendemos diversos estados brasileiros (MG, SP, RJ, DF, PA, PR, SC) com tecnologia de ponta, mantendo a proximidade e o cuidado com cada cliente.
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Mission/Values */}
          <motion.div 
            id="missao-visao-valores" 
            className="grid gap-6 scroll-mt-32"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
                 <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1 shadow-lg group">
                    <i className="fa-solid fa-bullseye text-3xl text-white mb-6 block group-hover:scale-110 transition-transform"></i>
                    <h3 className="text-white font-display font-bold text-lg mb-3">Missão</h3>
                    <p className="text-sm text-muted/70 leading-relaxed">
                        Entregar inteligência contábil que gera valor e impulsiona o sucesso dos nossos clientes.
                    </p>
                 </div>
                 
                 <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 hover:border-secondary/40 transition-all hover:-translate-y-1 shadow-lg group">
                    <i className="fa-solid fa-eye text-3xl text-white mb-6 block group-hover:scale-110 transition-transform"></i>
                    <h3 className="text-white font-display font-bold text-lg mb-3">Visão</h3>
                    <p className="text-sm text-muted/70 leading-relaxed">
                        Ser referência nacional em contabilidade digital, conectando inovação e pessoas.
                    </p>
                 </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-3xl border border-primary/20 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none"></div>
                <h3 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-3">
                    <i className="fa-regular fa-star text-amber-400"></i> Nossos Valores
                </h3>
                <div className="flex flex-wrap gap-3">
                    {['Ética Inegociável', 'Transparência', 'Humanidade', 'Responsabilidade', 'Excelência', 'Inovação'].map((val, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs text-white font-medium hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default tracking-wide">
                            {val}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};