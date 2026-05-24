import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const brands = [
  { name: 'Lewmar', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2001.png' },
  { name: 'Marlow', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2002.png' },
  { name: 'Hamma', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2003.png' },
  { name: 'Selden', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2004.png' },
  { name: 'Lofrans', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2005.png' },
  { name: 'Harken', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2006.png' },
  { name: 'Spinlock', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2007.png' },
  { name: 'Raymarine', logo: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/MARCA%2009.png' },
];

export default function BrandSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;
    gsap.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, { scope: sliderRef });

  return (
    <section className="py-16 bg-off-white overflow-hidden" ref={sliderRef}>
      <div className="container-custom mb-12 text-center">
        <h2 className="text-3xl font-bold text-primary uppercase tracking-tight">Compre por Marca</h2>
        <div className="w-20 h-1.5 bg-accent mt-4 mx-auto"></div>
      </div>
      <div className="relative">
        <div 
          ref={trackRef}
          className="flex items-center gap-12 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              className="w-48 h-24 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center p-6 transition-all duration-500"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
