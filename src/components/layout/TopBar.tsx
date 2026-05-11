import React from 'react';
import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 text-xs border-b border-navy-light hidden sm:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-accent" />
          <a href="tel:+351210000000" className="hover:text-accent transition-colors font-bold">(+351) 913 282 888</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="/about" className="hover:text-accent transition-colors">Sobre Nós</a>
          <a href="/contact" className="hover:text-accent transition-colors">Contacto</a>
          <a href="/trade" className="hover:text-accent transition-colors">Profissionais</a>
        </div>
      </div>
    </div>
  );
}
