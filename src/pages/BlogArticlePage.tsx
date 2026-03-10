import React from 'react'
import { useParams, Link } from 'react-router-dom'

function openCalendly() {
  // @ts-ignore
  if (typeof Calendly !== 'undefined') {
    // @ts-ignore
    Calendly.initPopupWidget({ url: 'https://calendly.com/nenope82/30min' })
  } else {
    window.open('https://calendly.com/nenope82/30min', '_blank')
  }
}

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  // Artikel-Datenbank
  const articles: Record<string, {
    title: string
    date: string
    readTime: string
    category: string
    excerpt: string
    content: string
    faq: { question: string; answer: string }[]
  }> = {
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

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Kostenpunkt</th>
              <th>Ajman Free Zone</th>
              <th>Dubai Free Zone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lizenz (1 Jahr)</td>
              <td>ca. 4.000 €</td>
              <td>ca. 7.500 €</td>
            </tr>
            <tr>
              <td>Registrierungsgebühr</td>
              <td>500 €</td>
              <td>1.200 €</td>
            </tr>
            <tr>
              <td>Visum (1 Person)</td>
              <td>800 €</td>
              <td>1.500 €</td>
            </tr>
            <tr>
              <td><strong>Jahresgesamt</strong></td>
              <td><strong>ca. 5.300 €</strong></td>
              <td><strong>ca. 10.200 €</strong></td>
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
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Beide bieten 0% Einkommensteuer für die Firma</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Beide bieten 0% Körperschaftsteuer (mit Ausnahmen ab 2023)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Beide sind vollständig legal und anerkannt</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Beide ermöglichen Bankkonten bei internationalen Banken</span></li>
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

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Unser Rat:</p>
          <p>Für 80% der deutschen Unternehmer, die mit uns arbeiten, ist Ajman die klügere Wahl. Du bekommst dieselbe Legalität, sparst fast die Hälfte, und die Prozesse sind schneller.</p>
          <p class="mt-2">Die 20%, für die Dubai besser passt, wissen das meist schon – weil ihr Geschäft vom Standort abhängt.</p>
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
    },

    'wegzugsbesteuerung': {
      title: 'Wegzugssteuer 2026: Neue Regeln für Investmentfonds',
      date: '10. Februar 2026',
      readTime: '10 Minuten',
      category: 'Steuern',
      excerpt: 'Die Reform 2025/2026 ändert, wie Fonds bei Auswanderung besteuert werden. So schützt du dein Vermögen.',
      content: `
        <p>Die Wegzugsbesteuerung ist eines der Themen, das deutsche Auswanderer am meisten unterschätzen – und das am teuersten werden kann. Seit den Reformen 2022 und der Nachschärfung 2025 gelten neue Regeln, besonders für Investmentfonds.</p>

        <h2>Was ist die Wegzugssteuer?</h2>

        <p>Die Wegzugssteuer (§ 6 AStG) besteuert unrealisierte Gewinne, wenn du Deutschland steuerlich verlässt. Das Finanzamt behandelt es so, als hättest du alle deine Anteile am Tag des Wegzugs verkauft – auch wenn du nichts verkauft hast.</p>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Konkretes Beispiel:</p>
          <p>Du hast ETF-Anteile im Wert von 200.000 €, die du für 80.000 € gekauft hast. Bei Wegzug werden 120.000 € Gewinn fingiert und mit ca. 26,375% Abgeltungssteuer besteuert – das sind über 31.000 € Steuern, obwohl du nichts verkauft hast.</p>
        </div>

        <h2>Was hat sich 2025/2026 geändert?</h2>

        <h3>Investmentfonds: Neue Behandlung</h3>

        <p>Vor 2025 gab es für Investmentfonds (ETFs, Fonds) eine Sonderregelung, die die Wegzugssteuer in vielen Fällen aufschieben oder vermeiden ließ. Diese Regelungslücke wurde ab 2025 weitgehend geschlossen.</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Investmentfondsanteile werden jetzt wie Unternehmensanteile behandelt</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Der Stundungsanspruch wurde abgeschafft – Zahlung wird sofort fällig</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Gilt ab Wegzug in Drittstaaten (VAE sind ein Drittstaat)</span></li>
        </ul>

        <h3>Wer ist betroffen?</h3>

        <p>Die Wegzugssteuer auf Investmentfonds betrifft dich, wenn du:</p>

        <ul class="my-6 space-y-3">
          <li>In den letzten 12 Jahren mindestens 7 Jahre in Deutschland unbeschränkt steuerpflichtig warst</li>
          <li>Investmentfondsanteile im Privatvermögen hältst</li>
          <li>Gewinne auf diese Anteile aufgelaufen sind</li>
        </ul>

        <h2>Strategien zum Schutz deines Vermögens</h2>

        <h3>1. Frühzeitig planen – vor dem Wegzug</h3>

        <p>Der wichtigste Punkt: Plane den Wegzug steuerlich mindestens 12 Monate im Voraus. Es gibt legale Gestaltungsmöglichkeiten, die nur vor dem offiziellen Wegzug funktionieren.</p>

        <h3>2. Realisierung vor Wegzug prüfen</h3>

        <p>In manchen Fällen kann es sinnvoller sein, Gewinne noch in Deutschland zu realisieren und zu versteuern – besonders wenn du ohnehin vorhast, das Portfolio umzustrukturieren.</p>

        <h3>3. Wegzugszeitpunkt optimieren</h3>

        <p>Der genaue Tag des steuerlichen Wegzugs kann einen Unterschied machen. Das ist ein Bereich, wo ein auf Auswanderung spezialisierter Steuerberater Gold wert ist.</p>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Wichtig:</p>
          <p>Wir sind keine Steuerberater. Für die Wegzugsbesteuerung brauchst du zwingend einen auf internationales Steuerrecht spezialisierten Steuerberater. Wir vermitteln dir den richtigen Ansprechpartner und koordinieren den Prozess.</p>
        </div>

        <h2>Was kostet dich die Wegzugssteuer wirklich?</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Portfoliowert</th>
              <th>Einstandspreis</th>
              <th>Unrealisierter Gewinn</th>
              <th>Wegzugssteuer (ca.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100.000 €</td>
              <td>60.000 €</td>
              <td>40.000 €</td>
              <td>ca. 10.500 €</td>
            </tr>
            <tr>
              <td>250.000 €</td>
              <td>100.000 €</td>
              <td>150.000 €</td>
              <td>ca. 39.500 €</td>
            </tr>
            <tr>
              <td>500.000 €</td>
              <td>150.000 €</td>
              <td>350.000 €</td>
              <td>ca. 92.300 €</td>
            </tr>
          </tbody>
        </table>

        <h2>Nächste Schritte</h2>

        <p>Wenn du ein Portfolio hast und auswandern willst, ist das Wegzugsthema dringlicher als die Firmengründung selbst. Im kostenlosen Strategie-Call besprechen wir deine Situation und koordinieren die richtigen Experten für dich.</p>
      `,
      faq: [
        {
          question: 'Gilt die Wegzugssteuer für alle Auswanderer?',
          answer: 'Nein, nur wenn du in den letzten 12 Jahren mindestens 7 Jahre in Deutschland unbeschränkt steuerpflichtig warst und bestimmte Anteile (Beteiligungen, Fonds) im Privatvermögen hältst.'
        },
        {
          question: 'Kann ich die Wegzugssteuer vermeiden?',
          answer: 'Vollständig vermeiden ist schwierig, aber mit frühzeitiger Planung lässt sich viel optimieren. Das hängt stark von deiner individuellen Situation ab – ein spezialisierter Steuerberater ist hier unerlässlich.'
        },
        {
          question: 'Was passiert, wenn ich die Wegzugssteuer nicht zahle?',
          answer: 'Die Steuer bleibt bestehen und wird mit Zinsen verzinst. Bei Rückkehr nach Deutschland innerhalb von 7 Jahren kann eine Rückabwicklung möglich sein – aber das ist ein komplexes Thema.'
        },
        {
          question: 'Helft ihr bei der Wegzugsbesteuerung?',
          answer: 'Wir sind keine Steuerberater, koordinieren aber den Prozess und vermitteln dir spezialisierte Steuerberater für internationales Recht. Das ist Teil unseres Gesamtpakets.'
        }
      ]
    },

    '183-tage-regel': {
      title: '183-Tage-Regel: So funktioniert sie wirklich',
      date: '5. Februar 2026',
      readTime: '7 Minuten',
      category: 'Steuern',
      excerpt: 'Die Regel gilt nicht immer. Hier erfährst du, wann sie greift – und wann du sie clever nutzen kannst.',
      content: `
        <p>„Ich muss einfach mehr als 183 Tage im Jahr im Ausland sein, dann bin ich steuerfrei." Diesen Satz hören wir regelmäßig – und er ist so nicht richtig. Die 183-Tage-Regel ist komplexer als ihr Ruf.</p>

        <h2>Was die 183-Tage-Regel eigentlich aussagt</h2>

        <p>Die 183-Tage-Regel stammt aus Doppelbesteuerungsabkommen (DBA). Sie legt fest, wann ein Arbeitnehmer in einem anderen Land besteuert werden darf – ursprünglich für Angestellte gedacht, nicht für Selbstständige.</p>

        <p>Für Selbstständige und Unternehmer – also die meisten, die mit uns zusammenarbeiten – gilt primär etwas anderes: der <strong>steuerliche Wohnsitz und gewöhnliche Aufenthalt</strong>.</p>

        <h2>Was wirklich zählt: Der Lebensmittelpunkt</h2>

        <p>Das deutsche Steuerrecht knüpft die unbeschränkte Steuerpflicht an zwei Faktoren:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">1.</span><span><strong>Wohnsitz in Deutschland</strong> (§ 8 AO): Eine Wohnung, die du innehast und nutzt – auch wenn du selten dort bist</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">2.</span><span><strong>Gewöhnlicher Aufenthalt</strong> (§ 9 AO): Mehr als 6 Monate (183 Tage) tatsächlicher Aufenthalt in Deutschland</span></li>
        </ul>

        <p>Es reicht, wenn <em>einer</em> dieser Faktoren erfüllt ist. Das bedeutet: Wenn du noch eine Wohnung in Deutschland hast – auch eine selten genutzte –, bist du weiter unbeschränkt steuerpflichtig, unabhängig von der Tages-Zählung.</p>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Der häufigste Fehler:</p>
          <p>Man meldet sich in Deutschland ab, reist aber regelmäßig zu Eltern oder Freunden zurück und schläft dort. Das Finanzamt kann argumentieren, dass damit ein Wohnsitz begründet wird – auch ohne eigene Wohnung.</p>
        </div>

        <h2>Wann gilt die 183-Tage-Regel direkt?</h2>

        <p>Die 183-Tage-Regel aus DBA greift bei:</p>

        <ul class="my-6 space-y-3">
          <li>Angestellten, die vorübergehend ins Ausland entsandt werden</li>
          <li>Geschäftsführern mit internationalem Mandat</li>
          <li>Grenzgängern in bestimmten Fällen</li>
        </ul>

        <p>Für deutsche Freelancer und Unternehmer mit VAE-Firma ist sie <strong>nicht das entscheidende Kriterium</strong>.</p>

        <h2>Was du wirklich tun musst</h2>

        <h3>Schritt 1: Wohnsitz aufgeben</h3>
        <p>Melde dich in Deutschland ab. Kündige deine Wohnung oder übergib sie vollständig an jemand anderen. Behalte keinen eigenen Schlüssel.</p>

        <h3>Schritt 2: Lebensmittelpunkt verlagern</h3>
        <p>Dein Lebensmittelpunkt muss erkennbar in den VAE sein: Wohnung, Bank, Freunde, Aktivitäten. Das lässt sich dokumentieren und beweisen.</p>

        <h3>Schritt 3: Vorsichtig mit Deutschland-Besuchen</h3>
        <p>Besuche in Deutschland sind erlaubt – aber dokumentiere sie. Bleib unter 183 Tagen pro Kalenderjahr, auch wenn das formal nicht das entscheidende Kriterium ist. Es hilft, den Fall sauber zu halten.</p>

        <h2>Was droht bei Fehlern?</h2>

        <p>Wenn das Finanzamt feststellt, dass du weiterhin in Deutschland steuerpflichtig bist, obwohl du das nicht angenommen hast, drohen:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Nachzahlung aller Steuern für die betroffenen Jahre</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Zinsen auf Nachzahlungen (aktuell 1,8% p.a.)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Im schlimmsten Fall: Steuerhinterziehungsvorwurf</span></li>
        </ul>
      `,
      faq: [
        {
          question: 'Muss ich genau 183 Tage weg sein?',
          answer: 'Nicht zwingend. Entscheidend ist, dass du keinen Wohnsitz oder gewöhnlichen Aufenthalt mehr in Deutschland hast. Die 183-Tage-Grenze ist für den "gewöhnlichen Aufenthalt" relevant, aber ein weiter bestehender Wohnsitz macht sie unwichtig.'
        },
        {
          question: 'Kann ich noch nach Deutschland reisen?',
          answer: 'Ja, Besuche sind erlaubt. Du solltest aber keine eigene Wohnung mehr haben, nicht dauerhaft bei Familie wohnen, und die 183-Tage-Grenze im Blick behalten, um auf der sicheren Seite zu sein.'
        },
        {
          question: 'Was ist mit meiner Familie in Deutschland?',
          answer: 'Wenn dein Ehepartner und Kinder weiter in Deutschland leben, kann das Finanzamt einen Lebensmittelpunkt in Deutschland unterstellen. Das ist ein komplexes Thema, das individuelle Beratung erfordert.'
        },
        {
          question: 'Wie beweise ich meinen neuen Lebensmittelpunkt?',
          answer: 'Durch Mietvertrag in den VAE, VAE-Bankkonto, Mitgliedschaften vor Ort, Fotos, Reisedokumente, soziale Kontakte. Wir helfen dir, das sauber zu dokumentieren.'
        }
      ]
    },

    'paypal-stripe-uae': {
      title: 'PayPal & Stripe in den VAE nutzen – geht das?',
      date: '1. Februar 2026',
      readTime: '6 Minuten',
      category: 'Praktisch',
      excerpt: 'Als Ajman-Unternehmer brauchst du Zahlungsabwicklung. So richtest du sie für internationale Kunden ein.',
      content: `
        <p>Einer der häufigsten praktischen Fragen, die wir bekommen: „Kann ich als Ajman-Unternehmer PayPal und Stripe nutzen?" Die kurze Antwort: Ja – aber mit ein paar wichtigen Details.</p>

        <h2>PayPal in den VAE</h2>

        <h3>Was funktioniert</h3>

        <p>PayPal ist in den VAE verfügbar und du kannst ein Business-Konto für deine Ajman-Firma eröffnen. Wichtig: Du brauchst ein VAE-Bankkonto, an das du PayPal-Auszahlungen ziehen kannst.</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Zahlungen empfangen von internationalen Kunden: problemlos</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Auszahlungen auf VAE-Bankkonto: möglich</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Mehrwährungen: unterstützt</span></li>
        </ul>

        <h3>Was nicht funktioniert</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✗</span><span>Auszahlungen auf deutsches Bankkonto mit VAE-PayPal-Konto: problematisch</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✗</span><span>Direktzahlungen an andere PayPal-Nutzer sind eingeschränkt</span></li>
        </ul>

        <h2>Stripe in den VAE</h2>

        <p>Hier wird es komplizierter. Stripe ist offiziell in den VAE verfügbar – aber die Unterstützung ist nicht so umfangreich wie in Europa oder den USA.</p>

        <h3>Stripe VAE: Die Realität</h3>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Feature</th>
              <th>VAE</th>
              <th>Deutschland</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kartenakzeptanz</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>SEPA-Lastschrift</td>
              <td>✗</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Auszahlungswährungen</td>
              <td>AED, USD</td>
              <td>EUR + viele mehr</td>
            </tr>
            <tr>
              <td>Stripe Atlas</td>
              <td>eingeschränkt</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>

        <h2>Die beste Lösung für die meisten</h2>

        <p>Viele unserer Kunden nutzen eine Kombination:</p>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Empfohlenes Setup:</p>
          <ul class="space-y-2 mt-2">
            <li>• <strong>Stripe</strong> für Kreditkartenzahlungen (über VAE-Konto)</li>
            <li>• <strong>Wise Business</strong> für internationale Überweisungen in EUR/GBP/USD</li>
            <li>• <strong>VAE-Bankkonto</strong> (z.B. Emirates NBD oder RAKBANK) als Hauptkonto</li>
            <li>• <strong>PayPal Business</strong> für Kunden, die PayPal bevorzugen</li>
          </ul>
        </div>

        <h2>Was mit deutschen Kunden?</h2>

        <p>Wenn du hauptsächlich deutsche Kunden hast, die per SEPA oder Überweisung zahlen: Wise Business ist hier oft die eleganteste Lösung. Du bekommst eine europäische IBAN, kannst in Euro empfangen, und die Umrechnung nach AED oder USD läuft automatisch.</p>

        <h2>Praktische Tipps für die Einrichtung</h2>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">1.</span><span>Eröffne zuerst das VAE-Bankkonto – das ist die Basis für alles andere</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">2.</span><span>Nutze deine Ajman-Lizenz und VAE-Adresse für die Stripe-Registrierung</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">3.</span><span>Wise Business parallel einrichten – du brauchst keine VAE-Adresse dafür</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">4.</span><span>PayPal Business auf deine Ajman-Firma anmelden</span></li>
        </ul>
      `,
      faq: [
        {
          question: 'Kann ich meinen deutschen Stripe-Account behalten?',
          answer: 'Technisch möglich, aber steuerlich problematisch, wenn du eine VAE-Firma hast. Zahlungen auf ein deutsches Stripe-Konto können als deutsche Einkünfte gewertet werden. Besser: VAE-Stripe-Konto.'
        },
        {
          question: 'Welche Bank empfehlt ihr für das VAE-Konto?',
          answer: 'Emirates NBD und RAKBANK sind für Ajman-Firmen gut zugänglich. Mashreq ist eine Alternative. Die Kontoeröffnung begleiten wir – das ist Teil unseres Pakets.'
        },
        {
          question: 'Geht das auch ohne physische Präsenz?',
          answer: 'Für die Bankkonten in den VAE musst du einmalig persönlich erscheinen – das ist gesetzlich vorgeschrieben. Stripe und PayPal kannst du online einrichten.'
        },
        {
          question: 'Was ist mit Krypto-Zahlungen?',
          answer: 'Die VAE sind sehr krypto-freundlich. Für B2B-Zahlungen in Krypto gibt es keine rechtlichen Hindernisse. Für Verbraucher-Zahlungen empfehlen wir, das mit einem Steuerberater abzuklären.'
        }
      ]
    },

    'ajman-freezone-kosten-2026': {
      title: 'Ajman Free Zone Kosten 2026: Komplett transparent',
      date: '25. Januar 2026',
      readTime: '9 Minuten',
      category: 'Kosten',
      excerpt: 'Alle Gebühren aufgeschlüsselt – inklusive der versteckten Posten, die andere nicht nennen.',
      content: `
        <p>Kostentransparenz ist uns wichtig. Deshalb zeigen wir dir hier alle Kosten für eine Ajman Free Zone Gründung – inklusive der Punkte, die andere in ihrer Kalkulation gerne weglassen.</p>

        <h2>Direkte Gründungskosten</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Kostenpunkt</th>
              <th>Betrag (ca.)</th>
              <th>Kommentar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Handelslizenz (1 Jahr)</td>
              <td>3.500 – 4.500 €</td>
              <td>Je nach Aktivitätsklasse</td>
            </tr>
            <tr>
              <td>Registrierungsgebühr</td>
              <td>400 – 600 €</td>
              <td>Einmalig</td>
            </tr>
            <tr>
              <td>Namensreservierung</td>
              <td>100 – 150 €</td>
              <td>Vor der eigentlichen Gründung</td>
            </tr>
            <tr>
              <td>Establishment Card</td>
              <td>150 – 200 €</td>
              <td>Firmenausweis der Freezone</td>
            </tr>
            <tr>
              <td><strong>Subtotal Gründung</strong></td>
              <td><strong>ca. 4.200 – 5.450 €</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <h2>Visum-Kosten (pro Person)</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Kostenpunkt</th>
              <th>Betrag (ca.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Visum-Antrag</td>
              <td>600 – 800 €</td>
            </tr>
            <tr>
              <td>Medical Fitness Test</td>
              <td>80 – 120 €</td>
            </tr>
            <tr>
              <td>Emirates ID</td>
              <td>100 – 150 €</td>
            </tr>
            <tr>
              <td>Visa Stamping</td>
              <td>50 – 100 €</td>
            </tr>
            <tr>
              <td><strong>Subtotal Visum</strong></td>
              <td><strong>ca. 830 – 1.170 €</strong></td>
            </tr>
          </tbody>
        </table>

        <h2>Jährliche Folgekosten</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Kostenpunkt</th>
              <th>Betrag pro Jahr (ca.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lizenzverlängerung</td>
              <td>3.500 – 4.500 €</td>
            </tr>
            <tr>
              <td>Visum-Verlängerung (alle 2-3 Jahre)</td>
              <td>400 – 600 € (anteilig)</td>
            </tr>
            <tr>
              <td>Buchhaltung / Steuerberater</td>
              <td>1.000 – 3.000 €</td>
            </tr>
            <tr>
              <td>Bankkonto-Gebühren</td>
              <td>200 – 500 €</td>
            </tr>
            <tr>
              <td><strong>Jährliche Gesamtkosten</strong></td>
              <td><strong>ca. 5.100 – 8.600 €</strong></td>
            </tr>
          </tbody>
        </table>

        <h2>Die versteckten Posten</h2>

        <p>Was viele Anbieter nicht nennen:</p>

        <div class="insight-box my-8">
          <ul class="space-y-3">
            <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>Flug und Hotel für die Gründungsreise:</strong> Du musst einmal persönlich vor Ort sein. Kalkuliere 500 – 1.500 € je nach Abflugort und Unterkunft.</span></li>
            <li class="flex items-start gap-3 mt-3"><span class="text-gold mt-0.5">→</span><span><strong>Beglaubigte Dokumente:</strong> Für die Gründung braucht es beglaubigte Übersetzungen und notarielle Beglaubigungen aus Deutschland. Ca. 300 – 500 €.</span></li>
            <li class="flex items-start gap-3 mt-3"><span class="text-gold mt-0.5">→</span><span><strong>Krankenversicherung:</strong> In den VAE verpflichtend. Für eine Person: 1.500 – 3.000 € pro Jahr, je nach Leistungsumfang.</span></li>
            <li class="flex items-start gap-3 mt-3"><span class="text-gold mt-0.5">→</span><span><strong>Unterkunft in Ajman:</strong> Wenn du deinen Wohnsitz verlagerst: Miete in Ajman ab ca. 600 €/Monat für eine Einzimmerwohnung.</span></li>
          </ul>
        </div>

        <h2>Was kostet unser Service?</h2>

        <p>Unser Paket für die komplette Gründungsbegleitung kostet <strong>6.990 €</strong>. Das beinhaltet:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Komplette Koordination der Gründung (Lizenz, Visum, Emirates ID)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Begleitung bei Behördengängen vor Ort</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Vermittlung Steuerberater und Bankkonto</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>WhatsApp-Support direkt mit uns</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Keine versteckten Folgekosten durch uns</span></li>
        </ul>

        <p>Die Freezone-Gebühren (Lizenz, Visum etc.) kommen on top – denn die zahlt du direkt an die Ajman Free Zone, nicht an uns.</p>
      `,
      faq: [
        {
          question: 'Was ist im Paket von 6.990 € enthalten?',
          answer: 'Unsere Servicegebühr für die Gesamtkoordination: Gründung, Visum, Behördengänge, Steuerberater-Vermittlung, Bankkonto-Begleitung, WhatsApp-Support. Die Freezone-Gebühren (Lizenz, Visum etc.) zahlst du direkt an die Ajman Free Zone.'
        },
        {
          question: 'Kann ich die Firma auch ohne eure Hilfe gründen?',
          answer: 'Ja, technisch möglich. Die Ajman Free Zone nimmt auch Direktanträge an. Du musst aber Arabisch-Kenntnisse mitbringen oder teuer übersetzen lassen, selbst die Behördengänge koordinieren und mit unvorhergesehenen Problemen alleine umgehen.'
        },
        {
          question: 'Gibt es günstigere Free Zones in den VAE?',
          answer: 'Ja, z.B. Fujairah oder Umm Al Quwain sind noch günstiger. Aber Ajman bietet das beste Preis-Leistungs-Verhältnis: solide Infrastruktur, gute Bankanbindung, bekannter Name – für weniger als Dubai.'
        },
        {
          question: 'Was kostet die Erneuerung im Folgejahr?',
          answer: 'Hauptposten: Lizenzverlängerung ca. 3.500 – 4.500 € plus Buchhaltung. Die Visiumerneuerung ist alle 2-3 Jahre fällig. Gesamt ca. 5.000 – 8.000 € pro Jahr.'
        }
      ]
    },

    'steuerfalle-183-tage': {
      title: 'Steuerfalle 183-Tage-Regel: Der Lebensmittelpunkt zählt',
      date: '20. Januar 2026',
      readTime: '8 Minuten',
      category: 'Steuern',
      excerpt: 'Nicht die reine Tag-Zählung entscheidet, sondern wo dein Leben wirklich stattfindet. So beweist du es.',
      content: `
        <p>Die gefährlichste Steuerfalle für deutsche Auswanderer ist nicht die Wegzugsbesteuerung, nicht fehlende Steuererklärungen – es ist das falsche Verständnis davon, was steuerlichen Wohnsitz wirklich begründet.</p>

        <h2>Der Mythos: „183 Tage und ich bin raus"</h2>

        <p>Viele glauben: Ich melde mich ab, bin mehr als 183 Tage weg, und Deutschland hat keinen Anspruch mehr auf meine Steuern. Das ist falsch – zumindest nicht so einfach.</p>

        <p>Das deutsche Steuerrecht kennt zwei Tatbestände für unbeschränkte Steuerpflicht:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">§8 AO</span><span><strong>Wohnsitz:</strong> Eine Wohnung, die du innehast und nutzen kannst – unabhängig davon, wie oft du dort bist</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">§9 AO</span><span><strong>Gewöhnlicher Aufenthalt:</strong> Tatsächlicher Aufenthalt von mehr als 6 Monaten (183 Tage) im Jahr</span></li>
        </ul>

        <h2>Die eigentliche Falle: Der Wohnsitz</h2>

        <p>Die 183-Tage-Regel ist eigentlich die zweite Hürde. Die erste – und gefährlichere – ist der Wohnsitz. Und der wird weiter begründet durch:</p>

        <h3>Eigene Wohnung beibehalten</h3>
        <p>Auch wenn du deinen Hauptwohnsitz abmeldest: Behältst du die Wohnung und behältst den Schlüssel, kann das Finanzamt einen Wohnsitz bejahen. Die Wohnung muss wirklich aufgegeben werden.</p>

        <h3>Wohnen bei Eltern oder Familie</h3>
        <p>Du meldest dich ab und übernachtest regelmäßig bei deinen Eltern? Wenn du dort ein eigenes Zimmer hast, das für dich verfügbar ist, kann das als Wohnsitz gewertet werden.</p>

        <h3>Der Lebensmittelpunkt</h3>
        <p>Selbst wenn kein Wohnsitz begründet wird: Liegt dein Lebensmittelpunkt – Haupteinkünfte, Hauptkontakte, Hauptaktivitäten – weiter in Deutschland, kann das Finanzamt argumentieren, der gewöhnliche Aufenthalt sei dort.</p>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Echter Fall aus unserer Praxis:</p>
          <p>Ein Kunde hatte sich korrekt abgemeldet, wohnte in Ajman – aber seine Hauptkunden waren in Deutschland, er reiste monatlich für Meetings zurück und sein Lebensgefährte blieb in Deutschland. Das Finanzamt bejahrte unbeschränkte Steuerpflicht über 3 Jahre. Nachzahlung: 6-stellig.</p>
        </div>

        <h2>So beweist du deinen Lebensmittelpunkt in den VAE</h2>

        <p>Es geht nicht darum, nichts zu tun – es geht darum, aktiv zu belegen, dass dein Leben wirklich in den VAE stattfindet.</p>

        <h3>Dokumente, die zählen</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Mietvertrag für Wohnung in den VAE (auf deinen Namen)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>VAE-Bankkonto mit regelmäßigen lokalen Transaktionen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Krankenversicherung mit VAE als Wohnsitzland</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Mitgliedschaften, Verträge, Abonnements vor Ort</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Emirates ID und UAE Residence Visa</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Aufzeichnungen über Reisedaten (Ein- und Ausreisestempel)</span></li>
        </ul>

        <h3>Soziale Bindungen neu aufbauen</h3>

        <p>Das klingt seltsam, ist aber wichtig: Sportverein, Freunde, regelmäßige Lokalitäten in den VAE. Das Finanzamt schaut sich das im Streitfall an.</p>

        <h2>Deutschland-Aufenthalte richtig handhaben</h2>

        <p>Besuche in Deutschland sind natürlich möglich und legal. Aber:</p>

        <ul class="my-6 space-y-3">
          <li>Kein eigenes Zimmer bei Familie, das dauerhaft für dich reserviert ist</li>
          <li>Keine Wohnung in Deutschland behalten</li>
          <li>Aufenthalte dokumentieren (Flugtickets, Hotel-Buchungen)</li>
          <li>Unter 183 Tagen pro Jahr bleiben</li>
        </ul>
      `,
      faq: [
        {
          question: 'Reicht die Abmeldung in Deutschland aus?',
          answer: 'Die Abmeldung ist notwendig, aber nicht hinreichend. Entscheidend ist, dass du tatsächlich keinen Wohnsitz mehr hast und deinen Lebensmittelpunkt verlagert hast. Die Abmeldung ist ein Signal, aber kein Beweis.'
        },
        {
          question: 'Was wenn meine Familie in Deutschland bleibt?',
          answer: 'Wenn dein Ehepartner und minderjährige Kinder in Deutschland bleiben, unterstellt das Finanzamt oft einen Lebensmittelpunkt in Deutschland – unabhängig von deinen eigenen Aufenthaltstagen. Das ist ein Sonderfall, der intensive Beratung erfordert.'
        },
        {
          question: 'Wie lange sollte ich die Nachweise aufbewahren?',
          answer: 'Mindestens 10 Jahre. Das deutsche Steuerrecht hat lange Verjährungsfristen, und im Streitfall musst du Nachweise für weit zurückliegende Jahre vorlegen können.'
        },
        {
          question: 'Hilft ihr bei der Dokumentation?',
          answer: 'Ja, wir gehen mit dir systematisch durch, was du braucht und was du aufbewahren solltest. Für steuerliche Detailfragen vermitteln wir spezialisierte Steuerberater.'
        }
      ]
    },

    'dubai-mythos-vs-ajman-realitaet': {
      title: 'Dubai-Mythos vs Ajman-Realität: Was wirklich zählt',
      date: '15. Januar 2026',
      readTime: '7 Minuten',
      category: 'Vergleich',
      excerpt: 'Prestige oder Pragmatismus? Für deutsche Unternehmer ist die Antwort oft klarer als gedacht.',
      content: `
        <p>„Dubai" ist mehr als ein Ort – es ist eine Marke. Und Marken verkaufen sich gut. Deshalb ist es Zeit, den Mythos Dubai sachlich mit der Realität Ajman zu vergleichen.</p>

        <h2>Der Dubai-Mythos</h2>

        <p>Dubai hat in den letzten 20 Jahren massiv in sein Image investiert. Burj Khalifa, Luxushotels, Formel 1 – das alles hat eine Aura geschaffen. Und viele Dienstleister, die VAE-Firmen verkaufen, nutzen genau diese Aura, um höhere Preise zu rechtfertigen.</p>

        <p>Was sie nicht sagen: Für eine Free Zone-Firma in Dubai interessiert sich dein Kunde in Köln oder Hamburg herzlich wenig. Er will wissen, ob du pünktlich lieferst und gute Arbeit machst.</p>

        <h2>Was ist wirklich anders?</h2>

        <h3>Infrastruktur und Lage</h3>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Faktor</th>
              <th>Dubai</th>
              <th>Ajman</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Entfernung zum Flughafen</td>
              <td>20-40 Min (DXB)</td>
              <td>45-60 Min (DXB)</td>
            </tr>
            <tr>
              <td>Mietniveau Wohnung</td>
              <td>hoch (1.500+ €/Monat)</td>
              <td>günstig (600-1.000 €)</td>
            </tr>
            <tr>
              <td>Nachtleben, Restaurants</td>
              <td>weltklasse</td>
              <td>lokal, ruhig</td>
            </tr>
            <tr>
              <td>Internationales Netzwerk</td>
              <td>sehr groß</td>
              <td>kleiner, aber vorhanden</td>
            </tr>
          </tbody>
        </table>

        <h3>Firmensitz und Reputation</h3>

        <p>Für internationale Geschäfte mit seriösen Unternehmen zählt nicht die Stadtvilla in der Adresse, sondern deine Bonität, deine Referenzen und dein Auftreten. Ajman Free Zone ist international bekannt und anerkannt.</p>

        <h3>Das Prestige-Argument</h3>

        <p>Es gibt Branchen und Situationen, wo Dubai tatsächlich zählt:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Private Equity und Investoren-Pitches: Hier kann Dubai DIFC einen Unterschied machen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Luxury Brands und High-End-Services: Die Adresse ist Teil des Produkts</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Finanzdienstleistungen unter DIFC-Regulierung: Hier ist Dubai die einzige Option</span></li>
        </ul>

        <p>Für B2B-Dienstleister, Online-Unternehmer, Coaches, Berater, Agenturen, Software-Entwickler: Diese Argumente greifen nicht.</p>

        <h2>Die Ajman-Realität</h2>

        <p>Ajman ist ein kleines Emirat mit einer gut organisierten Free Zone. Es hat keinen Wolkenkratzer-Glamour. Dafür hat es:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Günstige Lizenzkosten – halb so viel wie Dubai</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Schnelle Behörden – oft Tagesantworten</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Günstigere Wohnkosten – deutlich billiger als Dubai</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Überschaubarere Community – du kennst die Leute</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>30 Minuten nach Dubai – das Beste beider Welten</span></li>
        </ul>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Unser ehrliches Fazit:</p>
          <p>Wenn du dir Dubai leisten kannst und willst – wunderbar. Aber für die meisten deutschen Unternehmer ist Ajman die pragmatischere, günstigere und operativ sinnvollere Wahl. Du kannst trotzdem in Dubai essen, networken und deine Kunden empfangen.</p>
        </div>
      `,
      faq: [
        {
          question: 'Schämen sich Ajman-Unternehmer für ihre Adresse?',
          answer: 'Nein. Wer im VAE-Business-Kontext tätig ist, weiß, was Ajman Free Zone ist. Und internationale Kunden fragen selten, in welchem Emirat du registriert bist – sie fragen, ob du zuverlässig bist.'
        },
        {
          question: 'Kann ich trotzdem in Dubai leben?',
          answer: 'Ja, mit einer Ajman Free Zone-Firma kannst du trotzdem in Dubai wohnen. Du brauchst dann ggf. eine separate Aufenthaltsgenehmigung. Das klären wir im Detail mit dir.'
        },
        {
          question: 'Was wenn mein Geschäft wächst – kann ich später wechseln?',
          answer: 'Ja. Viele starten in Ajman und wechseln später zu einer Dubai-Lizenz, wenn sich das Geschäft verändert. Das ist kein Problem und kosmtisch relativ überschaubar.'
        },
        {
          question: 'Nehmt ihr auch Dubai-Gründungen an?',
          answer: 'Wir sind auf Ajman spezialisiert, weil wir es am besten kennen und dort das lokale Netzwerk haben. Für Dubai-Gründungen können wir vermitteln, aber das ist nicht unser Kerngeschäft.'
        }
      ]
    },

    'steuerfallen': {
      title: '5 Steuerfallen für deutsche Auswanderer',
      date: '10. Januar 2026',
      readTime: '11 Minuten',
      category: 'Steuern',
      excerpt: 'Diese Fehler kosten dich schnell fünfstellige Beträge. So vermeidest du sie von Anfang an.',
      content: `
        <p>Wir haben mit Dutzenden deutschen Unternehmern gearbeitet, die die Auswanderung in die VAE planen oder bereits vollzogen haben. Dabei sehen wir immer wieder dieselben Fehler – und manche davon sind richtig teuer.</p>

        <h2>Steuerfalle #1: Wohnsitz nicht vollständig aufgegeben</h2>

        <p>Der Klassiker. Man meldet sich ab, behält aber die Wohnung „für gelegentliche Besuche" – mit eigenem Schlüssel. Das Finanzamt betrachtet das als aufrechterhaltenen Wohnsitz.</p>

        <p><strong>Folge:</strong> Weiterhin unbeschränkte Steuerpflicht in Deutschland, trotz VAE-Firma.</p>

        <p><strong>Lösung:</strong> Wohnung vollständig aufgeben. Wenn Familie noch dort wohnt: Steuerberater konsultieren. Kein eigener Schlüssel, kein eigenes Zimmer.</p>

        <h2>Steuerfalle #2: Geschäftsführung bleibt in Deutschland</h2>

        <p>Eine VAE-Firma schützt nur dann vor deutscher Besteuerung, wenn die tatsächliche Geschäftsleitung in den VAE stattfindet. Wenn du die Firma von Deutschland aus führst – Entscheidungen triffst, Meetings abhältst, Verträge unterschreibst –, gilt sie steuerlich als in Deutschland ansässig.</p>

        <p><strong>Folge:</strong> Die VAE-Firma wird wie eine deutsche Firma besteuert. Körperschaftsteuer, Gewerbesteuer.</p>

        <p><strong>Lösung:</strong> Tatsächliche Verlagerung des Lebensmittelpunkts. Meetings, Entscheidungen, operative Führung in den VAE.</p>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Wichtig zu verstehen:</p>
          <p>Eine VAE-Firma ist kein Briefkasten. Sie funktioniert steuerlich nur, wenn du auch wirklich in den VAE lebst und arbeitest. Das ist der entscheidende Unterschied zu illegalen Konstrukten.</p>
        </div>

        <h2>Steuerfalle #3: Wegzugssteuer ignoriert</h2>

        <p>Wer GmbH-Anteile oder Investmentfonds im Privatvermögen hat, wird bei Wegzug zur Kasse gebeten – auch wenn er nichts verkauft hat. Viele wissen das erst, wenn der Steuerbescheid kommt.</p>

        <p><strong>Folge:</strong> Steuernachzahlung auf unrealisierte Gewinne, teils fünf- bis sechsstellig.</p>

        <p><strong>Lösung:</strong> Mindestens 12 Monate vor dem geplanten Wegzug einen auf internationales Steuerrecht spezialisierten Steuerberater einschalten.</p>

        <h2>Steuerfalle #4: Zu früh steuerfrei gerechnet</h2>

        <p>Viele glauben, ab Tag 1 nach der Abmeldung sind sie steuerfrei. Das stimmt nicht. Der Übergang ist fließend und das deutsche Finanzamt kann bis zu 10 Jahre rückwirkend prüfen.</p>

        <p><strong>Folge:</strong> Man hat Einkünfte nicht deklariert, weil man dachte, nicht mehr steuerpflichtig zu sein – das kann als Steuerhinterziehung gewertet werden.</p>

        <p><strong>Lösung:</strong> In den ersten Jahren der Auswanderung weiterhin eine Steuererklärung in Deutschland machen und die Situation genau dokumentieren. Erst wenn alle Voraussetzungen sauber erfüllt sind, endet die Steuerpflicht.</p>

        <h2>Steuerfalle #5: Scheinresidenz statt echter Verlagerung</h2>

        <p>Man nimmt einen Mietvertrag in den VAE, lebt aber weiter faktisch in Deutschland. Das ist illegal und wird vom Finanzamt erkannt.</p>

        <p><strong>Folge:</strong> Strafverfolgung wegen Steuerhinterziehung. Das ist kein Kavaliersdelikt.</p>

        <p><strong>Lösung:</strong> Echte Verlagerung oder gar nicht. Es gibt keinen legalen Mittelweg zwischen echter Auswanderung und in-Deutschland-Steuern-zahlen.</p>

        <h2>Was macht es richtig?</h2>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Komplette Aufgabe des deutschen Wohnsitzes</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Tatsächliche Verlagerung des Lebensmittelpunkts</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Echte operative Führung der Firma in den VAE</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Frühzeitige Steuerberatung vor dem Wegzug</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Saubere Dokumentation aller Schritte</span></li>
        </ul>
      `,
      faq: [
        {
          question: 'Ist eine VAE-Firma legal?',
          answer: 'Absolut ja – wenn du tatsächlich in den VAE lebst und arbeitest. Eine VAE-Firma als Briefkasten ohne echten Lebensmittelpunkt ist illegal. Die Legalität hängt von deiner tatsächlichen Verlagerung ab, nicht von der Firma selbst.'
        },
        {
          question: 'Was passiert wenn das Finanzamt mich prüft?',
          answer: 'Bei korrekter Durchführung: Nichts. Du kannst alle Nachweise vorlegen. Daher ist Dokumentation von Anfang an so wichtig. Wer die Auswanderung sauber durchführt, muss keine Prüfung fürchten.'
        },
        {
          question: 'Wie lange bin ich nach Wegzug noch steuerpflichtig?',
          answer: 'Das hängt vom Einzelfall ab. In der Regel endet die unbeschränkte Steuerpflicht mit dem Wegzug, wenn alle Voraussetzungen erfüllt sind. Aber das Finanzamt kann rückwirkend bis zu 10 Jahre prüfen.'
        },
        {
          question: 'Muss ich nach dem Wegzug noch Steuern in Deutschland zahlen?',
          answer: 'Auf in Deutschland erzielte Einkünfte (z.B. Mieteinkünfte aus deutschem Immobilienbesitz) ja. Auf ausländische Einkünfte, wenn du nicht mehr unbeschränkt steuerpflichtig bist: nein.'
        }
      ]
    },

    'dokumente-checkliste': {
      title: 'Dokumenten-Checkliste: Alles für die VAE-Gründung',
      date: '5. Januar 2026',
      readTime: '5 Minuten',
      category: 'Praktisch',
      excerpt: 'Von der Passkopie bis zur Aktivitätsbeschreibung – hier fehlt nichts. Inklusive Download-PDF.',
      content: `
        <p>Eine der häufigsten Verzögerungen bei VAE-Gründungen: fehlende oder nicht korrekt vorbereitete Dokumente. Diese Liste zeigt dir alles, was du brauchst – sortiert nach Gründungsphase.</p>

        <h2>Phase 1: Vorab (vor der Gründungsreise)</h2>

        <h3>Persönliche Dokumente</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span><strong>Reisepass</strong> – gültig mindestens 6 Monate über den Gründungstermin hinaus, klare Kopie aller Seiten</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span><strong>Passfoto</strong> – weißer Hintergrund, aktuell (nicht älter als 3 Monate)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span><strong>Abmeldebescheinigung</strong> aus Deutschland – falls du dich schon abgemeldet hast</span></li>
        </ul>

        <h3>Firmen-Dokumente</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span><strong>Gewünschter Firmenname</strong> – 3 Alternativen vorbereiten (falls Name vergeben)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span><strong>Geschäftstätigkeitsbeschreibung</strong> – 2-3 Sätze, was die Firma tut (auf Englisch)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span><strong>Aktivitätscodes</strong> – die Ajman Free Zone hat vordefinierte Kategorien; wir helfen dir bei der Auswahl</span></li>
        </ul>

        <h2>Phase 2: Während der Gründungsreise</h2>

        <h3>Für die Freezone-Behörde</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Ausgefülltes Antragsformular (wir bereiten es vor)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Original-Reisepass + Kopie</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Passfoto (digital und physisch)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Zahlungsnachweis Lizenzgebühr</span></li>
        </ul>

        <h3>Für das Visum</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Reisepass (original)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Passfoto (weiß, aktuell)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Medical Fitness Test-Ergebnis (wird vor Ort gemacht)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Mietvertrag (wenn VAE-Wohnsitz vorhanden)</span></li>
        </ul>

        <h2>Phase 3: Nach der Gründung</h2>

        <h3>Für das Bankkonto</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Trade License (ausgestellt durch Freezone)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Certificate of Incorporation</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Memorandum of Association</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Emirates ID (wenn bereits ausgestellt)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Reisepass</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Utility Bill oder Mietvertrag als Adressnachweis</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Business Plan (1-2 Seiten, für manche Banken)</span></li>
        </ul>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Tipp von uns:</p>
          <p>Alle Dokumente als hochaufgelöste Scans (300 DPI, PDF oder JPG) auf deinem Handy und in der Cloud haben. Die Behörden in Ajman akzeptieren digitale Kopien für die Vorbereitung, wollen für die finale Einreichung aber oft physische Dokumente. Wir informieren dich rechtzeitig, was wann gebraucht wird.</p>
        </div>

        <h2>Was wir für dich vorbereiten</h2>

        <p>Als Teil unseres Pakets übernehmen wir:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Alle Antragsformulare ausfüllen und vorbereiten</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Aktivitätscodes auswählen und begründen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Terminkoordination mit allen Behörden</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Begleitung bei Behördengängen vor Ort</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Bankkonto-Vorbereitung und Begleitung</span></li>
        </ul>
      `,
      faq: [
        {
          question: 'Brauche ich beglaubigte Übersetzungen?',
          answer: 'Für die Gründung selbst nicht zwingend. Für bestimmte Folgeprozesse (z.B. wenn du Dokumente aus Deutschland vorlegen musst) können beglaubigte Übersetzungen nötig sein. Wir informieren dich rechtzeitig.'
        },
        {
          question: 'Mein Reisepass läuft in 4 Monaten ab – Problem?',
          answer: 'Ja, das ist ein Problem. Die Ajman Free Zone und das Visum-Prozedere erfordern einen Pass, der mindestens 6 Monate über das Ausstellungsdatum des Visums hinaus gültig ist. Pass zuerst verlängern.'
        },
        {
          question: 'Wie lange im Voraus sollte ich die Dokumente vorbereiten?',
          answer: 'Mindestens 2-3 Wochen vor der Gründungsreise. Manche Dokumente (wie beglaubigte Übersetzungen) brauchen Zeit. Wir schicken dir eine konkrete Checkliste, sobald der Termin feststeht.'
        },
        {
          question: 'Was wenn ich ein Dokument vergesse?',
          answer: 'Kein Drama – wir haben das schon oft gemanagt. Viele Sachen können nachgereicht oder digital übermittelt werden. Daher unsere Empfehlung: Alles digital immer dabei haben.'
        }
      ]
    },

    'vae-firma-gruenden': {
      title: 'VAE Firma gründen: Schritt für Schritt',
      date: '1. Januar 2026',
      readTime: '12 Minuten',
      category: 'Prozess',
      excerpt: 'Der komplette Prozess von der Idee bis zur aktiven Lizenz – realistisch, ohne Beschönigung.',
      content: `
        <p>Wir erklären dir den kompletten Prozess einer Firmengründung in der Ajman Free Zone – so wie er wirklich abläuft, nicht wie ihn Marketingbroschüren beschreiben.</p>

        <h2>Schritt 1: Entscheidung und Planung (Wochen 1-2)</h2>

        <h3>Ist Ajman das Richtige für dich?</h3>

        <p>Bevor wir irgendetwas unterschreiben, machen wir einen kostenlosen Strategie-Call. Wir klären:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Was ist dein Geschäftsmodell? Passt eine VAE-Firma dazu?</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Planst du wirklich auszuwandern oder nur eine Briefkastenstruktur? (Letzteres funktioniert nicht legal)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Welche Aktivitätslizenz brauchst du?</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Steuerliche Vorüberlegungen: Wegzugssteuer, Übergangsphase?</span></li>
        </ul>

        <h2>Schritt 2: Steuerliche Vorbereitung in Deutschland (Monate 1-3)</h2>

        <p>Das wird oft unterschätzt. Bevor du die Ajman-Firma gründest, musst du die steuerliche Seite in Deutschland klären:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Steuerberater für internationale Steuerplanung einschalten</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Wegzugsbesteuerung prüfen (Investmentfonds, GmbH-Anteile)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Abmeldetermin planen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Laufende Verträge in Deutschland kündigen oder übertragen</span></li>
        </ul>

        <h2>Schritt 3: Gründungsvorbereitung (ca. 2 Wochen)</h2>

        <p>Wenn die steuerliche Planung steht, beginnt die eigentliche Gründungsvorbereitung:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">1.</span><span><strong>Firmennamen wählen:</strong> 3 Alternativen vorbereiten, Prüfung auf Verfügbarkeit</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">2.</span><span><strong>Aktivitätslizenz festlegen:</strong> Welche Geschäftstätigkeit wird lizenziert?</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">3.</span><span><strong>Dokumente vorbereiten:</strong> Pass, Fotos, Beschreibungen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">4.</span><span><strong>Reise buchen:</strong> Flug nach Dubai/Sharjah, Unterkunft in Ajman oder Dubai</span></li>
        </ul>

        <h2>Schritt 4: Die Gründungsreise (Tag 1-5)</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Was passiert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tag 1</td>
              <td>Ankunft, Eingewöhnung, Besprechung mit uns</td>
            </tr>
            <tr>
              <td>Tag 2</td>
              <td>Behördengang Ajman Free Zone: Antragseinreichung, Zahlung</td>
            </tr>
            <tr>
              <td>Tag 3</td>
              <td>Medical Fitness Test für das Visum</td>
            </tr>
            <tr>
              <td>Tag 4</td>
              <td>Lizenzausstellung (oft bereits möglich), Visum-Antrag stellen</td>
            </tr>
            <tr>
              <td>Tag 5</td>
              <td>Puffer, Banktermin vorbereiten, Rückreise oder Verlängerung</td>
            </tr>
          </tbody>
        </table>

        <h2>Schritt 5: Nach der Gründung (Wochen 1-4)</h2>

        <h3>Emirates ID</h3>
        <p>Die Emirates ID wird nach dem Visum ausgestellt – dauert 1-2 Wochen nach Visumserteilung.</p>

        <h3>Bankkonto</h3>
        <p>Mit Trade License und Emirates ID kannst du das Bankkonto eröffnen. Wir begleiten dich dabei.</p>

        <h3>Praktisches Setup</h3>
        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>VAE-SIM-Karte (Etisalat oder du)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Wohnung in Ajman oder Dubai mieten</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Krankenversicherung abschließen (Pflicht)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Zahlungsabwicklung einrichten (Stripe, PayPal, Wise)</span></li>
        </ul>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Realistischer Zeitplan:</p>
          <p>Von „Ich will eine VAE-Firma" bis zur voll operativen Firma mit Bankkonto und Visum: <strong>6-10 Wochen</strong>. Wer das in 2 Wochen verspricht, lässt wichtige Schritte weg – oft die steuerliche Vorbereitung in Deutschland.</p>
        </div>
      `,
      faq: [
        {
          question: 'Kann ich die Firma gründen ohne selbst hinzufahren?',
          answer: 'Für das Visum und die Emirates ID musst du persönlich vor Ort sein – das ist Pflicht. Die Vorabarbeiten können wir remote koordinieren, aber der persönliche Behördengang ist unumgehbar.'
        },
        {
          question: 'Was wenn ich keine Zeit für eine 5-tägige Reise habe?',
          answer: 'In manchen Fällen geht es schneller – wenn alle Dokumente perfekt vorbereitet sind und keine Wartezeiten entstehen. Plane aber mindestens 3-4 Tage für die Kernschritte. Komm am besten am Wochenende an, starte Montag.'
        },
        {
          question: 'Was kostet ein Flug und Hotel?',
          answer: 'Flug Frankfurt–Dubai: 400-800 € Hin/Rück (je nach Buchungszeitpunkt). Hotel in Ajman: 40-80 €/Nacht. In Dubai: 80-200 €. Kalkuliere für die Gründungsreise 600-1.500 € Gesamtkosten.'
        },
        {
          question: 'Muss ich sofort in die VAE ziehen?',
          answer: 'Nein. Du kannst die Firma gründen und das Visum haben, ohne sofort umzuziehen. Aber für die steuerliche Wirkung (Deutschland nicht mehr steuerpflichtig) musst du deinen Lebensmittelpunkt wirklich verlagern.'
        }
      ]
    },

    'uae-corporate-tax': {
      title: 'UAE Corporate Tax: Was deutsche Unternehmer wissen müssen',
      date: '28. Dezember 2025',
      readTime: '9 Minuten',
      category: 'Steuern',
      excerpt: 'Seit 2023 gibt es Körperschaftsteuer in den VAE. Aber mit 0% für viele – hier die Details.',
      content: `
        <p>Seit Juni 2023 erheben die VAE eine Körperschaftsteuer (Corporate Tax). Das klingt erst mal nach einer schlechten Nachricht – aber die Details zeigen, warum die VAE für die meisten deutschen Unternehmer immer noch steuerlich sehr attraktiv sind.</p>

        <h2>Die wichtigsten Fakten zur UAE Corporate Tax</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Steuersatz</th>
              <th>Gilt für</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>0%</strong></td>
              <td>Steuerpflichtiger Gewinn bis 375.000 AED (ca. 94.000 €)</td>
            </tr>
            <tr>
              <td><strong>9%</strong></td>
              <td>Steuerpflichtiger Gewinn über 375.000 AED</td>
            </tr>
            <tr>
              <td><strong>15%</strong></td>
              <td>Multinationale Großkonzerne (Pillar 2 / OECD, ab 750 Mio. € Umsatz)</td>
            </tr>
          </tbody>
        </table>

        <h2>Was bedeutet das für Ajman Free Zone-Firmen?</h2>

        <p>Hier ist die entscheidende Regelung: Firmen in qualifizierten Free Zones können weiterhin von einer <strong>0% Körperschaftsteuer auf qualifizierte Einkünfte</strong> profitieren.</p>

        <h3>Was sind „qualifizierte Einkünfte"?</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Einkünfte aus Transaktionen mit anderen Free Zone-Unternehmen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Einkünfte aus bestimmten internationalen Transaktionen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Passive Einkünfte wie Dividenden und Kapitalerträge (unter bestimmten Bedingungen)</span></li>
        </ul>

        <h3>Was fällt unter den 9% Satz?</h3>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Einkünfte aus Geschäften mit Personen auf dem VAE-Festland (außerhalb der Free Zone)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Einkünfte aus bestimmten regulierten Aktivitäten</span></li>
        </ul>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Für die Mehrheit unserer Kunden gilt:</p>
          <p>Wenn du Online-Dienstleistungen, Software, Beratung oder digitale Produkte an internationale Kunden (außerhalb der VAE) verkaufst, profitierst du weiterhin von 0% Körperschaftsteuer in der Ajman Free Zone. Das ist der typische Fall für deutsche Freelancer und Unternehmer.</p>
        </div>

        <h2>Was hat sich praktisch geändert?</h2>

        <h3>Buchhaltungspflicht</h3>
        <p>Alle Firmen in den VAE müssen jetzt eine ordnungsgemäße Buchhaltung führen und grundsätzlich eine Steuererklärung einreichen – auch wenn der Steuersatz 0% beträgt.</p>

        <h3>Registrierung</h3>
        <p>Alle Firmen müssen sich beim Federal Tax Authority (FTA) für die Corporate Tax registrieren. Das ist ein einmaliger Schritt nach der Gründung.</p>

        <h2>Vergleich: Was zahlst du wirklich?</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Land</th>
              <th>Körperschaftsteuer</th>
              <th>Weitere Steuern</th>
              <th>Effektive Belastung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deutschland</td>
              <td>15%</td>
              <td>+ Gewerbesteuer (ca. 14%)</td>
              <td>ca. 29-31%</td>
            </tr>
            <tr>
              <td>VAE (Free Zone)</td>
              <td>0% (qualif. Einkünfte)</td>
              <td>–</td>
              <td>0-9%</td>
            </tr>
            <tr>
              <td>Irland</td>
              <td>12,5%</td>
              <td>+ lokale Steuern</td>
              <td>ca. 12-15%</td>
            </tr>
          </tbody>
        </table>

        <h2>Fazit</h2>

        <p>Die UAE Corporate Tax hat die Rahmenbedingungen leicht verändert – aber nicht grundlegend. Für den typischen deutschen Unternehmer, der online arbeitet und internationale Kunden hat, sind die VAE steuerlich nach wie vor deutlich attraktiver als Deutschland oder die meisten EU-Länder.</p>

        <p>Was sich geändert hat: Du brauchst jetzt zwingend eine ordentliche Buchhaltung und musst dich steuerlich registrieren. Das ist professioneller Aufwand – aber kein Deal-Breaker.</p>
      `,
      faq: [
        {
          question: 'Muss ich jetzt Steuern in den VAE zahlen?',
          answer: 'Wenn du in einer qualifizierten Free Zone tätig bist und überwiegend internationale Kunden hast: wahrscheinlich 0%. Wenn dein Gewinn unter 375.000 AED liegt: 0%. Über dieser Schwelle: 9% auf den übersteigenden Teil. Das ist immer noch deutlich weniger als Deutschland.'
        },
        {
          question: 'Muss ich eine Steuererklärung einreichen?',
          answer: 'Ja, grundsätzlich müssen alle VAE-Firmen eine Corporate Tax-Erklärung einreichen – auch bei 0% Steuerschuld. Das ist Teil des Registrierungsprozesses beim FTA.'
        },
        {
          question: 'Was ist mit MwSt / VAT in den VAE?',
          answer: 'Die VAE haben eine VAT von 5% – aber viele Dienstleistungen, die ins Ausland erbracht werden, sind davon ausgenommen (0% Rate). Das hängt von deiner konkreten Tätigkeit ab. Wir klären das mit dir.'
        },
        {
          question: 'Wie bleibt man als Free Zone-Firma auf 0%?',
          answer: 'Durch den Status als "Qualifying Free Zone Person". Du musst bestimmte Substanzanforderungen erfüllen (tatsächliche wirtschaftliche Tätigkeit) und deine Einkünfte müssen überwiegend "qualifizierte Einkünfte" sein. Wir beraten dich dazu.'
        }
      ]
    }
  }

  const article = slug && articles[slug] ? articles[slug] : null

  // Artikel noch nicht verfügbar
  if (!article) {
    return (
      <div className="animate-fade-in">
        <section className="pt-28 pb-24 bg-cream dark:bg-navy-950 text-center">
          <div className="max-w-content mx-auto px-4 md:px-6">
            <div className="eyebrow mb-5 justify-center">Bald verfügbar</div>
            <h1 className="font-display text-display-lg text-ink-900 dark:text-cream mb-6">
              Dieser Artikel wird gerade geschrieben
            </h1>
            <p className="text-ink-600 dark:text-ink-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Wir arbeiten daran, dir den bestmöglichen Inhalt zu liefern. Meld dich für den Newsletter an – dann bekommst du Bescheid, sobald der Artikel online ist.
            </p>
            <Link to="/blog" className="btn-secondary">
              ← Zurück zur Übersicht
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": { "@type": "Organization", "name": "Ziel:steuerfrei" },
    "publisher": {
      "@type": "Organization",
      "name": "Ziel:steuerfrei",
      "logo": { "@type": "ImageObject", "url": "https://zielsteuerfrei.de/logo.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://zielsteuerfrei.de/blog/${slug}` }
  }

  const faqSchema = article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": { "@type": "Answer", "text": q.answer }
    }))
  } : null

  return (
    <div className="animate-fade-in">

      {/* Hero */}
      <section className="pt-28 pb-16 bg-cream dark:bg-navy-950">
        <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark pointer-events-none" />
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div className="breadcrumb">
            <Link to="/blog" className="hover:text-gold transition-colors">← Blog</Link>
            <span>/</span>
            <span className="badge-gold">{article.category}</span>
          </div>

          <h1 className="font-display text-display-lg text-ink-900 dark:text-cream mb-6 text-balance">
            {article.title}
          </h1>

          <p className="text-lg text-ink-600 dark:text-ink-300 mb-8 max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-ink-500 dark:text-ink-300">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-navy-900">
        <div className="max-w-content mx-auto px-4 md:px-6">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:text-ink-900 dark:prose-headings:text-cream
              prose-p:text-ink-600 dark:prose-p:text-ink-300 prose-p:leading-relaxed
              prose-li:text-ink-600 dark:prose-li:text-ink-300
              prose-strong:text-ink-900 dark:prose-strong:text-cream
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* FAQ */}
          {article.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-ink-100 dark:border-navy-800">
              <div className="eyebrow mb-3">FAQ</div>
              <h2 className="font-display text-display-md text-ink-900 dark:text-cream mb-8">
                Häufige Fragen
              </h2>
              <div className="space-y-4">
                {article.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-cream mb-2">
                      {item.question}
                    </h3>
                    <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 card-gold p-8 text-center">
            <h3 className="font-display text-display-md text-ink-900 dark:text-cream mb-4">
              Brauchst du persönliche Beratung?
            </h3>
            <p className="text-ink-600 dark:text-ink-300 mb-8 max-w-lg mx-auto leading-relaxed">
              Jede Situation ist anders. In einem kostenlosen Strategie-Call klären wir, ob Ajman für dich passt – und wie du Steuern legal optimierst.
            </p>
            <button
              onClick={openCalendly}
              className="btn-primary"
            >
              🗓 Kostenlosen Termin buchen
            </button>
          </div>
        </div>
      </section>

      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </div>
  )
}

export default BlogArticlePage
