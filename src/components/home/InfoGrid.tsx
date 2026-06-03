import React from 'react';
import { motion } from 'motion/react';

const categories = [
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%201600X1200%20ATE%20100%20MIL.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%201600X1200%20VELEIRO.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20CARD%20CATAMARA%201600X1200.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20CATAMARA%201600X1200/DM%201600X1200%20ATE%2050%20MIL.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20LANCHA%201600X1200%20105.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20CATAMARA%201600X1200/102.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/BARCOS%201600X1200/100.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20VENDA%201600X1200%20104.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20VISTA%20DO%20ALTO%20BARCOS%201600X1200:106.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20VELEIROS%201600X1200%20106.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%20VELEIRO%201600X1200%20103.webp' },
  { title: '', image: 'https://chbpxbbfkiqoebkiycwg.supabase.co/storage/v1/object/public/DM%20yacht/DM%201600x1200%20vista.webp' },
];

export default function InfoGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[16/10]"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
