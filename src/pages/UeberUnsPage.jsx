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

const team = [
  {
    name: 'Neno',
    role: 'Gründer & Operations Ajman',
    desc: 'Nenos Idee. Sein eigener Weg als Auswanderer in Dubai war der Startpunkt – heute hat er die richtigen Connections direkt in Ajman: Steuerberater, Behörden, Netzwerk.',
    photo: '/images/pages/team-neno.jpeg',
  },
  {
    name: 'Juljana',
    role: 'Behörden & Compliance',
    desc: 'Juljana begleitet persönlich bei allen Behördengängen und Medical Checks vor Ort in Ajman – damit nichts verloren geht und alles reibungslos läuft.',
    photo: '/images/pages/team-juljana.jpeg',
  },
  {
    name: 'Martin',
    role: 'IT & Versicherung',
    desc: 'IT-Experte und IHK-zugelassener Versicherungsmakler. Martin berät zur internationalen Krankenversicherung – dem Thema, das bei der Auswanderung oft unterschätzt wird.',
    photo: null,
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Kein Hype',
    desc: 'Wir versprechen, was wir liefern können. Keine Guaranteed-Returns, keine "steuerfreien Geheimtipps". Nur einen klar strukturierten, legal wasserdichten Weg.',
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
    desc: 'Wenn Ajman für dich keinen Sinn ergibt, sagen wir das im Erstgespräch — bevor du einen Cent ausgibst.',
  },
]

export default function UeberUnsPage() {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Über uns | Neno & Juljana | Ziel:steuerfrei</title>
        <meta name="description" content="Das Team hinter Ziel:steuerfrei: Neno und Juljana begleiten dich persönlich durch deine Ajman-Gründung. Deutsche Beratung, direkte Kommunikation, echte Erfahrung." />
        <meta property="og:title" content="Unser Team | Ziel:steuerfrei" />
        <meta property="og:description" content="Neno und Juljana – die Gesichter hinter Ziel:steuerfrei. Persönliche Begleitung bei jeder Ajman-Gründung." />
        <meta property="og:url" content="https://zielsteuerfrei.de/#/ueber-uns" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pages/ueber-uns.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.09]"
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wide mx-auto px-4 md:px-6 relative text-center">
          <div className="eyebrow mb-5 justify-center animate-fade-up">
            Das Team hinter Ziel:steuerfrei
          </div>
          <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance animate-fade-up animation-delay-100">
            Wir sind selbst<br />
            <span className="text-highlight">den Weg gegangen</span>
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            Kein Berater-Team, das Ajman aus dem Lehrbuch kennt. 
            Wir haben es selbst durchlebt — und helfen jetzt anderen, es besser zu machen.
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
                  Martin zahlte jahrelang über 40% seines Einkommens in Deutschland — 
                  als Unternehmer mit komplett remote Business. 
                  Irgendwann wurde die Frage unvermeidlich: Warum eigentlich?
                </p>
                <p>
                  Der erste Versuch, das selbst zu lösen, war chaotisch. 
                  Falsche Berater, unklare Informationen, verpasste Fristen. 
                  Am Ende hat es funktioniert — aber mit doppelt so viel Aufwand wie nötig.
                </p>
                <p>
                  Neno war der lokale Anker in Ajman, der den Unterschied gemacht hat. 
                  Juljana hat den bürokratischen Teil am Laufen gehalten. 
                  Daraus ist Ziel:steuerfrei entstanden: Der Weg, den sich Martin 
                  von Anfang an gewünscht hätte.
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
                    'Kein Remote-Team, das Ajman nie gesehen hat',
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
                  Ajman wird deinen finanziellen Stress reduzieren — nicht erhöhen."
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
              🗓 Kostenlosen Call buchen
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