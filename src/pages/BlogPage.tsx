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

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/blog.png"
            alt="Blog - Steuer-Wissen und Praxis für Ajman Firmengründung"
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.08]"
          />
        </div>

        <div className="max-w-wide mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Steuer‑Wissen & Praxis
          </div>

          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Blog –<br />
            <span className="text-highlight">Steuerfrei leben lernen</span>
          </h1>

          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up animation-delay-200">
            Tiefgehende Artikel zu Steuern, Auswanderung, Ajman Free Zone und rechtlichen Updates.
            Kein Marketing-Hype, nur Fakten, die du brauchst.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up animation-delay-300">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-semibold border border-gold/30 text-ink-700 dark:text-ink-300 hover:border-gold hover:text-gold dark:hover:text-gold transition-all duration-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="eyebrow mb-3">Ausgewählt</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-10">
            Empfohlene Artikel
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group card p-8 hover:border-gold/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="badge-gold">{article.category}</span>
                  <span className="text-sm text-ink-500 dark:text-ink-300">
                    {article.date} · {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-cream mb-4 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>

                <p className="text-ink-600 dark:text-ink-300 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all duration-200">
                  Weiterlesen
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="eyebrow mb-3">Alle {articles.length} Artikel</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-10">
            Gesamtes Archiv
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group card p-6 hover:border-gold/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-gold">{article.category}</span>
                  <span className="text-xs text-ink-500 dark:text-ink-300">{article.readTime}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-ink-900 dark:text-cream mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 mb-4 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-ink-100 dark:border-navy-800">
                  <span className="text-xs text-ink-500 dark:text-ink-300">{article.date}</span>
                  <span className="text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                    Lesen →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 pt-12 border-t border-ink-100 dark:border-navy-800">
            <div className="max-w-2xl mx-auto text-center">
              <div className="eyebrow mb-3 justify-center">Newsletter</div>
              <h3 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
                Neue Artikel direkt ins Postfach
              </h3>
              <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
                Erhalte monatlich die wichtigsten Updates zu Steuern, Ajman und Auswanderung – ohne Spam.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="flex-1 px-5 py-3 rounded-xl bg-white dark:bg-navy-800 border border-ink-100 dark:border-navy-700 text-ink-900 dark:text-cream placeholder-ink-500 dark:placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Anmelden
                </button>
              </form>

              <p className="text-sm text-ink-500 dark:text-ink-300 mt-4">
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
