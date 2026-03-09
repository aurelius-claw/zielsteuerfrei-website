import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { SunIcon, MoonIcon } from './SVGIcons';
import { useTheme } from '../context/ThemeContext';

const MENU_ITEMS = [
  { label: 'Über Uns', to: '/ueber-uns' },
  { label: 'Philosophie', to: '/philosophie' },
  { label: 'Ajman-Guide', to: '/ajman-guide' },
  { label: 'Steuer-Wissen', to: '/steuer-wissen' },
  { label: 'Prozess', to: '/prozess' },
  { label: 'Blog', to: '/blog' },
  { label: 'Kontakt', to: '/kontakt' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const linkClass = 'hover:text-champagne transition-colors';

  return (
    <nav ref={navRef} className="fixed w-full z-50 px-6 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="dark:text-ivory text-dark-text font-bold tracking-tight text-xl uppercase tracking-widest">
          Ziel<span className="text-champagne">:</span>steuerfrei
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest dark:text-gray-accessible text-gray-600">
          <Link to="/" className={linkClass}>Home</Link>
          <Link to="/preis-rechner" className={linkClass}>Preise</Link>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={`flex items-center gap-1 ${linkClass} focus:outline-none`}
            >
              Menü
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 dark:bg-dark-card bg-white border dark:border-champagne/10 border-gray-200 rounded-2xl shadow-2xl py-2 overflow-hidden">
                {MENU_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 font-mono text-xs uppercase tracking-widest dark:text-gray-accessible text-gray-600 hover:text-champagne hover:bg-champagne/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border dark:border-champagne/30 border-champagne/50 hover:bg-champagne/10 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button className="hidden md:block border border-champagne text-champagne px-8 py-3 rounded-full text-sm font-semibold hover:bg-champagne hover:text-dark-bg transition-colors">
            Erstberatung
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 dark:text-gray-accessible text-gray-600 hover:text-champagne transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 mx-auto max-w-[1400px] dark:bg-dark-card bg-white border dark:border-champagne/10 border-gray-200 rounded-2xl shadow-2xl py-4 px-2">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block px-5 py-3 font-mono text-xs uppercase tracking-widest dark:text-gray-accessible text-gray-600 hover:text-champagne transition-colors">
            Home
          </Link>
          <Link to="/preis-rechner" onClick={() => setMobileOpen(false)} className="block px-5 py-3 font-mono text-xs uppercase tracking-widest dark:text-gray-accessible text-gray-600 hover:text-champagne transition-colors">
            Preise
          </Link>
          <div className="my-2 border-t dark:border-champagne/10 border-gray-100" />
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block px-5 py-3 font-mono text-xs uppercase tracking-widest dark:text-gray-accessible text-gray-600 hover:text-champagne transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 px-5">
            <button className="w-full border border-champagne text-champagne px-8 py-3 rounded-full text-sm font-semibold hover:bg-champagne hover:text-dark-bg transition-colors">
              Erstberatung
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
