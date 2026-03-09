import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philo-text', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543881389-4e08bfba4901?q=80&w=2803&auto=format&fit=crop")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="philo-text text-sm md:text-md uppercase tracking-[0.2em] dark:text-gray-accessible text-gray-600 font-mono mb-12 border-b border-champagne/20 pb-4 inline-block">
          The Manifesto
        </h2>
        
        <p className="philo-text text-2xl md:text-4xl font-inter font-light text-ivory/60 leading-tight mb-8 max-w-2xl mx-auto">
          "Die meisten Steuerberater fokussieren auf: Komplexität und Risiko."
        </p>
        
        <p className="philo-text text-4xl md:text-6xl lg:text-7xl font-playfair italic text-champagne leading-tight drop-shadow-xl mt-4">
          Wir fokussieren auf:<br/>
          <span className="font-bold underline decoration-champagne/30 underline-offset-8">Einfachheit & Sicherheit.</span>
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
