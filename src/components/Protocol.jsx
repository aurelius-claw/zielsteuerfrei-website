import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.protocol-step', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 bg-slate text-ivory border-t border-[#333]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair italic text-champagne mb-16 text-center">Sticky Stacking Archive</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="protocol-step bg-obsidian rounded-[2rem] p-10 h-[350px] relative border border-[#333] hover:border-champagne/50 transition-colors">
            <div className="text-5xl font-mono text-champagne/20 mb-8 font-bold absolute top-10 right-10 leading-none">01</div>
            <h3 className="text-2xl font-inter font-bold mb-4 relative z-10">Analyse</h3>
            <p className="text-sm dark:text-gray-accessible text-gray-600 relative z-10">Rotating double-helix - DNA/Steuer</p>
            
            <div className="mt-8 relative h-32 w-full flex items-center justify-center border border-dashed border-champagne/20 rounded-xl">
              <div className="animate-spin w-16 h-16 border-4 border-t-champagne border-r-transparent border-b-champagne/30 border-l-transparent rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="protocol-step bg-obsidian rounded-[2rem] p-10 h-[350px] relative border border-[#333] hover:border-champagne/50 transition-colors">
            <div className="text-5xl font-mono text-champagne/20 mb-8 font-bold absolute top-10 right-10 leading-none">02</div>
            <h3 className="text-2xl font-inter font-bold mb-4 relative z-10">Umsetzung</h3>
            <p className="text-sm dark:text-gray-accessible text-gray-600 relative z-10">Scanning laser-line across documents</p>
            
            <div className="mt-8 relative h-32 w-full bg-[#1A1A24] rounded-xl overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(201,168,76,0.1)_50%)] bg-[length:100%_4px]"></div>
              <div className="w-full h-[2px] bg-champagne absolute top-0 left-0 shadow-[0_0_10px_#C9A84C] animate-[scan_2s_ease-in-out_infinite_alternate]"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="protocol-step bg-obsidian rounded-[2rem] p-10 h-[350px] relative border border-[#333] hover:border-champagne/50 transition-colors flex flex-col justify-between">
            <div className="text-5xl font-mono text-champagne/20 mb-8 font-bold absolute top-10 right-10 leading-none">03</div>
            <h3 className="text-2xl font-inter font-bold mb-4 relative z-10">Lebensqualität</h3>
            <p className="text-sm dark:text-gray-accessible text-gray-600 relative z-10">Pulsing EKG waveform - Gesundheit/Freiheit</p>
            
            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
              <svg className="w-full h-24 stroke-champagne opacity-80 animate-pulse" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 H20 L25 5 L35 18 L45 0 L55 20 L65 5 L70 10 H100" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
