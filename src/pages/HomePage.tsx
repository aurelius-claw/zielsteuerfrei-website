import { Link } from 'react-router-dom'

function openCalendly() {
  // @ts-ignore
  if (typeof Calendly !== 'undefined') {
    // @ts-ignore
    Calendly.initPopupWidget({ url: 'https://calendly.com/zielsteuerfrei/strategie-call' })
  } else {
    window.open('https://calendly.com/zielsteuerfrei/strategie-call', '_blank')
  }
}

const leistungen = [
  { icon: '🏢', title: 'Handelslizenz Ajman Free Zone', desc: 'Offizielle Lizenz in 4 Tagen. Alle Behördengänge inklusive, keine Überraschungen.' },
  { icon: '🏥', title: 'Medical Check & Emirates ID', desc: 'Pflichtuntersuchung und Ausweisantrag — wir begleiten dich persönlich vor Ort.' },
  { icon: '🏦', title: 'Bankkonto-Einrichtung', desc: 'Kontoeröffnung bei Emirates NBD, FAB oder ADIB. Mit Begleitung, nicht Eigenitiative.' },
  { icon: '💬', title: '3 Monate WhatsApp-Support', desc: 'Direkte Nummern zu uns und qualifizierten Steuerberatern. Keine Ticket-Queue.' },
]

const faqs = [
  {
    q: 'Lohnt sich das bei meinem Einkommen?',
    a: 'Ab ca. €80.000 Jahresgewinn spart Ajman spürbar. Bei €150.000 sind das ~€70.000 weniger Steuern pro Jahr gegenüber einer deutschen GmbH.',
  },
  {
    q: 'Muss ich dauerhaft in Ajman leben?',
    a: 'Nein. Du brauchst eine UAE-Adresse und musst deinen Lebensmittelpunkt verlagern — aber kein dauerhaftes Wohnen. Viele unserer Kunden leben nomadisch.',
  },
  {
    q: 'Wie unterscheidet sich Ajman von Dubai?',
    a: 'Steuerlich identisch: beide 0%. Ajman kostet aber ~60% weniger beim Setup. Für Solo-Unternehmer ohne Prestige-Bedarf der eindeutig smartere Weg.',
  },
  {
    q: 'Was ist mit der Wegzugssteuer?',
    a: 'Wer GmbH-Anteile oder Fonds hält, muss das vor dem Wegzug klären. Wir vermitteln spezialisierte Steuerberater, die genau das prüfen — bevor du zahlst.',
  },
]

export default function HomePage() {
  return (
    <div className="animate-fade-in">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-28 pb-28 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/hero-home.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-6 justify-center animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Für Unternehmer ab €80.000 Jahresgewinn
          </div>

          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Steuerfrei leben —<br />
            <span className="text-highlight">mit Ajman</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-up animation-delay-200">
            Legal. Fair. Bodenständig. Kein Hype.<br />
            Firmengründung in der Ajman Free Zone — komplett begleitet, ab{' '}
            <strong className="text-ink-900 dark:text-cream font-semibold">€6.990</strong>.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10 animate-fade-up animation-delay-300">
            {['0% Einkommensteuer', '4 Tage Setup', '€6.990 Komplettpaket', 'Kein Jahresbeitrag im 1. Jahr'].map(t => (
              <span key={t} className="badge-gold">{t}</span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <button onClick={openCalendly} className="btn-primary text-base px-8 py-4">
              🗓 Kostenlosen Strategie-Call buchen
            </button>
            <Link to="/preis-rechner" className="btn-secondary text-base px-8 py-4">
              Ersparnis berechnen →
            </Link>
          </div>
          <p className="text-xs text-ink-400 dark:text-ink-500 mt-4">
            Keine Verpflichtung · 20 Minuten · Wir klären ehrlich, ob Ajman zu dir passt
          </p>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────── */}
      <div className="bg-white dark:bg-navy-900 border-y border-ink-100 dark:border-navy-800">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="trust-bar">
            <span className="trust-item"><span className="text-gold">✓</span> Offizielle Ajman-Lizenz</span>
            <span className="trust-item"><span className="text-gold">✓</span> Transparenter Festpreis</span>
            <span className="trust-item"><span className="text-gold">✓</span> Deutsche Beratung</span>
            <span className="trust-item"><span className="text-gold">✓</span> Steuerberater-Netzwerk</span>
            <span className="trust-item"><span className="text-gold">✓</span> 3 Monate Support</span>
          </div>
        </div>
      </div>

      {/* ── Savings ──────────────────────────────────────── */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Warum Ajman</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Was du wirklich sparst
            </h2>
            <p className="text-ink-600 dark:text-ink-300 mt-3 text-sm">
              Beispielrechnung bei €150.000 Jahresgewinn.{' '}
              <Link to="/preis-rechner" className="text-gold font-semibold hover:underline">
                Deine Zahlen berechnen →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="card p-7 text-center opacity-75">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3">Deutschland (GmbH)</p>
              <p className="font-display text-5xl font-bold text-red-500 dark:text-red-400 mb-2">–€70.500</p>
              <p className="text-xs text-ink-400">~47% KSt + GewSt + ESt Ausschüttung</p>
            </div>

            <div className="card p-7 text-center border-gold/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
              <p className="text-xs font-bold uppercase tracking-wider text-gold mb-3">Ajman Free Zone</p>
              <p className="font-display text-5xl font-bold text-green-600 dark:text-green-400 mb-2">€0</p>
              <p className="text-xs text-ink-400">0% Einkommensteuer</p>
            </div>

            <div className="bg-navy-900 dark:bg-navy-800 rounded-2xl p-7 text-center border border-gold/20">
              <p className="text-xs font-bold uppercase tracking-wider text-gold mb-3">Jährliche Ersparnis</p>
              <p className="font-display text-5xl font-bold text-gold mb-2">€70.500</p>
              <p className="text-xs text-ink-400">Setup amortisiert in ~5 Wochen</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leistungen ───────────────────────────────────── */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Das Komplettpaket</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-3">
              Alles für einen festen Preis
            </h2>
            <p className="text-ink-600 dark:text-ink-300 max-w-lg mx-auto text-sm">
              €6.990 einmalig. Was andere extra berechnen, ist bei uns inklusive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {leistungen.map((item, i) => (
              <div key={i} className="card p-6 flex flex-col gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto bg-navy-900 dark:bg-navy-800 rounded-2xl p-8 text-center border border-gold/20">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Komplettpaket · Einmalig</p>
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="font-display text-5xl font-bold text-cream">€6.990</span>
            </div>
            <p className="text-ink-400 text-sm mb-6">Ab Jahr 2 nur Jahreserneuerung (~€670)</p>
            <button onClick={openCalendly} className="btn-primary">
              Jetzt kostenlos beraten lassen
            </button>
          </div>
        </div>
      </section>

      {/* ── Prozess ──────────────────────────────────────── */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">In 4 Tagen zur Firma</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              So läuft es ab
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { n: '1', title: 'Strategie-Call (kostenlos)', desc: 'Wir klären deine Situation, ob Ajman passt, und welche Schritte konkret nötig sind.', time: '20 Min' },
              { n: '2', title: 'Dokumente & Vorbereitung', desc: 'Reisepass, Geburtsurkunde, Aktivitätsbeschreibung. Wir sagen dir genau was du brauchst — kein Rätselraten.', time: '~1 Woche' },
              { n: '3', title: 'Vor Ort in Ajman', desc: 'Medical Check, Behördengänge, Trade License, Bankkonto. Du wirst an jedem Tag begleitet.', time: '4–5 Tage' },
              { n: '4', title: 'Firma live — 0% Steuern', desc: 'Offizielle Lizenz, Emirates ID, UAE-Bankkonto. Ab jetzt: 0% Einkommensteuer auf Ajman-Gewinne.', time: 'Fertig ✓' },
            ].map((step, i) => (
              <div key={i} className="card flex gap-5 p-6 items-start">
                <div className="step-number flex-shrink-0">{step.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream">
                      {step.title}
                    </h3>
                    <span className="badge-gold flex-shrink-0 hidden sm:inline-flex">{step.time}</span>
                  </div>
                  <p className="text-sm text-ink-600 dark:text-ink-300 mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/prozess" className="text-sm font-semibold text-gold hover:underline">
              Den kompletten Prozess ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Häufige Fragen</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Was du wissen solltest
            </h2>
          </div>

          <div className="space-y-3 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-ink-500">
            Mehr Details?{' '}
            <Link to="/steuer-wissen" className="text-gold font-semibold hover:underline">
              Zum Steuer-Wissen →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <div className="eyebrow mb-4 justify-center text-gold">Nächster Schritt</div>
          <h2 className="font-display text-display-lg text-cream mb-5">
            Bereit für den Weg in die Steuerfreiheit?
          </h2>
          <p className="text-ink-300 text-lg mb-8 max-w-xl mx-auto">
            In 20 Minuten klären wir alle Fragen — kostenlos, ohne Druck, ehrlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="btn-primary">
              🗓 Kostenlosen Termin buchen
            </button>
            <Link to="/preis-rechner" className="btn-secondary">
              💰 Preis-Rechner starten
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
