import React, { useState } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export const SectionContact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, telefone, assunto, mensagem } = formData;
    
    toast.success('Preparando sua mensagem...', {
      description: 'Você será redirecionado para o seu cliente de e-mail.',
    });

    setTimeout(() => {
      const mailtoLink = `mailto:warleson@contabilidadeconttrole.com.br?subject=${encodeURIComponent(assunto || 'Contato pelo Site')}&body=${encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`)}`;
      window.location.href = mailtoLink;
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      }, 1000);
    }, 1500);
  };

  return (
    <section id="contato" className="relative bg-[#020b16] py-24 lg:py-32 overflow-hidden">
      {/* Background FX (Aurora) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06182c] via-[#051424] to-[#020b16]"></div>
      <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[5s]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-secondary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[7s]"></div>
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4">
            Atendimento Especializado
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Vamos conversar?
          </h2>
          <p className="text-muted text-lg font-light">
            Estamos prontos para elevar o nível da sua gestão contábil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Form - Glass Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#05101a]/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Top Light Accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-8">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="nome" className="text-[10px] text-muted uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-primary">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-[#081a2f] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-[#0a2038] transition-all placeholder:text-white/10 text-sm"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="text-[10px] text-muted uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-primary">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#081a2f] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-[#0a2038] transition-all placeholder:text-white/10 text-sm"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="telefone" className="text-[10px] text-muted uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-primary">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-[#081a2f] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-[#0a2038] transition-all placeholder:text-white/10 text-sm"
                    placeholder="(DDD) 00000-0000"
                    required
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="assunto" className="text-[10px] text-muted uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-primary">Assunto</label>
                  <select
                    id="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full bg-[#081a2f] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-[#0a2038] transition-all text-white/80 appearance-none text-sm cursor-pointer"
                    required
                  >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="Abertura de Empresa">Abertura de Empresa</option>
                    <option value="Trocar de Contador">Trocar de Contador</option>
                    <option value="Dúvidas Gerais">Dúvidas Gerais</option>
                    <option value="Parceria">Parceria</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="mensagem" className="text-[10px] text-muted uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-primary">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full bg-[#081a2f] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-[#0a2038] transition-all placeholder:text-white/10 resize-none text-sm"
                  placeholder="Como podemos te ajudar hoje?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white drop-shadow-md font-bold text-sm uppercase tracking-widest py-5 rounded-xl hover:brightness-110 hover:shadow-[0_0_30px_rgba(39,175,232,0.4)] transition-all transform hover:-translate-y-1 mt-4"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 pt-4"
          >
             <div className="grid gap-6">
                {[
                    { icon: 'fa-location-dot', title: 'Endereço', text: 'Rua Pedro da Costa Correia, 22 – Sala 05 – Várzea Alegre, Ribeirão das Neves – MG' },
                    { icon: 'fa-phone', title: 'Telefone', text: '(31) 3157-7244' },
                    { icon: 'fa-whatsapp', title: 'WhatsApp', text: '(31) 99529-6719', link: 'https://wa.me/5531995296719' },
                    { icon: 'fa-envelope', title: 'E-mail', text: 'warleson@contabilidadeconttrole.com.br' }
                ].map((info, i) => (
                    <div key={i} className="flex items-start gap-5 p-5 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group hover:border-white/10">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-white text-sm shadow-lg shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                            <i className={`fa-solid ${info.icon}`}></i>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base mb-1">{info.title}</h4>
                            {info.link ? (
                                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-white transition-colors text-sm leading-relaxed block">
                                    {info.text}
                                </a>
                            ) : (
                                <p className="text-muted/80 text-sm leading-relaxed">{info.text}</p>
                            )}
                        </div>
                    </div>
                ))}
             </div>

             {/* Map */}
             <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[280px] shadow-2xl relative group">
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[2rem] z-10 shadow-inner"></div>
                <iframe
                    title="Localização Conttrole"
                    loading="lazy"
                    src="https://maps.google.com/maps?q=R.%20Pedro%20da%20Costa%20Correia,%2022%20-%20V%C3%A1rzea%20Alegre,%20Ribeir%C3%A3o%20das%20Neves%20-%20MG,%2033805-570&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale invert-[0.93] contrast-[1.1] opacity-60 hover:opacity-90 transition-opacity duration-500"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};