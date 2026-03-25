import React from 'react';
import { motion } from 'motion/react';

export const SectionServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Contabilidade para Empresas',
      desc: 'Gestão completa: contábil, fiscal e pessoal.',
      link: '#contabilidade-empresas',
      icon: 'fa-briefcase'
    },
    {
      title: 'Microempreendedor (MEI)',
      desc: 'Crescimento estruturado e regularização.',
      link: '#contabilidade-mei',
      icon: 'fa-shop'
    },
    {
      title: 'Negócios Digitais',
      desc: 'Expertise para infoprodutores e e-commerce.',
      link: '#contabilidade-digitais',
      icon: 'fa-wifi'
    },
    {
      title: 'Pessoa Física',
      desc: 'Imposto de Renda e Carnê Leão.',
      link: '#contabilidade-pf',
      icon: 'fa-id-card'
    },
    {
      title: 'Terceiro Setor',
      desc: 'Gestão para ONGs e Associações.',
      link: '#contabilidade-terceiro-setor',
      icon: 'fa-hand-holding-heart'
    },
    {
      title: 'Marcas e Patentes',
      desc: 'Proteção jurídica da sua marca.',
      link: '#registro-marcas',
      icon: 'fa-registered'
    },
    {
      title: 'BPO Financeiro',
      desc: 'Terceirização financeira estratégica.',
      link: '#bpo-financeiro',
      icon: 'fa-chart-pie'
    },
  ];

  return (
    <section id="servicos" className="relative py-24 bg-[#051626] overflow-hidden">
       {/* Ambient Light/Aurora */}
       <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[6s]"></div>
       <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[8s]"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
       
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/5"
        >
            <div className="max-w-2xl">
                <span className="text-primary/90 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-primary"></span>
                    Nossos Serviços
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Excelência contábil <br/> <span className="text-white/40 font-light">em todas as frentes.</span>
                </h2>
            </div>
            <p className="text-muted text-lg font-light max-w-md text-left lg:text-right">
                Conheça nossas áreas de atuação e descubra como podemos impulsionar o seu negócio.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.a
              href={service.link}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#0d2238] hover:bg-[#132d4a] rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
            >
              {/* Highlight Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/30 transition-all duration-300 shadow-inner">
                  <i className={`fa-solid ${service.icon} text-lg`}></i>
              </div>

              <h3 className="font-display text-lg font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted/60 text-sm leading-relaxed group-hover:text-muted/80 transition-colors">
                {service.desc}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                 Saber mais <i className="fa-solid fa-arrow-right"></i>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};