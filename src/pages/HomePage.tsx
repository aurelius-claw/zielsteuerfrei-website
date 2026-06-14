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
    text: 'Planung der Termine vor Ort, Medical Check und Begleitung durch Juljana in den VAE.',
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
    text: 'Neno klärt mit dir, ob eine VAE-Gründung zu Geschäftsmodell, Wohnsitz, Gewinn und Ziel passt.',
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

export default function HomePage() {
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
          <div className="absolute inset-y-0 left-1/2 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F0ECE5]/95 to-transparent dark:hidden" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(78vh-7rem)] max-w-content flex-col items-center justify-center px-4 text-center md:px-6">
          <h1 className="mb-5 font-display text-[2.45rem] leading-[1.06] text-[#123247] dark:text-cream text-balance md:mb-6 md:text-display-xl">
            Deine Firma in den VAE.<br />
            <span className="text-[#966B16] dark:text-gold">Von Anfang an begleitet.</span>
          </h1>
          <p className="mx-auto mb-7 max-w-2xl text-base font-medium leading-relaxed text-[#263C4A] dark:text-ink-300 md:mb-8 md:text-xl">
            Wir prüfen zuerst kostenlos, ob eine VAE-Gründung zu deinem Geschäftsmodell und
            deinem Wegzug passt. Wenn du dich dafür entscheidest, begleiten wir dich bis zu
            Lizenz, Emirates ID und Bankkonto.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button onClick={openCalendly} className="btn-primary px-8 py-4 text-base">
              Kostenloses Erstgespräch buchen
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
              ['Kostenlos', 'Vorab-Check'],
              ['Persönlich', 'Begleitung vor Ort'],
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

      <section className="section bg-cream-50 dark:bg-navy-900">
        <div className="mx-auto grid max-w-wide gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-5">
              Erst Klarheit. Dann die Gründung.
            </h2>
          </div>
          <div className="space-y-5 text-ink-600 dark:text-ink-300">
            <p className="leading-relaxed">
              Im Erstgespräch bekommt Neno ein Gefühl für dein Geschäftsmodell, deinen Wohnsitz
              und deine Pläne. So weißt du, ob der Weg für dich sinnvoll ist, bevor Kosten entstehen.
            </p>
            <div className="grid gap-5 border-t border-ink-100 pt-6 dark:border-navy-800 sm:grid-cols-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream">Prüfen</h3>
                <p className="mt-2 text-sm leading-relaxed">Passt eine VAE-Firma überhaupt zu deiner Situation?</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream">Gründen</h3>
                <p className="mt-2 text-sm leading-relaxed">Wir koordinieren Lizenz, Unterlagen und Termine.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream">Ankommen</h3>
                <p className="mt-2 text-sm leading-relaxed">Juljana begleitet dich vor Ort, wir bleiben erreichbar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream-50 dark:bg-navy-900">
        <div className="mx-auto grid max-w-wide gap-12 px-4 md:grid-cols-[1fr_0.9fr] md:px-6">
          <div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-5">
              Wir verstehen die offenen Fragen vor dem Wegzug.
            </h2>
            <p className="mb-7 leading-relaxed text-ink-600 dark:text-ink-300">
              Eine Auslandsgesellschaft ist nur dann sinnvoll, wenn sie in dein tatsächliches Leben passt.
              Wir sprechen deshalb zuerst über Wohnsitz, Geschäftsleitung, laufende Kosten und steuerliche
              Risiken, bevor du Geld für eine Gründung ausgibst.
            </p>
            <button onClick={openCalendly} className="btn-primary">
              Kostenloses Erstgespräch buchen
            </button>
          </div>
          <div className="border-y border-ink-100 dark:border-navy-800">
            {[
              'Keine Gründung ohne vorherige Einordnung',
              'Keine Steuerberatung durch uns, sondern über passende Steuerberater',
              'Kein Abo-Modell: Paketpreis im ersten Jahr, Renewal ab Jahr zwei',
              'Persönliche Begleitung vor Ort durch Juljana',
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

      <section className="section bg-cream dark:bg-navy-950">
        <div className="mx-auto max-w-wide px-4 md:px-6">
          <div className="mb-12 md:flex md:items-end md:justify-between md:gap-10">
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
            {expertise.map((item) => (
              <div key={item.title} className="card overflow-hidden">
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

      <section className="section bg-cream-50 dark:bg-navy-900">
        <div className="mx-auto max-w-content px-4 md:px-6">
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-10 text-center">
            Von der Einschätzung zur fertigen Struktur.
          </h2>
          <div className="border-y border-ink-100 dark:border-navy-800">
            {process.map((step, index) => (
              <div
                key={step.title}
                className={`grid gap-4 py-7 md:grid-cols-[72px_1fr] ${
                  index > 0 ? 'border-t border-ink-100 dark:border-navy-800' : ''
                }`}
              >
                <div className="font-mono text-xs font-semibold tracking-widest text-gold">
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

      <section className="section bg-cream dark:bg-navy-950">
        <div className="mx-auto max-w-wide px-4 md:px-6">
          <div className="mb-10 md:flex md:items-end md:justify-between md:gap-10">
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
            {articles.map((article) => (
              <Link key={article.to} to={article.to} className="card p-7 hover:border-gold/30">
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

      <section className="section bg-cream-50 dark:bg-navy-900">
        <div className="mx-auto grid max-w-wide gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-6">
          <div className="overflow-hidden rounded-2xl border border-ink-100 dark:border-navy-800">
            <img
              src="/images/pages/team-neno.jpeg"
              alt="Neno von Ziel:steuerfrei"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
              Ansprechpartner
            </p>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-5">
              Erst sprechen. Dann entscheiden.
            </h2>
            <p className="mb-6 leading-relaxed text-ink-600 dark:text-ink-300">
              Neno hatte die Idee zu Ziel:steuerfrei und führt die Erstgespräche. Juljana begleitet
              die Termine vor Ort. Martin betreut IT, Prozesse und kann bei Versicherungsthemen helfen.
            </p>
            <Link to="/ueber-uns" className="text-sm font-semibold text-gold hover:underline">
              Team kennenlernen
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-t border-gold/10 bg-navy-900 dark:bg-navy-950">
        <div className="mx-auto max-w-content px-4 text-center md:px-6">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Lassen wir deine Situation einmal einordnen.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-ink-300">
            Das Erstgespräch ist kostenlos. Danach weißt du, ob eine VAE-Gründung in deinem Fall Sinn ergibt.
          </p>
          <button onClick={openCalendly} className="btn-primary">
            Erstgespräch mit Neno buchen
          </button>
        </div>
      </section>
    </div>
  )
}
