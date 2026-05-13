import React from 'react';
import ArticleCard from '../ArticleCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const latestArticles = [
  {
    id: '1',
    title: 'Tratamento de Casco e Antifouling',
    excerpt: 'Proteção profissional do casco para máxima performance.',
    image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20OSMOSE.webp',
    date: 'Oct 12, 2025',
    author: 'Capt. James'
  },
  {
    id: '2',
    title: 'Pintura & Gelcoat',
    excerpt: 'Acabamento profissional que protege e valoriza o seu barco.',
    image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20PINTURA%20VELEIRO.webp',
    date: 'Oct 15, 2025',
    author: 'Sarah Marine'
  },
  {
    id: '3',
    title: 'Rigging Profissional',
    excerpt: 'Instalação e inspeção de rigging fixo e móvel.',
    image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/RIGGING%20DM.webp',
    date: 'Oct 20, 2025',
    author: 'David Helms'
  }
];

export default function ArticlesPreview() {
  return (
    <section className="py-24 bg-off-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Especialistas Marítimos</span>
            <h2 className="text-4xl font-bold text-primary uppercase tracking-tight">Reparação e Manutenção</h2>
            <div className="w-20 h-1.5 bg-accent mt-4"></div>
          </div>
          <Link to="/knowledge" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group">
            Orçamento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              id={article.id} 
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              date={article.date}
              author={article.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
