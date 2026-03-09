export default function DatenschutzPage() {
  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="pt-28 pb-16 bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="max-w-content mx-auto px-4 md:px-6 text-center">
          <div className="eyebrow mb-4 justify-center">Rechtliches</div>
          <h1 className="font-display text-display-lg text-ink-900 dark:text-cream mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-ink-600 dark:text-ink-300 max-w-xl mx-auto">
            Erklärung gemäß DSGVO
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="card p-8 md:p-12 space-y-10">

            <div>
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  <strong className="text-ink-900 dark:text-cream">Allgemeine Hinweise</strong><br />
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p>
                  <strong className="text-ink-900 dark:text-cream">Datenerfassung auf dieser Website</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                2. Hosting
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP‑Adresse</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Verwendeter Browser und Betriebssystem</li>
                  <li>Referrer URL</li>
                </ul>
                <p>
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                </p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                3. Kontaktformular
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                </p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                4. Ihre Rechte
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden:
                  <a href="mailto:info@zielsteuerfrei.de" className="text-gold hover:underline ml-1">
                    info@zielsteuerfrei.de
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-ink-100 dark:border-navy-800 pt-8">
              <h2 className="font-display text-xl font-bold text-ink-900 dark:text-cream mb-4">
                5. Externe Dienste
              </h2>
              <div className="text-ink-600 dark:text-ink-300 space-y-4 text-sm leading-relaxed">
                <p>
                  <strong className="text-ink-900 dark:text-cream">Calendly</strong><br />
                  Für die Buchung von Beratungsterminen nutzen wir Calendly (Calendly LLC, Atlanta, USA). Beim Klick auf einen Buchungslink werden Daten an Calendly übertragen. Weitere Informationen findest du in der{' '}
                  <a
                    href="https://calendly.com/privacy"
                    className="text-gold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Datenschutzerklärung von Calendly
                  </a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
