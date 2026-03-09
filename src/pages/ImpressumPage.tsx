export default function ImpressumPage() {
  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="pt-28 pb-16 bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <div className="eyebrow mb-4 justify-center">Rechtliches</div>
          <h1 className="font-display text-display-lg text-ink-900 dark:text-cream mb-4">
            Impressum
          </h1>
          <p className="text-ink-600 dark:text-ink-300 max-w-xl mx-auto">
            Rechtliche Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="card p-8 md:p-12 space-y-10">

            <div>
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-2 text-sm leading-relaxed">
                <p><strong className="text-ink-900 dark:text-cream">Ziel:steuerfrei</strong></p>
                <p>Inhaber: Martin [Nachname]</p>
                <p>Kontakt: <a href="mailto:info@zielsteuerfrei.de" className="text-gold hover:underline">info@zielsteuerfrei.de</a></p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                Haftungsausschluss
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  <strong className="text-ink-900 dark:text-cream">Hinweis:</strong> Die Inhalte auf dieser Website dienen ausschließlich der allgemeinen Information und stellen keine Steuer- oder Rechtsberatung dar. Für individuelle Beratung wende dich an einen zugelassenen Steuerberater oder Anwalt.
                </p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                Haftung für Links
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                Online-Streitbeilegung
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    className="text-gold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
