import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
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

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('produtos')
          .select('id, name, price, image_1, image_2, brand, description, category')
          .order('created_at', { ascending: false });
        if (error) throw error;
        setProducts(data || []);
        setFiltered(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter + sort
  useEffect(() => {
    let result = [...products];
    if (selectedCategory) result = result.filter(p => p.category === selectedCategory);
    if (search) result = result.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    );
    if (sortBy === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price_desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    setFiltered(result);
    setVisibleCount(12);
  }, [search, selectedCategory, sortBy, products]);

  const categories = [...new Set(products.map(p => p.category))].filter(Boolean);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-custom py-12">
          <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
            Equipamento Marítimo
          </span>
          <h1 className="text-4xl font-bold text-primary uppercase tracking-tight">Todos os Produtos</h1>
          <div className="w-20 h-1.5 bg-accent mt-4"></div>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Filters bar */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-md bg-white text-sm focus:outline-none focus:border-accent"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 border border-slate-200 rounded-md bg-white text-sm focus:outline-none focus:border-accent text-slate-600"
          >
            <option value="">Todas as categorias</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-2.5 border border-slate-200 rounded-md bg-white text-sm focus:outline-none focus:border-accent text-slate-600"
          >
            <option value="">Ordenar por</option>
            <option value="price_asc">Preço: menor primeiro</option>
            <option value="price_desc">Preço: maior primeiro</option>
            <option value="name">Nome A-Z</option>
          </select>

          {/* Clear filters */}
          {(search || selectedCategory || sortBy) && (
            <button
              onClick={() => { setSearch(''); setSelectedCategory(''); setSortBy(''); }}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-500 hover:text-accent transition-colors"
            >
              <X size={14} /> Limpar filtros
            </button>
          )}

          <span className="text-xs text-slate-400 ml-auto font-medium">
            {filtered.length} produto{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-slate-200 h-80 animate-pulse" />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center py-8">Erro ao carregar produtos: {error}</p>
        )}

        {/* Empty */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20">
            <SlidersHorizontal size={40} className="text-slate-300 mx-auto mb-4" />
            <p className="text-slate-400 font-medium">Nenhum produto encontrado.</p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory(''); setSortBy(''); }}
              className="mt-4 text-accent font-bold hover:underline text-sm"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && visible.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visible.map(product => (
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

            {/* Load more */}
            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCount(c => c + 12)}
                  className="btn-primary px-10 py-3 font-bold"
                >
                  Carregar mais ({filtered.length - visibleCount} restantes)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
