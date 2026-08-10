import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  articles,
  categories,
  type CategoryFilter,
  formatDateShort,
  formatReadTimeShort,
} from '../data/articles'

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Alle')
  const [newsletterState, setNewsletterState] = useState<'idle' | 'sent'>('idle')
  const [email, setEmail] = useState('')

  const visibleArticles = useMemo(
    () => (activeCategory === 'Alle' ? articles : articles.filter(a => a.category === activeCategory)),
    [activeCategory]
  )

  const featured = articles.filter(a => a.featured)

  const handleNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent('Newsletter-Anmeldung')
    const body = encodeURIComponent(
      `Bitte tragt mich in den Newsletter ein.\n\nE-Mail: ${email}`
    )
    window.location.href = `mailto:info@zielsteuerfrei.de?subject=${subject}&body=${body}`
    setNewsletterState('sent')
  }

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Blog | VAE Steuerwissen & Firmengründung UAE | Ziel:steuerfrei</title>
        <meta name="description" content="Ratgeber für Unternehmer, die eine VAE-Firma oder einen Wegzug prüfen: 183-Tage-Regel, Wegzugssteuer, Free-Zone-Vergleich, Bankkonto und Corporate Tax." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zielsteuerfrei.de/blog" />
        <meta property="og:title" content="Blog | VAE Steuerwissen & Firmengründung UAE" />
        <meta property="og:description" content="Aktuelle Artikel zu Steuern, UAE-Firmengründung, Free Zones und rechtlichen Updates für deutsche Unternehmer." />
        <meta property="og:url" content="https://zielsteuerfrei.de/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zielsteuerfrei.de/images/og/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | VAE Steuerwissen & Firmengründung UAE | Ziel:steuerfrei" />
        <meta name="twitter:description" content="Steuer-Know-how für Auswanderer: 183-Tage-Regel, Wegzugssteuer, UAE Free Zone Vergleich." />
        <meta name="twitter:image" content="https://zielsteuerfrei.de/images/og/og-default.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zielsteuerfrei.de' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zielsteuerfrei.de/blog' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Ziel:steuerfrei Blog',
          description: 'Artikel zu Steuern, Auswanderung, VAE Free Zones und rechtlichen Updates.',
          url: 'https://zielsteuerfrei.de/blog',
          inLanguage: 'de',
          publisher: {
            '@type': 'Organization',
            name: 'Ziel:steuerfrei',
            logo: {
              '@type': 'ImageObject',
              url: 'https://zielsteuerfrei.de/brand/logo-light.svg',
            },
          },
          blogPost: articles.map(article => ({
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.isoDate,
            dateModified: article.isoUpdated ?? article.isoDate,
            url: `https://zielsteuerfrei.de/blog/${article.slug}`,
            author: { '@type': 'Organization', name: 'Ziel:steuerfrei' },
          })),
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/hero-business-bay-real.webp"
            alt="Dubai Business Bay als Hintergrund für VAE-Ratgeber"
            className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.12]"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-cream/78 dark:bg-navy-950/82" />
        </div>

        <div className="max-w-wide mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Ratgeber für VAE-Gründer
          </div>

          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Fragen klären,<br />
            <span className="text-highlight">bevor du gründest</span>
          </h1>

          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up animation-delay-200">
            Artikel zu Wegzug, Free Zones, Bankkonto, Corporate Tax und den typischen Fehlern
            deutscher Unternehmer vor einer VAE-Gründung. Mit Quellenangaben und Rechtsstand.
          </p>

          {/* Kategorie-Filter */}
          <div
            className="flex flex-wrap justify-center gap-3 animate-fade-up animation-delay-300"
            role="group"
            aria-label="Artikel nach Kategorie filtern"
          >
            {categories.map(cat => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    isActive
                      ? 'border-gold bg-gold text-white shadow-gold'
                      : 'border-gold/30 text-ink-700 dark:text-ink-300 hover:border-gold hover:text-gold dark:hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Empfohlene Artikel */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="eyebrow mb-3">Ausgewählt</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-10">
            Empfohlene Artikel
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map(article => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group card p-8 hover:border-gold/30"
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="badge-gold">{article.category}</span>
                  <span className="text-sm text-ink-500 dark:text-ink-300">
                    {formatDateShort(article.isoDate)} · {formatReadTimeShort(article.readTimeMinutes)}
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
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alle Artikel */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="eyebrow mb-3" aria-live="polite">
            {activeCategory === 'Alle'
              ? `Alle ${articles.length} Artikel`
              : `${visibleArticles.length} Artikel in „${activeCategory}“`}
          </div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-10">
            {activeCategory === 'Alle' ? 'Gesamtes Archiv' : activeCategory}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map(article => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group card p-6 hover:border-gold/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-gold">{article.category}</span>
                  <span className="text-xs text-ink-500 dark:text-ink-300">{formatReadTimeShort(article.readTimeMinutes)}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-ink-900 dark:text-cream mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-ink-600 dark:text-ink-300 mb-4 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-ink-100 dark:border-navy-800">
                  <span className="text-xs text-ink-500 dark:text-ink-300">
                    {article.isoUpdated
                      ? `Aktualisiert ${formatDateShort(article.isoUpdated)}`
                      : formatDateShort(article.isoDate)}
                  </span>
                  <span className="text-gold text-sm font-semibold">Lesen →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-12 border-t border-ink-100 dark:border-navy-800">
            <div className="max-w-2xl mx-auto text-center">
              <div className="eyebrow mb-3 justify-center">Newsletter</div>
              <h3 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
                Neue Artikel direkt ins Postfach
              </h3>
              <p className="text-ink-600 dark:text-ink-300 mb-8 leading-relaxed">
                Wir schreiben nur, wenn sich etwas Relevantes ändert – etwa an der Wegzugsbesteuerung
                oder an den Free-Zone-Regeln. Kein fester Rhythmus, kein Verkaufsdruck.
              </p>

              {newsletterState === 'sent' ? (
                <div className="card-gold p-6 text-left">
                  <p className="font-semibold text-ink-900 dark:text-cream">
                    Fast geschafft
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    Dein E-Mail-Programm sollte sich mit einer vorbereiteten Nachricht geöffnet haben.
                    Schick sie einfach ab – wir tragen dich dann persönlich ein. Falls nichts passiert
                    ist, schreib uns direkt an{' '}
                    <a href="mailto:info@zielsteuerfrei.de" className="text-gold hover:underline">
                      info@zielsteuerfrei.de
                    </a>.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleNewsletter}>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Deine E-Mail-Adresse
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Deine E-Mail-Adresse"
                    className="flex-1 px-5 py-3 rounded-xl bg-white dark:bg-navy-800 border border-ink-100 dark:border-navy-700 text-ink-900 dark:text-cream placeholder-ink-500 dark:placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Anmelden
                  </button>
                </form>
              )}

              <p className="text-sm text-ink-500 dark:text-ink-300 mt-4">
                Die Anmeldung läuft per E-Mail an uns. Wir nutzen deine Adresse ausschließlich für
                den Newsletter und du kannst jederzeit widersprechen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
