import { useState } from 'react'
import { Link } from 'react-router-dom'

function openCalendly() {
  // @ts-ignore
  if (typeof Calendly !== 'undefined') {
    // @ts-ignore
    Calendly.initPopupWidget({ url: 'https://calendly.com/nenope82/30min' })
  } else {
    window.open('https://calendly.com/nenope82/30min', '_blank')
  }
}

const pillars = [
  {
    icon: '📊',
    n: '01',
    title: 'Einkommensteuer',
    subtitle: 'Deutschland 42% vs Ajman 0%',
    content: 'Die Einkommensteuer ist der Hauptgrund, warum Unternehmer die UAE wählen. In Deutschland greift der Spitzensteuersatz ab ~€66.761 (42%), effektiv mit Solidaritätszuschlag sogar 44,3%. In der Ajman Freezone: 0% auf Unternehmenseinkommen.',
    facts: [
      'Unbeschränkte Steuerpflicht: Ab 6 Monaten Aufenthalt oder Wohnsitz in DE',
      'Welteinkommensprinzip: Deutschland besteuert dein globales Einkommen',
      'Ajman Freezone: Qualifiziertes Einkommen = 0%',
      'Wichtig: Wohnsitz und Lebensmittelpunkt müssen verlagert werden',
    ],
    link: null,
  },
  {
    icon: '🚪',
    n: '02',
    title: 'Wegzugssteuer',
    subtitle: 'Steuern auf unrealisierte Gewinne',
    content: 'Wenn du Deutschland verlässt, besteuert der Staat deine unrealisierten Gewinne — als ob du alles jetzt verkaufst. Betroffen: GmbH-Anteile, Investmentfonds (seit 2025), Aktien in bestimmten Konstellationen.',
    facts: [
      'Auslöser: Aufgabe der unbeschränkten Steuerpflicht',
      'Steuersatz: 26,375% auf fiktiven Gewinn',
      'Stundung möglich: 5 Jahre, zinslos (mit Sicherheitsleistung)',
      'Seit 2025: Auch Investmentfonds und Spezialfonds betroffen',
    ],
    link: '/blog/wegzugsbesteuerung',
  },
  {
    icon: '📅',
    n: '03',
    title: '183-Tage-Regel',
    subtitle: 'Wann du steuerpflichtig bist',
    content: 'Wer weniger als 183 Tage im Jahr in einem Land ist, zahlt dort meist keine Einkommensteuer. Aber: Deutschland prüft zusätzlich den "Lebensmittelpunkt". Selbst 10 Tage in Deutschland können zur vollen Steuerpflicht führen, wenn Familie und Haus dort sind.',
    facts: [
      'Auch Teiltage zählen (Anreise = Tag 1)',
      'Lebensmittelpunkt-Test: Familie, Haus, Kontakte in DE?',
      'Wohnsitz ≠ Lebensmittelpunkt — beides muss verlagert werden',
      'Kein DBA zwischen Deutschland und UAE — saubere Lösung nötig',
    ],
    link: '/blog/183-tage-regel',
  },
  {
    icon: '🏛️',
    n: '04',
    title: 'Doppelbesteuerung (DBA)',
    subtitle: 'Kein DBA zwischen DE und UAE',
    content: 'Doppelbesteuerungsabkommen sollen verhindern, dass du dein Einkommen zweimal versteuerst. Deutschland hat mit ~100 Ländern ein DBA — aber NICHT mit den UAE. Das klingt zunächst schlecht, ist es aber nicht: Wer sauber wegzieht, zahlt in Deutschland gar nicht mehr.',
    facts: [
      'Kein DBA DE–UAE bedeutet: Sauberer Wegzug = keine Überschneidung',
      'Vorteil: Kein Quellensteuer-Wirrwarr',
      'Risiko: Firma in Ajman + Wohnsitz in DE = Doppelbesteuerung',
      'Lösung: Gründung VOR offiziellem Wegzug',
    ],
    link: null,
  },
]

const faqs = [
  {
    q: 'Kann ich als GmbH-Inhaber einfach nach Ajman wechseln?',
    a: 'Nicht ganz. Wenn du eine deutsche GmbH hast, muss geprüft werden, ob Wegzugssteuer auf die Anteile anfällt (§ 6 AStG). Das klärt ein Steuerberater vor dem Wegzug — wir helfen dabei, den richtigen zu finden.',
  },
  {
    q: 'Was ist mit meiner deutschen Krankenversicherung?',
    a: 'Wer Deutschland offiziell verlässt, scheidet aus der gesetzlichen KV aus. In den UAE gibt es private Krankenversicherungen ab ~€150/Monat. Das muss vor dem Wegzug organisiert werden.',
  },
  {
    q: 'Muss ich in den UAE Steuererklärung einreichen?',
    a: 'Für Freezone-Unternehmen ja — seit Einführung der Corporate Tax 2023. Die Erklärung ist aber stark vereinfacht, wenn du unter der Small Business Relief-Grenze (AED 375k) bleibst.',
  },
  {
    q: 'Was passiert mit meinen deutschen Aktien und ETFs?',
    a: 'Beim Wegzug können Wertzuwächse als realisiert gelten (fiktive Veräußerung). Stundung über 5 Jahre ist möglich. Konkret abhängig von Beteiligungshöhe und Fondsstruktur — Steuerberater konsultieren.',
  },
  {
    q: 'Ist das legal?',
    a: 'Ja. Wohnsitzverlagerung und Firmengründung im Ausland sind legal — wenn sauber gemacht. Das bedeutet: Echter Wegzug, offizieller Wohnsitz in UAE, keine Betriebsstätte in Deutschland.',
  },
]

export default function SteuerWissenPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/steueroptimierung.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>
        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center">Steuer-Grundlagen für Auswanderer</div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance">
            Die 4 Säulen der<br />
            <span className="text-highlight">Steuerplanung</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed">
            Bevor du auswanderst, musst du 4 Steuerschichten verstehen. 
            Jede hat unterschiedliche Regeln, Fristen und Konsequenzen.
          </p>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <div key={i} className="card p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left */}
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl flex-shrink-0">
                        {p.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gold uppercase tracking-wider">{p.n}</p>
                        <h3 className="font-display text-xl font-bold text-ink-900 dark:text-cream leading-tight">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-ink-500 dark:text-ink-400">{p.subtitle}</p>
                  </div>

                  {/* Right */}
                  <div className="md:col-span-2">
                    <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-5 text-sm">
                      {p.content}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {p.facts.map((fact, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-ink-600 dark:text-ink-300">
                          <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                    {p.link && (
                      <Link
                        to={p.link}
                        className="text-xs font-bold text-gold hover:underline inline-flex items-center gap-1"
                      >
                        Detaillierten Artikel lesen →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Kurzübersicht</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Deutschland vs Ajman Free Zone
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Steuerart</th>
                  <th>Deutschland</th>
                  <th className="text-gold">Ajman Free Zone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Einkommensteuer', 'bis 45% (+ Soli)', '0%'],
                  ['Körperschaftsteuer', '~15% (+ GewSt ≈ 30% gesamt)', '0% (Freezone)'],
                  ['Gewerbesteuer', '~14–17%', 'Entfällt'],
                  ['Kapitalertragsteuer', '25% + Soli', '0%'],
                  ['Umsatzsteuer', '19%', '5% (UAE VAT, optional)'],
                  ['Erbschaft-/Schenkungsteuer', 'Bis 50%', '0%'],
                ].map(([type, de, ajman], i) => (
                  <tr key={i}>
                    <td className="font-medium text-ink-900 dark:text-cream">{type}</td>
                    <td className="text-ink-500 dark:text-ink-400">{de}</td>
                    <td className="text-gold font-semibold">{ajman}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-ink-400 text-center mt-3">
            Ajman-Zahlen gelten bei korrekter Struktur und verlagerten Wohnsitz. Individuelle Situation kann abweichen.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Häufige Fragen</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Steuern & Wegzug
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream">
                    {faq.q}
                  </h3>
                  <span className={`text-gold text-xl leading-none flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <div className="eyebrow mb-4">Mehr lesen</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
            Tiefergehende Artikel
          </h2>
          <p className="text-ink-600 dark:text-ink-300 mb-8">
            Alle Themen im Detail — kostenlos, ohne Paywall.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { to: '/blog/183-tage-regel', label: '183-Tage-Regel erklärt' },
              { to: '/blog/wegzugsbesteuerung', label: 'Wegzugssteuer 2026' },
              { to: '/blog/steuerfallen', label: '5 Steuerfallen vermeiden' },
              { to: '/blog/uae-corporate-tax', label: 'UAE Corporate Tax' },
              { to: '/blog', label: 'Alle Artikel →' },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="badge-gold hover:bg-gold/20 transition-colors text-sm py-2 px-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Deine persönliche Steuerstrategie
          </h2>
          <p className="text-ink-300 text-lg mb-8 max-w-lg mx-auto">
            Jede Situation ist anders. Im kostenlosen Call prüfen wir, 
            was in deinem Fall gilt — und was nicht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="btn-primary">
              🗓 Kostenlosen Call buchen
            </button>
            <Link to="/blog" className="btn-secondary">
              Blog lesen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
