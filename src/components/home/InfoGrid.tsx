import React from 'react';
import { motion } from 'motion/react';

const categories = [
  { title: 'Anchoring Information', image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=600&q=80' },
  { title: 'Anchor Size Guides', image: 'https://images.unsplash.com/photo-1516515429572-1f9f3b859894?auto=format&fit=crop&w=600&q=80' },
  { title: 'Mooring Information', image: 'https://images.unsplash.com/photo-1599240813974-61041f487160?auto=format&fit=crop&w=600&q=80' },
  { title: 'Standing Rigging Assistance', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
  { title: 'Custom Splicing and Rigging Service', image: 'https://images.unsplash.com/photo-1544473403-43904d4b67bd?auto=format&fit=crop&w=600&q=80' },
  { title: 'Running Rigging Resources', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
  { title: 'Sustainability Information', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
  { title: 'Chandlery Information', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { title: 'Deck Hardware Support', image: 'https://images.unsplash.com/photo-1516515429572-1f9f3b859894?auto=format&fit=crop&w=600&q=80' },
  { title: 'Safety Equipment', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
  { title: 'Architectural and Industrial Rigging', image: 'https://images.unsplash.com/photo-1599240813974-61041f487160?auto=format&fit=crop&w=600&q=80' },
  { title: 'Trade Terms', image: 'https://images.unsplash.com/photo-1544473403-43904d4b67bd?auto=format&fit=crop&w=600&q=80' },
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
