import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Effect
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Marquee Effect
    const marquee = marqueeRef.current;
    if (marquee) {
      const totalWidth = marquee.scrollWidth / 2;
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        ease: 'none',
        repeat: -1,
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[600px] lg:h-[850px] overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://hnaezacbzcpmyfoupdec.supabase.co/storage/v1/object/public/ANTARES%20ENERGIA/CAPA%20SITE%20DM%201920X1200.webp" 
          alt="Luxury Yacht" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent"></div>
      </div>

      {/* Content - Ajustado justify e padding para subir o H1 */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-start pt-32 lg:pt-48">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              Fornecedor de Equipamentos para Veleiros e Embarcaçōes
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
              Especialistas em reparações estruturais, rigging, antifouling e refit completo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-between gap-8 text-base py-3 px-8 shadow-2xl hover:scale-105 transition-transform group min-w-[200px]">
                <span>Orçamento</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/+351210000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-slate-100 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center gap-3 uppercase tracking-wider text-xs min-w-[200px]"
              >
                <span>Falar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent/20 backdrop-blur-md py-4 z-20 overflow-hidden border-t border-white/10">
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-12 text-white font-bold uppercase tracking-[0.2em] text-sm lg:text-lg opacity-80"
          style={{ width: 'max-content' }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Manutenção de Iates</span>
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Rigging Especializado</span>
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Refit Completo</span>
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Antifouling</span>
              <span className="w-2 h-2 bg-accent rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
