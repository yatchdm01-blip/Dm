import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function NewsletterForm() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white mb-6">
                <Mail size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                Junte-se à Comunidade de <br />
                <span className="text-accent italic">Conhecimento DM Yacht Care</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Receba conselhos marítimos especializados, guias de produtos e ofertas exclusivas diretamente na sua caixa de entrada. Sem spam, apenas pura perícia náutica.
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Introduza o seu endereço de email..." 
                  className="w-full py-4 px-6 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/20 transition-all"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg"
              >
                Subscrever Agora
                <Send size={18} />
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-2">
                Ao subscrever, concorda com a nossa Política de Privacidade e Termos de Serviço.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
