import React from 'react';
import { Star, Globe, Headphones, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Star size={24} />,
    title: 'Soluções Marítimas Especializadas',
    desc: 'Componentes e Sistemas Premium'
  },
  {
    icon: <Globe size={24} />,
    title: 'Entrega em Todo o Mundo',
    desc: 'Opções de Envio Rápidas e Fiáveis.'
  },
  {
    icon: <Headphones size={24} />,
    title: 'Suporte Prático e Especializado',
    desc: 'Comprometidos com um Serviço Personalizado'
  },
  {
    icon: <Zap size={24} />,
    title: 'Processamento Eficiente de Encomendas',
    desc: 'Para Clientes Particulares e Profissionais'
  }
];

export default function BenefitsStrip() {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-white py-8 border-b border-slate-200 shadow-sm">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-bold text-primary text-sm leading-tight">{benefit.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
