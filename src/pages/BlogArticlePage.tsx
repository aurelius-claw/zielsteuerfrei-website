import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  
  // Artikel-Datenbank
  const articles = {
    'ajman-vs-dubai': {
      title: 'Ajman vs Dubai: Ehrlicher Vergleich für deutsche Unternehmer',
      date: '15. Februar 2026',
      readTime: '8 Minuten',
      category: 'Kosten',
      excerpt: 'Ajman kostet 46% weniger als Dubai – mit derselben Legalität. Hier die echten Zahlen, ohne Marketing-Hype.',
      content: `
        <p>Wenn du über eine Firmengründung in den VAE nachdenkst, hörst du wahrscheinlich immer wieder "Dubai". Dabei gibt es eine Alternative, die für viele deutsche Unternehmer besser passt: Ajman.</p>
        
        <h2>Die harten Fakten: Kosten im Vergleich</h2>
        
        <p>Die Zahlen sprechen für sich. Hier ein realistischer Vergleich, basierend auf unseren Erfahrungen mit über 50 Gründungen:</p>
        
        <table class="w-full border-collapse border border-black-200 dark:border-black-700 my-6">
          <thead>
            <tr class="bg-black-200 dark:bg-black-800">
              <th class="border border-black-200 dark:border-black-700 p-4 text-left">Kostenpunkt</th>
              <th class="border border-black-200 dark:border-black-700 p-4 text-left">Ajman Free Zone</th>
              <th class="border border-black-200 dark:border-black-700 p-4 text-left">Dubai Free Zone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-black-200 dark:border-black-700 p-4">Lizenz (1 Jahr)</td>
              <td class="border border-black-200 dark:border-black-700 p-4">ca. 4.000 €</td>
              <td class="border border-black-200 dark:border-black-700 p-4">ca. 7.500 €</td>
            </tr>
            <tr class="bg-black-200/50 dark:bg-black-800/50">
              <td class="border border-black-200 dark:border-black-700 p-4">Registrierungsgebühr</td>
              <td class="border border-black-200 dark:border-black-700 p-4">500 €</td>
              <td class="border border-black-200 dark:border-black-700 p-4">1.200 €</td>
            </tr>
            <tr>
              <td class="border border-black-200 dark:border-black-700 p-4">Visum (1 Person)</td>
              <td class="border border-black-200 dark:border-black-700 p-4">800 €</td>
              <td class="border border-black-200 dark:border-black-700 p-4">1.500 €</td>
            </tr>
            <tr class="bg-black-200/50 dark:bg-black-800/50">
              <td class="border border-black-200 dark:border-black-700 p-4">Jahresgesamt</td>
              <td class="border border-black-200 dark:border-black-700 p-4 font-bold">ca. 5.300 €</td>
              <td class="border border-black-200 dark:border-black-700 p-4 font-bold">ca. 10.200 €</td>
            </tr>
          </tbody>
        </table>
        
        <p>Das sind 46% Ersparnis. Für viele bedeutet das: Statt "könnte ich mir leisten" wird es zu "das lohnt sich".</p>
        
        <h2>Was ist wirklich anders?</h2>
        
        <h3>Ajman ist kleiner – und das hat Vorteile</h3>
        
        <p>Ajman ist nur 30 Minuten von Dubai entfernt, hat aber weniger Bürokratie. Die Free Zone ist überschaubar, du bekommst schneller Antworten, und die Prozesse sind direkter.</p>
        
        <p>Ein Beispiel: In Dubai kann die Namensgenehmigung 2-3 Tage dauern. In Ajman haben wir sie oft am selben Tag.</p>
        
        <h3>Dubai hat mehr Prestige – aber brauchst du das?</h3>
        
        <p>Ja, "Dubai" klingt beeindruckender. Wenn du regelmäßig vor Investoren stehst oder im Luxussegment arbeitest, kann das wichtig sein.</p>
        
        <p>Für die meisten deutschen Unternehmer, die online arbeiten oder B2B-Dienstleistungen anbieten, ist die Adresse aber zweitrangig. Deine Kunden interessieren sich für deine Arbeit, nicht für deine Geschäftsadresse.</p>
        
        <h2>Steuerlich identisch</h2>
        
        <p>Hier der wichtigste Punkt: <strong>Steuerlich gibt es keinen Unterschied.</strong></p>
        
        <ul class="my-6 space-y-3">
          <li class="flex items-start">
            <span class="text-brand-purple mr-3">✓</span>
            <span>Beide bieten 0% Einkommensteuer für die Firma</span>
          </li>
          <li class="flex items-start">
            <span class="text-brand-purple mr-3">✓</span>
            <span>Beide bieten 0% Körperschaftsteuer (mit Ausnahmen ab 2023)</span>
          </li>
          <li class="flex items-start">
            <span class="text-brand-purple mr-3">✓</span>
            <span>Beide sind vollständig legal und anerkannt</span>
          </li>
          <li class="flex items-start">
            <span class="text-brand-purple mr-3">✓</span>
            <span>Beide ermöglichen Bankkonten bei internationalen Banken</span>
          </li>
        </ul>
        
        <h2>Für wen ist Ajman die bessere Wahl?</h2>
        
        <p>Ajman passt besonders gut, wenn:</p>
        
        <ul class="my-6 space-y-3">
          <li>Du das erste Mal eine internationale Firma gründest</li>
          <li>Kosten für dich ein wichtiger Faktor sind</li>
          <li>Du online arbeitest und keine repräsentative Adresse brauchst</li>
          <li>Dir schnelle, unkomplizierte Prozesse wichtig sind</li>
          <li>Du maximal 6 Mitarbeiter-Visas brauchst (das Limit in Ajman)</li>
        </ul>
        
        <h2>Für wen bleibt Dubai sinnvoll?</h2>
        
        <p>Dubai kann besser sein, wenn:</p>
        
        <ul class="my-6 space-y-3">
          <li>Prestige für dein Geschäft entscheidend ist</li>
          <li>Du mehr als 6 Mitarbeiter-Visas brauchst</li>
          <li>Du regelmäßig vor Ort sein willst und Wert auf Infrastruktur legst</li>
          <li>Du im Finanzsektor arbeitest (DIFC hat spezielle Vorteile)</li>
        </ul>
        
        <h2>Die Entscheidungshilfe</h2>
        
        <p>Stell dir zwei Fragen:</p>
        
        <ol class="my-6 space-y-4">
          <li>
            <strong>Brauche ich den Dubai-Namen für mein Geschäft?</strong><br />
            Wenn ja → Dubai. Wenn nein → weiter zu Frage 2.
          </li>
          <li>
            <strong>Kann ich mit 46% Ersparnis etwas Besseres anfangen?</strong><br />
            Die 5.000 € Differenz könnten Marketing, ein besserer Laptop oder ein Puffer für die ersten Monate sein.
          </li>
        </ol>
        
        <div class="bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border-l-4 border-brand-purple p-6 my-8 rounded-r-lg">
          <p class="font-bold text-black-900 dark:text-silver-100 mb-2">Unser Rat:</p>
          <p>Für 80% der deutschen Unternehmer, die mit uns arbeiten, ist Ajman die klügere Wahl. Du bekommst dieselbe Legalität, sparst fast die Hälfte, und die Prozesse sind schneller.</p>
          <p>Die 20%, für die Dubai besser passt, wissen das meist schon – weil ihr Geschäft vom Standort abhängt.</p>
        </div>
        
        <h2>Nächste Schritte</h2>
        
        <p>Wenn du unsicher bist, hilft ein konkretes Gespräch. Wir schauen uns deine Situation an und sagen dir ehrlich, was für dich passt.</p>
        
        <p>Buch dir einen kostenlosen Strategie-Call – da klären wir in 30 Minuten, ob Ajman oder Dubai für dich sinnvoller ist.</p>
      `,
      faq: [
        {
          question: 'Ist Ajman genauso legal wie Dubai?',
          answer: 'Ja, absolut. Ajman ist ein vollwertiges Emirat der VAE mit eigener Free Zone. Die rechtliche Grundlage ist identisch.'
        },
        {
          question: 'Kann ich mit Ajman-Firma in Deutschland arbeiten?',
          answer: 'Ja, das geht. Du musst nur die deutschen Steuerregeln beachten, insbesondere wenn du in Deutschland lebst und arbeitest.'
        },
        {
          question: 'Wie lange dauert die Gründung in Ajman?',
          answer: 'Typisch sind 4-7 Werktage für die komplette Gründung inklusive Lizenz. In Dubai sind es oft 2-3 Wochen.'
        },
        {
          question: 'Bekomme ich mit Ajman-Firma ein Bankkonto?',
          answer: 'Ja, internationale Banken wie Emirates NBD, Mashreq oder RAKBANK eröffnen Konten für Ajman-Firmen. Wir begleiten dich durch den Prozess.'
        }
      ]
    }
  }
  
  const article = articles[slug as keyof typeof articles] || articles['ajman-vs-dubai']
  
  // Schema.org JSON-LD für SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "Ziel:steuerfrei"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ziel:steuerfrei",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zielsteuerfrei.de/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://zielsteuerfrei.de/blog/${slug}`
    }
  }
  
  // FAQ Schema
  const faqSchema = article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  } : null

  return (
    <div className="animate-fade-in">
      {/* Article Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-black-50 dark:from-black-950 dark:to-black-900">
        <div className="container-narrow px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/blog" className="text-sm text-black-500 dark:text-silver-400 hover:text-brand-purple dark:hover:text-brand-pink transition-colors">
                ← Zurück zum Blog
              </Link>
              <span className="text-black-300 dark:text-silver-800">•</span>
              <span className="px-3 py-1 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 text-brand-purple dark:text-brand-pink text-xs font-semibold rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black-900 dark:text-silver-100 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-black-800 dark:text-silver-200 mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-black-500 dark:text-silver-400">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime} Lesezeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-narrow px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
            
            {/* FAQ Section */}
            {article.faq.length > 0 && (
              <div className="mt-16 pt-12 border-t border-black-100 dark:border-black-800">
                <h2 className="text-3xl font-display font-bold text-black-900 dark:text-silver-100 mb-8">
                  Häufige Fragen
                </h2>
                
                <div className="space-y-6">
                  {article.faq.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-black-900 rounded-xl p-6 border border-black-100 dark:border-black-800">
                      <h3 className="text-xl font-display font-bold text-black-900 dark:text-silver-100 mb-3">
                        {item.question}
                      </h3>
                      <p className="text-black-800 dark:text-silver-200">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 rounded-2xl border border-brand-purple/30">
              <h3 className="text-2xl font-display font-bold text-black-900 dark:text-silver-100 mb-4">
                Brauchst du persönliche Beratung?
              </h3>
              <p className="text-black-800 dark:text-silver-200 mb-6">
                Jede Situation ist anders. In einem kostenlosen Strategie-Call klären wir, ob Ajman oder Dubai für dich passt – und wie du Steuern legal optimierst.
              </p>
              <button
                onClick={() => window.open('https://calendly.com/zielsteuerfrei/strategie-call', '_blank')}
                className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Kostenlosen Termin buchen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </div>
  )
}

export default BlogArticlePage