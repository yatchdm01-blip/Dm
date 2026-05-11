import React from 'react';
import TopBar from './TopBar';
import Header from './Header';
import CategoryNav from './CategoryNav';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <CategoryNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
