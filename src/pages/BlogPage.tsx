import React from 'react'
import { Link } from 'react-router-dom'

const BlogPage: React.FC = () => {
  const articles = [
    {
      slug: 'ajman-vs-dubai',
      title: 'Ajman vs Dubai: Ehrlicher Vergleich für deutsche Unternehmer',
      excerpt: 'Ajman kostet 46% weniger als Dubai – mit derselben Legalität. Hier die echten Zahlen, ohne Marketing-Hype.',
      date: '15.02.2026',
      readTime: '8 Min',
      category: 'Kosten',
      featured: true
    },
    {
      slug: 'wegzugsbesteuerung',
      title: 'Wegzugssteuer 2026: Neue Regeln für Investmentfonds',
      excerpt: 'Die Reform 2025/2026 ändert, wie Fonds bei Auswanderung besteuert werden. So schützt du dein Vermögen.',
      date: '10.02.2026',
      readTime: '10 Min',
      category: 'Steuern',
      featured: true
    },
    {
      slug: '183-tage-regel',
      title: '183‑Tage‑Regel: So funktioniert sie wirklich',
      excerpt: 'Die Regel gilt nicht immer. Hier erfährst du, wann sie greift – und wann du sie clever nutzen kannst.',
      date: '05.02.2026',
      readTime: '7 Min',
      category: 'Steuern'
    },
    {
      slug: 'paypal-stripe-uae',
      title: 'PayPal & Stripe in den VAE nutzen – geht das?',
      excerpt: 'Als Ajman-Unternehmer brauchst du Zahlungsabwicklung. So richtest du sie für internationale Kunden ein.',
      date: '01.02.2026',
      readTime: '6 Min',
      category: 'Praktisch'
    },
    {
      slug: 'ajman-freezone-kosten-2026',
      title: 'Ajman Free Zone Kosten 2026: Komplett transparent',
      excerpt: 'Alle Gebühren aufgeschlüsselt – inklusive der versteckten Posten, die andere nicht nennen.',
      date: '25.01.2026',
      readTime: '9 Min',
      category: 'Kosten'
    },
    {
      slug: 'steuerfalle-183-tage',
      title: 'Steuerfalle 183‑Tage‑Regel: Der Lebensmittelpunkt zählt',
      excerpt: 'Nicht die reine Tag-Zählung entscheidet, sondern wo dein Leben wirklich stattfindet. So beweist du es.',
      date: '20.01.2026',
      readTime: '8 Min',
      category: 'Steuern'
    },
    {
      slug: 'dubai-mythos-vs-ajman-realitaet',
      title: 'Dubai-Mythos vs Ajman-Realität: Was wirklich zählt',
      excerpt: 'Prestige oder Pragmatismus? Für deutsche Unternehmer ist die Antwort oft klarer als gedacht.',
      date: '15.01.2026',
      readTime: '7 Min',
      category: 'Vergleich'
    },
    {
      slug: 'steuerfallen',
      title: '5 Steuerfallen für deutsche Auswanderer',
      excerpt: 'Diese Fehler kosten dich schnell fünfstellige Beträge. So vermeidest du sie von Anfang an.',
      date: '10.01.2026',
      readTime: '11 Min',
      category: 'Steuern'
    },
    {
      slug: 'dokumente-checkliste',
      title: 'Dokumenten-Checkliste: Alles für die VAE-Gründung',
      excerpt: 'Von der Passkopie bis zur Aktivitätsbeschreibung – hier fehlt nichts. Inklusive Download-PDF.',
      date: '05.01.2026',
      readTime: '5 Min',
      category: 'Praktisch'
    },
    {
      slug: 'vae-firma-gruenden',
      title: 'VAE Firma gründen: Schritt für Schritt',
      excerpt: 'Der komplette Prozess von der Idee bis zur aktiven Lizenz – realistisch, ohne Beschönigung.',
      date: '01.01.2026',
      readTime: '12 Min',
      category: 'Prozess'
    },
    {
      slug: 'uae-corporate-tax',
      title: 'UAE Corporate Tax: Was deutsche Unternehmer wissen müssen',
      excerpt: 'Seit 2023 gibt es Körperschaftsteuer in den VAE. Aber mit 0% für viele – hier die Details.',
      date: '28.12.2025',
      readTime: '9 Min',
      category: 'Steuern'
    }
  ]

  const categories = ['Alle', 'Steuern', 'Kosten', 'Praktisch', 'Prozess', 'Vergleich']

  return (
    <div className="animate-fade-in">
      {/* Hero with Background Image */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-black-50 dark:from-black-950 dark:to-black-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pages/blog.png" 
            alt="Blog - Steuer-Wissen und Praxis für Ajman Firmengründung"
            className="w-full h-full object-cover opacity-10 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-black-950/80 dark:via-black-950/60 dark:to-black-950/80" />
        </div>
        
        <div className="container-narrow px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-black-800 dark:text-silver-300">Steuer‑Wissen & Praxis</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black-900 dark:text-silver-100 mb-6 leading-tight">
            Blog –<br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue bg-clip-text text-transparent">
              Steuerfrei leben lernen
            </span>
          </h1>
          
          <p className="text-xl text-black-800 dark:text-silver-200 max-w-3xl mx-auto mb-8">
            Tiefgehende Artikel zu Steuern, Auswanderung, Ajman Free Zone und rechtlichen Updates. 
            Kein Marketing-Hype, nur Fakten, die du brauchst.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-black-200 dark:bg-black-800 text-black-800 dark:text-silver-200 hover:bg-black-200 dark:hover:bg-black-700 hover:text-black-900 dark:hover:text-silver-100"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container-wide px-4">
          <h2 className="text-3xl font-display font-bold text-black-900 dark:text-silver-100 mb-8">
            Ausgewählte Artikel
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {articles.filter(a => a.featured).map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block bg-white dark:bg-black-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-black-100 dark:border-black-800 hover:scale-[1.02]"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 text-brand-purple dark:text-brand-pink text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-black-500 dark:text-silver-400">
                      {article.date} · {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-black-900 dark:text-silver-100 mb-4 group-hover:text-brand-purple dark:group-hover:text-brand-pink transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-black-800 dark:text-silver-200 mb-6">
                    {article.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-brand-purple dark:text-brand-pink font-medium group-hover:gap-3 transition-all">
                    Weiterlesen
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-12 bg-gradient-to-b from-black-50 to-white dark:from-black-900 dark:to-black-950">
        <div className="container-wide px-4">
          <h2 className="text-3xl font-display font-bold text-black-900 dark:text-silver-100 mb-8">
            Alle Artikel
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-child">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block bg-white dark:bg-black-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-black-100 dark:border-black-800 hover:border-brand-purple/30"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 text-brand-purple dark:text-brand-pink text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-black-500 dark:text-silver-400">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-black-900 dark:text-silver-100 mb-3 group-hover:text-brand-purple dark:group-hover:text-brand-pink transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-black-800 dark:text-silver-200 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-black-100 dark:border-black-800">
                    <span className="text-sm text-black-500 dark:text-silver-400">
                      {article.date}
                    </span>
                    <span className="text-brand-purple dark:text-brand-pink text-sm font-medium">
                      Lesen →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Newsletter CTA */}
          <div className="mt-16 pt-12 border-t border-black-100 dark:border-black-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-display font-bold text-black-900 dark:text-silver-100 mb-4">
                Neue Artikel direkt ins Postfach
              </h3>
              <p className="text-black-800 dark:text-silver-200 mb-8">
                Erhalte monatlich die wichtigsten Updates zu Steuern, Ajman und Auswanderung – ohne Spam.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="flex-1 px-5 py-3 rounded-lg bg-white dark:bg-black-800 border border-black-200 dark:border-black-700 text-black-900 dark:text-silver-100 placeholder-black-400 dark:placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Anmelden
                </button>
              </form>
              
              <p className="text-sm text-black-500 dark:text-silver-400 mt-4">
                Kein Spam. Jederzeit abbestellbar. DSGVO-konform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Ziel:steuerfrei Blog",
          "description": "Tiefgehende Artikel zu Steuern, Auswanderung, Ajman Free Zone und rechtlichen Updates.",
          "url": "https://zielsteuerfrei.de/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Ziel:steuerfrei",
            "logo": "https://zielsteuerfrei.de/logo.png"
          },
          "blogPost": articles.map(article => ({
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "datePublished": article.date,
            "dateModified": article.date,
            "url": `https://zielsteuerfrei.de/blog/${article.slug}`,
            "author": {
              "@type": "Organization",
              "name": "Ziel:steuerfrei"
            }
          }))
        })}
      </script>
    </div>
  )
}

export default BlogPage