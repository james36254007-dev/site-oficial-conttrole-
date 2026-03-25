import React from 'react';
import { motion } from 'motion/react';

export const SectionAudience: React.FC = () => {
  const audienceList = [
    {
      title: 'Empresas',
      desc: 'Gestão contábil 360º para alta performance.',
      icon: 'fa-building',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'MEI',
      desc: 'Regularização e crescimento estruturado.',
      icon: 'fa-store',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Negócios Digitais',
      desc: 'Expertise em infoprodutos e e-commerce.',
      icon: 'fa-laptop-code',
      color: 'from-violet-400 to-purple-500'
    },
    {
      title: 'Pessoa Física',
      desc: 'IRPF e gestão patrimonial segura.',
      icon: 'fa-user',
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Terceiro Setor',
      desc: 'Transparência para ONGs e Associações.',
      icon: 'fa-hands-holding-circle',
      color: 'from-rose-400 to-pink-500'
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#041221]">
      {/* Background Ambience - Deep Blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b16] via-[#06182c] to-[#041221]"></div>
      
      {/* Aurora Pulse Effect */}
      <div className="absolute top-0 left-[-20%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[5s]"></div>
      <div className="absolute bottom-0 right-[-20%] w-[60%] h-[60%] bg-secondary/5 blur-[100px] rounded-full mix-blend-screen animate-pulse duration-[7s]"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-secondary/80 font-semibold text-xs uppercase tracking-[0.25em] mb-4 block">
             Para quem trabalhamos
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 text-white tracking-tight">
            Soluções exclusivas para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] animate-gradient">sua necessidade</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {audienceList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(39,175,232,0.15)]"
            >
              {/* Border Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent group-hover:from-primary/40 group-hover:via-secondary/20 group-hover:to-transparent transition-all duration-500 rounded-3xl"></div>
              
              {/* Card Content - Deep Blue Tint */}
              <div className="relative h-full bg-primary/10 rounded-[23px] p-8 flex flex-col items-start overflow-hidden backdrop-blur-sm border border-primary/20">
                
                {/* Subtle Inner Highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                   <div className="w-full h-full rounded-2xl bg-[#0a2038] flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`}></div>
                      <i className={`fa-solid ${item.icon} text-transparent bg-clip-text bg-gradient-to-br ${item.color} text-xl relative z-10`}></i>
                   </div>
                </div>

                <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {item.title}
                </h3>
                <p className="text-muted/70 text-sm leading-relaxed mb-4 flex-grow font-light">
                    {item.desc}
                </p>
                
                <div className="w-8 h-1 bg-gradient-to-r from-white/10 to-transparent group-hover:w-full group-hover:from-primary/50 transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};