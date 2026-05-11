/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/src/components/layout/Layout';
import Index from '@/src/pages/Index';
import PrivacyPolicy from '@/src/pages/PrivacyPolicy';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* Placeholder routes for other pages */}
          <Route path="/about" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Sobre Nós</h1><p className="mt-4 text-slate-600">Perícia marítima premium desde 2010.</p></div>} />
          <Route path="/contact" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Contacte-nos</h1><p className="mt-4 text-slate-600">Fale com os nossos especialistas.</p></div>} />
          <Route path="/knowledge" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Centro de Conhecimento</h1><p className="mt-4 text-slate-600">Conselhos especializados para as suas aventuras náuticas.</p></div>} />
          <Route path="/shop" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Todos os Produtos</h1><p className="mt-4 text-slate-600">Explore a nossa gama completa de equipamento marítimo.</p></div>} />
          <Route path="/login" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Entrar</h1><p className="mt-4 text-slate-600">Aceda à sua conta e encomendas.</p></div>} />
          <Route path="/cart" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">O Seu Cesto</h1><p className="mt-4 text-slate-600">Reveja os seus artigos antes de finalizar a compra.</p></div>} />
          <Route path="/category/:slug" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Página de Categoria</h1><p className="mt-4 text-slate-600">Produtos filtrados por categoria.</p></div>} />
          <Route path="/product/:id" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Detalhe do Produto</h1><p className="mt-4 text-slate-600">Informações detalhadas sobre o produto.</p></div>} />
          <Route path="/article/:id" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Detalhe do Artigo</h1><p className="mt-4 text-slate-600">Leia o artigo completo.</p></div>} />
          <Route path="/wishlist" element={<div className="container-custom py-20"><h1 className="text-4xl font-bold">Lista de Desejos</h1><p className="mt-4 text-slate-600">Os seus artigos guardados.</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
