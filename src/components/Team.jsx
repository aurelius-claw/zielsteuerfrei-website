import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 dark:bg-dark-bg bg-light-bg dark:text-dark-text text-light-text">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair italic text-champagne mb-4">Über Uns</h2>
        <p className="font-mono text-sm dark:text-gray-accessible text-gray-600 uppercase tracking-widest mb-16">Deutsche Präzision. Lokale Expertise.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Martin */}
          <div className="team-card relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden dark:bg-dark-card bg-light-card mb-6 relative shadow-xl">
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-obsidian dark:via-transparent dark:to-transparent bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-80 z-10"></div>
              {/* Martin Bild */}
              <img 
                src="/images/pages/team-martin.png" 
                alt="Martin - Strategie & Struktur"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/50 transition-colors z-20"></div>
            </div>
            <h3 className="text-2xl font-inter font-bold mb-1 group-hover:text-champagne transition-colors">Martin</h3>
            <p className="font-mono text-xs dark:text-gray-accessible text-gray-600 uppercase">Strategie & Struktur</p>
          </div>

          {/* Neno */}
          <div className="team-card relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden dark:bg-dark-card bg-light-card mb-6 relative shadow-xl">
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-obsidian dark:via-transparent dark:to-transparent bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-80 z-10"></div>
              {/* Neno Bild */}
              <img 
                src="/images/pages/team-neno.png" 
                alt="Neno - Operations Ajman"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/50 transition-colors z-20"></div>
            </div>
            <h3 className="text-2xl font-inter font-bold mb-1 group-hover:text-champagne transition-colors">Neno</h3>
            <p className="font-mono text-xs dark:text-gray-accessible text-gray-600 uppercase">Operations Ajman</p>
          </div>

          {/* Juljana */}
          <div className="team-card relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden dark:bg-dark-card bg-light-card mb-6 relative shadow-xl">
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-obsidian dark:via-transparent dark:to-transparent bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-80 z-10"></div>
              {/* Juljana Bild */}
              <img 
                src="/images/pages/team-juljana.png" 
                alt="Juljana - Behörden & Compliance"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/50 transition-colors z-20"></div>
            </div>
            <h3 className="text-2xl font-inter font-bold mb-1 group-hover:text-champagne transition-colors">Juljana</h3>
            <p className="font-mono text-xs dark:text-gray-accessible text-gray-600 uppercase">Behörden & Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
