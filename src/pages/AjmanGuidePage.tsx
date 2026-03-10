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

const comparisonRows = [
  { label: 'Lizenz Setup (Jahr 1)', ajman: '€6.990 (All-inclusive)', dubai: '€12.000–18.000', highlight: true },
  { label: 'Jahreserneuerung', ajman: '~€670', dubai: '€2.000–4.000', highlight: false },
  { label: 'Einkommensteuer', ajman: '0%', dubai: '0%', highlight: false },
  { label: 'Körperschaftsteuer', ajman: '0% (Freezone)', dubai: '0% (Freezone)', highlight: false },
  { label: 'Gründungsdauer', ajman: '4–5 Tage', dubai: '2–4 Wochen', highlight: true },
  { label: 'Büro Pflicht', ajman: 'Virtual Office ✓', dubai: 'Eigenes Büro (+€10k/Jahr)', highlight: false },
  { label: 'Bankkonto', ajman: 'Begleitung inklusive', dubai: 'Eigeninitiative, oft schwierig', highlight: false },
  { label: '5-Jahres Gesamtkosten', ajman: '~€9.670', dubai: '~€27.500–42.000', highlight: true },
]

const forAjman = [
  'Solo-Unternehmer, Freelancer, Berater',
  'Remote-Work (Entwickler, Designer, Coach)',
  'Kein physisches Büro nötig',
  'Kosteneffizienz ist wichtig',
  'Schnell starten wollen (4 Tage)',
  'Keine Dubai-Adresse auf der Visitenkarte nötig',
]

const forDubai = [
  '10+ Mitarbeiter vor Ort',
  'Enterprise-Kunden, die Prestige erwarten',
  'Echtes Büro mit festem Team',
  'Manufacturing / physische Produkte',
  'Die €17.000 Mehrkosten sind irrelevant',
]

export default function AjmanGuidePage() {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Ajman vs Dubai: Ehrlicher Vergleich für Unternehmer 2026 | Ziel:steuerfrei</title>
        <meta name="description" content="Ajman Free Zone kostet 60% weniger als Dubai – bei gleicher Legalität und 0% Einkommensteuer. Alle echten Zahlen im Vergleich: Setup-Kosten, Zeitaufwand, Visas." />
        <meta property="og:title" content="Ajman vs Dubai: Firma gründen Vergleich 2026" />
        <meta property="og:description" content="Ajman kostet 60% weniger als Dubai – gleiche Steuerfreiheit, weniger Bürokratie. Ehrlicher Vergleich für deutsche Unternehmer." />
        <meta property="og:url" content="https://zielsteuerfrei.de/ajman-guide" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/ajman-guide.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>

        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Der detaillierte Vergleich · 2026
          </div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Ajman vs Dubai —<br />
            <span className="text-highlight">Was Marketing verschweigt</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Steuerlich identisch. Kosten: Welten auseinander. Warum Smart-Gründer 
            Dubai überspringen und bis zu <strong className="text-ink-900 dark:text-cream">€17.858</strong> sparen.
          </p>
        </div>
      </section>

      {/* The truth */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="eyebrow mb-4">Die unbequeme Wahrheit</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-6">
            Rechtlich sind sie identisch
          </h2>
          <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-6">
            Wenn du bei Google "Firmengründung VAE" suchst, siehst du nur Dubai. 
            Das liegt nicht daran, dass Dubai besser ist — sondern weil Dubai mehr Geld für Marketing hat.
          </p>

          <div className="insight-box mb-8">
            <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gold mb-4">Was Dubai und Ajman gemeinsam haben</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                '0% Einkommensteuer (identisch)',
                '9% Körperschaftsteuer erst ab €101k (identisch)',
                '100% Ausländer-Eigentum (identisch)',
                'Kein lokaler Sponsor nötig (identisch)',
                'Gleiche Banken (Emirates NBD, FAB etc.)',
                'Freie Gewinn-Repatriierung (identisch)',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-300">
                  <span className="text-gold font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-ink-500 dark:text-ink-400 italic">
            Der einzige echte Unterschied: Der Preis. Und in Ajman brauchst du keine teuren Büroräume.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Direktvergleich</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Die Zahlen im Vergleich
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="w-1/3">Kostenpunkt</th>
                  <th className="text-gold">Ajman Free Zone</th>
                  <th>Dubai (DMCC/IFZA)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-gold/4 dark:bg-gold/4' : ''}>
                    <td className="font-medium text-ink-900 dark:text-cream">{row.label}</td>
                    <td className={`font-semibold ${row.highlight ? 'text-gold' : 'text-ink-700 dark:text-ink-300'}`}>
                      {row.ajman}
                    </td>
                    <td className="text-ink-500 dark:text-ink-400">{row.dubai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-ink-400 dark:text-ink-500 mt-3 text-center">
            Alle Angaben Richtwerte 2026. Individuelle Situation kann abweichen.
          </p>
        </div>
      </section>

      {/* Audience split */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Entscheidungshilfe</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Wer sollte wohin?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ajman */}
            <div className="card p-8 border-gold/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-xl">🎯</div>
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-cream">Geh nach Ajman, wenn…</h3>
              </div>
              <ul className="space-y-3">
                {forAjman.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300">
                    <span className="text-gold mt-0.5 flex-shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-ink-100 dark:border-navy-800">
                <button onClick={openCalendly} className="btn-primary w-full text-sm py-3">
                  Ajman-Paket anfragen →
                </button>
              </div>
            </div>

            {/* Dubai */}
            <div className="card p-8 opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ink-100 dark:bg-navy-800 flex items-center justify-center text-xl">🏙️</div>
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-cream">Geh nach Dubai, wenn…</h3>
              </div>
              <ul className="space-y-3">
                {forDubai.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300">
                    <span className="text-ink-400 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-ink-100 dark:border-navy-800">
                <p className="text-xs text-ink-400 dark:text-ink-500 text-center">
                  Dubai bieten wir aktuell nicht an — wir empfehlen es ehrlich nur, wenn es wirklich passt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography / practical note */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow mb-4">Geografie</div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
                30 Minuten von Dubai entfernt
              </h2>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed mb-4">
                Ajman liegt direkt nördlich von Sharjah. Über die E311 oder E611 
                bist du in 25–35 Minuten am Flughafen Dubai (DXB). 
                Ajman ist ruhiger, günstiger beim Wohnen — und praktisch genauso gut verbunden.
              </p>
              <p className="text-ink-600 dark:text-ink-300 leading-relaxed">
                Für jeden, der nicht täglich physisch in Dubai sein muss, 
                ist der Standortnachteil null. Der Kostenvorteil ist real.
              </p>
            </div>
            <div className="card p-7">
              <div className="eyebrow mb-5 text-xs">5-Jahres Gesamtkostenvergleich</div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-ink-900 dark:text-cream">Ajman</span>
                    <span className="text-gold font-bold">~€9.670</span>
                  </div>
                  <div className="h-2.5 bg-ink-100 dark:bg-navy-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-ink-900 dark:text-cream">Dubai</span>
                    <span className="text-ink-500">~€27.500–42.000</span>
                  </div>
                  <div className="h-2.5 bg-ink-100 dark:bg-navy-800 rounded-full overflow-hidden">
                    <div className="h-full bg-ink-300 dark:bg-navy-600 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="pt-4 border-t border-ink-100 dark:border-navy-800">
                  <p className="text-xs text-ink-500">
                    Ersparnis über 5 Jahre: <span className="text-gold font-bold text-sm">€17.800–32.300</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Klingt nach Ajman für dich?
          </h2>
          <p className="text-ink-300 text-lg mb-8 max-w-lg mx-auto">
            Im kostenlosen Call prüfen wir gemeinsam, ob Ajman wirklich zu deinem Business passt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="btn-primary">
              🗓 Kostenlosen Call buchen
            </button>
            <Link to="/preis-rechner" className="btn-secondary">
              Ersparnis berechnen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
