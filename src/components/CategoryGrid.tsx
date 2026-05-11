import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  {
    title: 'Aparelho de Manobra',
    image: 'https://images.unsplash.com/photo-1544473403-43904d4b67bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'running-rigging'
  },
  {
    title: 'Amarração',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'mooring'
  },
  {
    title: 'Acessórios Náuticos',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'marine-chandlery'
  },
  {
    title: 'Ferragens de Convés',
    image: 'https://images.unsplash.com/photo-1516515429572-1f9f3b859894?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'deck-hardware'
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-primary">A Nossa Gama de Produtos</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.slug} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{cat.title}</h3>
                <Link 
                  to={`/category/${cat.slug}`} 
                  className="inline-flex items-center justify-between w-full border border-white rounded-full px-6 py-2 text-white font-bold hover:bg-white hover:text-primary transition-all group/btn"
                >
                  <span>Comprar Agora</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
