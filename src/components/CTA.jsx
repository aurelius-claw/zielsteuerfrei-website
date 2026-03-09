import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
        scale: 0.9,
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 bg-obsidian text-ivory flex items-center justify-center relative border-t border-[#333]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1)_0%,transparent_70%)] pointer-events-none z-0"></div>

      <div className="cta-content max-w-4xl w-full mx-auto text-center relative z-10 bg-slate/50 backdrop-blur-md border border-champagne/10 rounded-[3rem] p-16 md:p-24 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair italic text-champagne mb-8">Bereit für ein <br/>steuerfreies Leben?</h2>
        <p className="font-inter text-lg dark:text-gray-accessible text-gray-600 max-w-xl mx-auto mb-12 font-light">
          Vom ersten Gespräch bis zum Bankkonto. Keine Wegzugssteuer, keine 183-Tage-Regel, 100% legal.
        </p>
        
        <button className="magnetic-btn bg-champagne text-obsidian px-12 py-6 rounded-full text-xl font-bold shadow-[0_0_50px_-10px_rgba(201,168,76,0.5)] hover:bg-ivory hover:text-obsidian transition-colors w-full md:w-auto">
          Jetzt Termin vereinbaren
        </button>
      </div>
    </section>
  );
};

export default CTA;
