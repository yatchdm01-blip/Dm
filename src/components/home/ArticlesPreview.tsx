import React from 'react';
import ArticleCard from '../ArticleCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const latestArticles = [
  {
    id: '1',
    title: 'Choosing the Right Anchor for Your Vessel',
    excerpt: 'A comprehensive guide to understanding different anchor types and which one is best suited for your cruising grounds.',
    image: 'https://images.unsplash.com/photo-1544473403-43904d4b67bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Oct 12, 2025',
    author: 'Capt. James'
  },
  {
    id: '2',
    title: 'Essential Maintenance for Your Rigging',
    excerpt: 'Prevent catastrophic failures with our step-by-step rigging inspection and maintenance checklist.',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'Oct 15, 2025',
    author: 'Sarah Marine'
  },
  {
    id: '3',
    title: 'Safety at Sea: Lifejacket Innovations',
    excerpt: 'Exploring the latest technology in personal flotation devices and why it is time to upgrade your gear.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
            <h2 className="text-4xl font-bold text-primary uppercase tracking-tight">Centro de Conhecimento</h2>
            <div className="w-20 h-1.5 bg-accent mt-4"></div>
          </div>
          <Link to="/knowledge" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group">
            Ver Todos os Artigos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
