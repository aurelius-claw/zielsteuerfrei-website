/**
 * Metadaten aller Blogartikel - die einzige Quelle fuer Titel, Datum,
 * Lesezeit und Kategorie. Uebersicht und Detailseite lesen von hier,
 * damit beide Ansichten nicht auseinanderlaufen koennen.
 *
 * Die Volltexte liegen bewusst in ./article-details, damit die
 * Blog-Uebersicht nicht das komplette Artikel-HTML mitladen muss.
 */

export const categories = ['Alle', 'Steuern', 'Kosten', 'Praktisch', 'Prozess', 'Vergleich'] as const

export type CategoryFilter = (typeof categories)[number]
export type ArticleCategory = Exclude<CategoryFilter, 'Alle'>

export interface ArticleSource {
  label: string
  url: string
}

export interface ArticleFaq {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  category: ArticleCategory
  /** Erstveroeffentlichung im Format YYYY-MM-DD */
  isoDate: string
  /** Zuletzt gepruefter Rechtsstand im Format YYYY-MM-DD */
  isoUpdated?: string
  readTimeMinutes: number
  featured?: boolean
  /** Kurzer Teaser fuer Uebersicht und Karten */
  excerpt: string
  /** Meta-Description und Intro der Artikelseite */
  metaDescription: string
}

const MONTHS_LONG = [
  'Januar',
  'Februar',
  'M\u00e4rz',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
] as const

/** 2026-02-15 -> 15.02.2026 */
export function formatDateShort(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day}.${month}.${year}`
}

/** 2026-02-15 -> 15. Februar 2026 */
export function formatDateLong(iso: string): string {
  const [year, month, day] = iso.split('-')
  const name = MONTHS_LONG[Number(month) - 1] ?? month
  return `${Number(day)}. ${name} ${year}`
}

export function formatReadTimeShort(minutes: number): string {
  return `${minutes} Min`
}

export function formatReadTimeLong(minutes: number): string {
  return `${minutes} Minuten`
}

export const articles: Article[] = [
  {
    slug: 'ajman-vs-dubai',
    title: 'Ajman vs Dubai: Ehrlicher Vergleich für deutsche Unternehmer',
    category: 'Kosten',
    isoDate: '2026-02-15',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 8,
    featured: true,
    excerpt:
      'Dubai ist bekannt, Ajman ist deutlich günstiger. Hier stehen die Zahlen nebeneinander, damit du den Unterschied einordnen kannst.',
    metaDescription:
      'Ajman kostet rund 48 % weniger als Dubai – mit derselben Legalität. Firmengründung UAE: Die echten Zahlen im Vergleich, ohne Marketing-Hype.',
  },
  {
    slug: 'wegzugsbesteuerung',
    title: 'Wegzugssteuer 2026: Was für GmbH-Anteile, ETFs und Fonds wirklich gilt',
    category: 'Steuern',
    isoDate: '2026-02-10',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 11,
    featured: true,
    excerpt:
      'Seit 2025 erfasst die Wegzugsbesteuerung auch Fondsanteile – aber erst ab klaren Schwellen. Und die Steuer lässt sich in sieben zinslose Jahresraten strecken.',
    metaDescription:
      'Seit 2025 erfasst die Wegzugsbesteuerung auch Fondsanteile – aber erst ab klaren Schwellen. Und: Die Steuer lässt sich in sieben zinslose Jahresraten strecken, auch beim Wegzug in die VAE.',
  },
  {
    slug: '183-tage-regel',
    title: '183-Tage-Regel: Warum sie für VAE-Auswanderer meist gar nicht gilt',
    category: 'Steuern',
    isoDate: '2026-02-05',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 9,
    excerpt:
      'Die Regel stammt aus Doppelbesteuerungsabkommen – und mit den VAE hat Deutschland seit 2022 keines mehr. Was stattdessen entscheidet.',
    metaDescription:
      'Die 183-Tage-Regel stammt aus Doppelbesteuerungsabkommen – und mit den VAE hat Deutschland seit 2022 keines mehr. Was stattdessen über deine Steuerpflicht entscheidet.',
  },
  {
    slug: 'paypal-stripe-uae',
    title: 'PayPal & Stripe in den VAE nutzen – geht das?',
    category: 'Praktisch',
    isoDate: '2026-02-01',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 6,
    excerpt:
      'Als Unternehmer in den VAE brauchst du Zahlungsabwicklung. So richtest du sie für internationale Kunden ein.',
    metaDescription:
      'Als Unternehmer in den VAE brauchst du Zahlungsabwicklung. So richtest du PayPal & Stripe für internationale Kunden ein.',
  },
  {
    slug: 'ajman-freezone-kosten-2026',
    title: 'Ajman Free Zone Kosten 2026: Komplett transparent',
    category: 'Kosten',
    isoDate: '2026-01-25',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 9,
    excerpt:
      'Alle Gebühren aufgeschlüsselt – inklusive der versteckten Posten, die andere nicht nennen.',
    metaDescription:
      'Ajman Free Zone Kosten 2026 komplett transparent – alle Gebühren aufgeschlüsselt, inklusive der versteckten Posten, die andere nicht nennen.',
  },
  {
    slug: 'steuerfalle-183-tage',
    title: 'Steuerfalle 183-Tage-Regel: Der Lebensmittelpunkt zählt',
    category: 'Steuern',
    isoDate: '2026-01-20',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 8,
    excerpt:
      'Nicht die reine Tag-Zählung entscheidet, sondern wo dein Leben wirklich stattfindet. So beweist du es.',
    metaDescription:
      'Steuerfalle 183-Tage-Regel: Nicht die reine Tag-Zählung entscheidet, sondern wo dein Leben wirklich stattfindet. Erkenntnisse für deine VAE-Strategie.',
  },
  {
    slug: 'dubai-mythos-vs-ajman-realitaet',
    title: 'Dubai-Mythos vs Ajman-Realität: Was wirklich zählt',
    category: 'Vergleich',
    isoDate: '2026-01-15',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 7,
    excerpt:
      'Prestige oder Pragmatismus? Für deutsche Unternehmer ist die Antwort oft klarer als gedacht.',
    metaDescription:
      'Dubai-Mythos vs Ajman-Realität: Prestige oder Pragmatismus? Für deutsche Unternehmer ist die Antwort oft klarer als gedacht. Firmengründung UAE im Vergleich.',
  },
  {
    slug: 'steuerfallen',
    title: '6 Steuerfallen für deutsche Auswanderer',
    category: 'Steuern',
    isoDate: '2026-01-10',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 11,
    excerpt:
      'Diese Fehler kosten dich schnell fünfstellige Beträge – inklusive der erweiterten beschränkten Steuerpflicht, die kaum jemand kennt.',
    metaDescription:
      '5 Steuerfallen für deutsche Auswanderer in die VAE: Diese Fehler kosten dich schnell fünfstellige Beträge. So vermeidest du sie von Anfang an.',
  },
  {
    slug: 'dokumente-checkliste',
    title: 'Dokumenten-Checkliste: Alles für die VAE-Gründung',
    category: 'Praktisch',
    isoDate: '2026-01-05',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 5,
    excerpt:
      'Von der Passkopie bis zur Aktivitätsbeschreibung – hier fehlt nichts, sortiert nach Gründungsphase.',
    metaDescription:
      'Dokumenten-Checkliste für die VAE-Firmengründung: Von der Passkopie bis zur Aktivitätsbeschreibung – hier fehlt nichts.',
  },
  {
    slug: 'vae-firma-gruenden',
    title: 'VAE Firma gründen: Schritt für Schritt',
    category: 'Prozess',
    isoDate: '2026-01-01',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 12,
    excerpt:
      'Der komplette Prozess von der Idee bis zur aktiven Lizenz – realistisch, ohne Beschönigung.',
    metaDescription:
      'VAE Firma gründen: Der komplette Prozess von der Idee bis zur aktiven Lizenz – realistisch, ohne Beschönigung. Firmengründung UAE Schritt für Schritt.',
  },
  {
    slug: 'uae-corporate-tax',
    title: 'UAE Corporate Tax: Wann Free-Zone-Firmen wirklich 0 % zahlen',
    category: 'Steuern',
    isoDate: '2025-12-28',
    isoUpdated: '2026-08-09',
    readTimeMinutes: 12,
    excerpt:
      '0 % sind möglich – aber an strenge Bedingungen geknüpft, die viele Berater verschweigen. Was für Online-Unternehmer wirklich gilt.',
    metaDescription:
      'Seit 2023 gibt es Körperschaftsteuer in den VAE. 0 % sind möglich – aber an strenge Bedingungen geknüpft, die viele Berater verschweigen. Was für deutsche Online-Unternehmer wirklich gilt.',
  },
]

export const articlesBySlug: Record<string, Article> = Object.fromEntries(
  articles.map(article => [article.slug, article])
)

export function getArticle(slug: string | undefined): Article | null {
  if (!slug) return null
  return articlesBySlug[slug] ?? null
}
