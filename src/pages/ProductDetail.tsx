import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Star, ChevronRight, Package, Shield, Truck } from 'lucide-react';
import { supabase } from '@/src/lib/supabase';

interface Product {
  id: string;
  name: string;
  price: number;
  image_1: string;
  image_2?: string;
  brand: string;
  description: string;
  category: string;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('produtos')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setProduct(data);
        setSelectedImage(data.image_1);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-pulse">
          <div className="aspect-square bg-slate-200 rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 bg-slate-200 rounded w-3/4" />
            <div className="h-6 bg-slate-200 rounded w-1/4" />
            <div className="h-24 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Produto não encontrado</h2>
        <Link to="/shop" className="text-accent font-bold hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={18} /> Voltar à loja
        </Link>
      </div>
    );
  }

  const images = [product.image_1, product.image_2].filter(Boolean) as string[];

  // Parse description into spec rows if it contains newlines
  const descriptionLines = product.description
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  // Try to detect key/value pairs (e.g. "Weight\n0,38 kg")
  const specs: { key: string; value: string }[] = [];
  const descParagraphs: string[] = [];

  for (let i = 0; i < descriptionLines.length; i++) {
    const line = descriptionLines[i];
    const next = descriptionLines[i + 1];
    // Heuristic: short line (<30 chars, no digits at start) followed by a value line
    if (next && line.length < 35 && !line.match(/^\d/) && next.length < 35) {
      specs.push({ key: line, value: next });
      i++; // skip next
    } else {
      descParagraphs.push(line);
    }
  }

  return (
    <div className="bg-off-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-accent transition-colors">Início</Link>
            <ChevronRight size={12} />
            <Link to="/shop" className="hover:text-accent transition-colors">Loja</Link>
            <ChevronRight size={12} />
            <Link to={`/category/${product.category}`} className="hover:text-accent transition-colors">
              {product.category}
            </Link>
            <ChevronRight size={12} />
            <span className="text-primary truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border border-slate-200 overflow-hidden flex items-center justify-center p-8">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-md border-2 overflow-hidden bg-white flex items-center justify-center p-2 transition-all ${
                      selectedImage === img ? 'border-accent' : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img src={img} alt={`Vista ${i + 1}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-2">{product.brand}</span>
            <h1 className="text-3xl font-bold text-primary leading-tight mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400">(24 avaliações)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-slate-200">
              <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)}€</span>
              <span className="text-xs text-green-600 font-bold uppercase tracking-widest bg-green-50 px-2 py-1 rounded">Em stock</span>
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Categoria: </span>
              <Link to={`/category/${product.category}`} className="text-xs text-accent font-bold hover:underline">
                {product.category}
              </Link>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-slate-200 rounded-md overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors font-bold"
                >−</button>
                <span className="px-4 py-3 font-bold text-primary min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors font-bold"
                >+</button>
              </div>
              <button className="flex-1 btn-primary flex items-center justify-center gap-3 py-3 font-bold">
                <ShoppingCart size={18} />
                Adicionar ao Cesto
              </button>
              <button className="w-12 h-12 border border-slate-200 rounded-md flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent transition-colors bg-white">
                <Heart size={18} />
              </button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: <Truck size={16} />, label: 'Envio rápido' },
                { icon: <Shield size={16} />, label: 'Garantia 2 anos' },
                { icon: <Package size={16} />, label: 'Embalagem segura' },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-1 bg-white border border-slate-100 rounded-md py-3 px-2 text-center">
                  <span className="text-accent">{b.icon}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & Specs */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {descParagraphs.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6 pb-3 border-b border-slate-200">
                Descrição
              </h2>
              <div className="space-y-3">
                {descParagraphs.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          )}

          {specs.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-6 pb-3 border-b border-slate-200">
                Especificações Técnicas
              </h2>
              <div className="space-y-0">
                {specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between py-3 px-4 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} rounded`}
                  >
                    <span className="font-bold text-primary">{spec.key}</span>
                    <span className="text-slate-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-16">
          <Link to="/shop" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
            <ArrowLeft size={18} /> Voltar à loja
          </Link>
        </div>
      </div>
    </div>
  );
}
