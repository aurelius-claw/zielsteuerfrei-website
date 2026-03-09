export default function DatenschutzPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 gradient-bg overflow-hidden">
        <div className="container-narrow px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-display-lg font-display font-bold text-silver-100 mb-6 leading-tight">
            Datenschutz
          </h1>
          <p className="text-xl text-silver-200 max-w-3xl mx-auto">
            Erklärung zur Datenschutzerklärung gemäß DSGVO
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container-narrow px-6 md:px-12">
          <div className="card-hover p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="text-silver-200 space-y-4">
                <p>
                  <strong>Allgemeine Hinweise</strong><br />
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p>
                  <strong>Datenerfassung auf dieser Website</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                2. Hosting
              </h2>
              <div className="text-silver-200 space-y-4">
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
            
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                3. Ihre Rechte
              </h2>
              <div className="text-silver-200 space-y-4">
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-bold text-silver-100 mb-4">
                4. Kontaktformular
              </h2>
              <div className="text-silver-200 space-y-4">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}