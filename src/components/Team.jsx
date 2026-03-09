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
          {/* Neno */}
          <div className="team-card relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden dark:bg-dark-card bg-light-card mb-6 relative shadow-xl">
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-obsidian dark:via-transparent dark:to-transparent bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-80 z-10"></div>
              <img
                src="/images/pages/team-neno.png"
                alt="Neno - Gründer & Operations Ajman"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/50 transition-colors z-20"></div>
            </div>
            <h3 className="text-2xl font-inter font-bold mb-1 group-hover:text-champagne transition-colors">Neno</h3>
            <p className="font-mono text-xs dark:text-gray-accessible text-gray-600 uppercase mb-3">Gründer & Operations Ajman</p>
            <p className="text-sm dark:text-gray-accessible text-gray-600 leading-relaxed">
              Nenos Idee. Sein eigener Weg als Auswanderer in Dubai war der Startpunkt – heute hat er die richtigen Connections direkt in Ajman: Steuerberater, Behörden, Netzwerk.
            </p>
          </div>

          {/* Juljana */}
          <div className="team-card relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden dark:bg-dark-card bg-light-card mb-6 relative shadow-xl">
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-obsidian dark:via-transparent dark:to-transparent bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-80 z-10"></div>
              <img
                src="/images/pages/team-juljana.png"
                alt="Juljana - Behörden & Compliance"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/50 transition-colors z-20"></div>
            </div>
            <h3 className="text-2xl font-inter font-bold mb-1 group-hover:text-champagne transition-colors">Juljana</h3>
            <p className="font-mono text-xs dark:text-gray-accessible text-gray-600 uppercase mb-3">Behörden & Compliance</p>
            <p className="text-sm dark:text-gray-accessible text-gray-600 leading-relaxed">
              Juljana begleitet persönlich bei allen Behördengängen und Medical Checks vor Ort in Ajman – damit nichts verloren geht und alles reibungslos läuft.
            </p>
          </div>

          {/* Martin */}
          <div className="team-card relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden dark:bg-dark-card bg-light-card mb-6 relative shadow-xl">
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-obsidian dark:via-transparent dark:to-transparent bg-gradient-to-t from-light-bg via-transparent to-transparent opacity-80 z-10"></div>
              {/* Platzhalter bis echtes Foto vorliegt */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
                <span className="text-6xl font-playfair font-bold text-champagne/40 select-none">M</span>
              </div>
              <div className="absolute inset-0 border border-champagne/0 group-hover:border-champagne/50 transition-colors z-20"></div>
            </div>
            <h3 className="text-2xl font-inter font-bold mb-1 group-hover:text-champagne transition-colors">Martin</h3>
            <p className="font-mono text-xs dark:text-gray-accessible text-gray-600 uppercase mb-3">IT & Versicherung</p>
            <p className="text-sm dark:text-gray-accessible text-gray-600 leading-relaxed">
              IT-Experte und IHK-zugelassener Versicherungsmakler. Martin berät zur internationalen Krankenversicherung – dem Thema, das bei der Auswanderung oft unterschätzt wird.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
