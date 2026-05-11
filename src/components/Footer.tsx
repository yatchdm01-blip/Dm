import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-xl">DM</div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight">YACHT CARE</span>
                <span className="text-[10px] text-accent font-semibold tracking-widest uppercase">
                  Especialistas Marítimos
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              Fornecendo serviços premium de manutenção de iates e equipamento marítimo de alta qualidade desde 2010.
              O seu parceiro de confiança para tudo o que é náutico.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Links Rápidos</h3>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li><Link to="/shop" className="hover:text-accent transition-colors">Todos os Produtos</Link></li>
              <li><Link to="/brands" className="hover:text-accent transition-colors">Comprar por Marca</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-accent transition-colors">Novidades</Link></li>
              <li><Link to="/knowledge" className="hover:text-accent transition-colors">Centro de Conhecimento</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Apoio ao Cliente</h3>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contacte-nos</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Informações de Envio</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition-colors">Devoluções e Reembolsos</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">Perguntas Frequentes</Link></li>

              {/* ✅ LINK CORRETO */}
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Contactos</h3>
            <ul className="flex flex-col gap-6 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>
                  Estaleiros da Marina de Portimão <br />
                  8400-279 Loja 5, Parchal <br />
                  Ferragudo, Portugal
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span>
                  (+351) 915 730 843 Denys Moraes <br />
                  (+351) 913 282 888 Carla Pereira
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span>info@dmyachtcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 DM Yacht Care. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
