export default function KontaktPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit to an API
    alert('Nachricht gesendet! Wir melden uns innerhalb von 24 Stunden.')
  }
  
  return (
    <div className="animate-fade-in">
      {/* Hero with Background Image */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 gradient-bg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pages/kontakt.png" 
            alt="Kontakt - Wir sind für dich da"
            className="w-full h-full object-cover opacity-15 dark:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-950/70 via-black-950/50 to-black-950/70" />
        </div>
        
        <div className="container-narrow px-6 md:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-silver-300">Wir sind für dich da</span>
          </div>
          
          <h1 className="text-5xl md:text-display-lg font-display font-bold text-silver-100 mb-6 leading-tight">
            Kontakt &<br />
            <span className="bg-gradient-to-r from-brand-teal to-brand-cyan bg-clip-text text-transparent">
              Beratungstermin
            </span>
          </h1>
          
          <p className="text-xl text-silver-200 max-w-3xl mx-auto mb-8">
            Du hast Fragen zum Prozess, zu Ajman oder zur Steuerfreiheit? Wir antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="card-hover p-8">
                <h3 className="text-2xl font-display font-bold text-silver-100 mb-6">
                  📞 Direkter Kontakt
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center flex-shrink-0">
                      <span className="text-white">🗓️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-silver-200">Strategie‑Call</h4>
                      <p className="text-silver-200 text-sm">
                        20 Minuten kostenlos. Kein Verkaufsgespräch, nur Klärung deiner Situation.
                      </p>
                      <button className="mt-2 btn btn-ghost text-sm px-4 py-2" data-calendly="zielsteuerfrei/strategie-call">
                        Termin buchen →
                      </button>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0">
                      <span className="text-white">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-silver-200">E‑Mail</h4>
                      <p className="text-silver-200 text-sm">
                        Anfragen, Dokumente, allgemeine Fragen.
                      </p>
                      <a href="mailto:info@zielsteuerfrei.de" className="mt-2 text-brand-400 hover:text-brand-300 text-sm block">
                        info@zielsteuerfrei.de
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-blue flex items-center justify-center flex-shrink-0">
                      <span className="text-white">💬</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-silver-200">WhatsApp‑Gruppe</h4>
                      <p className="text-silver-200 text-sm">
                        Für Kunden: Direkter Draht zu Steuerberater + Juliana.
                      </p>
                      <span className="mt-2 text-silver-300 text-sm block">
                        Nur für Paket‑Kunden
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card-hover p-8">
              <h3 className="text-2xl font-display font-bold text-silver-100 mb-6">
                Nachricht senden
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-silver-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full glass px-4 py-3 rounded-lg text-silver-100 placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    placeholder="Max Mustermann"
                    required
                  />
                </div>
                <div>
                  <label className="block text-silver-300 mb-2">E‑Mail</label>
                  <input
                    type="email"
                    className="w-full glass px-4 py-3 rounded-lg text-silver-100 placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    placeholder="max@beispiel.de"
                    required
                  />
                </div>
                <div>
                  <label className="block text-silver-300 mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full glass px-4 py-3 rounded-lg text-silver-100 placeholder-silver-600 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    placeholder="Hallo, ich interessiere mich für Ajman und habe folgende Fragen..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full py-4"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}