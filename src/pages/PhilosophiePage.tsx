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

const values = [
  {
    icon: '🎯',
    title: 'Kein Hype',
    desc: 'Wir verkaufen keine Träume. Ajman ist kein Geheimtipp mehr — es ist ein etablierter, rechtssicherer Weg. Den erklären wir nüchtern.',
  },
  {
    icon: '💬',
    title: 'Echte Menschen',
    desc: 'Kein Chatbot, kein Formular-Dschungel. Du hast direkte WhatsApp-Nummern. Wir antworten persönlich.',
  },
  {
    icon: '📋',
    title: 'Transparente Preise',
    desc: '€6.990. Das ist der Preis. Kein "je nach Fall", kein Aufpreis für Extras, keine versteckte Jahresgebühr im ersten Jahr.',
  },
  {
    icon: '⚖️',
    title: 'Rechtliche Sauberkeit',
    desc: 'Wir arbeiten nur mit zugelassenen Steuerberatern. Was nicht legal ist, empfehlen wir nicht — egal wie verlockend.',
  },
  {
    icon: '🤝',
    title: 'Ehrliche Einschätzung',
    desc: 'Wenn Ajman für dich nicht passt, sagen wir das im Erstgespräch — bevor du bezahlst. Das ist unser Versprechen.',
  },
  {
    icon: '🔄',
    title: 'Langfristig denken',
    desc: '3 Monate Support nach Gründung. Nicht weil wir müssen — sondern weil wir wollen, dass dein Setup auch funktioniert.',
  },
]

export default function PhilosophiePage() {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Unsere Philosophie | Ehrlich. Transparent. Ajman. | Ziel:steuerfrei</title>
        <meta name="description" content="Kein Dubai-Hype, keine versteckten Kosten. Wir zeigen dir den echten Weg zur steuerfreien VAE-Firma – mit Ajman als smarte, günstige Alternative." />
        <meta property="og:title" content="Unsere Philosophie | Ziel:steuerfrei" />
        <meta property="og:description" content="Ajman ist die ehrliche Alternative zu Dubai: günstiger, schneller, genauso legal. Unsere Werte & unser Versprechen." />
        <meta property="og:url" content="https://zielsteuerfrei.de/philosophie" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/philosophie.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Die Idee hinter Ziel:steuerfrei
          </div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Fair. Bodenständig.<br />
            <span className="text-highlight">Nahbar.</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Kein Matrix-Hype, keine geheimen Tricks. Wir glauben an Transparenz, ehrliche Beratung 
            und einen rechtlich sauberen Weg in die Steuerfreiheit.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <div className="eyebrow mb-4">Warum wir das tun</div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-6">
                Die Branche war zu lange intransparent
              </h2>
              <div className="space-y-4 text-ink-600 dark:text-ink-300 leading-relaxed">
                <p>
                  Die meisten Anbieter in diesem Markt arbeiten mit Intransparenz. 
                  Versteckte Kosten, unklare Leistungen, Versprechen die nicht gehalten werden. 
                  Und Preise, die erst im Gespräch enthüllt werden — wenn du schon emotional invested bist.
                </p>
                <p>
                  Wir haben das selbst erlebt. Als Unternehmer, die diesen Weg gegangen sind, 
                  wissen wir genau, welche Fragen offen bleiben, welche Fehler passieren, 
                  und was man wirklich braucht.
                </p>
                <p>
                  Deshalb Ziel:steuerfrei: Ein Anbieter, der alle Karten auf den Tisch legt. 
                  Fester Preis, klare Leistungen, echte Menschen — keine Versprechen, 
                  die wir nicht einhalten können.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="insight-box">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-3">
                  Was "fair" für uns bedeutet
                </h3>
                <ul className="space-y-3">
                  {[
                    'Wenn Ajman nicht zu dir passt, sagen wir das',
                    'Der Preis steht auf der Website — nicht erst im Gespräch',
                    'Wir beantworten Fragen auch nach dem Kauf',
                    'Steuerberatung vermitteln wir — wir machen sie nicht selbst',
                    'Du kriegst eine echte Handynummer, keine Ticket-Queue',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300">
                      <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 border-gold/20">
                <p className="text-sm text-ink-500 dark:text-ink-400 italic leading-relaxed">
                  "Wir nehmen nur Kunden an, für die wir ehrlich sagen können: 
                  Ajman wird deinen finanziellen Stress reduzieren — nicht erhöhen."
                </p>
                <p className="text-xs font-semibold text-gold mt-3">— Zielsteuerfrei Gründerteam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Unsere Werte</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              6 Prinzipien, nach denen wir arbeiten
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card p-6 group">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <div className="eyebrow mb-4 text-gold">Erstgespräch</div>
          <h2 className="font-display text-display-lg text-cream mb-5">
            Überzeuge dich selbst
          </h2>
          <p className="text-ink-300 text-lg mb-8 max-w-lg mx-auto">
            20 Minuten. Kostenlos. Kein Druck. Wir klären ehrlich, ob Ajman zu dir passt — 
            und was du dafür tun musst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="btn-primary">
              🗓 Kostenlosen Call buchen
            </button>
            <Link to="/prozess" className="btn-secondary">
              Der Weg im Detail →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
