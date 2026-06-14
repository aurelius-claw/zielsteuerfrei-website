import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function openCalendly() {
  // @ts-ignore
  if (typeof Calendly !== 'undefined') {
    // @ts-ignore
    Calendly.initPopupWidget({ url: 'https://calendly.com/nenope82/30min' })
  } else {
    window.open('https://calendly.com/nenope82/30min', '_blank')
  }
}

const expertise = [
  {
    image: '/images/pages/service-license-generated.png',
    title: 'Firmengründung',
    text: 'Free-Zone-Lizenz, Aktivitätsauswahl, Unterlagen und Koordination der Gründung in den VAE.',
  },
  {
    image: '/images/pages/service-medical.jpg',
    title: 'Aufenthalt & Emirates ID',
    text: 'Planung der Termine vor Ort, Medical Check und persönliche Begleitung in den VAE.',
  },
  {
    image: '/images/pages/service-banking-generated.png',
    title: 'Bankkonto',
    text: 'Vorbereitung der Kontoeröffnung und Unterstützung bei typischen Rückfragen der Bank.',
  },
  {
    image: '/images/pages/service-support-generated.png',
    title: 'Begleitung danach',
    text: 'Drei Monate direkter Support für die praktischen Fragen nach der Gründung.',
  },
]

const process = [
  {
    title: 'Erstgespräch',
    text: 'Wir klären, welche VAE-Struktur zu Geschäftsmodell, Wohnsitz, Gewinn und Ziel passt.',
  },
  {
    title: 'Vorbereitung',
    text: 'Wir sammeln Unterlagen, strukturieren die nächsten Schritte und ziehen bei steuerlichen Detailfragen einen Steuerberater hinzu.',
  },
  {
    title: 'Gründung vor Ort',
    text: 'Lizenz, Medical Check, Emirates ID und Bankkonto werden geplant und in den VAE begleitet.',
  },
  {
    title: 'Nachbereitung',
    text: 'Nach der Gründung bleiben wir erreichbar, damit Dokumente, Bankkonto und nächste To-dos sauber laufen.',
  },
]

const articles = [
  { to: '/blog/183-tage-regel', topic: 'Wegzug', title: '183-Tage-Regel: was wirklich zählt' },
  { to: '/blog/wegzugsbesteuerung', topic: 'Steuern', title: 'Wegzugssteuer vor der VAE-Gründung prüfen' },
  { to: '/blog/ajman-vs-dubai', topic: 'Free Zone', title: 'Dubai oder Ajman: Kosten und Unterschiede' },
]

function SectionBackdrop({
  src,
  position = 'center',
  opacity = 'opacity-[0.08]',
}: {
  src: string
  position?: string
  opacity?: string
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={src}
        alt=""
        className={`h-full w-full scale-[1.02] object-cover ${opacity}`}
        style={{ objectPosition: position }}
        loading="lazy"
      />
    </div>
  )
}

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>VAE Firma gründen | Begleitetes Setup für Unternehmer | Ziel:steuerfrei</title>
        <meta
          name="description"
          content="Firmengründung in den VAE für deutsche Unternehmer: Erstgespräch, Free-Zone-Lizenz, Emirates ID, Bankkonto-Vorbereitung und Begleitung vor Ort."
        />
        <meta property="og:title" content="VAE Firma gründen | Ziel:steuerfrei" />
        <meta
          property="og:description"
          content="Wir prüfen, ob eine VAE-Struktur zu deiner Situation passt, und begleiten die Umsetzung mit klaren Kosten und direktem Ansprechpartner."
        />
        <meta property="og:url" content="https://zielsteuerfrei.de/" />
        <meta property="og:image" content="https://zielsteuerfrei.de/images/pages/hero-dubai-real.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative min-h-[78vh] overflow-hidden bg-[#F0ECE5] pt-24 pb-12 dark:bg-navy-950 md:pt-28 md:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/hero-dubai-real.jpg"
            alt="Dubai Business Bay"
            className="h-full w-full object-cover object-center opacity-30 dark:opacity-65"
          />
          <div className="absolute inset-0 bg-[#F0ECE5]/68 dark:bg-navy-950/66" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0ECE5]/38 via-[#F0ECE5]/68 to-[#F0ECE5] dark:from-navy-950/30 dark:via-navy-950/62 dark:to-navy-950" />
          <div className="absolute inset-y-0 left-1/2 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F0ECE5]/75 to-transparent dark:hidden" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(78vh-7rem)] max-w-content flex-col items-center justify-center px-4 text-center md:px-6">
          <h1 className="mb-5 font-display text-[2.45rem] leading-[1.06] text-[#123247] dark:text-cream text-balance md:mb-6 md:text-display-xl">
            Deine Firma in den VAE.<br />
            <span className="text-[#966B16] dark:text-gold">Für Unternehmer, die größer denken.</span>
          </h1>
          <p className="mx-auto mb-7 max-w-2xl text-base font-medium leading-relaxed text-[#263C4A] dark:text-ink-300 md:mb-8 md:text-xl">
            Wir bringen deine VAE-Gründung von der ersten Strategie bis zur fertigen Struktur:
            Lizenz, Emirates ID, Bankkonto und persönliche Begleitung vor Ort.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button onClick={openCalendly} className="btn-primary px-8 py-4 text-base">
              Kostenloses Strategiegespräch sichern
            </button>
            <Link
              to="/prozess"
              className="inline-flex items-center justify-center border-b border-[#123247]/65 px-3 py-4 text-base font-semibold text-[#123247] transition-colors hover:border-gold hover:text-gold dark:border-cream/70 dark:text-cream"
            >
              Leistungen und Ablauf
            </Link>
          </div>

          <div className="mt-7 grid w-full max-w-3xl grid-cols-2 border-y border-[#123247]/15 bg-[#F8F6F2]/62 text-left backdrop-blur-sm dark:border-white/15 dark:bg-navy-950/45 md:mt-10 md:grid-cols-4">
            {[
              ['Hunderte', 'Firmengründungen'],
              ['Vor Ort', 'in den VAE'],
              ['€6.990', 'Gründerpaket'],
              ['3 Monate', 'Support danach'],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-4 py-4 ${index % 2 ? 'border-l border-[#123247]/10 dark:border-white/10' : ''} ${index > 1 ? 'border-t border-[#123247]/10 dark:border-white/10 md:border-t-0' : ''} md:border-l md:border-[#123247]/10 md:first:border-l-0 md:dark:border-white/10`}
              >
                <strong className="block text-sm font-bold text-[#123247] dark:text-cream">{value}</strong>
                <span className="mt-1 block text-xs leading-snug text-ink-600 dark:text-ink-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden border-b border-ink-100/70 bg-cream-50 dark:border-navy-800 dark:bg-navy-900">
        <SectionBackdrop src="/images/pages/hero-business-bay-real.jpg" position="72% center" opacity="opacity-[0.11] dark:opacity-[0.08]" />
        <div className="absolute inset-y-0 right-0 hidden w-[38%] border-l border-gold/15 bg-gold/[0.035] md:block" aria-hidden="true" />
        <div data-reveal className="scroll-reveal relative z-10 mx-auto grid max-w-wide gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-5">
              Wir machen internationale Strukturen umsetzbar.
            </h2>
          </div>
          <div className="space-y-5 text-ink-600 dark:text-ink-300">
            <p className="leading-relaxed">
              Unsere Erfahrung aus hunderten Firmengründungen bringt Tempo und Klarheit in einen
              Prozess, bei dem jedes Detail zählt. Wir prüfen die Ausgangslage, koordinieren die
              Gründung und begleiten die Umsetzung in den VAE.
            </p>
            <div className="grid gap-5 border-t border-ink-100 pt-6 dark:border-navy-800 sm:grid-cols-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream">Strategie</h3>
                <p className="mt-2 text-sm leading-relaxed">Wir bestimmen den passenden Weg für dein Vorhaben.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream">Umsetzung</h3>
                <p className="mt-2 text-sm leading-relaxed">Wir koordinieren Lizenz, Unterlagen und Behörden.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream">Wachstum</h3>
                <p className="mt-2 text-sm leading-relaxed">Die Struktur steht. Du konzentrierst dich auf dein Geschäft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-cream-50 dark:bg-navy-900">
        <SectionBackdrop src="/images/pages/service-license-generated.png" position="12% center" opacity="opacity-[0.075] dark:opacity-[0.06]" />
        <div className="absolute inset-y-0 left-0 hidden w-[44%] border-r border-ink-900/[0.06] bg-cream/35 dark:border-white/[0.06] dark:bg-navy-950/20 md:block" aria-hidden="true" />
        <div data-reveal className="scroll-reveal relative z-10 mx-auto grid max-w-wide gap-12 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-5">
              Stark aufgestellt, bevor du startest.
            </h2>
            <p className="mb-7 leading-relaxed text-ink-600 dark:text-ink-300">
              Wir verbinden Gründungserfahrung in den VAE mit einem Netzwerk für steuerliche,
              rechtliche und praktische Spezialfragen. So entsteht nicht nur eine Lizenz, sondern
              eine Struktur, mit der du tatsächlich arbeiten kannst.
            </p>
            <button onClick={openCalendly} className="btn-primary">
              Strategiegespräch starten
            </button>
          </div>
          <div className="border-y border-ink-100 dark:border-navy-800">
            {[
              'Strategische Vorprüfung deiner Ausgangslage',
              'Zugang zu spezialisierten Steuerberatern und Rechtsanwälten',
              'Transparenter Paketpreis statt offener Kostenkette',
              'Persönliche Begleitung bei den Terminen vor Ort',
            ].map((item, index) => (
              <div
                key={item}
                className={`py-5 text-sm leading-relaxed text-ink-700 dark:text-ink-300 ${
                  index > 0 ? 'border-t border-ink-100 dark:border-navy-800' : ''
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden border-y border-gold/10 bg-cream dark:bg-navy-950">
        <SectionBackdrop src="/images/pages/hero-dubai-marina-real.jpg" position="center 65%" opacity="opacity-[0.09] dark:opacity-[0.06]" />
        <div className="relative z-10 mx-auto max-w-wide px-4 md:px-6">
          <div data-reveal className="scroll-reveal mb-12 md:flex md:items-end md:justify-between md:gap-10">
            <div>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
                Leistungsfelder
              </p>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
                Das Gründerpaket.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-600 dark:text-ink-300 md:mt-0">
              Wenn du nach dem Erstgespräch starten möchtest, übernehmen wir die Koordination
              der praktischen Schritte bis zur nutzbaren VAE-Struktur.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                className="scroll-reveal card overflow-hidden"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="relative h-40 overflow-hidden bg-navy-900">
                  <img src={item.image} alt="" className="h-full w-full object-cover opacity-85" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-cream-50 dark:bg-navy-900">
        <SectionBackdrop src="/images/pages/service-banking-generated.png" position="78% center" opacity="opacity-[0.065] dark:opacity-[0.05]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l border-gold/10 bg-gold/[0.025] md:block" aria-hidden="true" />
        <div data-reveal className="scroll-reveal process-reveal relative z-10 mx-auto max-w-content px-4 md:px-6">
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-10 text-center">
            Von der Einschätzung zur fertigen Struktur.
          </h2>
          <div className="relative border-y border-ink-100 dark:border-navy-800">
            <div className="process-line absolute bottom-0 left-[21px] top-0 hidden w-px origin-top bg-gold/70 md:block" />
            {process.map((step, index) => (
              <div
                key={step.title}
                data-reveal
                className={`scroll-reveal relative grid gap-4 py-7 md:grid-cols-[72px_1fr] ${
                  index > 0 ? 'border-t border-ink-100 dark:border-navy-800' : ''
                }`}
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div className="relative z-10 font-mono text-xs font-semibold tracking-widest text-gold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/prozess" className="text-sm font-semibold text-gold hover:underline">
              Den Prozess im Detail ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden border-y border-ink-100/70 bg-cream dark:border-navy-800 dark:bg-navy-950">
        <SectionBackdrop src="/images/pages/blog.png" position="center" opacity="opacity-[0.08] dark:opacity-[0.055]" />
        <div className="relative z-10 mx-auto max-w-wide px-4 md:px-6">
          <div data-reveal className="scroll-reveal mb-10 md:flex md:items-end md:justify-between md:gap-10">
            <div>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
                Wissensdatenbank
              </p>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
                Vor der Gründung verstehen.
              </h2>
            </div>
            <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-gold hover:underline md:mt-0">
              Alle Artikel ansehen
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.to}
                to={article.to}
                data-reveal
                className="scroll-reveal card p-7 hover:border-gold/30"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
                  {article.topic}
                </p>
                <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-cream">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-cream-50 dark:bg-navy-900">
        <SectionBackdrop src="/images/pages/service-support-generated.png" position="center 38%" opacity="opacity-[0.1] dark:opacity-[0.07]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold/25" aria-hidden="true" />
        <div data-reveal className="scroll-reveal relative z-10 mx-auto max-w-wide px-4 text-center md:px-6">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
            Ziel:steuerfrei
          </p>
          <h2 className="mx-auto mb-5 max-w-3xl font-display text-display-md text-ink-900 dark:text-cream">
            Wir bauen die Struktur. Du baust das Unternehmen.
          </h2>
          <p className="mx-auto mb-7 max-w-2xl leading-relaxed text-ink-600 dark:text-ink-300">
            Von der Auswahl der passenden Free Zone bis zu Emirates ID, Bankkonto und den ersten
            Monaten danach: Unser Team hält den Prozess zusammen und bleibt erreichbar.
          </p>
          <Link to="/ueber-uns" className="text-sm font-semibold text-gold hover:underline">
            Unsere Expertise kennenlernen
          </Link>
        </div>
      </section>

      <section className="section border-t border-gold/10 bg-navy-900 dark:bg-navy-950">
        <div data-reveal className="scroll-reveal mx-auto max-w-content px-4 text-center md:px-6">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Bereit für deine VAE-Struktur?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-ink-300">
            Im kostenlosen Strategiegespräch klären wir den schnellsten sinnvollen Weg zu deiner Gründung.
          </p>
          <button onClick={openCalendly} className="btn-primary">
            Kostenloses Strategiegespräch sichern
          </button>
        </div>
      </section>
    </div>
  )
}
