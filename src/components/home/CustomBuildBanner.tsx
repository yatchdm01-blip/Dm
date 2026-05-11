import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomBuildBanner() {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="bg-primary rounded-2xl overflow-hidden relative min-h-[300px] flex items-center">
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Desenhe Online a Sua <span className="text-accent">Configuração Individual de Cabos e Aparelho</span>
            </h2>
            <p className="text-slate-300 mb-8 text-sm md:text-base">
              Configuração personalizada de adriças, escotas, cabos de controlo, brandais e estais – 
              Obtenha um orçamento dinâmico instantâneo e encomende online.
            </p>
            <Link 
              to="/custom-build" 
              className="btn-primary inline-flex items-center justify-between gap-8 min-w-[200px]"
            >
              <span>Começar a Configurar</span>
              <ChevronRight size={20} />
            </Link>
          </div>

          {/* Background Image/Graphics */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1516515429572-1f9f3b859894?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Ropes and Rigging" 
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
