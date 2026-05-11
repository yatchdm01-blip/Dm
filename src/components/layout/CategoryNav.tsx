import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const categories = [
  { name: 'Ropes & Rigging', slug: 'ropes-rigging' },
  { name: 'Anchoring & Mooring', slug: 'anchoring-mooring' },
  { name: 'Safety Equipment', slug: 'safety-equipment' },
  { name: 'Maintenance', slug: 'maintenance' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothing', slug: 'clothing' },
  { name: 'Deck Hardware', slug: 'deck-hardware' },
  { name: 'Chandlery', slug: 'chandlery' }
];

export default function CategoryNav() {
  return (
    <div className="bg-white border-b border-slate-100 hidden md:block shadow-sm">
      <div className="container-custom">
        <ul className="flex items-center gap-6">
          <li>
            <Link 
              to="/custom-build" 
              className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full text-sm font-bold transition-all my-2 shadow-md"
            >
              Configuração Personalizada
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat.slug} className="group relative">
              <Link 
                to={`/category/${cat.slug}`} 
                className="flex items-center gap-1 py-4 text-xs font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest"
              >
                {cat.name}
                <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              {/* Dropdown Placeholder */}
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4">
                <ul className="flex flex-col gap-3">
                  <li><Link to="#" className="text-xs text-slate-600 hover:text-accent">Subcategoria 1</Link></li>
                  <li><Link to="#" className="text-xs text-slate-600 hover:text-accent">Subcategoria 2</Link></li>
                  <li><Link to="#" className="text-xs text-slate-600 hover:text-accent">Subcategoria 3</Link></li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
