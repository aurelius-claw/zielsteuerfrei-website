export default function ImpressumPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 gradient-bg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pages/impressum.png" 
            alt="Impressum - Rechtliche Angaben"
            className="w-full h-full object-cover opacity-15 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-950/70 via-black-950/50 to-black-950/70" />
        </div>
        
        <div className="container-narrow px-6 md:px-12 text-center relative z-10">
          <h1 className="text-5xl md:text-display-lg font-display font-bold text-silver-100 mb-6 leading-tight">
            Impressum
          </h1>
          <p className="text-xl text-silver-200 max-w-3xl mx-auto">
            Rechtliche Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container-narrow px-6 md:px-12">
          <div className="card-hover p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-silver-200 space-y-2">
                <p><strong>Ziel:steuerfrei</strong></p>
                <p>Inhaber: [Name]</p>
                <p>Adresse: [Straße, PLZ Ort]</p>
                <p>Kontakt: info@zielsteuerfrei.de</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                Haftungsausschluss
              </h2>
              <div className="text-silver-200 space-y-4">
                <p>
                  Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                Hinweis zur Streitbeilegung
              </h2>
              <div className="text-silver-200 space-y-4">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" className="text-brand-400 hover:text-brand-300 ml-1" target="_blank" rel="noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>.
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