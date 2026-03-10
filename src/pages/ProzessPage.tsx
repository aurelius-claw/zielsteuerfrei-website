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

const steps = [
  {
    n: '01',
    icon: '🗣️',
    title: 'Strategie-Call',
    duration: '20 Min · Kostenlos',
    desc: 'Wir klären deine Situation: Welches Einkommen, welche Struktur, welche Risiken (Wegzugssteuer, Betriebsstätte). Und ob Ajman für dich wirklich Sinn ergibt.',
    items: [
      'Einkommenssituation besprechen',
      'Risiken aufzeigen (Wegzugssteuer, Lebensmittelpunkt)',
      'Ehrliche Einschätzung — auch "nein" wenn nötig',
    ],
    variant: 'default',
  },
  {
    n: '02',
    icon: '📄',
    title: 'Dokumente vorbereiten',
    duration: '~1 Woche',
    desc: 'Du bekommst eine genaue Liste, was du brauchst. Wir checken alles vorab — damit vor Ort keine Überraschungen entstehen.',
    items: [
      'Reisepass (mind. 6 Monate gültig)',
      'Geburtsurkunde (beglaubigt)',
      'Aktivitätsbeschreibung (wir helfen)',
    ],
    variant: 'default',
  },
  {
    n: '03',
    icon: '🇦🇪',
    title: 'Anreise & Medical Check',
    duration: 'Tag 1 vor Ort',
    desc: 'Du fliegst nach Ajman. Direkt am ersten Tag: Medical Check (Pflicht für Emirates ID). Dauert ca. 30–45 Minuten. Ergebnis meist noch am selben Tag.',
    items: [
      'Medizinische Untersuchung (~€135)',
      'Bluttest + Röntgen',
      'Ergebnis für Emirates ID Antrag nötig',
    ],
    variant: 'highlight',
  },
  {
    n: '04',
    icon: '🏢',
    title: 'Behördengänge & Trade License',
    duration: 'Tag 2–3',
    desc: 'Gemeinsam zu den Ajman-Behörden. Trade License, Banktermin, Emirates ID Antrag — alles parallel. Wir kennen die Abläufe und sind dabei.',
    items: [
      'Trade License Antrag + Genehmigung',
      'Bankkonto-Eröffnung (Emirates NBD, FAB)',
      'Emirates ID Antrag (biometrisch)',
    ],
    variant: 'default',
  },
  {
    n: '05',
    icon: '✅',
    title: 'Firma live — 0% Steuern',
    duration: 'Tag 4–5',
    desc: 'Trade License in der Hand, Emirates ID abgeholt, Bankkonto aktiv. Du bist offiziell UAE-Unternehmer. Ab jetzt: 0% Einkommensteuer auf Ajman-Gewinne.',
    items: [
      'Trade License + Certificate of Incorporation',
      'Emirates ID mit Residenz-Stempel',
      'Erstes Geld auf UAE-Konto überwiesen',
    ],
    variant: 'success',
  },
]

const timeline = [
  { phase: 'Vorbereitung', duration: '~1 Woche', what: 'Dokumente sammeln, Call buchen' },
  { phase: 'Vor Ort Ajman', duration: '4–5 Tage', what: 'Behörden, Medical, Bank' },
  { phase: 'Nachbereitung (DE)', duration: '2–3 Wochen', what: 'Abmeldung, Steuerberater, Finanzamt' },
]

export default function ProzessPage() {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Firmengründung Ajman: Schritt-für-Schritt in 4 Tagen | Ziel:steuerfrei</title>
        <meta name="description" content="So läuft die Ajman-Gründung ab: Strategie-Call, Dokumente, Vor-Ort-Begleitung, Bankkonto. Alle 4 Schritte transparent und ehrlich erklärt." />
        <meta property="og:title" content="Firmengründung Ajman in 4 Tagen | Ablauf & Prozess" />
        <meta property="og:description" content="Von der Erstberatung bis zur Emirates ID: der komplette Gründungsprozess in Ajman erklärt – ohne Überraschungen." />
        <meta property="og:url" content="https://zielsteuerfrei.de/prozess" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/leistungen.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>
        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Schritt für Schritt
          </div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            In 4 Tagen zur Firma —<br />
            <span className="text-highlight">der exakte Ablauf</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Kein Marketing-Fuzz. Was passiert wann, wie lange es dauert, was du mitbringen musst. 
            Der komplette Prozess — transparent.
          </p>
        </div>
      </section>

      {/* Timeline overview */}
      <div className="bg-white dark:bg-navy-900 border-y border-ink-100 dark:border-navy-800">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-ink-100 dark:divide-navy-800">
            {timeline.map((t, i) => (
              <div key={i} className="flex-1 py-5 px-6 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-1">{t.phase}</p>
                <p className="font-display text-2xl font-bold text-gold mb-1">{t.duration}</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">{t.what}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`card p-6 md:p-8 flex gap-5 items-start ${
                  step.variant === 'highlight' ? 'border-gold/30 bg-gold/4' :
                  step.variant === 'success' ? 'border-green-500/20 bg-green-50/50 dark:bg-green-950/10' :
                  ''
                }`}
              >
                {/* Number */}
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-display font-bold text-lg shadow-sm ${
                  step.variant === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-gold text-white shadow-gold'
                }`}>
                  {step.n}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-bold text-ink-900 dark:text-cream">
                      {step.icon} {step.title}
                    </h3>
                    <span className="badge-gold text-xs">{step.duration}</span>
                  </div>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-ink-700 dark:text-ink-300">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          step.variant === 'success' ? 'bg-green-500' : 'bg-gold'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After-return checklist */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="eyebrow mb-4">Nach deiner Rückkehr</div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
                Was in Deutschland noch erledigt werden muss
              </h2>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-2">
                Die Gründung in Ajman ist nur der erste Teil. 
                Damit die Steuerfreiheit auch rechtlich greift, 
                müssen folgende Schritte in Deutschland erledigt werden:
              </p>
            </div>
            <div className="space-y-2.5">
              {[
                { text: 'Offizielle Abmeldung beim Einwohnermeldeamt', critical: true },
                { text: 'Mietwohnung kündigen (oder vermieten)', critical: true },
                { text: 'Steuerberater über Wegzug informieren', critical: true },
                { text: 'Finanzamt: Betriebsstättenverlagerung melden', critical: false },
                { text: 'Krankenversicherung kündigen / wechseln', critical: false },
                { text: 'Deutsche Bankkonten klären', critical: false },
                { text: 'KFZ-Zulassung / Versicherungen', critical: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-3 p-3.5 rounded-xl border text-sm ${
                  item.critical
                    ? 'border-gold/30 bg-gold/5 text-ink-900 dark:text-cream'
                    : 'border-ink-100 dark:border-navy-800 text-ink-700 dark:text-ink-300'
                }`}>
                  <span className={`mt-0.5 flex-shrink-0 ${item.critical ? 'text-gold' : 'text-ink-400'}`}>
                    {item.critical ? '⚠' : '○'}
                  </span>
                  {item.text}
                  {item.critical && (
                    <span className="ml-auto text-xs text-gold font-bold flex-shrink-0">Kritisch</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="eyebrow mb-4">Häufige Fragen</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-8">
            Zum Prozess
          </h2>
          <div className="space-y-3">
            {[
              { q: 'Muss ich persönlich nach Ajman kommen?', a: 'Ja, für Medical Check und Emirates ID ist deine physische Anwesenheit Pflicht. 4–5 Tage vor Ort sind realistisch.' },
              { q: 'Kann ich auch alles alleine machen?', a: 'Theoretisch ja. Praktisch verlieren die meisten Kunden Zeit und machen vermeidbare Fehler (falsche Dokumente, vergessene Apostille). Deshalb begleiten wir.' },
              { q: 'Was wenn etwas schief geht?', a: '3 Monate WhatsApp-Support sind inklusive. Wir sind erreichbar, wenn unerwartete Fragen auftauchen.' },
              { q: 'Wann ist die Firma wirklich "aktiv"?', a: 'Mit der ausgehändigten Trade License. Das Bankkonto kann aber noch 1–2 Wochen zur vollständigen Aktivierung brauchen.' },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">{faq.q}</h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Bereit für Schritt 1?
          </h2>
          <p className="text-ink-300 text-lg mb-8 max-w-lg mx-auto">
            Der erste Schritt ist kostenlos und unverbindlich. 
            20 Minuten, alle Fragen offen — dann weißt du, ob du weitergehen willst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="btn-primary">
              🗓 Kostenlosen Call buchen
            </button>
            <Link to="/preis-rechner" className="btn-secondary">
              Was kostet das genau? →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
