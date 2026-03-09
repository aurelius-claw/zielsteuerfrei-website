import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out'
      });
      
      // Shuffle Animation
      gsap.to('.shuffle-card', {
        y: -10,
        rotate: 2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative py-32 px-6 bg-obsidian text-ivory pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/pages/leistungen.png" 
          alt="Leistungen - Komplettpaket für Ajman Firmengründung"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian/80" />
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-playfair italic text-champagne mb-20 text-center">
          Interactive Functional Artifacts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="feature-card bg-slate rounded-3xl p-10 h-[400px] flex flex-col justify-between relative overflow-hidden group border border-[#333]">
            <div className="text-sm font-mono text-champagne/80 mb-4">01 // Komplettpaket</div>
            <h3 className="text-2xl font-inter font-bold z-10">Diagnostic Shuffler</h3>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] flex items-center justify-center">
              <div className="shuffle-card absolute w-2/3 h-20 bg-obsidian rounded-xl border border-champagne/20 flex flex-col justify-center px-4 transform rotate-[-5deg] z-10 translate-x-[-10px] translate-y-[-10px]">
                <span className="font-mono text-sm text-champagne">LIZENZ</span>
              </div>
              <div className="shuffle-card absolute w-2/3 h-20 bg-obsidian rounded-xl border border-champagne/40 flex flex-col justify-center px-4 transform rotate-[0deg] z-20">
                <span className="font-mono text-sm text-champagne">MEDICAL</span>
              </div>
              <div className="shuffle-card absolute w-2/3 h-20 bg-obsidian rounded-xl border border-champagne/60 flex flex-col justify-center px-4 transform rotate-[5deg] z-30 translate-x-[10px] translate-y-[10px] shadow-lg">
                <span className="font-mono text-sm text-champagne">BANKKONTO</span>
              </div>
            </div>
            
            <p className="text-sm dark:text-gray-accessible text-gray-600 mt-auto relative z-10">Lizenz, Medical, Behörden, Bankkonto inklusive.</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card bg-slate rounded-3xl p-10 h-[400px] flex flex-col justify-between relative overflow-hidden group border border-[#333]">
            <div className="text-sm font-mono text-champagne/80 mb-4">02 // 100% legal & transparent</div>
            <h3 className="text-2xl font-inter font-bold z-10 object-contain">Telemetry Typewriter</h3>
            
            <div className="font-mono text-xs text-champagne/90 leading-relaxed flex flex-col gap-2 mt-8">
              <span className="block border-l-2 border-champagne pl-2">Keine Wegzugssteuer...</span>
              <span className="block border-l-2 border-champagne pl-2 animate-pulse">Keine 183-Tage-Regel...</span>
              <span className="block border-l-2 border-champagne pl-2 opacity-50">Deutsche Beratung...</span>
            </div>
            
            <p className="text-sm dark:text-gray-accessible text-gray-600 mt-auto">Keine Grauzonen, deutsche Steuerberatung.</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card bg-slate rounded-3xl p-10 h-[400px] flex flex-col justify-between relative overflow-hidden group border border-[#333]">
            <div className="text-sm font-mono text-champagne/80 mb-4">03 // Schnelle Umsetzung</div>
            <h3 className="text-2xl font-inter font-bold z-10">Cursor Protocol Scheduler</h3>
            
            <div className="mt-8 flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between border-b border-champagne/20 pb-2">
                <span className="text-champagne">Woche 1-2:</span>
                <span className="text-ivory">Dokumente</span>
              </div>
              <div className="flex justify-between border-b border-champagne/20 pb-2 bg-champagne/5 px-2">
                <span className="text-champagne">Woche 3-4:</span>
                <span className="text-ivory">Behörden</span>
              </div>
              <div className="flex justify-between border-b border-champagne/20 pb-2 opacity-50">
                <span className="text-champagne">Woche 5-6:</span>
                <span className="text-ivory">Bankkonto</span>
              </div>
            </div>

            <p className="text-sm dark:text-gray-accessible text-gray-600 mt-auto">In 4-6 Wochen steuerfrei leben.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;