import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const brands = [
  { name: 'Lewmar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lewmar_logo.svg/1200px-Lewmar_logo.svg.png' },
  { name: 'Marlow', logo: 'https://www.marlowropes.com/wp-content/uploads/2021/04/Marlow-Logo-Red-RGB-300x113.png' },
  { name: 'Hamma', logo: 'https://hammaregatta.com/wp-content/uploads/2020/07/Hamma-Regatta-Logo-White-Background.png' },
  { name: 'Selden', logo: 'https://www.seldenmast.com/wp-content/themes/selden/assets/img/logo.svg' },
  { name: 'Lofrans', logo: 'https://www.lofrans.com/img/logo.png' },
  { name: 'Harken', logo: 'https://www.harken.com/uploadedImages/Harken_Logo_Red_Black.png' },
  { name: 'Spinlock', logo: 'https://www.spinlock.co.uk/images/logo.png' },
  { name: 'Raymarine', logo: 'https://www.raymarine.com/img/raymarine-logo.svg' },
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
              className="w-48 h-24 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
