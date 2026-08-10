import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { openCalendlyWidget } from '../utils/tracking'
import {
  formatDateLong,
  formatReadTimeLong,
  getArticle,
} from '../data/articles'
import { getArticleDetail } from '../data/article-details'

// Converts German date "15. Februar 2026" → "2026-02-15" for schema.org
function openCalendly() {
  openCalendlyWidget('blog_article')
}

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()


  const article = getArticle(slug)
  const detail = getArticleDetail(slug)

  // Artikel noch nicht verfügbar
  if (!article || !detail) {
    return (
      <div className="animate-fade-in">
        <section className="pt-28 pb-24 bg-cream dark:bg-navy-950 text-center">
          <div className="max-w-content mx-auto px-4 md:px-6">
            <div className="eyebrow mb-5 justify-center">Bald verfügbar</div>
            <h1 className="font-display text-display-lg text-ink-900 dark:text-cream mb-6">
              Dieser Artikel wird gerade geschrieben
            </h1>
            <p className="text-ink-600 dark:text-ink-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Wir arbeiten daran, dir den bestmöglichen Inhalt zu liefern. Meld dich für den Newsletter an – dann bekommst du Bescheid, sobald der Artikel online ist.
            </p>
            <Link to="/blog" className="btn-secondary">
              ← Zurück zur Übersicht
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const isoDate = article.isoDate
  const isoUpdated = article.isoUpdated ?? isoDate

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription,
    "image": "https://zielsteuerfrei.de/images/og/og-default.jpg",
    "datePublished": isoDate,
    "dateModified": isoUpdated,
    "inLanguage": "de",
    "url": `https://zielsteuerfrei.de/blog/${slug}`,
    "keywords": article.category,
    "author": {
      "@type": "Organization",
      "name": "Ziel:steuerfrei",
      "url": "https://zielsteuerfrei.de"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ziel:steuerfrei",
      "logo": { "@type": "ImageObject", "url": "https://zielsteuerfrei.de/brand/logo-light.svg" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://zielsteuerfrei.de/blog/${slug}` }
  }

  const faqSchema = detail.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": detail.faq.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": { "@type": "Answer", "text": q.answer }
    }))
  } : null

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>{article.title} | Ziel:steuerfrei</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://zielsteuerfrei.de/blog/${slug}`} />
        {/* Open Graph */}
        <meta property="og:title" content={`${article.title} | Ziel:steuerfrei`} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={`https://zielsteuerfrei.de/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://zielsteuerfrei.de/images/og/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Ziel:steuerfrei" />
        <meta property="og:locale" content="de_DE" />
        {/* Article-specific */}
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:modified_time" content={isoUpdated} />
        <meta property="article:section" content={article.category} />
        <meta property="article:author" content="Ziel:steuerfrei" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${article.title} | Ziel:steuerfrei`} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content="https://zielsteuerfrei.de/images/og/og-default.jpg" />
        {/* BreadcrumbList schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zielsteuerfrei.de" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://zielsteuerfrei.de/blog" },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://zielsteuerfrei.de/blog/${slug}` }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="breadcrumb">
            <Link to="/blog" className="hover:text-gold transition-colors">← Blog</Link>
            <span>/</span>
            <span className="badge-gold">{article.category}</span>
          </div>

          <h1 className="font-display text-display-lg text-ink-900 dark:text-cream mb-6 text-balance">
            {article.title}
          </h1>

          <p className="text-lg text-ink-600 dark:text-ink-300 mb-8 max-w-2xl leading-relaxed">
            {article.metaDescription}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500 dark:text-ink-300">
            <span>{formatDateLong(article.isoDate)}</span>
            <span aria-hidden="true">·</span>
            <span>{formatReadTimeLong(article.readTimeMinutes)} Lesezeit</span>
            {article.isoUpdated && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-gold">Rechtsstand: {formatDateLong(article.isoUpdated)}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:text-ink-900 dark:prose-headings:text-cream
              prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-p:leading-relaxed
              prose-li:text-ink-600 dark:prose-li:text-ink-300
              prose-strong:text-ink-900 dark:prose-strong:text-cream
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          />

          {detail.sources && detail.sources.length > 0 && (
            <div className="mt-12 rounded-2xl border border-ink-100 bg-cream-50 p-6 dark:border-navy-800 dark:bg-navy-900">
              <div className="eyebrow mb-3">Quellen &amp; Rechtsstand</div>
              <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                Dieser Beitrag ist eine allgemeine Information und ersetzt keine Steuer- oder
                Rechtsberatung. Wir sind keine Steuerberater. Geprüfte Primärquellen:
              </p>
              <ul className="source-list">
                {detail.sources.map(source => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer nofollow">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ */}
          {detail.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-ink-100 dark:border-navy-800">
              <div className="eyebrow mb-3">FAQ</div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-8">
                Häufige Fragen
              </h2>
              <div className="space-y-4">
                {detail.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">
                      {item.question}
                    </h3>
                    <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 card-gold p-8 text-center">
            <h3 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
              Brauchst du persönliche Beratung?
            </h3>
            <p className="text-ink-600 dark:text-ink-300 mb-8 max-w-lg mx-auto leading-relaxed">
              Jede Situation ist anders. In einem kostenlosen Strategie-Call klären wir, ob eine VAE-Firmengründung für dich passt – und wie du Steuern legal optimierst.
            </p>
            <button
              onClick={openCalendly}
              className="btn-primary"
            >
              Kostenlosen Termin buchen
            </button>
          </div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </div>
  )
}

export default BlogArticlePage
