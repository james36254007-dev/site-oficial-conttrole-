import React from 'react';
import { motion } from 'motion/react';

export const SectionClientArea: React.FC = () => {
  const resources = [
    {
      id: 'acesso-sistema',
      title: 'Portal do Cliente',
      subtitle: 'Sistema Contábil',
      btnText: 'Acessar Agora',
      href: 'https://portal.contabilidadeconttrole.com.br',
      icon: 'fa-lock',
      gradient: 'from-[#0f2e4a] to-[#040e17]',
      accent: 'text-blue-400'
    },
    {
      id: 'conta-cora',
      title: 'Banco Cora',
      subtitle: 'Conta PJ Digital',
      btnText: 'Abrir Conta',
      href: 'https://www.cora.com.br/',
      icon: 'fa-wallet',
      gradient: 'from-[#2d1b36] to-[#0e0412]',
      accent: 'text-pink-400'
    },
    {
      id: 'conta-bsb',
      title: 'BSB Pay',
      subtitle: 'Gestão de Pagamentos',
      btnText: 'Conhecer',
      href: 'https://bsbpay.com.br/',
      icon: 'fa-credit-card',
      gradient: 'from-[#1e1a3d] to-[#080612]',
      accent: 'text-purple-400'
    },
    {
      id: 'materiais-gratuitos',
      title: 'Downloads',
      subtitle: 'Materiais Ricos',
      btnText: 'Baixar',
      href: '#materiais-gratuitos',
      icon: 'fa-download',
      gradient: 'from-[#0e2e26] to-[#03120e]',
      accent: 'text-emerald-400'
    },
  ];

  return (
    <section id="area-cliente" className="py-24 bg-[#041221] border-t border-white/5 relative scroll-mt-20 overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-primary/5 blur-[100px] rounded-[100%] pointer-events-none opacity-40 animate-pulse duration-[5s]"></div>
       <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
            <div className="text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,255,203,1)]"></span>
                Área Exclusiva
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Portal do Cliente
            </h2>
            <p className="text-muted/60 text-sm max-w-lg">
                Acesse suas ferramentas e parceiros estratégicos com segurança.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, idx) => (
            <motion.div
              key={idx}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-gradient-to-br ${item.gradient} rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 shadow-xl overflow-hidden scroll-mt-32 hover:border-white/10`}
            >
              {/* Card Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
              {/* Metallic Shine */}
              <div className="absolute top-0 -inset-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine transition-all"></div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center ${item.accent} text-xl mb-4 backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                    <i className={`fa-solid ${item.icon}`}></i>
                </div>
                
                <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1 block">
                    {item.subtitle}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-6 tracking-wide">
                  {item.title}
                </h3>
              </div>
              
              <a
                href={item.href}
                className="relative z-10 flex items-center justify-between w-full bg-primary/10 hover:bg-primary/20 text-white font-medium px-4 py-3 rounded-lg text-sm backdrop-blur-md transition-colors border border-primary/20 group-hover:border-primary/40"
              >
                {item.btnText}
                <i className="fa-solid fa-arrow-right text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};