import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Team from '../components/Team';

gsap.registerPlugin(ScrollTrigger);

const UeberUnsPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.hero-subtitle', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      });

      // Content animation
      gsap.from('.content-card', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Über Uns - Ziel:steuerfrei Team & Expertise</title>
        <meta name="description" content="Deutsches Team mit lokaler Expertise in Ajman/Dubai Firmengründungen. Transparent, legal, persönlich. Steueroptimierung für Unternehmer." />
        <meta property="og:title" content="Über Uns - Ziel:steuerfrei Team & Expertise" />
        <meta property="og:description" content="Deutsches Team mit lokaler Expertise in Ajman/Dubai Firmengründungen." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ziel:steuerfrei",
            "description": "Steueroptimierung und Firmengründung in Ajman/Dubai",
            "url": "https://zielsteuerfrei.de",
            "logo": "https://zielsteuerfrei.de/logo.png",
            "founder": [
              {
                "@type": "Person",
                "name": "Martin",
                "jobTitle": "Strategie & Struktur"
              },
              {
                "@type": "Person",
                "name": "Neno",
                "jobTitle": "Lokale Expertise"
              },
              {
                "@type": "Person",
                "name": "Juljana",
                "jobTitle": "Steuerrecht & Compliance"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ajman",
              "addressRegion": "Vereinigte Arabische Emirate"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section with Image */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center px-6 py-32 dark:bg-dark-bg bg-light-bg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pages/ueber-uns.png" 
            alt="Ziel:steuerfrei Team - Deutsche Expertise für Ajman Firmengründung"
            className="w-full h-full object-cover opacity-20 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 dark:from-black-950/70 dark:via-black-950/50 dark:to-black-950/70" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/20 via-transparent to-champagne/5 dark:from-navy-900/40 dark:to-champagne/10 z-[1]"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-playfair italic text-champagne mb-6 leading-tight">
            Unser Team
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl dark:text-gray-accessible text-gray-600 max-w-3xl mx-auto mb-12">
            Deutsche Präzision, lokale Expertise. Drei Persönlichkeiten, eine Mission: Ihre Steueroptimierung in Ajman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#team" className="inline-flex items-center justify-center px-8 py-4 bg-champagne text-obsidian font-bold rounded-full hover:bg-champagne/90 transition-colors">
              Team kennenlernen
            </a>
            <a href="/philosophie" className="inline-flex items-center justify-center px-8 py-4 border-2 border-champagne text-champagne font-bold rounded-full hover:bg-champagne/10 transition-colors">
              Unsere Philosophie
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-[1400px] mx-auto">
          <Team />
        </div>
      </section>

      {/* Philosophy & Values */}
      <section ref={contentRef} className="py-32 px-6 dark:bg-dark-card bg-light-card">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Philosophy */}
            <div className="content-card">
              <h2 className="text-4xl font-playfair italic text-champagne mb-6">Unsere Philosophie</h2>
              <div className="space-y-6">
                <p className="text-lg dark:text-gray-accessible text-gray-600">
                  Steueroptimierung ist mehr als Zahlen – es ist strategische Freiheit. Wir kombinieren deutsche Gründlichkeit mit lokaler Marktkenntnis, um Ihnen legale, nachhaltige Lösungen zu bieten.
                </p>
                <div className="pl-6 border-l-2 border-champagne/30">
                  <h3 className="text-2xl font-bold mb-3 dark:text-ivory text-dark-text">Warum Ajman?</h3>
                  <p className="dark:text-gray-accessible text-gray-600">
                    Ajman bietet als eines der sieben Emirate der VAE einzigartige Vorteile: 0% Körperschaftssteuer, 100% ausländisches Eigentum, und strategische Lage zwischen Dubai und Sharjah.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="content-card">
              <h2 className="text-4xl font-playfair italic text-champagne mb-6">Unsere Werte</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-ivory text-dark-text">Transparenz & Legalität</h3>
                    <p className="dark:text-gray-accessible text-gray-600">
                      Jede Lösung ist 100% legal und vollständig transparent dokumentiert. Keine Grauzonen, keine Überraschungen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-ivory text-dark-text">Deutsche Beratungsqualität</h3>
                    <p className="dark:text-gray-accessible text-gray-600">
                      Gründlichkeit, Präzision und langfristige Partnerschaft – deutsche Werte in internationalem Kontext.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-ivory text-dark-text">Persönliche Betreuung</h3>
                    <p className="dark:text-gray-accessible text-gray-600">
                      Sie sprechen direkt mit dem Team – keine Callcenter, keine Vermittler. Wir begleiten Sie von der ersten Beratung bis zur erfolgreichen Umsetzung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 dark:bg-dark-bg bg-light-bg">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair italic text-champagne mb-8">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl dark:text-gray-accessible text-gray-600 max-w-3xl mx-auto mb-12">
            Vereinbaren Sie eine kostenfreie Erstberatung und erfahren Sie, wie Sie Ihre Steuerlast legal optimieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-champagne text-obsidian font-bold text-lg rounded-full hover:bg-champagne/90 transition-colors shadow-xl">
              Kostenfreie Beratung buchen
            </a>
            <a href="/ajman-guide" className="inline-flex items-center justify-center px-10 py-5 border-2 border-champagne text-champagne font-bold text-lg rounded-full hover:bg-champagne/10 transition-colors">
              Ajman-Guide lesen
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UeberUnsPage;