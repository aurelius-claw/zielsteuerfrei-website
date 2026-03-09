import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-obsidian dark:text-gray-accessible text-gray-600 border-t border-[#333] font-mono text-xs">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="uppercase tracking-widest">System Operational</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 uppercase tracking-widest text-center">
          <a href="#" className="hover:text-champagne transition-colors">Impressum</a>
          <a href="#" className="hover:text-champagne transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-champagne transition-colors">Kontakt</a>
        </div>

        <div className="text-center md:text-right text-[#555]">
          &copy; {new Date().getFullYear()} Zielsteuerfrei.<br/>All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
