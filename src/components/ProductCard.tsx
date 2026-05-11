import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image_1: string;
  image_2?: string;
  brand: string;
  rating: number;
  isNew?: boolean;
}

export default function ProductCard({ id, name, price, image_1, image_2, brand, rating, isNew }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const currentImage = hovered && image_2 ? image_2 : image_1;

  return (
    <div
      className="bg-white rounded-lg border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={currentImage}
          alt={name}
          className="w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
              Novo
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-accent transition-colors">
            <Heart size={16} />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full btn-primary flex items-center justify-between gap-2 py-2 text-xs">
            <span className="flex items-center gap-2">
              <ShoppingCart size={14} />
              Adicionar ao Cesto
            </span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{brand}</span>
        <Link
          to={`/product/${id}`}
          className="text-primary font-bold hover:text-accent transition-colors mb-2 line-clamp-2 leading-tight"
        >
          {name}
        </Link>

        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={cn(i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200')}
            />
          ))}
          <span className="text-[10px] text-slate-400 ml-1">(24)</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price.toFixed(2)}€</span>
          <button className="sm:hidden w-8 h-8 bg-accent text-white rounded-md flex items-center justify-center">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
