import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import UeberUnsPage from './pages/UeberUnsPage';
import HomePage from './pages/HomePage';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set initial theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Apply theme class to document
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Global Noise Overlay
    const noise = document.createElement('div');
    noise.style.position = 'fixed';
    noise.style.top = '0';
    noise.style.left = '0';
    noise.style.width = '100vw';
    noise.style.height = '100vh';
    noise.style.pointerEvents = 'none';
    noise.style.zIndex = '9999';
    noise.style.opacity = '0.05';
    noise.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")';
    document.body.appendChild(noise);

    return () => {
      document.body.removeChild(noise);
    };
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="dark:bg-dark-bg bg-light-bg dark:text-dark-text text-light-text min-h-screen font-inter antialiased selection:bg-champagne selection:text-dark-bg transition-colors duration-300">
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;