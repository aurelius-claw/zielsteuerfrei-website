# Zielsteuerfrei – Sitemap & Architecture

## Struktur

```
zielsteuerfrei.de/
├── index.html                    # Haupt-Landingpage (Conversion-Focus)
├── ajman-vs-dubai.html           # Vergleichsseite (SEO + Education)
├── der-prozess.html              # 5-Phasen-Detailansicht
├── faq.html                      # Einwandbehandlung
├── ueber-uns.html                # Neno + Juljana
├── danke.html                    # Post-Booking Thank You
├── robots.txt
├── sitemap.xml
└── css/
    └── style.css                 # Vollständige Styles
```

## User Flow

```
Cold Traffic (Ads/SEO)
       ↓
  [index.html]
       ↓
Hero: Problem (deutscher Steuerklotz)
       ↓
Anti-Dubai: Kostenspar-Argument
       ↓
Fixpreis: 6.990 € Transparenz
       ↓
Prozess: 5 Phasen visuell
       ↓
Trust: Neno + Juljana + Beweise
       ↓
CTA: Calendly-Terminbuchung
       ↓
  [danke.html]
       ↓
Neno-Call → Steuerberater-Call → Rechnung → Setup
```

## Page Purposes

| Seite | Zweck | Haupt-CTA |
|-------|-------|-----------|
| **index** | Conversion – Alles in einer Seite | Termin buchen |
| **ajman-vs-dubai** | Education – Warum nicht Dubai? | Termin buchen |
| **der-prozess** | Trust – Wie funktioniert es? | Termin buchen |
| **faq** | Einwandbehandlung – Alle Zweifel geklärt | Termin buchen |
| **ueber-uns** | Persönlichkeit – Wer steckt dahinter? | Termin buchen |

## SEO Keywords pro Seite

- **index:** "Ajman Firmengründung", "Steuerfrei VAE", "Firma gründen Ajman"
- **ajman-vs-dubai:** "Ajman vs Dubai", "Dubai Alternative", "günstiger als Dubai"
- **der-prozess:** "Firmengründung VAE Prozess", "Visum VAE Unternehmer"
- **faq:** "Wegzugssteuer Dubai", "Letterbox Firma", "Steuerberater Dubai"
- **ueber-uns:** "Zielsteuerfrei Erfahrung", "Ajman Consultant"

## Component Library

### Atoms
- Button Primary (CTA)
- Button Secondary
- Typography (H1-H4, Body, Caption)
- Price Display (6.990 €)
- Phase Indicator (1-5)
- Testimonial Card
- FAQ Accordion

### Molecules
- Hero Section
- Feature Grid
- Comparison Table
- Process Timeline
- Trust Bar
- Team Cards

### Organisms
- Navigation
- Footer
- Booking Modal
