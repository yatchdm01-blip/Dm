import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  key?: string;
}

export default function ArticleCard({ id, title, excerpt, image, date, author }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1"><Calendar size={12} className="text-accent" /> {date}</span>
          <span className="flex items-center gap-1"><User size={12} className="text-accent" /> {author}</span>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
          <Link to={`/article/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <Link 
          to={`/article/${id}`} 
          className="mt-auto inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform"
        >
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
