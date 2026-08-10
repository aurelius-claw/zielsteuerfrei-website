import React from 'react'
import { Helmet } from 'react-helmet-async'
import { openCalendlyWidget, trackEvent, trackGenerateLead } from '../utils/tracking'

function openCalendly(source = 'contact_page') {
  openCalendlyWidget(source)
}

export default function KontaktPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackGenerateLead({ lead_type: 'contact_form' })
    alert('Nachricht gesendet! Wir melden uns innerhalb von 24 Stunden.')
  }

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Kontakt | Kostenloser Strategie-Call in 20 Min. | Ziel:steuerfrei</title>
        <meta name="description" content="Buche ein kostenloses Erstgespräch mit Neno oder schreibe an info@zielsteuerfrei.de. Wir prüfen, ob eine VAE-Firmengründung zu deiner Situation passt." />
        <meta property="og:title" content="Kostenloser Strategie-Call | VAE Gründung | Ziel:steuerfrei" />
        <meta property="og:description" content="20 Minuten, kostenlos, ohne Verpflichtung. Wir klären, ob die VAE die richtige Lösung für deine Firmengründung ist." />
        <meta property="og:url" content="https://zielsteuerfrei.de/kontakt" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-cream dark:bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/hero-dubai-real.webp"
            alt="Dubai Skyline als Hintergrund für Kontakt"
            className="w-full h-full object-cover opacity-[0.16] dark:opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-cream/78 dark:bg-navy-950/82" />
        </div>

        <div className="max-w-content mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Erstgespräch mit Neno
          </div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Kurz sprechen,<br />
            <span className="text-highlight">bevor du planst</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Schreib uns oder buche direkt einen Termin. Im ersten Gespräch geht es darum,
            ob eine VAE-Gründung für dich überhaupt der richtige nächste Schritt ist.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-cream mb-6">
                  Direkter Kontakt
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-xl flex-shrink-0">
                      🗓️
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink-900 dark:text-cream mb-1">Erstgespräch</h4>
                      <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                        20 Minuten kostenlos mit Neno. Wir prüfen Ausgangslage, Ziele und offene Steuerfragen.
                      </p>
                      <button
                        onClick={() => openCalendly('contact_card')}
                        className="mt-3 btn-primary text-sm px-5 py-2.5"
                      >
                      Termin buchen
                      </button>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-xl flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink-900 dark:text-cream mb-1">E‑Mail</h4>
                      <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                        Anfragen, Dokumente, allgemeine Fragen.
                      </p>
                      <a
                        href="mailto:info@zielsteuerfrei.de"
                        onClick={() => trackEvent('email_click', { source: 'contact_page' })}
                        className="mt-2 text-gold hover:underline text-sm block font-semibold"
                      >
                        info@zielsteuerfrei.de
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink-900 dark:text-cream mb-1">WhatsApp‑Support</h4>
                      <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                        Für Kunden: Direkter Draht zu uns – keine Ticket-Nummer, kein Callcenter.
                      </p>
                      <span className="mt-2 text-ink-500 dark:text-ink-300 text-xs block">
                        Nur für Paket‑Kunden
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Info box */}
              <div className="insight-box">
                <p className="font-bold text-ink-900 dark:text-cream mb-2">Typische Antwortzeiten</p>
                <ul className="space-y-2 text-sm text-ink-600 dark:text-ink-300">
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> E-Mail: innerhalb von 24h (werktags)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> Erstgespräch: Termine meist in 2-3 Tagen verfügbar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gold">✓</span> WhatsApp (Kunden): direkt erreichbar
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-cream mb-6">
                Nachricht senden
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-800 border border-ink-100 dark:border-navy-700 text-ink-900 dark:text-cream placeholder-ink-400 dark:placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Max Mustermann"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2">
                    E‑Mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-800 border border-ink-100 dark:border-navy-700 text-ink-900 dark:text-cream placeholder-ink-400 dark:placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="max@beispiel.de"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink-700 dark:text-ink-300 mb-2">
                    Deine Frage / Situation
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-navy-800 border border-ink-100 dark:border-navy-700 text-ink-900 dark:text-cream placeholder-ink-400 dark:placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                    placeholder="Hallo, ich interessiere mich für eine VAE-Firmengründung und habe folgende Fragen..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-4">
                  Nachricht senden →
                </button>
                <p className="text-xs text-ink-500 dark:text-ink-300 text-center">
                  Deine Daten werden vertraulich behandelt. Kein Spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-display-md text-cream mb-4">
            Lieber direkt reden?
          </h2>
          <p className="text-ink-300 mb-8 max-w-lg mx-auto leading-relaxed">
            Im kostenlosen Erstgespräch klären wir in 20 Minuten, ob eine VAE-Firmengründung für dich sinnvoll ist.
          </p>
          <button onClick={() => openCalendly('contact_bottom_cta')} className="btn-primary">
            Kostenlosen Call buchen
          </button>
        </div>
      </section>
    </div>
  )
}
