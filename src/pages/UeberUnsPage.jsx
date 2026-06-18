import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { openCalendlyWidget } from '../utils/tracking'

function openCalendly() {
  openCalendlyWidget('team_page')
}

const team = [
  {
    name: 'Neno',
    role: 'Gründer & VAE-Koordination',
    desc: 'Neno hatte die Idee zu Ziel:steuerfrei. Er kennt die Abläufe in den VAE aus der Praxis und ist für Erstgespräche, Einordnung und lokale Koordination zuständig.',
    photo: '/images/pages/team-neno.jpeg',
  },
  {
    name: 'Juljana',
    role: 'Vor-Ort-Begleitung',
    desc: 'Juljana hilft vor Ort bei Terminen, Medical Check und Behördengängen. Sie ist die Person, die aus einem fremden Ablauf einen planbaren Tag macht.',
    photo: '/images/pages/team-juljana.jpeg',
  },
  {
    name: 'Martin',
    role: 'IT & Versicherungen',
    desc: 'Martin macht die IT und kann bei Versicherungsthemen helfen. Als Makler in Deutschland kennt er besonders die Fragen rund um Krankenversicherung und Absicherung beim Wegzug.',
    photo: '/images/pages/team-martin-boat.jpeg',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Keine Abkürzungen',
    desc: 'Wir verkaufen keine Konstrukte, die nur auf dem Papier funktionieren. Wenn Steuerfragen offen sind, gehören sie vorab zu einem Steuerberater.',
  },
  {
    icon: '💬',
    title: 'Echte Menschen',
    desc: 'Du bekommst Handynummern, keine Ticket-Nummer. WhatsApp-Support direkt von uns — nicht von einem Callcenter.',
  },
  {
    icon: '📋',
    title: 'Transparente Preise',
    desc: '€6.990 steht auf der Website. Nicht "auf Anfrage", nicht "je nach Situation". Was du siehst, ist was du zahlst.',
  },
  {
    icon: '⚖️',
    title: 'Ehrliche Einschätzung',
    desc: 'Wenn eine VAE-Gründung für dich keinen Sinn ergibt, sagen wir das im Erstgespräch — bevor du einen Cent ausgibst.',
  },
]

export default function UeberUnsPage() {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Über uns | VAE-Firmengründung aus Deutschland | Ziel:steuerfrei</title>
        <meta name="description" content="Das Team hinter Ziel:steuerfrei: Neno, Juljana und Martin begleiten VAE-Gründungen mit Erstgespräch, Vor-Ort-Hilfe, IT und Versicherungserfahrung." />
        <meta property="og:title" content="Unser Team | VAE Gründungsservice | Ziel:steuerfrei" />
        <meta property="og:description" content="Neno und Juljana – persönliche Begleitung bei deiner Firmengründung in den VAE. 0% Steuern, transparente Preise, deutsche Beratung." />
        <meta property="og:url" content="https://zielsteuerfrei.de/ueber-uns" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/hero-dubai-marina-real.jpg"
            alt="Dubai Marina bei Abendlicht"
            className="w-full h-full object-cover opacity-[0.16] dark:opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-cream/78 dark:bg-navy-950/82" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Das Team hinter Ziel:steuerfrei
          </div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Drei Rollen,<br />
            <span className="text-highlight">ein klarer Ablauf</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Neno prüft mit dir den Einstieg. Juljana hilft vor Ort. Martin hält Technik,
            Prozesse und Versicherungsthemen im Blick.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Die Geschichte</div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-6">
                Entstanden aus eigener Erfahrung
              </h2>
              <div className="space-y-4 text-ink-600 dark:text-ink-300 leading-relaxed text-sm">
                <p>
                  Die Idee kam von Neno: Viele Unternehmer hören von den VAE, wissen aber nicht,
                  welche Schritte wirklich nötig sind und wo die steuerlichen Grenzen liegen.
                </p>
                <p>
                  Daraus wurde ein Prozess mit drei festen Rollen: Einordnung vorab,
                  Begleitung vor Ort und saubere digitale Abläufe im Hintergrund.
                </p>
                <p>
                  Ziel ist nicht, jede Anfrage anzunehmen. Ziel ist, früh zu erkennen,
                  ob eine VAE-Gründung passt, welche Fragen steuerlich geklärt werden müssen
                  und wie der Weg danach praktisch aussieht.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="insight-box">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-gold mb-4">
                  Was wir nicht sind
                </h3>
                <ul className="space-y-3">
                  {[
                    'Keine Steuerberater (wir vermitteln sie)',
                    'Keine Anwälte (wir vermitteln sie)',
                    'Keine Dubai-Marketer mit Hochglanz-Broschüren',
                    'Kein Remote-Team, das die VAE nie selbst erlebt hat',
                    'Kein Abo-Modell mit versteckten Jahreskosten',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300">
                      <span className="text-ink-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 border-gold/20">
                <p className="text-sm text-ink-600 dark:text-ink-300 italic leading-relaxed">
                  "Wir nehmen keine Kunden an, für die wir nicht ehrlich sagen können: 
                  dein VAE-Setup wird deinen finanziellen Stress reduzieren — nicht erhöhen."
                </p>
                <p className="text-xs font-semibold text-gold mt-3">— Martin, Gründer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-cream dark:bg-navy-950">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Das Team</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Drei Menschen, ein Prozess
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="card overflow-hidden text-center group">
                <div className="aspect-[3/4] relative bg-navy-800 overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
                      <span className="text-6xl font-display font-bold text-gold/30 select-none">M</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-cream mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gold mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white dark:bg-navy-900">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <div className="eyebrow mb-3">Unsere Werte</div>
            <h2 className="font-display text-display-md text-ink-900 dark:text-cream">
              Wie wir arbeiten
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card p-6 flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-900 dark:bg-navy-950 border-t border-gold/10">
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Lern uns persönlich kennen
          </h2>
          <p className="text-ink-300 text-lg mb-8 max-w-lg mx-auto">
            20 Minuten kostenloser Call. Kein Druck, keine Agenda — 
            wir klären ehrlich, ob wir dir helfen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openCalendly} className="btn-primary">
              Kostenlosen Call buchen
            </button>
            <Link to="/prozess" className="btn-secondary">
              Den Prozess ansehen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
