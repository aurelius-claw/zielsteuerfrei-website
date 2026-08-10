import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const suggestions = [
  { to: '/free-zone-vergleich', label: 'Free-Zone-Vergleich', desc: 'Ajman, Dubai & Co. mit echten Zahlen' },
  { to: '/preis-rechner', label: 'Preis-Rechner', desc: 'Was deine Gründung konkret kostet' },
  { to: '/steuer-wissen', label: 'Steuer-Wissen', desc: 'Wegzug, 183 Tage, Corporate Tax' },
  { to: '/blog', label: 'Blog', desc: 'Ratgeber mit Quellen und Rechtsstand' },
]

export default function NotFoundPage() {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Seite nicht gefunden | Ziel:steuerfrei</title>
        <meta name="description" content="Diese Seite existiert nicht mehr oder wurde verschoben. Hier findest du die wichtigsten Einstiegspunkte zu VAE-Firmengründung und Steuerwissen." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="section bg-cream dark:bg-navy-950 pt-32">
        <div className="max-w-wide mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">Fehler 404</div>

            <h1 className="font-display text-display-xl text-ink-900 dark:text-cream mb-6 text-balance">
              Diese Seite gibt es <span className="text-highlight">nicht</span>
            </h1>

            <p className="text-lg text-ink-600 dark:text-ink-300 leading-relaxed mb-10">
              Vermutlich hat sich ein Tippfehler in die Adresse geschlichen, oder wir haben den
              Inhalt umgezogen. Diese Einstiege helfen dir weiter:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {suggestions.map(item => (
                <Link key={item.to} to={item.to} className="group card p-5 hover:border-gold/30">
                  <span className="block font-display text-lg font-bold text-ink-900 dark:text-cream group-hover:text-gold transition-colors">
                    {item.label}
                  </span>
                  <span className="block mt-1 text-sm text-ink-600 dark:text-ink-300">
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>

            <Link to="/" className="btn-primary">
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
