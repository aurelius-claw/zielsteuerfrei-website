import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#0F172A] min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight font-['Playfair_Display',serif]"
          style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', Times, serif" }}
        >
          Steuerfrei leben mit Ajman Firmengründung
        </h1>
        <p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto font-light tracking-wide font-['Inter',sans-serif]"
          style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
        >
          Komplettpaket ab €6.990 – Lizenz, Medical, Behörden, Bankkonto inklusive
        </p>
        <button 
          className="bg-[#D4AF37] hover:bg-[#c19e2e] active:bg-[#b3922a] text-[#0F172A] px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50"
          aria-label="Kostenfreie Erstberatung anfordern"
        >
          Kostenfreie Erstberatung anfordern
        </button>
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-white/70 font-medium">
          <span>Deutsche Beratung</span>
          <span className="hidden sm:inline">•</span>
          <span>100% legal</span>
          <span className="hidden sm:inline">•</span>
          <span>Keine 183-Tage-Regel</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
