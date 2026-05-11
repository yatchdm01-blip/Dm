import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/src/lib/supabase';

interface Product {
  id: string;
  name: string;
  price: number;
  image_1: string;
  image_2: string;
  brand: string;
  description: string;
  category: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const { data, error } = await supabase
          .from('produtos')
          .select('id, name, price, image_1, image_2, brand, description, category')
          .limit(4);

        if (error) throw error;
        setProducts(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-24 bg-off-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
              Selecionados para si
            </span>
            <h2 className="text-4xl font-bold text-primary uppercase tracking-tight">
              Produtos em Destaque
            </h2>
            <div className="w-20 h-1.5 bg-accent mt-4"></div>
          </div>
          <Link
            to="/shop"
            className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors group"
          >
            Ver Todos os Produtos{' '}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-slate-200 h-80 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <p className="text-red-500 text-center py-8">
            Erro ao carregar produtos: {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className="text-slate-400 text-center py-8">
            Nenhum produto encontrado.
          </p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image_1={product.image_1}
                image_2={product.image_2}
                brand={product.brand}
                rating={5}
                isNew={false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
