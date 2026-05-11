import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white text-primary py-4 sm:py-6 sticky top-0 z-50 shadow-md border-b border-slate-100 overflow-x-hidden">
      <div className="container-custom flex items-center justify-between gap-4 sm:gap-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white">DM</span>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-xl sm:text-2xl tracking-tight text-primary">
              YACHT CARE
            </span>
            <span className="text-[9px] sm:text-[10px] text-accent font-bold tracking-[0.3em] uppercase">
              Marine Specialists
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Procurar produtos..."
            className="w-full py-3 px-6 pr-12 rounded-full bg-slate-50 text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-inner"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-accent transition-colors">
            <Search size={22} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-8">

          {/* Currency */}
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:text-accent transition-colors">
            <span className="text-xs font-bold">EUR</span>
            <ChevronDown size={14} />
          </div>

          {/* Login */}
          <Link to="/login" className="flex items-center gap-2 hover:text-accent transition-colors">
            <User size={22} />
            <span className="hidden sm:flex text-xs font-bold">
              Entrar / Registar
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="flex items-center gap-2 hover:text-accent transition-colors">
            <div className="relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-md">
                0
              </span>
            </div>
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
              Cesto
            </span>
          </Link>

          {/* Mobile Menu */}
          <button className="md:hidden p-1 hover:text-accent transition-colors">
            <Menu size={28} />
          </button>
        </div>

      </div>
    </header>
  );
}
