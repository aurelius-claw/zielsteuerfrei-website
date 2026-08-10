/**
 * Volltexte, Quellen und FAQ der Blogartikel.
 *
 * Bewusst getrennt von ./articles: nur die Detailseite importiert dieses
 * Modul, damit die Blog-Uebersicht das Artikel-HTML nicht mitlaedt.
 */

import type { ArticleFaq, ArticleSource } from './articles'

export interface ArticleDetail {
  sources?: ArticleSource[]
  faq: ArticleFaq[]
  content: string
}

export const articleDetails: Record<string, ArticleDetail> = {
  'ajman-vs-dubai': {
    sources: [
      {
        label: 'Ajman Free Zone – offizielle Website',
        url: 'https://www.afz.ae/',
      },
      {
        label: 'Corporate Tax – Offizielles Portal der VAE-Regierung (u.ae)',
        url: 'https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax',
      },
    ],
    faq: [
      {
        question: 'Ist Ajman genauso legal wie Dubai?',
        answer:
          'Ja, absolut. Ajman ist ein vollwertiges Emirat der VAE mit eigener Free Zone. Die rechtliche Grundlage ist identisch zu Dubai – gleiche Steuervorteile, gleiche internationale Anerkennung.',
      },
      {
        question: 'Wie weit ist Ajman von Dubai entfernt?',
        answer:
          'Nur ca. 25-30 Kilometer – das sind etwa 30-45 Minuten mit dem Auto, je nach Verkehr. Du kannst jederzeit nach Dubai fahren: zum Networken, für Meetings oder einfach zum Ausgehen. Das Beste aus beiden Welten.',
      },
      {
        question: 'Kann ich mit einer Ajman-Firma in Dubai wohnen?',
        answer:
          'Ja, das ist möglich. Du brauchst dann ggf. eine separate Aufenthaltsgenehmigung, da das Visum der Ajman Free Zone an das Emirat gebunden ist. Wir klären das individuell mit dir – viele unserer Kunden wohnen in Dubai und haben eine Ajman-Firma.',
      },
      {
        question: 'Bekomme ich mit Ajman-Firma ein Bankkonto?',
        answer:
          'Ja, internationale Banken wie Emirates NBD, Mashreq oder RAKBANK eröffnen Konten für Ajman-Firmen. Wir begleiten dich durch den Prozess. Die Kontoeröffnung ist komplexer als in Deutschland – daher ist unsere Begleitung hier besonders wertvoll.',
      },
      {
        question: 'Kann ich mit Ajman-Firma weiterhin deutsche Kunden betreuen?',
        answer:
          'Ja. Die Herkunft deiner Kunden ist nicht das Problem – entscheidend ist, wo dein Lebensmittelpunkt ist. Wenn du wirklich in den VAE lebst und arbeitest, kannst du problemlos weiterhin für deutsche Kunden tätig sein.',
      },
      {
        question: 'Wie lange dauert die Gründung in Ajman vs. Dubai?',
        answer:
          'In Ajman typisch 4-7 Werktage für die komplette Gründung inklusive Lizenz. In Dubai oft 2-3 Wochen, manchmal länger. Ajman punktet auch bei der Prozessgeschwindigkeit – ein unterschätzter Vorteil.',
      },
      {
        question: 'Ist Ajman Free Zone international anerkannt?',
        answer:
          'Ja, die Ajman Free Zone (AFZA) ist seit 1988 eine etablierte Free Zone und international anerkannt. Banken, Zahlungsdienstleister und internationale Geschäftspartner kennen sie. Für B2B-Geschäfte spielt die genaue Emirat-Adresse kaum eine Rolle.',
      },
    ],
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

        <div class="viz not-prose">
          <div class="viz-title">Behördenkosten im ersten Jahr</div>
          <div class="viz-sub">Lizenz, Registrierung und ein Visum – Richtwerte, ohne Dienstleisterhonorar</div>
          <div class="viz-body bar-chart">
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Ajman Free Zone</span><span class="bar-value">ca. 5.300 €</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:52%"></span></div>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Dubai Free Zone</span><span class="bar-value">ca. 10.200 €</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--muted" style="--bar:100%"></span></div>
            </div>
          </div>
          <p class="viz-note">Rund <strong>48 % Ersparnis</strong> im ersten Jahr. Die Gebühren der Free Zones ändern sich regelmäßig und hängen von Aktivitätsklasse und Visa-Anzahl ab – wir prüfen die aktuellen Sätze vor jeder Gründung neu.</p>
        </div>

        <p>Rund 48 % Unterschied. Für viele bedeutet das: Statt "könnte ich mir leisten" wird es zu "das lohnt sich".</p>

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
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>In beiden Emiraten gibt es keine persönliche Einkommensteuer auf Gehalt und Ausschüttungen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Für beide gilt dieselbe UAE Corporate Tax seit 2023 – 0 % nur unter identischen Bedingungen, sonst 9 % über 375.000 AED</span></li>
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
  },
  'wegzugsbesteuerung': {
    sources: [
      {
        label: '§ 6 AStG – Besteuerung des Vermögenszuwachses (gesetze-im-internet.de)',
        url: 'https://www.gesetze-im-internet.de/astg/__6.html',
      },
      {
        label: '§ 19 InvStG – Gewinne aus der Veräußerung von Investmentanteilen',
        url: 'https://www.gesetze-im-internet.de/invstg_2018/__19.html',
      },
      {
        label: '§ 20 InvStG – Teilfreistellung',
        url: 'https://www.gesetze-im-internet.de/invstg_2018/__20.html',
      },
      {
        label: '§ 238 AO – Höhe und Berechnung der Zinsen',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__238.html',
      },
    ],
    faq: [
      {
        question: 'Gilt die Wegzugssteuer auch für ETF-Anteile?',
        answer:
          'Nur oberhalb klarer Schwellen. Seit 2025 gilt nach § 19 Abs. 3 InvStG die Wohnsitzaufgabe auch bei Investmentanteilen als Veräußerung – aber erst, wenn du innerhalb der letzten fünf Jahre mindestens 1 % der ausgegebenen Anteile eines Fonds gehalten hast oder deine Anteile an diesem Fonds Anschaffungskosten von mindestens 500.000 € haben. Ein typisches ETF-Depot mit 200.000 € Einstand ist nicht betroffen.',
      },
      {
        question: 'Kann ich die Wegzugssteuer beim Umzug in die VAE stunden oder in Raten zahlen?',
        answer:
          'Ja. Seit dem ATAD-Umsetzungsgesetz gilt § 6 Abs. 4 AStG: Auf Antrag kann die Steuer in sieben gleichen Jahresraten gezahlt werden, und diese Raten sind zinslos. Anders als früher wird dabei nicht mehr zwischen EU/EWR und Drittstaaten unterschieden – die VAE sind also kein Nachteil. In der Regel verlangt das Finanzamt allerdings eine Sicherheitsleistung.',
      },
      {
        question: 'Ab wann läuft die 12-Jahres-Frist für die Wegzugssteuer?',
        answer:
          'Das Finanzamt schaut zurück: Warst du in den letzten zwölf Jahren vor dem Wegzug insgesamt mindestens sieben Jahre unbeschränkt steuerpflichtig (§ 6 Abs. 2 AStG)? Wenn ja, ist die persönliche Voraussetzung erfüllt. Wer 2026 wegzieht, wird also auf die Jahre ab 2014 geprüft. Die sieben Jahre müssen nicht zusammenhängen.',
      },
      {
        question: 'Gilt die Wegzugssteuer für alle Auswanderer?',
        answer:
          'Nein. Sie setzt zwei Dinge voraus: die persönliche Vorgeschichte (7 von 12 Jahren unbeschränkt steuerpflichtig) und entsprechendes Vermögen – Anteile an Kapitalgesellschaften ab 1 % Beteiligung oder Fondsanteile oberhalb der Schwellen. Angestellte ohne Beteiligungen und mit kleinerem Depot sind in aller Regel nicht betroffen.',
      },
      {
        question: 'Kann ich die Wegzugssteuer durch Planung reduzieren?',
        answer:
          'Vollständig vermeiden lässt sie sich selten, optimieren oft. Ansatzpunkte sind der Zeitpunkt des Wegzugs, die Struktur der Beteiligungen, die Aufteilung von Fondspositionen im Hinblick auf die 500.000-€-Schwelle und die Frage, ob Gewinne besser vorher realisiert werden. Das muss ein spezialisierter Steuerberater rechnen – pauschale Empfehlungen sind hier gefährlich.',
      },
      {
        question: 'Was passiert, wenn ich eine Rate nicht zahle?',
        answer:
          'Dann wird der noch nicht entrichtete Betrag innerhalb eines Monats in voller Höhe fällig (§ 6 Abs. 4 Satz 5 AStG). Dasselbe gilt bei Insolvenz, bei Verletzung der jährlichen Mitwirkungspflichten, bei Veräußerung oder Übertragung der Anteile und bei Ausschüttungen von mehr als einem Viertel des Werts. Rückstände auf fällige Steuern werden mit 1,8 % pro Jahr verzinst (§ 238 Abs. 1a AO).',
      },
      {
        question: 'Was ist, wenn ich später nach Deutschland zurückkehre?',
        answer:
          'Dann kann die Wegzugssteuer rückwirkend entfallen. § 6 Abs. 3 AStG sieht eine Rückkehrerregelung von sieben Jahren vor, die auf Antrag auf bis zu zwölf Jahre verlängert werden kann. Voraussetzung: Die Anteile wurden zwischenzeitlich nicht veräußert oder übertragen und du wirst wieder unbeschränkt steuerpflichtig.',
      },
      {
        question: 'Helft ihr bei der Wegzugsbesteuerung?',
        answer:
          'Wir sind keine Steuerberater. Wir koordinieren den Prozess und vermitteln dir Steuerberater für internationales Steuerrecht. Gerade die Kombination aus Firmengründung in den VAE und steuerlichem Wegzug erfordert beide Seiten – deshalb ist die Koordination Teil unseres Pakets.',
      },
    ],
    content: `
        <p>Die Wegzugsbesteuerung ist das Thema, das deutsche Auswanderer am häufigsten unterschätzen – und über das gleichzeitig der meiste Unsinn im Netz steht. Wir haben deshalb die Rechtslage direkt am Gesetzestext geprüft und die zwei häufigsten Irrtümer korrigiert.</p>

        <div class="callout callout--warn not-prose">
          <span class="callout-title">Zwei Mythen, die uns ständig begegnen</span>
          <p><strong>Mythos 1:</strong> „Seit 2025 trifft die Wegzugssteuer jedes ETF-Depot." Falsch – es gibt zwei klare Schwellen.</p>
          <p style="margin-top:0.5rem"><strong>Mythos 2:</strong> „Beim Wegzug in ein Drittland wie die VAE ist alles sofort fällig." Ebenfalls falsch – seit 2022 gibt es die Ratenzahlung über sieben Jahre, unabhängig vom Zielland.</p>
        </div>

        <h2>Was die Wegzugssteuer eigentlich besteuert</h2>

        <p>Die Wegzugsbesteuerung nach § 6 AStG behandelt es so, als hättest du deine Anteile am Tag des Wegzugs verkauft – auch wenn du nichts verkauft hast. Besteuert wird also ein <strong>fiktiver</strong> Gewinn.</p>

        <p>Erfasst sind aber nicht „alle Wertpapiere", sondern <strong>Anteile im Sinne des § 17 EStG</strong>: Beteiligungen an Kapitalgesellschaften (GmbH, AG, auch ausländische), an denen du innerhalb der letzten fünf Jahre unmittelbar oder mittelbar zu mindestens 1 % beteiligt warst.</p>

        <p>Dazu kommt eine persönliche Voraussetzung (§ 6 Abs. 2 AStG): Du musst innerhalb der letzten <strong>zwölf Jahre insgesamt mindestens sieben Jahre</strong> in Deutschland unbeschränkt steuerpflichtig gewesen sein.</p>

        <h2>Neu seit 2025: Fonds- und ETF-Anteile</h2>

        <p>Mit dem Jahressteuergesetz 2024 wurde § 19 Abs. 3 InvStG eingeführt. Seither gilt auch bei Investmentanteilen im Privatvermögen die Aufgabe des Wohnsitzes als Veräußerung. Aber – und das ist der Punkt, den fast alle Ratgeber unterschlagen – <strong>nur wenn eine von zwei Schwellen erreicht ist</strong>:</p>

        <div class="viz not-prose">
          <div class="viz-title">Bin ich von der Wegzugsbesteuerung betroffen?</div>
          <div class="viz-sub">Vereinfachte Prüfreihenfolge nach § 6 AStG und § 19 Abs. 3 InvStG</div>
          <div class="viz-body flow">
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Schritt 1</span>
              In den letzten 12 Jahren insgesamt mindestens 7 Jahre unbeschränkt steuerpflichtig?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step flow-step--ok">
                <span class="flow-tag">Nein</span>
                Keine Wegzugsbesteuerung – weder auf Beteiligungen noch auf Fondsanteile.
              </div>
              <div class="flow-step">
                <span class="flow-tag">Ja</span>
                Weiter mit Schritt 2 – getrennt für Beteiligungen und für Fondsanteile.
              </div>
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Schritt 2a · Beteiligungen</span>
              Warst du in den letzten 5 Jahren mit mindestens 1 % an einer Kapitalgesellschaft beteiligt (GmbH, AG …)?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step flow-step--stop">
              <span class="flow-tag">Ja</span>
              § 6 AStG greift: fiktive Veräußerung zum gemeinen Wert.
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Schritt 2b · Fonds &amp; ETFs</span>
              Hältst du mindestens 1 % der ausgegebenen Anteile eines Fonds – <em>oder</em> Anteile mit Anschaffungskosten von mindestens 500.000 €?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step flow-step--ok">
                <span class="flow-tag">Nein</span>
                Keine Wegzugsbesteuerung auf diese Fondsanteile. Das typische Depot unter 500.000 € Einstand ist nicht betroffen.
              </div>
              <div class="flow-step flow-step--stop">
                <span class="flow-tag">Ja</span>
                § 19 Abs. 3 InvStG greift: fiktive Veräußerung der Fondsanteile.
              </div>
            </div>
          </div>
          <p class="viz-note">Die Schwelle von 500.000 € bezieht sich auf die <strong>Anschaffungskosten</strong>, nicht auf den heutigen Depotwert – und sie gilt pro Investmentfonds, nicht für das Gesamtdepot. Vereinfachte Darstellung; Sonderfälle (Spezial-Investmentanteile, unentgeltliche Übertragungen, Betriebsvermögen) sind nicht abgebildet.</p>
        </div>

        <h2>Wie hoch ist die Steuer wirklich?</h2>

        <p>Hier wird es interessant, denn viele Rechner im Netz setzen pauschal 26,375 % an. Das ist für die meisten Fälle zu hoch:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>Aktienfonds im Privatvermögen:</strong> 30 % Teilfreistellung nach § 20 InvStG. Effektiv also 26,375 % auf 70 % des Gewinns = rund <strong>18,5 %</strong>.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>Mischfonds:</strong> 15 % Teilfreistellung, effektiv rund 22,4 %.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>Renten- und sonstige Fonds ohne Teilfreistellung:</strong> volle 26,375 %.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>GmbH-Anteile:</strong> kein Abgeltungssteuersatz, sondern Teileinkünfteverfahren – 60 % des Gewinns zum persönlichen Steuersatz. Beim Spitzensteuersatz sind das rund 28,5 %.</span></li>
        </ul>

        <div class="viz not-prose">
          <div class="viz-title">Effektive Belastung des fiktiven Gewinns</div>
          <div class="viz-sub">Was tatsächlich vom fiktiven Veräußerungsgewinn abgeht</div>
          <div class="viz-body bar-chart">
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Aktienfonds / Aktien-ETF</span><span class="bar-value">≈ 18,5 %</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:65%"></span></div>
              <p class="bar-caption">26,375 % Abgeltungssteuer auf 70 % des Gewinns (30 % Teilfreistellung)</p>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Mischfonds</span><span class="bar-value">≈ 22,4 %</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:79%"></span></div>
              <p class="bar-caption">15 % Teilfreistellung</p>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Rentenfonds / sonstige Fonds</span><span class="bar-value">≈ 26,4 %</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--muted" style="--bar:93%"></span></div>
              <p class="bar-caption">Keine Teilfreistellung</p>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">GmbH-Anteile (Spitzensteuersatz)</span><span class="bar-value">≈ 28,5 %</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--danger" style="--bar:100%"></span></div>
              <p class="bar-caption">Teileinkünfteverfahren: 60 % des Gewinns zum persönlichen Satz</p>
            </div>
          </div>
          <p class="viz-note">Richtwerte inklusive Solidaritätszuschlag, ohne Kirchensteuer. Der individuelle Satz hängt von deiner Gesamtsituation ab.</p>
        </div>

        <h2>Ein realistisches Rechenbeispiel</h2>

        <table class="data-table my-6">
          <thead>
            <tr>
              <th>Depotwert</th>
              <th>Anschaffungskosten</th>
              <th>Fiktiver Gewinn</th>
              <th>Steuer (Aktienfonds)</th>
              <th>Jahresrate (1/7)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>400.000 €</td>
              <td>250.000 €</td>
              <td>150.000 €</td>
              <td><strong>0 €</strong> – Schwelle nicht erreicht</td>
              <td>–</td>
            </tr>
            <tr>
              <td>700.000 €</td>
              <td>500.000 €</td>
              <td>200.000 €</td>
              <td>ca. 36.900 €</td>
              <td>ca. 5.300 €</td>
            </tr>
            <tr>
              <td>900.000 €</td>
              <td>600.000 €</td>
              <td>300.000 €</td>
              <td>ca. 55.400 €</td>
              <td>ca. 7.900 €</td>
            </tr>
            <tr>
              <td>1.500.000 €</td>
              <td>800.000 €</td>
              <td>700.000 €</td>
              <td>ca. 129.200 €</td>
              <td>ca. 18.500 €</td>
            </tr>
          </tbody>
        </table>

        <p>Die erste Zeile ist der Fall, den die meisten Ratgeber falsch darstellen: 250.000 € Anschaffungskosten liegen unter der 500.000-€-Schwelle – auf diese Fondsanteile fällt keine Wegzugssteuer an, obwohl 150.000 € Buchgewinn im Depot stehen.</p>

        <h2>Der wichtigste Punkt: Du kannst in sieben Raten zahlen</h2>

        <p>Bis 2021 galt: unbefristete zinslose Stundung bei Wegzug in EU/EWR-Staaten, sofortige Fälligkeit bei Drittstaaten. Seit dem ATAD-Umsetzungsgesetz ist das anders – und die alte Regel geistert trotzdem noch durch halb Google.</p>

        <p>Nach § 6 Abs. 4 AStG kann die Steuer auf Antrag <strong>in sieben gleichen Jahresraten</strong> entrichtet werden. Die Raten sind ausdrücklich <strong>nicht zu verzinsen</strong>. Dem Antrag wird in der Regel nur gegen Sicherheitsleistung stattgegeben – aber es gibt keine Unterscheidung mehr zwischen EU/EWR und Drittstaat. Über § 19 Abs. 3 InvStG gilt das auch für Fondsanteile.</p>

        <div class="viz not-prose">
          <div class="viz-title">Ratenzahlung nach § 6 Abs. 4 AStG</div>
          <div class="viz-sub">Sieben gleiche Jahresraten, zinslos – auch beim Wegzug in die VAE</div>
          <div class="viz-body timeline">
            <div class="timeline-item">
              <div class="timeline-when">Antrag</div>
              <div class="timeline-what">Ratenzahlung beantragen</div>
              <p class="timeline-desc">Zusammen mit der Steuererklärung des Wegzugsjahres. In der Regel nur gegen Sicherheitsleistung.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Monat 1</div>
              <div class="timeline-what">Erste Jahresrate</div>
              <p class="timeline-desc">Fällig innerhalb eines Monats nach Bekanntgabe des Steuerbescheids.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Jahr 2 bis 7</div>
              <div class="timeline-what">Jeweils zum 31. Juli</div>
              <p class="timeline-desc">Sechs weitere gleiche Raten. Keine Zinsen auf die gestundeten Beträge.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Achtung</div>
              <div class="timeline-what">Restbetrag wird sofort fällig, wenn …</div>
              <p class="timeline-desc">… eine Rate nicht fristgerecht gezahlt wird, du deine Mitwirkungspflichten verletzt, Insolvenz anmeldest, die Anteile veräußerst oder überträgst – oder Ausschüttungen mehr als ein Viertel des Werts erreichen.</p>
            </div>
          </div>
          <p class="viz-note">Gesetzestext: § 6 Abs. 4 AStG. Die Mitwirkungspflicht nach § 6 Abs. 5 AStG bedeutet unter anderem eine jährliche Mitteilung an das Finanzamt.</p>
        </div>

        <h2>Die Rückkehrerregelung: Die Steuer kann komplett entfallen</h2>

        <p>Nach § 6 Abs. 3 AStG entfällt die Wegzugssteuer rückwirkend, wenn du innerhalb von <strong>sieben Jahren</strong> wieder unbeschränkt steuerpflichtig in Deutschland wirst – auf Antrag kann diese Frist auf bis zu <strong>zwölf Jahre</strong> verlängert werden. Voraussetzung ist, dass die Anteile in der Zwischenzeit nicht veräußert oder übertragen wurden.</p>

        <p>Das ist relevant, wenn dein Wegzug in die VAE als mehrjähriger Lebensabschnitt und nicht als endgültige Auswanderung geplant ist. Es ist aber kein Freifahrtschein: Wer zurückkehrt, ist danach wieder voll in Deutschland steuerpflichtig.</p>

        <h2>Was du konkret tun solltest</h2>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">1.</span><span><strong>Bestandsaufnahme:</strong> Liste alle Beteiligungen ab 1 % und alle Fondspositionen mit Anschaffungskosten und aktuellem Wert auf. Erst danach weißt du, ob du überhaupt betroffen bist.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">2.</span><span><strong>Schwellen prüfen:</strong> Bei Fonds zählt der Einstand pro Fonds. Zwei Fonds mit je 300.000 € Anschaffungskosten lösen die 500.000-€-Schwelle nicht aus.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">3.</span><span><strong>Steuerberater mit Auswanderungs-Erfahrung einschalten</strong> – idealerweise 12 Monate vor dem geplanten Wegzug. Manche Gestaltungen funktionieren nur vorher.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">4.</span><span><strong>Liquidität planen:</strong> Auch wenn du in sieben Raten zahlst – die Sicherheitsleistung bindet Vermögen.</span></li>
        </ul>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Wichtig:</p>
          <p>Wir sind keine Steuerberater. Für die Wegzugsbesteuerung brauchst du zwingend einen auf internationales Steuerrecht spezialisierten Steuerberater. Wir vermitteln dir den passenden Ansprechpartner und koordinieren den Prozess mit der Gründung.</p>
        </div>

        <h2>Nächste Schritte</h2>

        <p>Wenn du ein größeres Depot oder eine GmbH-Beteiligung hast, ist das Wegzugsthema dringlicher als die Firmengründung selbst. Im kostenlosen Strategie-Call ordnen wir deine Situation ein und koordinieren die richtigen Experten.</p>
      `,
  },
  '183-tage-regel': {
    sources: [
      {
        label: '§ 8 AO – Wohnsitz',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__8.html',
      },
      {
        label: '§ 9 AO – Gewöhnlicher Aufenthalt',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__9.html',
      },
      {
        label: '§ 2 AStG – Erweiterte beschränkte Einkommensteuerpflicht',
        url: 'https://www.gesetze-im-internet.de/astg/__2.html',
      },
      {
        label: '§ 90 AO – Mitwirkungspflichten der Beteiligten',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__90.html',
      },
    ],
    faq: [
      {
        question: 'Gilt die 183-Tage-Regel für Selbstständige und Unternehmer?',
        answer:
          'Nein, jedenfalls nicht im Verhältnis zu den VAE. Die Regel stammt aus Doppelbesteuerungsabkommen und betrifft dort primär Arbeitnehmer. Zwischen Deutschland und den VAE besteht seit dem 1. Januar 2022 gar kein Abkommen mehr. Für dich zählt allein das deutsche Recht: Wohnsitz nach § 8 AO und gewöhnlicher Aufenthalt nach § 9 AO.',
      },
      {
        question: 'Muss ich genau 183 Tage weg sein?',
        answer:
          'Nicht zwingend. Wenn du keinen Wohnsitz mehr in Deutschland hast, endet die unbeschränkte Steuerpflicht mit dem Wegzug. Die Sechsmonatsgrenze des § 9 AO bezieht sich auf einen zeitlich zusammenhängenden Aufenthalt und ist nicht an das Kalenderjahr gebunden – ein Aufenthalt über den Jahreswechsel kann sie also auslösen.',
      },
      {
        question: 'Kann ich noch nach Deutschland reisen und bei meinen Eltern übernachten?',
        answer:
          'Ja, Besuche sind erlaubt. Kritisch wird es, wenn dir dort dauerhaft ein eigenes Zimmer zur Verfügung steht. Dann kann das Finanzamt einen Wohnsitz nach § 8 AO annehmen – es kommt auf die jederzeitige Verfügbarkeit an, nicht auf die tatsächliche Nutzungshäufigkeit.',
      },
      {
        question: 'Was ist die erweiterte beschränkte Steuerpflicht?',
        answer:
          'Eine Regelung in § 2 AStG, die deutsche Staatsangehörige nach dem Wegzug in ein Niedrigsteuerland bis zu zehn Jahre lang mit ihren nicht-ausländischen Einkünften erfasst. Voraussetzung ist außerdem, dass wesentliche wirtschaftliche Interessen in Deutschland bleiben – zum Beispiel eine Beteiligung an einer deutschen Kapitalgesellschaft, deutsche Einkünfte über 62.000 € oder deutsches Vermögen über 154.000 €. Sie greift erst ab 16.500 € betroffener Einkünfte pro Jahr.',
      },
      {
        question: 'Was ist mit meiner Familie in Deutschland?',
        answer:
          'Bleiben Ehepartner und minderjährige Kinder in Deutschland und steht dir die gemeinsame Wohnung weiter zur Verfügung, nimmt das Finanzamt regelmäßig einen fortbestehenden Wohnsitz an – unabhängig von deinen Aufenthaltstagen. Das ist der schwierigste Fall überhaupt und braucht individuelle Beratung, keine Standardlösung.',
      },
      {
        question: 'Wie beweise ich meinen neuen Lebensmittelpunkt in den VAE?',
        answer:
          'Mietvertrag in den VAE, Emirates ID und Residence Visa, lokales Bankkonto mit regelmäßigen Alltagstransaktionen, Krankenversicherung mit den VAE als Wohnsitzland, Mitgliedschaften vor Ort sowie lückenlose Reisedokumentation. Wichtig ist, damit ab dem ersten Tag zu beginnen – nachträglich lässt sich vieles nicht mehr rekonstruieren.',
      },
      {
        question: 'Gibt es ein Doppelbesteuerungsabkommen zwischen Deutschland und den VAE?',
        answer:
          'Nein. Das Abkommen vom 1. Juli 2010 war auf zehn Jahre angelegt; Deutschland hat die Verlängerungsoption nicht gezogen und es ist zum 31. Dezember 2021 außer Kraft getreten. Seit dem 1. Januar 2022 besteht ein vertragsloser Zustand. Ein halber Wegzug funktioniert deshalb nicht: Es gibt keine Abkommensregel, die dich schützt.',
      },
      {
        question: 'Was passiert, wenn das Finanzamt meinen Wegzug anzweifelt?',
        answer:
          'Du musst die tatsächlichen Verhältnisse belegen – Mietvertrag, Emirates ID, Kontoauszüge, Reisedaten. Bei Auslandssachverhalten trifft dich zudem eine erhöhte Mitwirkungspflicht nach § 90 Abs. 2 AO. Wer sauber dokumentiert, hat gute Karten; wer nichts vorlegen kann, verliert im Zweifel.',
      },
    ],
    content: `
        <p>„Ich muss einfach mehr als 183 Tage im Jahr im Ausland sein, dann bin ich steuerfrei." Diesen Satz hören wir in fast jedem Erstgespräch. Er ist gleich doppelt falsch – und der zweite Grund überrascht die meisten.</p>

        <h2>Woher die 183-Tage-Regel überhaupt kommt</h2>

        <p>Die Regel stammt aus Doppelbesteuerungsabkommen (DBA). Sie regelt dort, welcher Staat das Besteuerungsrecht auf <strong>Arbeitslohn</strong> hat, wenn jemand vorübergehend im anderen Staat tätig ist. Sie war nie dafür gedacht, die persönliche Steuerpflicht von Selbstständigen zu beenden.</p>

        <div class="callout callout--warn not-prose">
          <span class="callout-title">Der Punkt, den fast alle übersehen</span>
          <p>Zwischen Deutschland und den VAE gibt es <strong>kein Doppelbesteuerungsabkommen mehr</strong>. Das Abkommen von 2010 war auf zehn Jahre befristet, Deutschland hat die Verlängerung nicht gezogen – zum 31. Dezember 2021 ist es außer Kraft getreten. Seit dem 1. Januar 2022 herrscht ein vertragsloser Zustand.</p>
          <p style="margin-top:0.5rem">Es gibt also gar keine 183-Tage-Regel, auf die du dich gegenüber den VAE berufen könntest. Entscheidend ist ausschließlich das deutsche Steuerrecht.</p>
        </div>

        <h2>Was wirklich zählt: § 8 und § 9 AO</h2>

        <p>Die unbeschränkte Steuerpflicht in Deutschland knüpft an zwei Tatbestände an. Es reicht, wenn <em>einer</em> davon erfüllt ist:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">§ 8</span><span><strong>Wohnsitz:</strong> Eine Wohnung, die du unter Umständen innehast, die darauf schließen lassen, dass du sie beibehalten und benutzen wirst. Die Häufigkeit der Nutzung ist dabei zweitrangig – die Verfügbarkeit zählt.</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">§ 9</span><span><strong>Gewöhnlicher Aufenthalt:</strong> Ein <strong>zeitlich zusammenhängender</strong> Aufenthalt von mehr als sechs Monaten. Kurzfristige Unterbrechungen bleiben dabei unberücksichtigt.</span></li>
        </ul>

        <div class="insight-box my-8">
          <p class="font-bold mb-2">Häufiger Denkfehler bei § 9 AO:</p>
          <p>Die Sechsmonatsfrist ist <strong>nicht</strong> an das Kalenderjahr gebunden. Ein Aufenthalt von November bis Mai überschreitet die Grenze – auch wenn du in keinem der beiden Kalenderjahre auf 183 Tage kommst. Wer „Tage zählt", zählt oft das Falsche.</p>
        </div>

        <div class="viz not-prose">
          <div class="viz-title">Bin ich noch unbeschränkt steuerpflichtig?</div>
          <div class="viz-sub">Vereinfachte Prüfung nach §§ 1, 8, 9 AO</div>
          <div class="viz-body flow">
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Frage 1</span>
              Steht dir in Deutschland eine Wohnung dauerhaft zur Verfügung – eigene Wohnung, Ferienhaus, dauerhaft freigehaltenes Zimmer bei den Eltern?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step flow-step--stop">
                <span class="flow-tag">Ja</span>
                Wohnsitz nach § 8 AO – unbeschränkt steuerpflichtig, unabhängig von der Anzahl deiner Aufenthaltstage.
              </div>
              <div class="flow-step">
                <span class="flow-tag">Nein</span>
                Weiter mit Frage 2.
              </div>
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Frage 2</span>
              Hältst du dich zeitlich zusammenhängend länger als sechs Monate in Deutschland auf (kurze Unterbrechungen zählen nicht)?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step flow-step--stop">
                <span class="flow-tag">Ja</span>
                Gewöhnlicher Aufenthalt nach § 9 AO – unbeschränkt steuerpflichtig.
              </div>
              <div class="flow-step flow-step--ok">
                <span class="flow-tag">Nein</span>
                Keine unbeschränkte Steuerpflicht mehr. Aber: Prüfe § 2 AStG – siehe unten.
              </div>
            </div>
          </div>
          <p class="viz-note">Vereinfachte Darstellung. Bei Ehepartnern und minderjährigen Kindern in Deutschland gelten zusätzliche Erwägungen.</p>
        </div>

        <h2>Der blinde Fleck: die erweiterte beschränkte Steuerpflicht</h2>

        <p>Selbst wenn du Wohnsitz und gewöhnlichen Aufenthalt sauber aufgegeben hast, kann Deutschland weiter zugreifen. § 2 AStG kennt die <strong>erweiterte beschränkte Steuerpflicht</strong> – für bis zu <strong>zehn Jahre</strong> nach dem Wegzug. Über dieses Thema schweigen die meisten Auswanderer-Ratgeber.</p>

        <p>Sie greift, wenn alle drei Bedingungen zusammenkommen:</p>

        <div class="viz not-prose">
          <div class="viz-title">§ 2 AStG – drei Bedingungen, die alle erfüllt sein müssen</div>
          <div class="viz-sub">Rechtsfolge: bis zu 10 Jahre erweiterte beschränkte Steuerpflicht auf deutsche Einkünfte</div>
          <div class="viz-body flow">
            <div class="flow-step">
              <span class="flow-tag">Bedingung 1 · Vorgeschichte</span>
              Deutsche Staatsangehörigkeit und in den letzten zehn Jahren vor dem Wegzug insgesamt mindestens fünf Jahre unbeschränkt einkommensteuerpflichtig.
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step">
              <span class="flow-tag">Bedingung 2 · Niedrigbesteuerung</span>
              Ansässigkeit in einem Gebiet mit niedriger Besteuerung. Maßstab: mehr als ein Drittel weniger Einkommensteuer als in Deutschland bei 77.000 € Einkommen. <strong>Die VAE erfüllen das mit 0 % zweifelsfrei.</strong>
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step">
              <span class="flow-tag">Bedingung 3 · Wirtschaftliche Interessen</span>
              Wesentliche wirtschaftliche Interessen in Deutschland – etwa eine Beteiligung nach § 17 EStG an einer inländischen Kapitalgesellschaft, deutsche Einkünfte über 30 % aller Einkünfte oder über 62.000 €, oder deutsches Vermögen über 30 % des Gesamtvermögens bzw. über 154.000 €.
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step flow-step--stop">
              <span class="flow-tag">Rechtsfolge</span>
              Zehn Jahre lang steuerpflichtig mit allen Einkünften, die keine ausländischen Einkünfte im Sinne des § 34d EStG sind – sofern sie 16.500 € im Jahr übersteigen.
            </div>
          </div>
          <p class="viz-note">Praktisch heißt das: Wer die GmbH-Beteiligung, die vermietete Wohnung oder das deutsche Depot behält, bleibt für diese Einkünfte im Blick des Finanzamts. Wer seine wirtschaftlichen Interessen tatsächlich mitnimmt, ist es nicht.</p>
        </div>

        <h2>Was du konkret tun musst</h2>

        <div class="viz not-prose">
          <div class="viz-title">Der saubere Wegzug in vier Schritten</div>
          <div class="viz-body timeline">
            <div class="timeline-item">
              <div class="timeline-when">Schritt 1</div>
              <div class="timeline-what">Wohnsitz vollständig aufgeben</div>
              <p class="timeline-desc">Mietvertrag kündigen oder Wohnung vollständig übergeben. Kein eigener Schlüssel, kein dauerhaft freigehaltenes Zimmer bei Familie. Beim Einwohnermeldeamt abmelden.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Schritt 2</div>
              <div class="timeline-what">Lebensmittelpunkt real verlagern</div>
              <p class="timeline-desc">Mietvertrag in den VAE, Emirates ID, Residence Visa, lokales Bankkonto mit echten Alltagstransaktionen, Krankenversicherung mit VAE als Wohnsitzland.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Schritt 3</div>
              <div class="timeline-what">Wirtschaftliche Interessen prüfen</div>
              <p class="timeline-desc">§ 2 AStG durchrechnen lassen: Welche deutschen Einkünfte und Vermögenswerte bleiben? Häufig entscheidet dieser Punkt darüber, ob der Wegzug wirklich trägt.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Schritt 4</div>
              <div class="timeline-what">Ab Tag 1 dokumentieren</div>
              <p class="timeline-desc">Ein- und Ausreisestempel, Flugtickets, Kontoauszüge, Mitgliedschaften. Nachweise sammelt man vorher – nicht erst, wenn das Finanzamt fragt.</p>
            </div>
          </div>
        </div>

        <h2>Und die Deutschland-Besuche?</h2>

        <p>Besuche sind erlaubt und völlig normal. Wichtig ist nur, dass dabei kein Wohnsitz entsteht und kein zusammenhängender Aufenthalt von mehr als sechs Monaten. Die häufig genannten „unter 183 Tage pro Jahr" sind als Faustregel praktisch – rechtlich maßgeblich ist aber die Formulierung des § 9 AO.</p>

        <h2>Was droht bei Fehlern?</h2>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Nachzahlung aller Steuern für die betroffenen Jahre</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Zinsen auf Nachzahlungen von 1,8 % pro Jahr (§ 238 Abs. 1a AO)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Ohne DBA keine Anrechnungsmöglichkeit – die VAE erheben keine Einkommensteuer, es gibt also nichts anzurechnen</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span>Im schlimmsten Fall der Vorwurf der Steuerhinterziehung</span></li>
        </ul>
      `,
  },
  'paypal-stripe-uae': {
    sources: [
      {
        label: 'Stripe – Vereinigte Arabische Emirate',
        url: 'https://stripe.com/en-ae',
      },
      {
        label: 'PayPal – Verfügbarkeit nach Land',
        url: 'https://www.paypal.com/ae/webapps/mpp/country-worldwide',
      },
      {
        label: 'UAE Federal Tax Authority',
        url: 'https://tax.gov.ae/en/default.aspx',
      },
    ],
    faq: [
      {
        question: 'Kann ich meinen deutschen Stripe-Account behalten?',
        answer:
          'Technisch möglich, aber steuerlich problematisch. Zahlungen auf ein deutsches Stripe-Konto können als deutsche Einkünfte gewertet werden. Besser: Ein VAE-Stripe-Konto auf deine Ajman-Firma einrichten. Das ist der saubere Weg.',
      },
      {
        question: 'Ist Stripe in den VAE vollständig verfügbar?',
        answer:
          'Stripe ist in den VAE verfügbar, aber eingeschränkter als in Deutschland. SEPA-Lastschriften und einige europäische Zahlungsmethoden fehlen. Kartenakzeptanz funktioniert gut. Für deutsche Kunden, die SEPA bevorzugen, ist Wise Business als Ergänzung empfehlenswert.',
      },
      {
        question: 'Kann ich SEPA-Zahlungen von deutschen Kunden empfangen?',
        answer:
          'Mit einem VAE-Stripe-Account nicht direkt. Die Lösung: Wise Business gibt dir eine europäische IBAN, über die du SEPA-Überweisungen empfangen kannst. Das Geld landet in deinem Wise-Konto und kann weiter transferiert werden. Funktioniert gut für deutsche B2B-Kunden.',
      },
      {
        question: 'Welche Bank empfehlt ihr für das VAE-Konto?',
        answer:
          'Emirates NBD und RAKBANK sind für Ajman-Firmen gut zugänglich. Mashreq ist eine Alternative. Die Kontoeröffnung begleiten wir persönlich – das ist Teil unseres Pakets. Banken in den VAE prüfen sorgfältig, daher ist Vorbereitung entscheidend.',
      },
      {
        question: 'Geht die Kontoeröffnung auch ohne physische Präsenz?',
        answer:
          'Für Bankkonten in den VAE musst du einmalig persönlich erscheinen – das ist gesetzlich vorgeschrieben (Know Your Customer). Stripe und PayPal kannst du online einrichten. Die Bankkonteröffnung ist Teil unserer Gründungsreise vor Ort.',
      },
      {
        question: 'Was ist mit Krypto-Zahlungen in den VAE?',
        answer:
          'Die VAE sind sehr krypto-freundlich. Dubai hat mit VARA eine eigene Krypto-Regulierungsbehörde, und für B2B-Zahlungen in Krypto gibt es keine grundlegenden Hindernisse. Für steuerliche Behandlung empfehlen wir, das mit einem spezialisierten Steuerberater abzuklären.',
      },
      {
        question: 'Welche Zahlungsabwicklung nutzen eure Kunden am häufigsten?',
        answer:
          'Die meisten setzen auf eine Kombination: Stripe VAE für Kreditkarten, Wise Business für EUR/SEPA-Empfang, VAE-Bankkonto (z.B. Emirates NBD) als Hauptkonto, PayPal Business als Ergänzung. Diese Kombination deckt fast alle Szenarien ab.',
      },
    ],
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

        <div class="viz not-prose">
          <div class="viz-title">Typischer Zahlungs-Stack einer VAE-Firma</div>
          <div class="viz-sub">Vier Bausteine, die zusammen fast jedes Szenario abdecken</div>
          <div class="viz-body flow">
            <div class="flow-step">
              <span class="flow-tag">Basis</span>
              VAE-Geschäftskonto (z. B. Emirates NBD, Mashreq, RAKBANK) – Hauptkonto der Firma, Voraussetzung für alles Weitere
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step">
                <span class="flow-tag">Karten</span>
                Stripe VAE für Kreditkartenzahlungen, Auszahlung in AED oder USD
              </div>
              <div class="flow-step">
                <span class="flow-tag">Europa</span>
                Wise Business für EUR-Eingänge per SEPA und günstige Umrechnung
              </div>
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step">
              <span class="flow-tag">Ergänzung</span>
              PayPal Business für Kunden, die nichts anderes akzeptieren
            </div>
          </div>
          <p class="viz-note">Verfügbarkeit und Bedingungen der Anbieter ändern sich laufend – bitte vor der Einrichtung direkt beim Anbieter prüfen.</p>
        </div>

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
  },
  'ajman-freezone-kosten-2026': {
    sources: [
      {
        label: 'Ajman Free Zone – offizielle Website',
        url: 'https://www.afz.ae/',
      },
      {
        label: 'Federal Tax Authority – Corporate Tax',
        url: 'https://tax.gov.ae/en/taxes/corporate.tax.aspx',
      },
    ],
    faq: [
      {
        question: 'Was ist im Paket von 6.990 € enthalten?',
        answer:
          'Unsere Servicegebühr für die Gesamtkoordination: Gründung, Visum-Begleitung, Behördengänge vor Ort, Steuerberater-Vermittlung, Bankkonto-Begleitung, WhatsApp-Support für 3 Monate. Die Freezone-Gebühren (Lizenz, Visum etc.) zahlst du direkt an die Ajman Free Zone – das nennen wir transparent.',
      },
      {
        question: 'Was sind die tatsächlichen Gesamtkosten im ersten Jahr?',
        answer:
          'Realistisch rund 14.000 bis 18.000 € im ersten Jahr, alles zusammengerechnet: 6.990 € unser Paket, ca. 4.200–5.450 € Free-Zone-Gebühren, ca. 830–1.170 € für Visum und Emirates ID sowie 2.300–5.000 € für Gründungsreise, Krankenversicherung und Dokumente. Ab Jahr 2 sinkt das deutlich – dann bleiben im Wesentlichen Jahreserneuerung, Buchhaltung, Versicherung und Kontoführung.',
      },
      {
        question: 'Was kostet eine Krankenversicherung in den VAE?',
        answer:
          'Eine Krankenversicherung ist in den VAE verpflichtend. Für eine Einzelperson liegen die Kosten bei ca. 1.500–3.000 € pro Jahr, je nach Leistungsumfang. Das ist ein oft vergessener Posten in anderen Angeboten – wir weisen dich frühzeitig darauf hin.',
      },
      {
        question: 'Kann ich die Firma auch ohne eure Hilfe gründen?',
        answer:
          'Ja, technisch möglich. Die Ajman Free Zone nimmt auch Direktanträge an. Du musst aber die Behördengänge auf Englisch/Arabisch koordinieren, alle Unterlagen selbst vorbereiten und mit unvorhergesehenen Problemen alleine umgehen. Viele, die das versucht haben, kommen dann doch zu uns.',
      },
      {
        question: 'Gibt es günstigere Free Zones in den VAE als Ajman?',
        answer:
          'Ja, z.B. Fujairah oder Umm Al Quwain sind noch günstiger. Aber Ajman bietet das beste Preis-Leistungs-Verhältnis: solide Infrastruktur, gute internationale Bankanbindung, etablierter Name. Günstigere Alternativen haben oft schlechtere Bankenakzeptanz – ein oft teurer Trade-off.',
      },
      {
        question: 'Was kostet die Erneuerung im Folgejahr?',
        answer:
          'Hauptposten: Jahreserneuerung €2.990, Buchhaltungskosten €1.000–3.000 jährlich (jetzt Pflicht), Bankkonto-Gebühren €200–500. Die Visum-Erneuerung ist alle 2-3 Jahre fällig. Gesamt realistisch: €4.200–6.500 pro Jahr ab Jahr 2.',
      },
      {
        question: 'Lohnt sich das finanziell wirklich gegenüber Deutschland?',
        answer:
          'Ob es sich lohnt, hängt von Gewinn, Wohnsitz, Struktur und laufenden Kosten ab. Bei höheren Gewinnen kann der Steuervorteil gegenüber Deutschland erheblich sein, aber die Entscheidung muss individuell geprüft werden. Unser Preis-Rechner zeigt das live für deine Zahlen.',
      },
    ],
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
              <td>Jahreserneuerung</td>
              <td>2.990 €</td>
            </tr>
            <tr>
              <td>Visum-Verlängerung (alle 2-3 Jahre)</td>
              <td>400 – 600 € (anteilig)</td>
            </tr>
            <tr>
              <td>Buchhaltung, Corporate-Tax-Erklärung, ggf. geprüfter Abschluss</td>
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

        <div class="viz not-prose">
          <div class="viz-title">Was das erste Jahr wirklich kostet</div>
          <div class="viz-sub">Realistische Gesamtkalkulation für eine Person, gerundete Mittelwerte</div>
          <div class="viz-body">
            <div class="stack">
              <span class="stack-seg stack-seg--1" style="--seg:24%">Lizenz</span>
              <span class="stack-seg stack-seg--2" style="--seg:8%">Visum</span>
              <span class="stack-seg stack-seg--3" style="--seg:52%">Unser Paket</span>
              <span class="stack-seg stack-seg--4" style="--seg:16%">Reise &amp; Versicherung</span>
            </div>
            <div class="legend">
              <span class="legend-item"><span class="legend-dot legend-dot--1"></span>Free-Zone-Gebühren ca. 4.200–5.450 €</span>
              <span class="legend-item"><span class="legend-dot legend-dot--2"></span>Visum &amp; Emirates ID ca. 830–1.170 €</span>
              <span class="legend-item"><span class="legend-dot legend-dot--3"></span>Unser Servicepaket 6.990 €</span>
              <span class="legend-item"><span class="legend-dot legend-dot--4"></span>Reise, Krankenversicherung, Dokumente ca. 2.300–5.000 €</span>
            </div>
          </div>
          <p class="viz-note">Gesamt realistisch: <strong>rund 14.000 bis 18.000 € im ersten Jahr</strong>. Ab Jahr 2 fallen davon nur noch Jahreserneuerung, Buchhaltung, Versicherung und Kontogebühren an.</p>
        </div>

        <div class="stat-grid not-prose my-6">
          <div class="stat-card">
            <span class="stat-value">6.990 €</span>
            <span class="stat-label">Unser Paket, einmalig</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">2.990 €</span>
            <span class="stat-label">Jahreserneuerung ab Jahr 2</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">4–5</span>
            <span class="stat-label">Tage vor Ort in den VAE</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">1–4</span>
            <span class="stat-label">Werktage bis zur Lizenz</span>
          </div>
        </div>

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
  },
  'steuerfalle-183-tage': {
    sources: [
      {
        label: '§ 8 AO – Wohnsitz',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__8.html',
      },
      {
        label: '§ 9 AO – Gewöhnlicher Aufenthalt',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__9.html',
      },
      {
        label: '§ 2 AStG – Erweiterte beschränkte Einkommensteuerpflicht',
        url: 'https://www.gesetze-im-internet.de/astg/__2.html',
      },
    ],
    faq: [
      {
        question: 'Reicht die Abmeldung in Deutschland aus?',
        answer:
          'Die Abmeldung ist notwendig, aber nicht hinreichend. Entscheidend ist, dass du tatsächlich keinen Wohnsitz mehr hast und deinen Lebensmittelpunkt verlagert hast. Die Abmeldung ist ein Signal an das Finanzamt – kein rechtlicher Beweis. Der Lebensmittelpunkt muss durch Fakten belegt werden.',
      },
      {
        question: 'Was wenn meine Familie in Deutschland bleibt?',
        answer:
          'Das ist steuerlich der schwierigste Fall. Wenn dein Ehepartner und minderjährige Kinder in Deutschland bleiben, unterstellt das Finanzamt oft einen Lebensmittelpunkt in Deutschland – unabhängig davon, wie viele Tage du selbst weg bist. Das erfordert intensive individuelle Beratung und ist kein Thema für DIY-Lösungen.',
      },
      {
        question: 'Was wenn ich noch eine Immobilie in Deutschland habe?',
        answer:
          'Eine vollständig vermietete Immobilie ist in der Regel kein Problem für den Wohnsitz – solange du keinen eigenen Zugang mehr hast. Problematisch wird es, wenn du die Immobilie selbst nutzt oder ein Zimmer für dich zurückhältst. Eigengenutzte Immobilien solltest du vor dem Wegzug verkaufen oder vollständig vermieten.',
      },
      {
        question: 'Wie oft darf ich Deutschland besuchen?',
        answer:
          'Es gibt keine starre Obergrenze für Besuche – die 183-Tage-Regel ist die praktische Grenze für den "gewöhnlichen Aufenthalt". Entscheidend ist, dass kein Wohnsitz begründet wird. Viele unserer Kunden besuchen Deutschland regelmäßig – wichtig ist, dass sie keine eigene Unterkunft mehr haben und Aufenthalte dokumentieren.',
      },
      {
        question: 'Was bedeutet Lebensmittelpunkt genau für das Finanzamt?',
        answer:
          'Das Finanzamt schaut auf die Gesamtheit der persönlichen und wirtschaftlichen Verhältnisse: Wo ist die Familie? Wo sind die Hauptkunden? Wo bist du am häufigsten? Wo sind deine sozialen Bindungen? Es geht nicht um eine einzelne Variable, sondern um das Gesamtbild. Deshalb ist es so wichtig, das Leben wirklich zu verlagern.',
      },
      {
        question: 'Wie lange sollte ich die Nachweise aufbewahren?',
        answer:
          'Mindestens 10 Jahre. Das deutsche Steuerrecht hat lange Verjährungsfristen, und im Streitfall musst du Nachweise für weit zurückliegende Jahre vorlegen können. Lege von Anfang an ein digitales Dokumentenarchiv an.',
      },
      {
        question: 'Helft ihr bei der Dokumentation des Lebensmittelpunkts?',
        answer:
          'Ja, wir gehen systematisch durch, was du aufbewahren solltest: Mietverträge, Kontoauszüge, Reisedaten, Mitgliedschaften, Vertragsunterlagen aus den VAE. Für steuerliche Grenzfälle – zum Beispiel wenn Familie in Deutschland bleibt – vermitteln wir spezialisierte Steuerberater.',
      },
    ],
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
          <p>Ein Kunde hatte sich korrekt abgemeldet, wohnte in Ajman – aber seine Hauptkunden waren in Deutschland, er reiste monatlich für Meetings zurück und sein Lebensgefährte blieb in Deutschland. Das Finanzamt bejahte die unbeschränkte Steuerpflicht über 3 Jahre. Nachzahlung: 6-stellig.</p>
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

        <div class="callout callout--warn not-prose">
          <span class="callout-title">Auch nach dem sauberen Wegzug: § 2 AStG</span>
          <p>Selbst wenn Wohnsitz und gewöhnlicher Aufenthalt weg sind, kann Deutschland bis zu zehn Jahre lang auf deine deutschen Einkünfte zugreifen – über die erweiterte beschränkte Steuerpflicht. Sie greift bei deutschen Staatsangehörigen, die vorher fünf von zehn Jahren unbeschränkt steuerpflichtig waren, in ein Niedrigsteuerland ziehen und wesentliche wirtschaftliche Interessen in Deutschland behalten. Details dazu im Artikel zur 183-Tage-Regel.</p>
        </div>

        <h2>Deutschland-Aufenthalte richtig handhaben</h2>

        <p>Besuche in Deutschland sind natürlich möglich und legal. Aber:</p>

        <ul class="my-6 space-y-3">
          <li>Kein eigenes Zimmer bei Familie, das dauerhaft für dich reserviert ist</li>
          <li>Keine Wohnung in Deutschland behalten</li>
          <li>Aufenthalte dokumentieren (Flugtickets, Hotel-Buchungen)</li>
          <li>Unter 183 Tagen pro Jahr bleiben</li>
        </ul>
      `,
  },
  'dubai-mythos-vs-ajman-realitaet': {
    sources: [
      {
        label: 'Ajman Free Zone – offizielle Website',
        url: 'https://www.afz.ae/',
      },
      {
        label: 'Corporate Tax – Offizielles Portal der VAE-Regierung (u.ae)',
        url: 'https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax',
      },
    ],
    faq: [
      {
        question: 'Schadet eine Ajman-Adresse meiner Außenwirkung?',
        answer:
          'In der Praxis kaum. Wer im VAE-Geschäftsumfeld unterwegs ist, kennt die Ajman Free Zone. Internationale Kunden fragen selten, in welchem Emirat du registriert bist – sie fragen, ob du zuverlässig bist und pünktlich lieferst. Relevant wird die Adresse vor allem dort, wo sie Teil des Produkts ist.',
      },
      {
        question: 'Kann ich trotzdem in Dubai wohnen?',
        answer:
          'Ja, mit einer Ajman Free Zone-Firma kannst du trotzdem in Dubai wohnen. Du brauchst dann eine separate Aufenthaltsgenehmigung (Residence Visa), die an die Firma gebunden ist. Das koordinieren wir mit dir – viele unserer Kunden wohnen in Dubai bei Ajman-Firma.',
      },
      {
        question: 'Ist Dubai wirklich so viel teurer als beworben?',
        answer:
          'Die Lizenzkosten allein sind in Dubai ca. 60-80% höher als in Ajman. Aber das ist nur der Anfang: Wohnkosten, Restaurantpreise, Freizeitaktivitäten – alles kostet in Dubai mehr. Für einen deutschen Unternehmer, der Kosten optimieren will, ist das Gesamtbild noch deutlicher als die Lizenz-Zahlen allein zeigen.',
      },
      {
        question: 'Was wenn mein Geschäft wächst – kann ich später zu Dubai wechseln?',
        answer:
          'Ja. Viele starten in Ajman und wechseln zu einer Dubai-Lizenz, wenn sich das Geschäft verändert – zum Beispiel wenn Prestige oder spezifische Regulierung wichtig wird. Das ist möglich und kostenmäßig überschaubar. Kein Grund, von Anfang an überzubezahlen.',
      },
      {
        question: 'Bekomme ich mit Ajman-Firma ein Konto bei einer deutschen Bank?',
        answer:
          'Nein – das ist auch nicht das Ziel. Du brauchst ein VAE-Konto als Hauptkonto deiner Firma. Für europäische Transaktionen und EUR-Empfang ist Wise Business die beste Ergänzung: du bekommst eine europäische IBAN für SEPA-Zahlungen, ohne ein deutsches Bankkonto zu brauchen.',
      },
      {
        question: 'Für wen ist Dubai wirklich sinnvoller als Ajman?',
        answer:
          'Dubai macht wirklich Sinn für: Finanzdienstleister unter DIFC-Regulierung, Unternehmen mit mehr als 6 Mitarbeiter-Visas, Branchen wo das Prestige der Adresse zum Produkt gehört (Luxury Brands, High-End Consulting). Für B2B-Dienstleister, Online-Unternehmer, Coaches, Berater, Agenturen: Ajman ist die klügere Wahl.',
      },
      {
        question: 'Nehmt ihr auch Dubai-Gründungen an?',
        answer:
          'Wir sind auf Ajman spezialisiert, weil wir dort das lokale Netzwerk und die tiefste Expertise haben. Für Dubai können wir vermitteln – aber nur, wenn Dubai nach einem ehrlichen Gespräch wirklich die bessere Wahl für dich ist. Dein Erfolg liegt uns mehr am Herzen als der nächste Abschluss.',
      },
    ],
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

        <div class="viz not-prose">
          <div class="viz-title">Lebenshaltung im Vergleich</div>
          <div class="viz-sub">Warmmiete einer Ein-Zimmer-Wohnung, Richtwerte pro Monat</div>
          <div class="viz-body bar-chart">
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Ajman</span><span class="bar-value">ab ca. 600 €</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:33%"></span></div>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Dubai (Randlagen)</span><span class="bar-value">ab ca. 1.100 €</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--navy" style="--bar:61%"></span></div>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Dubai (Marina, Downtown)</span><span class="bar-value">ab ca. 1.800 €</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--muted" style="--bar:100%"></span></div>
            </div>
          </div>
          <p class="viz-note">Der Mietmarkt in den VAE bewegt sich schnell. Diese Werte sind Erfahrungswerte aus unseren Gründungen und keine Marktstatistik.</p>
        </div>

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
  },
  'steuerfallen': {
    sources: [
      {
        label: '§ 2 AStG – Erweiterte beschränkte Einkommensteuerpflicht',
        url: 'https://www.gesetze-im-internet.de/astg/__2.html',
      },
      {
        label: '§ 6 AStG – Besteuerung des Vermögenszuwachses',
        url: 'https://www.gesetze-im-internet.de/astg/__6.html',
      },
      {
        label: '§ 169 AO – Festsetzungsfrist',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__169.html',
      },
      {
        label: '§ 10 AO – Ort der Geschäftsleitung',
        url: 'https://www.gesetze-im-internet.de/ao_1977/__10.html',
      },
    ],
    faq: [
      {
        question: 'Ist eine VAE-Firma legal?',
        answer:
          'Absolut ja – wenn du tatsächlich in den VAE lebst und arbeitest. Eine VAE-Firma als reine Briefkastenstruktur ohne echten Lebensmittelpunkt ist illegal. Die Legalität hängt von deiner tatsächlichen Verlagerung ab, nicht von der Firma selbst. Wir helfen nur Unternehmern, die wirklich auswandern wollen.',
      },
      {
        question: 'Muss ich eine Steuererklärung für das Wegzugsjahr abgeben?',
        answer:
          'Ja. Im Wegzugsjahr bist du für die Zeit bis zum Wegzug noch unbeschränkt steuerpflichtig in Deutschland. Du musst eine Steuererklärung für diesen Zeitraum einreichen. Das unterschätzen viele – ein auf Auswanderung spezialisierter Steuerberater ist hier Pflicht.',
      },
      {
        question: 'Was passiert wenn das Finanzamt mich prüft?',
        answer:
          'Bei korrekter Durchführung: Nichts. Du kannst alle Nachweise vorlegen. Wer seinen Wegzug sauber durchführt – kein Wohnsitz mehr, echter Lebensmittelpunkt in den VAE, gut dokumentiert – muss keine Prüfung fürchten. Das Finanzamt hat das Recht zu prüfen, aber nicht das Recht, korrekte Steuerpflicht zu erfinden.',
      },
      {
        question: 'Kann eine bestehende deutsche GmbH steuerfrei in die VAE überführt werden?',
        answer:
          'Nein – das ist nicht möglich. Eine deutsche GmbH bleibt in Deutschland steuerpflichtig, solange sie dort eingetragen ist und ihre Geschäftsleitung dort ansässig ist. Der Weg ist: Neue VAE-Firma gründen, GmbH geordnet abwickeln oder weiterführen. Beides erfordert steuerliche Beratung.',
      },
      {
        question: 'Wie lange bin ich nach Wegzug noch steuerpflichtig in Deutschland?',
        answer:
          'Die unbeschränkte Steuerpflicht endet mit dem Wegzug, wenn alle Voraussetzungen erfüllt sind. Aber: Die Festsetzungsfrist beträgt regulär vier Jahre, bei leichtfertiger Steuerverkürzung fünf und bei Steuerhinterziehung zehn Jahre (§ 169 AO). Strafrechtlich kann eine besonders schwere Steuerhinterziehung sogar 15 Jahre verfolgt werden (§ 376 AO). Für deutsche Einkünfte wie Mieteinnahmen bleibt zudem die beschränkte Steuerpflicht bestehen – und bei wesentlichen wirtschaftlichen Interessen greift § 2 AStG für bis zu zehn Jahre.',
      },
      {
        question: 'Was wenn das Finanzamt fragt, warum ich keine Steuern zahle?',
        answer:
          'Das ist eine berechtigte Frage – und du solltest sie beantworten können: Du lebst in den VAE, hast dort deinen Lebensmittelpunkt, deine Firma, dein Visum, deine Emirates ID. Dokumentiere das von Anfang an. Wer sauber auswandert, hat auf diese Frage eine gute Antwort.',
      },
      {
        question: 'Muss ich nach dem Wegzug noch Steuern in Deutschland zahlen?',
        answer:
          'Auf in Deutschland erzielte Einkünfte (z.B. Mieteinkünfte aus deutschem Immobilienbesitz, manche Renten) ja – das nennt sich beschränkte Steuerpflicht. Auf Einkünfte deiner VAE-Firma: nein, wenn du nicht mehr unbeschränkt steuerpflichtig bist. Die Steuererklärung im Wegzugsjahr ist daher besonders wichtig.',
      },
    ],
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

        <h2>Steuerfalle #6: Die erweiterte beschränkte Steuerpflicht übersehen</h2>

        <p>Die unbekannteste Falle steht in § 2 AStG. Sie greift, wenn du als deutscher Staatsangehöriger in den letzten zehn Jahren mindestens fünf Jahre unbeschränkt steuerpflichtig warst, in ein Niedrigsteuerland ziehst – die VAE erfüllen das mit 0 % zweifelsfrei – und weiterhin wesentliche wirtschaftliche Interessen in Deutschland hast.</p>

        <p>Wesentliche wirtschaftliche Interessen liegen unter anderem vor bei einer Beteiligung nach § 17 EStG an einer inländischen Kapitalgesellschaft, bei deutschen Einkünften über 30 % aller Einkünfte oder über 62.000 € oder bei deutschem Vermögen über 30 % des Gesamtvermögens oder über 154.000 €.</p>

        <p><strong>Folge:</strong> Bis zu zehn Jahre nach dem Wegzug bleibst du mit allen nicht-ausländischen Einkünften steuerpflichtig, sobald diese 16.500 € im Jahr übersteigen.</p>

        <p><strong>Lösung:</strong> Vor dem Wegzug prüfen lassen, welche deutschen Einkünfte und Vermögenswerte bleiben – und ob sich das umstrukturieren lässt.</p>

        <h2>Was macht es richtig?</h2>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Komplette Aufgabe des deutschen Wohnsitzes</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Tatsächliche Verlagerung des Lebensmittelpunkts</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Echte operative Führung der Firma in den VAE</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Frühzeitige Steuerberatung vor dem Wegzug</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Saubere Dokumentation aller Schritte</span></li>
        </ul>
      `,
  },
  'dokumente-checkliste': {
    sources: [
      {
        label: 'Ajman Free Zone – offizielle Website',
        url: 'https://www.afz.ae/',
      },
      {
        label: 'ICP – Federal Authority for Identity, Citizenship, Customs & Port Security',
        url: 'https://icp.gov.ae/en/',
      },
      {
        label: 'Auswärtiges Amt – Internationaler Urkundenverkehr',
        url: 'https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr',
      },
    ],
    faq: [
      {
        question: 'Brauche ich beglaubigte Übersetzungen?',
        answer:
          'Für die Gründung selbst nicht zwingend. Für bestimmte Folgeprozesse – z.B. wenn du Dokumente aus Deutschland für das Visum oder das Bankkonto vorlegen musst – können beglaubigte Übersetzungen ins Englische nötig sein. Wir informieren dich rechtzeitig, was wann gebraucht wird.',
      },
      {
        question: 'Mein Reisepass läuft in 4 Monaten ab – Problem?',
        answer:
          'Ja, das ist ein Problem. Die Ajman Free Zone und das Visum-Prozedere erfordern einen Pass, der mindestens 6 Monate über das geplante Gründungsdatum hinaus gültig ist. Pass zuerst verlängern – das dauert in Deutschland je nach Amt 2-6 Wochen.',
      },
      {
        question: 'Brauche ich einen Businessplan für die Ajman Free Zone?',
        answer:
          'Für die Lizenzbeantragung selbst reicht eine kurze Beschreibung der Geschäftstätigkeit (2-3 Sätze auf Englisch). Für das Bankkonto wollen manche Banken einen etwas ausführlicheren Businessplan (1-2 Seiten). Wir helfen dir, das entsprechend vorzubereiten.',
      },
      {
        question: 'Was ist die Establishment Card und wozu brauche ich sie?',
        answer:
          'Die Establishment Card ist der "Firmenausweis" der Freezone – ein offizielles Dokument, das bestätigt, dass deine Firma in der Ajman Free Zone registriert ist. Du brauchst sie für Visum-Anträge, Bankkonto-Eröffnung und weitere Government-Transaktionen. Sie wird kurz nach der Lizenzerstellung ausgestellt.',
      },
      {
        question: 'Kann ich die Gründung vollständig online erledigen?',
        answer:
          'Vorab-Koordination und Dokument-Einreichung geht teilweise online. Für das Visum und die Emirates ID musst du jedoch persönlich vor Ort erscheinen – das ist gesetzlich vorgeschrieben. Plane daher mindestens eine Reise von 4-5 Tagen ein. Das Bankkonto ebenfalls nur persönlich.',
      },
      {
        question: 'Wie lange im Voraus sollte ich die Dokumente vorbereiten?',
        answer:
          'Mindestens 3-4 Wochen vor der Gründungsreise. Manche Dokumente brauchen Zeit (Passverlängerung, beglaubigte Übersetzungen). Wir schicken dir eine personalisierte Checkliste, sobald dein Termin feststeht – so verpasst du keinen Schritt.',
      },
      {
        question: 'Was wenn ich ein Dokument vergesse?',
        answer:
          'Kein Drama – wir haben das schon oft gemanagt. Viele Dokumente können nachgereicht oder digital übermittelt werden. Daher unsere Empfehlung: Alles als hochaufgelöster Scan (PDF oder JPG) in der Cloud und auf dem Handy haben. Im Notfall können wir meist improvisieren.',
      },
    ],
    content: `
        <p>Eine der häufigsten Verzögerungen bei VAE-Gründungen: fehlende oder nicht korrekt vorbereitete Dokumente. Diese Liste zeigt dir alles, was du brauchst – sortiert nach Gründungsphase.</p>

        <div class="viz not-prose">
          <div class="viz-title">Wann welches Dokument gebraucht wird</div>
          <div class="viz-body timeline">
            <div class="timeline-item">
              <div class="timeline-when">4 Wochen vorher</div>
              <div class="timeline-what">Pass prüfen, Fotos, Firmennamen</div>
              <p class="timeline-desc">Der Pass muss mindestens sechs Monate über den Gründungstermin hinaus gültig sein. Eine Verlängerung dauert in Deutschland je nach Amt zwei bis sechs Wochen.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">2 Wochen vorher</div>
              <div class="timeline-what">Aktivitätscodes und Beschreibung</div>
              <p class="timeline-desc">Geschäftstätigkeit auf Englisch, drei Namensalternativen, Auswahl der Lizenzkategorie.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Vor Ort</div>
              <div class="timeline-what">Originale für Freezone und Visum</div>
              <p class="timeline-desc">Original-Reisepass, Passfotos, Antragsformulare, Zahlungsnachweis, Medical Fitness Test.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-when">Nach der Gründung</div>
              <div class="timeline-what">Unterlagen für die Bank</div>
              <p class="timeline-desc">Trade License, Certificate of Incorporation, Memorandum of Association, Emirates ID, Adressnachweis, kurzer Businessplan.</p>
            </div>
          </div>
        </div>

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
  },
  'vae-firma-gruenden': {
    sources: [
      {
        label: 'Ajman Free Zone – offizielle Website',
        url: 'https://www.afz.ae/',
      },
      {
        label: 'Federal Tax Authority – Corporate Tax',
        url: 'https://tax.gov.ae/en/taxes/corporate.tax.aspx',
      },
      {
        label: 'BMF – Staatenbezogene Informationen zu Doppelbesteuerungsabkommen',
        url: 'https://www.bundesfinanzministerium.de/Web/DE/Themen/Steuern/Internationales_Steuerrecht/Staatenbezogene_Informationen/staatenbezogene_info.html',
      },
    ],
    faq: [
      {
        question: 'Kann ich die Firma gründen ohne selbst hinzufahren?',
        answer:
          'Für das Visum und die Emirates ID musst du persönlich vor Ort sein – das ist Pflicht. Die Vorabarbeiten koordinieren wir remote, aber der persönliche Behördengang ist nicht umgehbar. Plane mindestens 4-5 Tage vor Ort – das ist gut investierte Zeit.',
      },
      {
        question: 'Welche Aktivitätslizenzen gibt es in Ajman und welche brauche ich?',
        answer:
          'Die Ajman Free Zone bietet Hunderte von Aktivitätskategorien: Consulting, IT, E-Commerce, Marketing, Import/Export und viele mehr. Die richtige Auswahl ist wichtig – falsche Kategorien können Probleme bei Banken verursachen. Wir helfen dir dabei, die optimale Lizenzklasse für dein Geschäftsmodell zu wählen.',
      },
      {
        question: 'Was ist der Unterschied zwischen Free Zone und Mainland-Firma in den VAE?',
        answer:
          'Free Zone-Firmen (wie Ajman) sind auf internationale Geschäfte ausgerichtet: steuerlich privilegiert, einfacher zu gründen, aber mit Einschränkungen beim Handel innerhalb der VAE. Mainland-Firmen können überall in den VAE tätig sein, sind aber teurer und regulierter. Für die meisten deutschen Unternehmer mit internationalem Geschäft ist eine Free Zone ideal.',
      },
      {
        question: 'Muss ich sofort in die VAE ziehen?',
        answer:
          'Nein. Du kannst die Firma gründen und das Visum haben, ohne sofort umzuziehen. Aber für die steuerliche Wirkung – Deutschland nicht mehr steuerpflichtig – musst du deinen Lebensmittelpunkt wirklich verlagern. Die Firma allein reicht nicht. Das ist wichtig zu verstehen.',
      },
      {
        question: 'Was kostet ein Flug und Hotel für die Gründungsreise?',
        answer:
          'Flug Frankfurt–Dubai: 400-800 € Hin/Rück (je nach Buchungszeitpunkt). Hotel in Ajman: 40-80 €/Nacht. In Dubai: 80-200 €. Kalkuliere für die gesamte Gründungsreise (4-5 Tage): 600-1.500 € Gesamtkosten. Das ist einmalig und gut investiert.',
      },
      {
        question: 'Gibt es ein Doppelbesteuerungsabkommen zwischen Deutschland und den VAE?',
        answer:
          'Nein. Das Abkommen vom 1. Juli 2010 war auf zehn Jahre befristet, Deutschland hat die Verlängerung nicht gezogen, und es ist zum 31. Dezember 2021 außer Kraft getreten. Seit dem 1. Januar 2022 besteht ein vertragsloser Zustand. Das bedeutet: Für eine saubere Steuerfreiheit musst du wirklich steuerlich aus Deutschland austreten. Ein halber Wegzug funktioniert nicht.',
      },
      {
        question: 'Was wenn es nach der Gründung Probleme gibt?',
        answer:
          'Dafür sind wir da. Unser WhatsApp-Support läuft 3 Monate nach der Gründung und wir stehen für alle Fragen zur Verfügung. Nach dem ersten Jahr kennen unsere Kunden den Weg – und viele kommen mit Folgefragen immer noch zu uns. Das Netzwerk bleibt bestehen.',
      },
    ],
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
  },
  'uae-corporate-tax': {
    sources: [
      {
        label: 'Corporate Tax – Offizielles Portal der VAE-Regierung (u.ae)',
        url: 'https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax',
      },
      {
        label: 'Federal Decree-Law No. 47 of 2022 (Ministry of Finance, PDF)',
        url: 'https://mof.gov.ae/wp-content/uploads/2022/12/Federal-Decree-Law-No.-47-of-2022-EN.pdf',
      },
      {
        label: 'Federal Tax Authority – Corporate Tax',
        url: 'https://tax.gov.ae/en/taxes/corporate.tax.aspx',
      },
      {
        label: 'PwC Worldwide Tax Summaries – UAE, Tax credits and incentives (Free Zones, De-minimis, Small Business Relief)',
        url: 'https://taxsummaries.pwc.com/united-arab-emirates/corporate/tax-credits-and-incentives',
      },
    ],
    faq: [
      {
        question: 'Muss ich jetzt Steuern in den VAE zahlen?',
        answer:
          'Bis 375.000 AED steuerpflichtigem Gewinn (rund 88.000 €) fallen 0 % an – für jede VAE-Gesellschaft. Darüber sind es 9 %, es sei denn, du bist Qualifying Free Zone Person und deine Einkünfte sind qualifizierend; dann bleiben auch höhere Gewinne bei 0 %. Die persönliche Einkommensteuer liegt in beiden Fällen bei 0 %.',
      },
      {
        question: 'Ich berate deutsche Kunden von den VAE aus – bekomme ich die 0 %?',
        answer:
          'In der Regel nicht auf diesen Umsatz. Beratung, Coaching, Marketing, Agentur- und Software-Leistungen stehen nicht auf der Liste der Qualifying Activities. Verkaufst du sie an Kunden außerhalb einer Free Zone, sind die Einkünfte nicht qualifizierend und werden über dem Freibetrag mit 9 % besteuert. Bei 200.000 € Gewinn entspricht das rund 5 % effektiver Belastung.',
      },
      {
        question: 'Was ist der Small Business Relief und gilt er für mich?',
        answer:
          'Er erlaubt in den VAE ansässigen Gesellschaften mit höchstens 3 Mio. AED Umsatz (rund 708.000 €), sich als Person ohne steuerpflichtiges Einkommen behandeln zu lassen. Die Regelung ist bis zu Steuerperioden befristet, die am 31. Dezember 2026 enden. Wichtig: Qualifying Free Zone Persons sind ausdrücklich ausgenommen – man muss sich zwischen beiden Wegen entscheiden.',
      },
      {
        question: 'Muss ich eine Steuererklärung einreichen?',
        answer:
          'Ja. Alle steuerpflichtigen Personen müssen sich bei der Federal Tax Authority registrieren und eine Corporate-Tax-Erklärung abgeben – auch bei 0 % Steuerschuld. Die Frist beträgt neun Monate nach Ende des Geschäftsjahres. Voraussetzung ist eine ordentliche Buchhaltung; als QFZP zusätzlich ein geprüfter Abschluss nach IFRS.',
      },
      {
        question: 'Was passiert, wenn ich die De-minimis-Grenze überschreite?',
        answer:
          'Dann verlierst du den QFZP-Status – und zwar nicht nur für die betroffenen Umsätze: Die Gesellschaft wird für das laufende Jahr und die vier folgenden Jahre mit 9 % auf ihr gesamtes Einkommen besteuert. Erst im sechsten Jahr kann der Status neu geprüft werden. Deshalb ist die Kundenstruktur vor der Gründung zu klären, nicht danach.',
      },
      {
        question: 'Was ist mit VAT / Mehrwertsteuer in den VAE?',
        answer:
          'Der Regelsatz beträgt 5 %. Registrierungspflicht besteht ab 375.000 AED steuerpflichtigem Jahresumsatz, freiwillig ab 187.500 AED. Dienstleistungen an Empfänger außerhalb der VAE sind unter bestimmten Voraussetzungen mit 0 % zu bewerten – der Normalfall bei europäischen Kunden. Die Erklärungspflicht bleibt trotzdem bestehen.',
      },
      {
        question: 'Gilt die Corporate Tax auch für mein persönliches Einkommen aus der Firma?',
        answer:
          'Nein. Besteuert wird der Gewinn der Gesellschaft. Gehalt und Dividenden, die du als Inhaber beziehst, unterliegen in den VAE keiner persönlichen Einkommensteuer. Genau darin liegt der eigentliche Vorteil – vorausgesetzt, du bist in Deutschland sauber abgemeldet. Ein Doppelbesteuerungsabkommen zwischen Deutschland und den VAE gibt es seit 2022 nicht mehr, deshalb muss der Wegzug wirklich sitzen.',
      },
      {
        question: 'Hat sich die VAE steuerlich durch die Corporate Tax verschlechtert?',
        answer:
          'Sie ist ehrlicher geworden. Für Tätigkeiten auf der Qualifying-Liste bleibt es bei 0 %. Für den typischen Berater oder Agenturinhaber mit EU-Kunden liegt die effektive Belastung je nach Gewinn bei rund 3 bis 8 %. Dazu kommen Buchhaltung, Registrierung und Erklärungen. Gegenüber rund 30 bis 48 % in Deutschland bleibt der Abstand groß – nur eben nicht mehr bei null.',
      },
    ],
    content: `
        <p>Seit Geschäftsjahren, die am oder nach dem 1. Juni 2023 beginnen, erheben die VAE eine Körperschaftsteuer. Viele Anbieter antworten darauf mit einem pauschalen „Free Zone = weiterhin 0 %". Das ist zu einfach – und für einen Teil der deutschen Gründer schlicht falsch.</p>

        <p>Wir gehen hier durch, was tatsächlich im Gesetz steht, wer die 0 % bekommt und warum auch 9 % noch ein sehr guter Deal sind.</p>

        <h2>Die Steuersätze im Überblick</h2>

        <div class="viz not-prose">
          <div class="viz-title">UAE Corporate Tax – Sätze</div>
          <div class="viz-sub">Federal Decree-Law No. 47 of 2022 und ergänzende Beschlüsse</div>
          <div class="viz-body tier">
            <div class="tier-row">
              <div class="tier-rate">0 %</div>
              <div class="tier-desc">Steuerpflichtiger Gewinn bis <strong>375.000 AED</strong> (rund 88.000 €) – gilt für jede VAE-Gesellschaft. Zusätzlich: <strong>Qualifying Income</strong> einer Qualifying Free Zone Person.</div>
            </div>
            <div class="tier-row">
              <div class="tier-rate">9 %</div>
              <div class="tier-desc">Steuerpflichtiger Gewinn über 375.000 AED. Ebenso: alle <strong>nicht qualifizierenden</strong> Einkünfte einer Free-Zone-Gesellschaft.</div>
            </div>
            <div class="tier-row">
              <div class="tier-rate">15 %</div>
              <div class="tier-desc">Domestic Minimum Top-up Tax für multinationale Konzerne ab 750 Mio. € Konzernumsatz (in mindestens zwei der vier Vorjahre) – für Geschäftsjahre ab dem 1. Januar 2025. Für Einzelgründer irrelevant.</div>
            </div>
          </div>
          <p class="viz-note">Umrechnung zum EZB-Referenzkurs (AED ist fest an den US-Dollar gekoppelt, 1 USD = 3,6725 AED). Der Euro-Betrag schwankt mit dem EUR/USD-Kurs.</p>
        </div>

        <h2>Der entscheidende Punkt: „Qualifying Income"</h2>

        <p>Eine Free-Zone-Gesellschaft ist nicht automatisch steuerfrei. Sie muss <strong>Qualifying Free Zone Person (QFZP)</strong> sein – und selbst dann sind nur die <em>qualifizierenden</em> Einkünfte mit 0 % belastet. Alles andere wird mit 9 % besteuert.</p>

        <p>Als Qualifying Income gelten im Kern:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Einkünfte aus Transaktionen mit <strong>anderen Free-Zone-Personen</strong> – sofern es sich nicht um „Excluded Activities" handelt</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Einkünfte aus Transaktionen mit Personen <strong>außerhalb der Free Zone</strong> – aber nur, wenn es sich um eine <strong>„Qualifying Activity"</strong> handelt</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Einkünfte aus qualifizierendem geistigem Eigentum (eng definiert, Nexus-Ansatz)</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">✓</span><span>Alle übrigen Einkünfte – <strong>nur</strong> solange die De-minimis-Grenze eingehalten wird</span></li>
        </ul>

        <h3>Die Liste der „Qualifying Activities" ist kürzer, als viele denken</h3>

        <p>Dazu zählen unter anderem: Herstellung und Verarbeitung von Waren, Handel mit qualifizierten Rohstoffen, Halten von Beteiligungen und Wertpapieren zu Anlagezwecken, Besitz und Betrieb von Schiffen, Rückversicherung, Fondsmanagement, Vermögens- und Investmentmanagement, Headquarter- und Treasury-Leistungen an verbundene Unternehmen, Flugzeugfinanzierung und -leasing, Logistikleistungen sowie Warendistribution aus einer Designated Zone.</p>

        <div class="callout callout--warn not-prose">
          <span class="callout-title">Was nicht auf der Liste steht</span>
          <p>Beratung, Coaching, Marketing, Agenturleistungen, Software-Entwicklung, Online-Kurse und die meisten digitalen Dienstleistungen sind <strong>keine</strong> Qualifying Activities. Verkaufst du solche Leistungen an Kunden außerhalb einer Free Zone – also an deutsche GmbHs, EU-Unternehmen oder Privatpersonen –, sind diese Einkünfte <strong>nicht</strong> qualifizierend.</p>
          <p style="margin-top:0.5rem">Zusätzlich gilt: Transaktionen mit <strong>natürlichen Personen</strong> sind grundsätzlich „Excluded Activities". Wer B2C verkauft, ist damit ebenfalls außerhalb der 0 %.</p>
        </div>

        <h3>Die De-minimis-Grenze</h3>

        <p>Nicht qualifizierende Umsätze sind unschädlich, solange sie <strong>5 % des Gesamtumsatzes oder 5 Mio. AED nicht übersteigen – je nachdem, welcher Wert niedriger ist</strong>. Wird die Grenze gerissen, verliert die Gesellschaft den QFZP-Status.</p>

        <div class="viz not-prose">
          <div class="viz-title">De-minimis-Test</div>
          <div class="viz-sub">Anteil nicht qualifizierender Umsätze am Gesamtumsatz</div>
          <div class="viz-body bar-chart">
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Grenze</span><span class="bar-value">5 % / max. 5 Mio. AED</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:5%"></span></div>
              <p class="bar-caption">Der niedrigere der beiden Werte ist maßgeblich</p>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Typische Beratungs-/Agentur-Firma mit EU-Kunden</span><span class="bar-value">bis 100 %</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--danger" style="--bar:100%"></span></div>
              <p class="bar-caption">Nahezu der gesamte Umsatz ist nicht qualifizierend – QFZP-Status praktisch nicht erreichbar</p>
            </div>
          </div>
          <p class="viz-note">Folge eines Verstoßes: 9 % auf die <strong>gesamten</strong> Einkünfte im laufenden Jahr und in den vier Folgejahren. Erst im sechsten Jahr kann der Status neu geprüft werden.</p>
        </div>

        <h2>Zahle ich 0 % oder 9 %?</h2>

        <div class="viz not-prose">
          <div class="viz-title">Entscheidungspfad für die typische Ein-Personen-Firma</div>
          <div class="viz-sub">Vereinfacht – die Prüfung im Einzelfall gehört zum lokalen Steuerberater</div>
          <div class="viz-body flow">
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Frage 1</span>
              Sind deine Kunden überwiegend Unternehmen mit Sitz in einer VAE-Free-Zone?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step flow-step--ok">
                <span class="flow-tag">Ja</span>
                Einkünfte sind grundsätzlich qualifizierend → 0 %, wenn alle QFZP-Bedingungen erfüllt sind.
              </div>
              <div class="flow-step">
                <span class="flow-tag">Nein</span>
                Weiter mit Frage 2.
              </div>
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-step flow-step--q">
              <span class="flow-tag">Frage 2</span>
              Fällt deine Leistung unter eine der gelisteten „Qualifying Activities" (Produktion, Rohstoffhandel, Fonds-/Vermögensverwaltung, Logistik …)?
            </div>
            <div class="flow-arrow"></div>
            <div class="flow-split">
              <div class="flow-step flow-step--ok">
                <span class="flow-tag">Ja</span>
                Auch mit Kunden außerhalb der Free Zone qualifizierend → 0 % möglich.
              </div>
              <div class="flow-step flow-step--stop">
                <span class="flow-tag">Nein – der Regelfall bei Beratung, Agentur, Software, Coaching</span>
                Nicht qualifizierende Einkünfte: 0 % bis 375.000 AED, darüber 9 %.
              </div>
            </div>
          </div>
        </div>

        <h2>Was 9 % konkret bedeuten</h2>

        <p>Bevor jetzt jemand die Auswanderung absagt: 9 % auf den Teil über 375.000 AED ist eine sehr niedrige Belastung – und die persönliche Einkommensteuer bleibt bei 0 %.</p>

        <div class="viz not-prose">
          <div class="viz-title">Effektive Steuerlast auf 200.000 € Unternehmensgewinn</div>
          <div class="viz-sub">Gesellschaftsebene, gerundet</div>
          <div class="viz-body bar-chart">
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">VAE Free Zone, Qualifying Income</span><span class="bar-value">0 %</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:1.5%"></span></div>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">VAE, nicht qualifizierend (9 % über Freibetrag)</span><span class="bar-value">≈ 5 %</span></div>
              <div class="bar-track"><span class="bar-fill" style="--bar:10%"></span></div>
              <p class="bar-caption">Rund 10.000 € Steuer – die ersten 375.000 AED bleiben steuerfrei</p>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Deutsche GmbH, Gewinn thesauriert</span><span class="bar-value">≈ 30 %</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--muted" style="--bar:63%"></span></div>
              <p class="bar-caption">15,825 % Körperschaftsteuer inkl. Soli plus Gewerbesteuer je nach Hebesatz</p>
            </div>
            <div class="bar-row">
              <div class="bar-head"><span class="bar-label">Deutsche GmbH inkl. Ausschüttung an den Gesellschafter</span><span class="bar-value">≈ 48 %</span></div>
              <div class="bar-track"><span class="bar-fill bar-fill--danger" style="--bar:100%"></span></div>
              <p class="bar-caption">Zusätzlich 26,375 % Abgeltungssteuer auf die Dividende</p>
            </div>
          </div>
          <p class="viz-note">Die deutschen Werte hängen vom Gewerbesteuer-Hebesatz der Gemeinde ab (typisch 400–500 %). Kirchensteuer nicht berücksichtigt.</p>
        </div>

        <h2>Die Bedingungen für den QFZP-Status</h2>

        <p>Alle sieben müssen gleichzeitig erfüllt sein:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">1.</span><span>Juristische Person, die in einer Free Zone gegründet oder registriert ist</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">2.</span><span><strong>Angemessene Substanz</strong> in der Free Zone: Die wesentlichen wertschöpfenden Tätigkeiten müssen dort stattfinden, mit passenden Räumen, Personal und Betriebsausgaben</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">3.</span><span>Erzielung von Qualifying Income</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">4.</span><span>Keine Option zur regulären Besteuerung ausgeübt</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">5.</span><span>Einhaltung der Verrechnungspreisregeln inklusive Dokumentation</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">6.</span><span>Einhaltung der De-minimis-Grenze</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">7.</span><span><strong>Geprüfter Jahresabschluss nach IFRS</strong> – ein realer Kostenfaktor, der in vielen Angeboten fehlt</span></li>
        </ul>

        <h2>Small Business Relief – und warum er für QFZP nicht gilt</h2>

        <p>Das Gesetz kennt eine befristete Erleichterung für kleine Unternehmen: Bei einem Umsatz von höchstens <strong>3 Mio. AED</strong> (rund 708.000 €) kann eine in den VAE ansässige Gesellschaft beantragen, so behandelt zu werden, als hätte sie kein steuerpflichtiges Einkommen erzielt. Die Regelung gilt für Steuerperioden, die spätestens am <strong>31. Dezember 2026</strong> enden.</p>

        <div class="callout callout--warn not-prose">
          <span class="callout-title">Der Haken</span>
          <p>Small Business Relief steht Qualifying Free Zone Persons nicht offen. Du musst dich also entscheiden: entweder QFZP-Status mit 0 % auf qualifizierende Einkünfte – oder reguläre Besteuerung mit Small Business Relief, solange der Umsatz unter 3 Mio. AED liegt und die Regelung läuft.</p>
          <p style="margin-top:0.5rem">Für viele Berater und Agenturen mit EU-Kunden ist der zweite Weg bis Ende 2026 der praktisch günstigere – danach greift wieder der Regelfall mit 0 % bis 375.000 AED und 9 % darüber.</p>
        </div>

        <h2>Pflichten, die neu dazugekommen sind</h2>

        <div class="stat-grid not-prose my-6">
          <div class="stat-card">
            <span class="stat-value">Pflicht</span>
            <span class="stat-label">Registrierung bei der Federal Tax Authority</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">9 Mon.</span>
            <span class="stat-label">Frist für Erklärung und Zahlung nach Ende des Geschäftsjahres</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">0 %</span>
            <span class="stat-label">Auch bei null Steuer ist die Erklärung abzugeben</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">7 Jahre</span>
            <span class="stat-label">Aufbewahrungspflicht für Belege und Unterlagen</span>
          </div>
        </div>

        <h2>Und die Mehrwertsteuer?</h2>

        <p>Die VAE erheben 5 % VAT. Registrierungspflicht besteht ab 375.000 AED steuerpflichtigem Umsatz, freiwillig ab 187.500 AED. Leistungen an Kunden außerhalb der VAE sind unter bestimmten Voraussetzungen mit 0 % zu bewerten – das ist der Normalfall für Online-Unternehmer mit europäischen Kunden, entbindet aber nicht von der Registrierungs- und Erklärungspflicht.</p>

        <h2>Fazit</h2>

        <p>Die VAE bleiben steuerlich attraktiv – aber nicht mehr im Sinne von „gar nichts". Realistisch ist für den typischen deutschen Online-Unternehmer:</p>

        <ul class="my-6 space-y-3">
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>0 % persönliche Einkommensteuer</strong> auf Gehalt und Ausschüttungen – das ist und bleibt der größte Hebel</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>0 bis 9 % Körperschaftsteuer</strong>, je nach Kundenstruktur und Tätigkeit</span></li>
          <li class="flex items-start gap-3"><span class="text-gold mt-0.5">→</span><span><strong>Echter Compliance-Aufwand:</strong> Buchhaltung, Registrierung, Erklärung, ggf. geprüfter Abschluss</span></li>
        </ul>

        <p>Wer dir 0 % ohne Wenn und Aber verspricht, hat entweder das Gesetz nicht gelesen oder verkauft dir ein Risiko. Wir sagen dir vorher, in welchem Szenario du landest.</p>
      `,
  },
}

export function getArticleDetail(slug: string | undefined): ArticleDetail | null {
  if (!slug) return null
  return articleDetails[slug] ?? null
}
