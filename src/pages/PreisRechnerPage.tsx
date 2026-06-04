import { useMemo, useState } from 'react'
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

function fmt(n: number) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
}

type Structure = 'einzel' | 'gmbh' | 'gmbhAusschüttung'

const structures: Record<Structure, { label: string; hint: string; rates: [number, number] }> = {
  einzel: {
    label: 'Einzelunternehmer / Freiberufler',
    hint: 'Progressive Einkommensteuer, je nach Gewinn, Sonderausgaben und Situation.',
    rates: [0.28, 0.44],
  },
  gmbh: {
    label: 'GmbH, Gewinne bleiben in der Firma',
    hint: 'Körperschaftsteuer und Gewerbesteuer, ohne private Ausschüttung.',
    rates: [0.28, 0.33],
  },
  gmbhAusschüttung: {
    label: 'GmbH mit Ausschüttung',
    hint: 'GmbH-Steuern plus private Besteuerung der Ausschüttung.',
    rates: [0.42, 0.50],
  },
}

const setupCost = 6990
const renewalCost = 2990

export default function PreisRechnerPage() {
  const [profit, setProfit] = useState(120000)
  const [years, setYears] = useState(3)
  const [structure, setStructure] = useState<Structure>('einzel')

  const calc = useMemo(() => {
    const selected = structures[structure]
    const [lowRate, highRate] = selected.rates
    const germanLow = profit * lowRate
    const germanHigh = profit * highRate

    const totalGermanLow = germanLow * years
    const totalGermanHigh = germanHigh * years
    const totalSetup = setupCost + renewalCost * Math.max(0, years - 1)

    const potentialLow = Math.max(0, totalGermanLow - totalSetup)
    const potentialHigh = Math.max(0, totalGermanHigh - totalSetup)

    return {
      selected,
      germanLow,
      germanHigh,
      totalSetup,
      potentialLow,
      potentialHigh,
    }
  }, [profit, years, structure])

  const belowUaeThreshold = profit <= 94000

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Kostenvergleich Deutschland vs VAE | Ziel:steuerfrei</title>
        <meta
          name="description"
          content="Interaktiver Kostenvergleich für Unternehmer: Deutschland vs VAE-Gründung. Keine Steuerberechnung, sondern eine Orientierung für mögliches Sparpotenzial."
        />
        <meta property="og:title" content="Kostenvergleich Deutschland vs VAE | Ziel:steuerfrei" />
        <meta
          property="og:description"
          content="Prüfe grob, welches Sparpotenzial eine VAE-Struktur haben kann. Mit Rechtsform-Auswahl und transparenten Setup-Kosten."
        />
        <meta property="og:url" content="https://zielsteuerfrei.de/preis-rechner" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden bg-cream pt-28 pb-16 dark:bg-navy-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/service-banking-generated.png"
            alt="Banking-Dashboard mit Unterlagen"
            className="h-full w-full object-cover opacity-[0.16] dark:opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-cream/78 dark:bg-navy-950/82" />
        </div>
        <div className="relative mx-auto max-w-wide px-4 text-center md:px-6">
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-5 text-balance">
            Kostenvergleich<br />
            <span className="text-highlight">Deutschland vs VAE</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            Der Rechner zeigt grob, welches Sparpotenzial gegenüber einem bestehenden deutschen Setup
            möglich ist. Die Kosten der VAE-Gründung sind bereits berücksichtigt; deutsche
            Gründungskosten rechnen wir bewusst nicht ein.
          </p>
        </div>
      </section>

      <section className="section bg-white dark:bg-navy-900">
        <div className="mx-auto grid max-w-wide gap-8 px-4 md:px-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-3">
                Deine Ausgangslage
              </h2>
              <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                Wähle eine grobe Struktur. Die Werte sind bewusst Bandbreiten, weil Steuerlasten in
                Deutschland stark von Rechtsform, Hebesatz, privaten Faktoren und Ausschüttung abhängen.
              </p>
            </div>

            <div className="card p-6">
              <label className="mb-3 block text-sm font-semibold text-ink-700 dark:text-ink-300">
                Aktuelle Struktur
              </label>
              <div className="space-y-2">
                {(Object.keys(structures) as Structure[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setStructure(key)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      structure === key
                        ? 'border-gold bg-gold/10 text-ink-900 dark:text-cream'
                        : 'border-ink-100 text-ink-600 hover:border-gold/40 dark:border-navy-700 dark:text-ink-300'
                    }`}
                  >
                    <span className="block font-semibold">{structures[key].label}</span>
                    <span className="mt-1 block text-xs text-ink-500 dark:text-ink-400">
                      {structures[key].hint}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-semibold text-ink-700 dark:text-ink-300">
                  Jahresgewinn
                </label>
                <span className="font-display text-xl font-bold text-gold">{fmt(profit)}</span>
              </div>
              <input
                type="range"
                min={30000}
                max={500000}
                step={5000}
                value={profit}
                onChange={(e) => setProfit(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-100 accent-gold dark:bg-navy-700"
              />
              <div className="mt-2 flex justify-between text-xs text-ink-400">
                <span>€30k</span>
                <span>€500k</span>
              </div>
            </div>

            <div className="card p-6">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-semibold text-ink-700 dark:text-ink-300">
                  Betrachtung
                </label>
                <span className="font-display text-xl font-bold text-gold">{years} Jahre</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-100 accent-gold dark:bg-navy-700"
              />
              <div className="mt-2 flex justify-between text-xs text-ink-400">
                <span>1 Jahr</span>
                <span>10 Jahre</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <div className="card p-7">
              <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
                Orientierung pro Jahr
              </p>
              <div className="space-y-5">
                <div className="border-b border-ink-100 pb-5 dark:border-navy-800">
                  <div className="mb-2 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-cream">
                        Deutschland
                      </h3>
                      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                        Grobe Bandbreite für deine gewählte Struktur.
                      </p>
                    </div>
                    <span className="font-display text-3xl font-bold text-cream dark:text-cream">
                      {fmt(calc.germanLow)} bis {fmt(calc.germanHigh)}
                    </span>
                  </div>
                </div>

                <div className="border-b border-ink-100 pb-5 dark:border-navy-800">
                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-semibold text-ink-900 dark:text-cream">
                      VAE
                    </h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                      Keine pauschale Steuerberechnung. Corporate Tax kann je nach Umsatz, Gewinn,
                      Tätigkeit und Free-Zone-Status relevant werden.
                    </p>
                  </div>
                  <p className="mt-3 rounded-xl border border-gold/25 bg-gold/5 px-4 py-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {belowUaeThreshold
                      ? 'Bei dieser Gewinnhöhe liegt der Gewinn unter ca. AED 375.000. Ob in deinem Fall tatsächlich keine VAE Corporate Tax anfällt, muss trotzdem anhand der Struktur geprüft werden.'
                      : 'Bei dieser Gewinnhöhe kann die VAE Corporate Tax relevant werden. Deshalb zeigen wir hier kein falsches 0%-Versprechen, sondern prüfen die Struktur im Erstgespräch.'}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-ink-700 dark:text-ink-300">
                    Mögliches Sparpotenzial nach Setup-/Renewal-Kosten
                  </p>
                  <p className="font-display text-5xl font-bold text-gold">
                    {fmt(calc.potentialLow)} bis {fmt(calc.potentialHigh)}
                  </p>
                  <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">
                    Über {years} {years === 1 ? 'Jahr' : 'Jahre'} bei Setup-Kosten von {fmt(calc.totalSetup)}.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="card p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  Fixe Kosten
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-ink-600 dark:text-ink-300">Gründerpaket Jahr 1</span>
                    <span className="font-semibold text-ink-900 dark:text-cream">{fmt(setupCost)}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-ink-600 dark:text-ink-300">Renewal ab Jahr 2</span>
                    <span className="font-semibold text-ink-900 dark:text-cream">{fmt(renewalCost)} / Jahr</span>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  Nächster Schritt
                </p>
                <p className="mb-5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  Wenn die Bandbreite interessant ist, klären wir im Erstgespräch, ob die Struktur
                  fachlich überhaupt passt.
                </p>
                <button onClick={openCalendly} className="btn-primary w-full">
                  Erstgespräch buchen
                </button>
              </div>
            </div>

            <p className="px-2 text-center text-xs leading-relaxed text-ink-400">
              Dieses Tool ersetzt keine Steuerberatung. Es zeigt nur eine grobe wirtschaftliche
              Orientierung. Die tatsächliche Steuerlast hängt von persönlicher Situation,
              Rechtsform, Ausschüttung, Gewerbesteuer-Hebesatz, Wegzug und VAE-Compliance ab.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
