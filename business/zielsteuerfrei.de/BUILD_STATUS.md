# Zielsteuerfrei – Build Status & Dokumentation
**Letzte Aktualisierung:** 2026-02-23 09:50 CET  
**Status:** ✅ LIVE (HTTP) – 6 HTML-Seiten vollständig

---

## 📁 Datei-Struktur

```
/root/.openclaw/workspace/zielsteuerfrei/
├── index.html              # Haupt-Landingpage (Conversion-Focused)
├── ajman-vs-dubai.html     # Vergleichsseite mit Kosten-Tabelle
├── der-prozess.html        # 5-Phasen-Detailansicht mit Timeline
├── faq.html                # Einwandbehandlung mit Accordion
├── ueber-uns.html          # Neno & Juljana Profile
├── danke.html              # Post-Booking Thank You Page
├── sitemap.md              # Architektur-Dokumentation
├── BUILD_STATUS.md         # Diese Datei
│
├── css/
│   └── style.css           # Vollständiges Design-System
│
└── research/
    └── DEEP_RESEARCH_REPORT.md  # Wettbewerbsanalyse & Positionierung

# Deployment:
/var/www/zielsteuerfrei/   # Kopie der Website (nginx Root)
```

---

## 🌐 Server-Konfiguration

### DNS (A-Record)
```
Type: A
Name: @ (zielsteuerfrei.de)
Value: 161.97.118.140
TTL: 3600
```

### nginx Config
**Pfad:** `/etc/nginx/sites-available/zielsteuerfrei`

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name zielsteuerfrei.de www.zielsteuerfrei.de;

    root /var/www/zielsteuerfrei;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

### Server-Details
| Ressource | Wert |
|-----------|------|
| **Public IPv4** | 161.97.118.140 |
| **Public IPv6** | 2a02:c207:3019:228::1 |
| **Tailscale IP** | 100.93.92.52 |
| **nginx Port** | 80 |
| **Website Root** | /var/www/zielsteuerfrei |
| **Eigentümer** | www-data:www-data |

---

## 🎨 Design-System (CSS)

### Farbschema
```css
--color-bg: #0a1628          /* Navy Background */
--color-bg-light: #111d2e    /* Section Alt */
--color-bg-lighter: #1a2940  /* Cards */
--color-accent: #ff8c42      /* Orange CTA */
--color-accent-dark: #e67a35 /* Hover State */
--color-text: #ffffff        /* Primary Text */
--color-text-muted: #94a3b8  /* Secondary Text */
```

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1199px
- Desktop: ≥ 1200px

### Komponenten
- Hero Section
- Cards (Feature, Team)
- Comparison Table
- Timeline (5 Phasen)
- FAQ Accordion
- Sticky Mobile CTA

---

## 🔗 Externe Ressourcen

### Calendly Integration
**CTA-Link:** `https://calendly.com/zielsteuerfrei/strategie-call`
- Kostenloser Strategie-Call mit Neno
- Terminbuchung überall integriert
- Mobile-optimiert

---

## 📱 Seiten-Übersicht

| Seite | Zweck | Haupt-USP |
|-------|-------|-----------|
| **index** | Konversion | Hero, Anti-Dubai, Fixpreis |
| **ajman-vs-dubai** | Education | Kostenvergleich |
| **der-prozess** | Trust | 5-Phasen-Timeline |
| **faq** | Einwände | Wegzugssteuer, Letterbox |
| **ueber-uns** | Persönlichkeit | Neno & Juljana |
| **danke** | Post-Conversion | Nach Terminbuchung |

---

## 🧠 Learnings aus dieser Session

### ✅ Was funktionierte gut
1. **Modularer Aufbau:** CSS-Variables + Komponenten-Struktur
2. **Mobile-first:** Sticky CTA, Touch-optimized
3. **Anti-Dubai-Positionierung:** Klare Differenzierung im Copy
4. **Fixpreis-Transparenz:** Konsequent auf allen Seiten

### ⚠️ Technische Herausforderungen
1. **nginx Permissions:** `/root/.openclaw/` ist root-only (700)
   - **Lösung:** Kopieren nach `/var/www/` mit `www-data:www-data`
2. **Gateway Pairing:** Subagents brauchen Device-Pairing
   - **Workaround:** Direktes Bauen im Main-Session
3. **DNS-Propagation:** SSL noch pending (Let's Encrypt offen)

### 📋 To-Do für nächste Session
- [ ] Let's Encrypt SSL einrichten (HTTPS)
- [ ] Impressum & Datenschutz-Seiten erstellen
- [ ] Formular-Backend für Dokumenten-Upload
- [ ] NMK (Noch zu klären): Anbindung an Calendly-Daten
- [ ] SEO: Meta-Tags für alle Seiten überprüfen
- [ ] Performance: Bilder optimieren (WebP)

---

## 🚀 Deployment-Prozess

```bash
# Website aktualisieren
sudo cp -r /root/.openclaw/workspace/zielsteuerfrei/* /var/www/zielsteuerfrei/
sudo chown -R www-data:www-data /var/www/zielsteuerfrei
sudo service nginx reload
```

---

**Domains:** zielsteuerfrei.de | zielsteuerfrei.com  
**Fixpreis:** 6.990 € (Visum inklusive)  
**Call-to-Action:** Calendly-Strategie-Call

---
*Dokumentation erstellt von: Aurelius / Zielsteuerfrei-Team*
