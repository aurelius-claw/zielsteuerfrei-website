import { useState, useMemo } from 'react'
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

function fmt(n: number) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
}

const included = [
  { icon: '🏢', label: 'Handelslizenz Ajman Free Zone', value: '~€1.500' },
  { icon: '🏥', label: 'Medical Check Begleitung', value: '~€150' },
  { icon: '📋', label: 'Government Fees & Gründungsgebühren', value: '~€800' },
  { icon: '🪪', label: 'Emirates ID Unterstützung', value: '~€100' },
  { icon: '🏦', label: 'Bankkonto-Einrichtung', value: '~€200' },
  { icon: '💬', label: 'WhatsApp-Support (3 Monate)', value: 'Unbezahlbar' },
]

export default function PreisRechnerPage() {
  const [profit, setProfit] = useState(150000)
  const [years, setYears] = useState(3)

  const calc = useMemo(() => {
    const deRate = 0.47 // ~47% effective (GmbH KSt+GewSt + ESt ausschüttung)
    const ajmanRenewal = 670
    const setupCost = 6990

    const taxDE = profit * deRate
    const taxAjman = profit <= 101000 ? 0 : (profit - 101000) * 0.09
    const annualSaving = taxDE - taxAjman

    const totalCostAjman = setupCost + (ajmanRenewal * (years - 1))
    const totalTaxDE = taxDE * years
    const totalTaxAjman = taxAjman * years
    const netSaving = totalTaxDE - totalTaxAjman - totalCostAjman

    const breakEvenMonths = annualSaving > 0 ? Math.ceil((setupCost / annualSaving) * 12) : 0

    return { taxDE, taxAjman, annualSaving, totalCostAjman, totalTaxDE, totalTaxAjman, netSaving, breakEvenMonths }
  }, [profit, years])

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/steuerberatung.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>
        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center">Transparente Preise</div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-5 text-balance">
            Was kostet es —<br />
            <span className="text-highlight">und was sparst du?</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl mx-auto">
            €6.990 einmalig. Kein Wenn und Aber. Berechne live, was du gegenüber Deutschland sparst.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Inputs */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="eyebrow mb-4 text-xs">Stell deine Zahlen ein</div>
                <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-6">
                  Deine Ersparnis
                </h2>
              </div>

              {/* Profit slider */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-ink-700 dark:text-ink-300">
                    Jahresgewinn
                  </label>
                  <span className="font-display text-xl font-bold text-gold">{fmt(profit)}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={500000}
                  step={5000}
                  value={profit}
                  onChange={e => setProfit(Number(e.target.value))}
                  className="w-full h-2 bg-ink-100 dark:bg-navy-700 rounded-full appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-ink-400 mt-2">
                  <span>€50k</span>
                  <span>€500k</span>
                </div>
              </div>

              {/* Years slider */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-ink-700 dark:text-ink-300">
                    Betrachtungszeitraum
                  </label>
                  <span className="font-display text-xl font-bold text-gold">{years} Jahre</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={years}
                  onChange={e => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-ink-100 dark:bg-navy-700 rounded-full appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-xs text-ink-400 mt-2">
                  <span>1 Jahr</span>
                  <span>10 Jahre</span>
                </div>
              </div>

              {/* Break even */}
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Amortisation</p>
                <p className="font-display text-2xl font-bold text-ink-900 dark:text-cream">
                  {calc.breakEvenMonths <= 0 ? '—' : calc.breakEvenMonths <= 1 ? '< 1 Monat' : `${calc.breakEvenMonths} Monate`}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">
                  bis das Paket sich amortisiert hat
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-4">

              {/* Annual comparison */}
              <div className="card p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-5">Pro Jahr</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-ink-100 dark:border-navy-800">
                    <div>
                      <p className="font-semibold text-ink-900 dark:text-cream text-sm">Deutschland (GmbH)</p>
                      <p className="text-xs text-ink-400 mt-0.5">~47% effektiv (KSt + GewSt + ESt)</p>
                    </div>
                    <span className="font-display text-2xl font-bold text-red-500 dark:text-red-400">
                      {fmt(calc.taxDE)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-ink-100 dark:border-navy-800">
                    <div>
                      <p className="font-semibold text-ink-900 dark:text-cream text-sm">Ajman Free Zone</p>
                      <p className="text-xs text-ink-400 mt-0.5">
                        {calc.taxAjman === 0 ? '0% — unter Small Business Relief Schwelle' : '9% ab AED 375k Gewinn'}
                      </p>
                    </div>
                    <span className="font-display text-2xl font-bold text-green-600 dark:text-green-400">
                      {fmt(calc.taxAjman)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <p className="font-bold text-ink-900 dark:text-cream">Jährliche Ersparnis</p>
                    <span className="font-display text-3xl font-bold text-gold">{fmt(calc.annualSaving)}</span>
                  </div>
                </div>
              </div>

              {/* Multi-year summary */}
              <div className="card p-7 border-gold/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-400">{years} Jahre Gesamt</p>
                  <span className="badge-gold">Nach Kosten</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-600 dark:text-ink-300">Steuern gespart</span>
                    <span className="font-semibold text-ink-900 dark:text-cream">{fmt(calc.totalTaxDE - calc.totalTaxAjman)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ink-600 dark:text-ink-300">Ajman Gesamtkosten</span>
                    <span className="text-ink-500">– {fmt(calc.totalCostAjman)}</span>
                  </div>
                  <div className="h-px bg-ink-100 dark:bg-navy-800" />
                  <div className="flex justify-between">
                    <span className="font-bold text-ink-900 dark:text-cream">Netto-Vorteil</span>
                    <span className={`font-display text-3xl font-bold ${calc.netSaving > 0 ? 'text-gold' : 'text-ink-400'}`}>
                      {fmt(calc.netSaving)}
                    </span>
                  </div>
                </div>

                <button onClick={openCalendly} className="btn-primary w-full">
                  🗓 Jetzt kostenlos beraten lassen
                </button>
                <p className="text-xs text-center text-ink-400 mt-2">
                  Kostenlos · 20 Min · Keine Verpflichtung
                </p>
              </div>

              <p className="text-xs text-ink-400 text-center px-2">
                Schätzung auf Basis typischer Steuersätze. Individuelle Situation (Wegzugssteuer, DBA, Krypto) kann abweichen. Steuerberater konsultieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">Was ist im Paket</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              €6.990 — alles inklusive
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {included.map((item, i) => (
              <div key={i} className="card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-ink-900 dark:text-cream">{item.label}</p>
                  <p className="text-xs text-gold font-medium mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing block */}
          <div className="max-w-lg mx-auto bg-navy-900 dark:bg-navy-800 rounded-2xl p-8 text-center border border-gold/20">
            <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Komplettpaket · Einmalig</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="font-display text-6xl font-bold text-cream">€6.990</span>
            </div>
            <p className="text-ink-400 text-sm mb-1">Ab Jahr 2: nur Jahreserneuerung</p>
            <p className="text-gold font-bold text-sm mb-6">~€670 / Jahr</p>
            <button onClick={openCalendly} className="btn-primary w-full">
              Jetzt Termin buchen
            </button>
          </div>

          <p className="text-xs text-center text-ink-400 dark:text-ink-500 mt-6 max-w-md mx-auto">
            ⚠️ Kein Steuer- oder Rechtsberatungsangebot. Für steuerliche Fragen vermitteln wir an qualifizierte Steuerberater.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="eyebrow mb-4">FAQ</div>
          <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-8">Zum Preis</h2>
          <div className="space-y-3">
            {[
              { q: 'Gibt es versteckte Kosten?', a: 'Nein. €6.990 ist alles für das erste Jahr. Ab Jahr 2 fällt nur die Jahreserneuerung (~€670) an. Keine Verwaltungsgebühren, kein Support-Abo.' },
              { q: 'Was ist NICHT enthalten?', a: 'Steuer- und Rechtsberatung (dafür vermitteln wir Experten), Wohnungskosten in Ajman, Flug & Unterkunft, eventuelle persönliche Visas für Familienmitglieder.' },
              { q: 'Kann ich in Raten zahlen?', a: 'Aktuell nein — Einmalzahlung. Bei Fragen dazu gerne im Call ansprechen.' },
              { q: 'Was passiert, wenn ich die Lizenz nach Jahr 1 nicht verlängere?', a: 'Das Konto bleibt bestehen, aber keine neuen Transaktionen. Ajman bietet flexible Suspension ohne Strafgebühren an.' },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">{faq.q}</h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
