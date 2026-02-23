# Zielsteuerfrei.de — Sales Funnel Blueprint

**Funnel-Typ:** Lead-Gen → Tripwire → Core Offer  
**Dauer:** 8-14 Tage (Email-Sequence)

---

## Warum dieser Funnel?
**Entscheidung:** Lead-Gen Funnel mit Tripwire
- **Begründung:** Hoher Trust-Aufbau nötig (Steuern = sensibles Thema)
- Kalt-Traffic braucht Wärme vor dem Verkauf
- Tripwire (kleiner Kauf) qualifiziert Buyer vs. Freebie-Seeker

---

## Funnel-Stufen

### STAGE 0: Traffic
| Quelle | Typ | Ziel |
|--------|-----|------|
| Meta Ads (FB/IG) | Paid | Cold Traffic → Landing Page |
| Google Ads Search | Paid | Intent-Traffic (Keywords) |
| SEO/Blog | Organic | Langfristiger Traffic |
| YouTube/Partners | Paid | Authority-Transfer |

---

### STAGE 1: Lead Generation (Cold → Warm)
**Landing Page:** zielsteuerfrei.de/freibetrags-rechner
- **Elemente:** Headline, Rechner-Formular, Trust-Logos, FAQ
- **Tracking:** Meta Pixel, Google Analytics 4, UTM-Parameter
- **Conversion-Ziel:** Email-Optin ≥ 25%

**Lead Magnet:** Freibetrags-Rechner
- Nutzer gibt Umsatz/Einkommen ein
- Ergebnis: Sparpotenzial + Email-Report
- **Segmentierung:** Kleinunternehmer vs. Kapitalanleger vs. Freiberufler

---

### STAGE 2: Tripwire (Warm → Buyer)
**Produkt:** „Steuer-Checklisten Bundle" — 27€
- **Zweck:** Erster Kauf (Payment-Daten capture)
- **Upsell direkt danach:** Mini-Kurs für 97€ (Order Bump)
- **Delivery:** Sofort-Download, keine Rechnung nötig (Kleinunternehmer)

**Sequenz:**
1. Thank You Page (Rechner) → Tripwire-Angebot
2. Checkout-Page (Stripe/PayPal)
3. Upsell-Page (One-Click-Upsell)
4. Email: Zugangsdaten + Onboarding

---

### STAGE 3: Core Offer (Buyer → Core Customer)
**Produkt:** „Steuer-Optimierung Masterclass" — 497€
- **Inhalt:** 8 Module, Video, Templates, Community
- **Bonus:** 2× Live-Q&A pro Monat
- **Garantie:** 30 Tage Money-Back

**Sequenz:**
- Email 3-5 der Sequence führt hierhin
- Sales-Page mit Video-Sales-Letter (VSL)
- Checkout mit Ratenzahlung (Klarna/PayPal Pay Later)

---

### STAGE 4: Backend (Core → High-Ticket)
**Produkt:** „Steuer-Strategie 1:1" — 2.497€
- Persönliche Steuerstrategie mit Experten
- 3 Sessions + Dokumenten-Review
- **Entry:** Nur per Application-Call (Calendly)

---

## Touchpoints & Automation

### Email-Automation (ActiveCampaign / Brevo / Kit)
```
Tag: "Rechner-Kleinunternehmer" → Sequence A (Gründer-Fokus)
Tag: "Rechner-Kapitalanleger" → Sequence B (Investor-Fokus)
Tag: "Kauf-Tripwire" → Post-Purchase Sequence (erhöht Trust)
Tag: "Kauf-Kein-Kauf-Tag-3" → Re-engagement + Rabatt
```

### Retargeting-Pixel Strategie
| Audience | Action | Creative |
|----------|--------|----------|
| LP Visitor, No Optin | Retarget 7 Tage | „Vergiss nicht deinen Report" |
| Optin, No Tripwire | Retarget 14 Tage | „Das Bundle wartet — 27€" |
| Tripwire-Buyer | Exklude from cold | Upsell-Ad (Kurs) |
| Cart Abandon | Retarget 3 Tage | Urgency/FAQ |

---

## Tech Stack Empfehlung

| Funktion | Tool | Alternative |
|----------|------|-------------|
| Landing Page | WordPress + Elementor / VS Code raw | Carrd, Webflow |
| Email Marketing | Kit (ConvertKit) | Brevo, ActiveCampaign |
| Payment | Stripe + PayPal | Digistore24 (DE) |
| Course Hosting | Notion (gated) / Teachable | Podia, Kajabi |
| Forms | Typeform (Rechner) | WP Forms, Jotform |
| Calendar | Calendly | TidyCal |
| Analytics | Google Analytics 4 + Hotjar | Plausible |

---