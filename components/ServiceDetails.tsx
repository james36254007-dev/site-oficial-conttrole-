import React from 'react';
import { motion } from 'motion/react';

const DetailSection: React.FC<{
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
}> = ({ id, title, icon, children }) => (
  <section id={id} className="bg-[#031020] py-24 border-t border-white/5 scroll-mt-20 relative overflow-hidden group">
    {/* Dynamic Background Glow on Hover (Aurora) */}
    <div className="absolute left-[-10%] top-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000 mix-blend-screen animate-pulse"></div>

    <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-5 mb-10"
        >
            {icon && (
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-white text-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                    <i className={`fa-solid ${icon}`}></i>
                </div>
            )}
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0a1e36]/60 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
            {/* Glossy sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 text-muted/90 leading-relaxed space-y-8 text-lg font-light">
                {children}
            </div>
        </motion.div>
    </div>
  </section>
);

export const ServiceDetails: React.FC = () => {
  return (
    <>
      <DetailSection id="contabilidade-empresas" title="Contabilidade para Empresas" icon="fa-briefcase">
        <p className="text-white text-xl font-normal leading-relaxed">
          Transformamos a contabilidade tradicional em uma <span className="text-primary font-semibold">ferramenta de gestão estratégica</span>.
        </p>
        <p className="text-base">
          Muito mais do que gerar guias, nossa missão é fornecer dados precisos para que você tome as melhores decisões para o seu negócio.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[
              {
                  title: "Gestão Contábil",
                  items: ["Classificação inteligente", "Escrituração digital", "Relatórios de performance", "DRE e Balanço Gerencial"]
              },
              {
                  title: "Gestão Fiscal",
                  items: ["Planejamento tributário", "Recuperação de créditos", "Conformidade SPED", "Análise de impacto"]
              },
              {
                  title: "Gestão de Pessoal",
                  items: ["Rotinas de admissão/demissão", "eSocial e conectividade", "Folha de pagamento", "Consultoria trabalhista"]
              },
              {
                  title: "Legalização",
                  items: ["Abertura e alterações", "Certidões e alvarás", "Blindagem patrimonial", "Holdings"]
              }
          ].map((area, idx) => (
              <div key={idx} className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all hover:bg-primary/20 group">
                  <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,255,203,0.8)]"></span>
                      {area.title}
                  </h3>
                  <ul className="space-y-2.5">
                      {area.items.map((item, i) => (
                          <li key={i} className="text-sm text-muted/70 flex items-start gap-2 group-hover:text-muted transition-colors">
                             <i className="fa-solid fa-angle-right text-white/40 text-xs mt-1"></i>
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="contabilidade-mei" title="Contabilidade para MEI" icon="fa-store">
        <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1 space-y-6">
                <p>
                  O acompanhamento profissional é o diferencial entre o MEI que estagna e o que se torna uma <strong className="text-white">grande empresa</strong>.
                </p>
                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide opacity-80">Nossos Serviços para MEI</h3>
                    <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                    {['DASN-MEI Anual', 'Declaração de IRPF', 'Controle de Faturamento', 'Emissão de Notas Fiscais', 'Regularização de Débitos', 'Migração para ME'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-muted">
                            <i className="fa-solid fa-check text-secondary/70 text-[0.7rem]"></i>
                            {item}
                        </li>
                    ))}
                    </ul>
                </div>
             </div>
        </div>
      </DetailSection>

      <DetailSection id="contabilidade-digitais" title="Negócios Digitais" icon="fa-laptop-code">
        <p className="text-lg">
          Falamos a língua da internet. A Conttrole entende de plataformas, split de pagamentos e a tributação específica para infoprodutos.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
            {['Infoprodutores', 'Coprodutores', 'Afiliados', 'E-commerce', 'Dropshipping', 'Youtubers', 'Influencers', 'SaaS'].map((item, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-white text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default shadow-sm">
                    {item}
                </span>
            ))}
        </div>
      </DetailSection>

      <DetailSection id="contabilidade-pf" title="Pessoa Física" icon="fa-user">
        <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border border-primary/20 mb-8 flex items-start gap-4">
            <i className="fa-solid fa-shield-halved text-3xl text-white mt-1"></i>
            <div>
                <h3 className="text-white font-bold text-lg">Segurança Fiscal Total</h3>
                <p className="text-sm text-muted mt-1">Análise minuciosa de cruzamento de dados para evitar a malha fina.</p>
            </div>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
            {['Declaração de Ajuste Anual (IRPF)', 'Regularização de CPF Suspenso', 'Cálculos de Carnê Leão (Mensal)', 'Ganho de Capital', 'eSocial Doméstico', 'Planejamento Sucessório'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-white/90 text-sm font-medium">{item}</span>
                </li>
            ))}
        </ul>
      </DetailSection>

      <DetailSection id="contabilidade-terceiro-setor" title="Terceiro Setor" icon="fa-hands-holding-circle">
        <p>
            Entidades sem fins lucrativos exigem transparência absoluta e conformidade rigorosa. Garantimos a manutenção de suas imunidades e isenções.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            {['Igrejas', 'ONGs', 'Associações'].map((item, i) => (
                <div key={i} className="bg-primary/10 p-5 rounded-xl border border-primary/20">
                    <span className="text-white font-bold block mb-1">{item}</span>
                    <span className="text-xs text-muted uppercase tracking-wider">Especializado</span>
                </div>
            ))}
        </div>
      </DetailSection>

      <DetailSection id="registro-marcas" title="Registro de Marcas" icon="fa-registered">
        <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
             <h3 className="text-white text-xl font-bold mb-6 text-center">Por que registrar sua marca?</h3>
             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-green-400 font-semibold uppercase text-xs tracking-wider">
                        <i className="fa-solid fa-check-circle"></i> Benefícios
                    </div>
                    <ul className="space-y-3">
                        {['Propriedade exclusiva em todo território nacional', 'Direito de franquear o negócio', 'Valorização do ativo intangível', 'Segurança jurídica para investir em marketing'].map((item, i) => (
                            <li key={i} className="text-sm text-muted flex gap-2">
                                <span className="text-white/20">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                     <div className="flex items-center gap-3 text-red-400 font-semibold uppercase text-xs tracking-wider">
                        <i className="fa-solid fa-triangle-exclamation"></i> Riscos
                    </div>
                    <ul className="space-y-3">
                        {['Perder a marca para concorrentes', 'Pagamento de indenizações', 'Obrigação de mudar toda identidade visual', 'Bloqueio em redes sociais e marketplaces'].map((item, i) => (
                            <li key={i} className="text-sm text-muted flex gap-2">
                                <span className="text-white/20">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
             <div className="mt-8 flex justify-center">
                 <a href="mailto:warleson@contabilidadeconttrole.com.br" className="inline-block bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white border border-transparent px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(39,175,232,0.3)]">
                     Registre sua marca conosco
                 </a>
             </div>
        </div>
      </DetailSection>

      <DetailSection id="bpo-financeiro" title="BPO Financeiro" icon="fa-chart-pie">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="flex-1 space-y-6">
                <h3 className="text-2xl text-white font-bold leading-tight">
                    Terceirize o operacional. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Foque na estratégia.</span>
                </h3>
                <p className="text-base text-muted/80 mb-6">
                    Assumimos suas contas a pagar, a receber, conciliação bancária e fluxo de caixa. Você recebe relatórios prontos para decidir.
                </p>
                <a href="mailto:warleson@contabilidadeconttrole.com.br" className="inline-block bg-primary/10 hover:bg-primary/20 text-white border border-primary/30 hover:border-primary/50 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 text-center">
                    Quero saber mais
                </a>
             </div>
             
             <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                {[
                    { label: 'Redução de Custos', icon: 'fa-arrow-trend-down', color: 'text-green-400' },
                    { label: 'Tempo Livre', icon: 'fa-clock', color: 'text-blue-400' },
                    { label: 'Previsibilidade', icon: 'fa-chart-line', color: 'text-purple-400' },
                    { label: 'Especialistas', icon: 'fa-user-tie', color: 'text-amber-400' }
                ].map((benefit, i) => (
                    <div key={i} className="bg-primary/10 p-5 rounded-2xl border border-primary/20 flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all group">
                        <div className={`text-2xl ${benefit.color} group-hover:scale-110 transition-transform`}>
                            <i className={`fa-solid ${benefit.icon}`}></i>
                        </div>
                        <span className="text-white/90 text-sm font-medium">{benefit.label}</span>
                    </div>
                ))}
             </div>
        </div>
      </DetailSection>
    </>
  );
};