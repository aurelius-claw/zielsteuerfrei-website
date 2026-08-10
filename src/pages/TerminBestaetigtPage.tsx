import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getBookingConfirmation, trackEvent } from '../utils/tracking'

const preparationItems = [
  'Wie sieht dein aktuelles Geschäftsmodell aus?',
  'Wo liegt heute dein Wohnsitz und Lebensmittelpunkt?',
  'In welchem Zeitraum möchtest du die Struktur umsetzen?',
  'Welche eine Frage soll im Gespräch unbedingt geklärt werden?',
]

const nextSteps = [
  {
    number: '01',
    title: 'Kalendereinladung prüfen',
    text: 'Calendly schickt dir die Bestätigung und den Link zum Gespräch per E-Mail. Prüfe bitte auch kurz den Spam-Ordner.',
  },
  {
    number: '02',
    title: 'Ausgangslage notieren',
    text: 'Ein paar Stichpunkte zu Geschäft, Wohnsitz und Zeitplan reichen. Du musst vorab keine Unterlagen einreichen.',
  },
  {
    number: '03',
    title: 'Zum Termin dazukommen',
    text: 'Plane rund 20 Minuten ein. Im Gespräch geht es zuerst darum, ob eine VAE-Struktur für deine Situation überhaupt sinnvoll ist.',
  },
]

const team = [
  {
    name: 'Neno',
    role: 'Erstgespräch und Gründungsstrategie',
    image: '/images/pages/team-neno.webp',
  },
  {
    name: 'Juljana',
    role: 'Begleitung und Termine vor Ort',
    image: '/images/pages/team-juljana.webp',
  },
  {
    name: 'Martin',
    role: 'IT, Prozesse und Versicherungsfragen',
    image: '/images/pages/team-martin-boat.webp',
  },
]

export default function TerminBestaetigtPage() {
  useEffect(() => {
    const robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const previousContent = robotsMeta?.content
    robotsMeta?.setAttribute('content', 'noindex, follow')

    return () => {
      if (robotsMeta && previousContent) robotsMeta.content = previousContent
    }
  }, [])

  useEffect(() => {
    const confirmation = getBookingConfirmation()
    const trackingKey = `zielsteuerfrei.booking-confirmation-view:${confirmation?.reference ?? 'direct'}`

    try {
      if (window.sessionStorage.getItem(trackingKey)) return
      window.sessionStorage.setItem(trackingKey, '1')
    } catch {
      // Continue with the page-view event when storage is unavailable.
    }

    trackEvent('booking_confirmation_view', {
      booking_reference: confirmation?.reference ?? 'direct',
      booking_verified: Boolean(confirmation),
      booking_source_path: confirmation?.sourcePath ?? 'external_or_direct',
      page_path: window.location.pathname,
    })
  }, [])

  return (
    <div className="animate-fade-in bg-[#F0ECE5] dark:bg-navy-950">
      <Helmet>
        <title>Termin bestätigt | Ziel:steuerfrei</title>
        <meta
          name="description"
          content="Dein Strategiegespräch mit Ziel:steuerfrei ist eingetragen. Hier findest du die nächsten Schritte und eine kurze Vorbereitung."
        />
        <link rel="canonical" href="https://zielsteuerfrei.de/termin-bestaetigt" />
      </Helmet>

      <section className="relative overflow-hidden border-b border-[#123247]/10 bg-[#F0ECE5] py-16 dark:border-white/10 dark:bg-navy-950 md:py-24">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/pages/hero-dubai-marina-real.webp"
            alt=""
            className="h-full w-full object-cover opacity-[0.12] dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0ECE5] via-[#F0ECE5]/94 to-[#F0ECE5]/70 dark:from-navy-950 dark:via-navy-950/95 dark:to-navy-950/75" />
        </div>

        <div className="relative mx-auto grid max-w-wide gap-12 px-4 md:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <div className="mb-7 flex h-16 w-16 items-center justify-center border border-gold/40 bg-gold/10 text-gold" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 4 4L19 6" />
              </svg>
            </div>
            <h1 className="max-w-3xl font-display text-4xl leading-tight text-[#123247] dark:text-cream text-balance md:text-6xl">
              Dein Gespräch ist eingetragen.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#263C4A] dark:text-ink-300 md:text-xl">
              Danke für dein Vertrauen. Du erhältst gleich eine Bestätigung von Calendly. Beim Termin schauen wir gemeinsam auf deine Situation und sagen dir offen, ob und wie eine VAE-Struktur für dich sinnvoll umgesetzt werden kann.
            </p>
            <div className="mt-8 border-l-2 border-gold pl-5 text-sm leading-relaxed text-ink-700 dark:text-ink-300">
              Keine E-Mail angekommen? Prüfe bitte zuerst deinen Spam-Ordner. Bei Rückfragen erreichst du uns unter{' '}
              <a href="mailto:info@zielsteuerfrei.de" className="font-semibold text-[#966B16] transition-colors hover:text-gold dark:text-gold">
                info@zielsteuerfrei.de
              </a>.
            </div>
          </div>

          <aside className="border border-[#123247]/15 bg-[#F8F6F2]/92 p-6 shadow-[0_24px_70px_rgba(18,50,71,0.12)] backdrop-blur-md dark:border-white/15 dark:bg-navy-900/90 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-[#123247] dark:text-cream">Bis zum Gespräch</h2>
            <div className="mt-6 divide-y divide-[#123247]/10 border-y border-[#123247]/10 dark:divide-white/10 dark:border-white/10">
              {nextSteps.map(step => (
                <div key={step.number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                  <span className="font-display text-sm font-semibold text-[#966B16] dark:text-gold">{step.number}</span>
                  <div>
                    <h3 className="font-semibold text-[#123247] dark:text-cream">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#966B16] dark:text-gold">Kurze Vorbereitung</p>
            <h2 className="mt-3 font-display text-3xl text-[#123247] dark:text-cream md:text-4xl">
              Damit wir direkt bei den wichtigen Punkten einsteigen.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-600 dark:text-ink-300">
              Du brauchst keinen Businessplan und keine perfekt vorbereitete Präsentation. Vier kurze Gedanken reichen völlig.
            </p>
          </div>

          <div className="border-y border-[#123247]/15 dark:border-white/15">
            {preparationItems.map((item, index) => (
              <div key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#123247]/10 py-5 last:border-b-0 dark:border-white/10">
                <span className="font-display text-sm font-semibold text-[#966B16] dark:text-gold">0{index + 1}</span>
                <p className="font-medium leading-relaxed text-[#123247] dark:text-cream">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123247] px-4 py-20 text-cream md:px-6 md:py-24">
        <div className="mx-auto max-w-wide">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-gold">Deine Ansprechpartner</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Die Menschen hinter Ziel:steuerfrei.</h2>
            <p className="mt-5 leading-relaxed text-ink-300">
              Im Erstgespräch sprichst du in der Regel mit Neno. Wenn es danach weitergeht, greifen Strategie, Begleitung vor Ort und die organisatorischen Prozesse ineinander.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {team.map(member => (
              <article key={member.name} className="grid grid-cols-[6.5rem_1fr] items-center gap-5 bg-[#123247] p-5 md:block md:p-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-28 w-24 object-cover object-top grayscale-[15%] md:h-72 md:w-full"
                  loading="lazy"
                />
                <div className="md:p-6">
                  <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto flex max-w-content flex-col gap-6 border-y border-[#123247]/15 py-8 dark:border-white/15 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl text-[#123247] dark:text-cream">Du möchtest dich vorher noch einlesen?</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Unser Ratgeber erklärt Wohnsitz, Free Zones und typische Steuerfragen ohne Verkaufsdruck.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex flex-none items-center justify-center border-b border-[#123247]/60 px-1 py-2 font-semibold text-[#123247] transition-colors hover:border-gold hover:text-gold dark:border-cream/60 dark:text-cream"
          >
            Zum VAE-Ratgeber
          </Link>
        </div>
      </section>
    </div>
  )
}
