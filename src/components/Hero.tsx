import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:h-[650px] overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Yacht" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent sm:bg-gradient-to-r sm:from-primary/90 sm:via-primary/70 sm:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-0">
        <div className="max-w-md sm:max-w-lg lg:max-w-2xl text-white text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 sm:mb-6">
              Spring Sale Now On
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Premium Marine <br />
              <span className="text-accent italic">Care & Equipment</span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-10 max-w-lg leading-relaxed mx-auto sm:mx-0">
              From high-performance rigging to expert maintenance supplies, we provide everything you need for a perfect voyage.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                to="/shop" 
                className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-base sm:text-lg py-3 px-6 sm:px-8"
              >
                Shop Product Range
                <ArrowRight size={20} />
              </Link>

              <Link 
                to="/knowledge" 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 sm:px-8 rounded-md transition-all duration-200 border border-white/30 text-center"
              >
                Knowledge Centre
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Strip Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md py-6 hidden lg:block border-t border-slate-200 shadow-xl">
        <div className="container-custom grid grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase">Expert Support</h4>
              <p className="text-xs text-slate-500">Professional marine advice</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase">Fast Delivery</h4>
              <p className="text-xs text-slate-500">Global shipping available</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase">Quality Guaranteed</h4>
              <p className="text-xs text-slate-500">Premium brands only</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm uppercase">Secure Payments</h4>
              <p className="text-xs text-slate-500">SSL encrypted checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
