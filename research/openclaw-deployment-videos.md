# OpenClaw Deployment Videos - Zusammenfassung

## Video 1: Team/Business Deployment (OpenClaw auf VPS für Teams)
**Focus:** Slack-Integration, Team-Zugriff, Business-Strukturen

### Core Insights
- **VPS > Mac Mini/Studio** (günstiger, dezentral, skalierbar)
- **Sonnet 4.6** als Sweet Spot (schneller als Opus, günstiger)
- **Heartbeat alle 10-15 Min** standardmäßig 30min (kann günstigere Modelle nutzen)
- **Slack-Integration** für Team-Zugriff (nicht relevant für uns - wir nutzen Telegram solo)
- **Security:** API Keys niemals public, Slack-Channel private halten

### Wichtig für uns:
- Heartbeat-Mechanismus (mit Llama, billig)
- Self-Updating prompts (automatische Updates checken)
- Living Files Theory (siehe unten)

---

## Video 2: Individual/Personal Deployment (Clawbot/OpenClaw)
**Focus:** Persönliche Produktivität, Living Files, Chrome Jobs

### Die 9 Kritischen Markdown Files
Diese werden bei JEDER Nachricht geladen:
1. `agents.md` - Operating rules, workflows, safety boundaries
2. `soul.md` - Persönlichkeit, Ton, Werte
3. `user.md` - Menschliche Identität, Kontext, Präferenzen
4. `memory.md` - Long-term memory, gelernte Fakten
5. `tools.md` - API Dokumentation, usage limits
6. `identity.md` - Rolle/Zweck (marketing, coding, etc.)
7. `heartbeat.md` - Proaktivität konfigurieren
8. `bootstrap.md` - First-run setup
9. `boot.md` - Boot sequence

### Power-User Features
- `/compact` - Token-Usage reduzieren (Kosten sparen)
- `/status` - Version, Model, Token-Usage anzeigen
- `/help` - Verfügbare Commands

### Security Audits
- OpenClaw kann den VPS selbst auf Schwachstellen prüfen
- Typische Fehler: Gateway public exposed, weak SSH passwords
- Regelmäßige Security-Reviews empfohlen

---

## Living Files Theory ⭐ KRITISCH

**Thesis:** Wissen in unzugänglichen Formaten (PDFs, Docs, lokale Dateien) ist "tot". 
Nur **AI-modifizierbare Markdown-Dateien auf einem VPS** sind "lebendig".

**Warum wichtig:**
- Token-effizient (Markdown > alles andere)
- Persistenter Kontext (überlebt Session-Restarts)
- AI kann lesen, schreiben, updaten
- Exponentieller Wert vs. statische Cloud-Speicher

**Empfohlene Folder-Struktur (Video 1):**
```
├── agent_zero/projects/
├── assets/ (logos, branding)
├── books/
├── coding/ (scripts, SOPs)
├── communications/
├── copywriting/
├── emails/
├── high_ticket_offers/
├── journals/ (tägliche Reflexionen)
├── metrics/
├── community_management/
├── paid_ads/
├── playbooks/ (SOPs)
├── reminders/
├── research/
├── sales/
├── team/
├── twitter/
└── youtube/
```

**Root-Level Files:**
- `business_priority_list.md`
- `business_ideas.md`
- `deep_work_options.md` (strategische Tasks)
- `mistakes_log.md`
- `naming_conventions.md`
- `highest_leverage_moves.md`

**Time Investment:** 1-3 Stunden täglich für Living Files = maximaler AI-Nutzen

---

## Chrome Jobs ⭐ RELEVANT

**Was sind sie:** Wiederkehrende Tasks in natürlicher Sprache

**Beispiele:**
- "Täglich um 9am: Checke Emails, schicke Zusammenfassung"
- "Wöchentlich: Upgrade auf neuestes AI Model"
- "Alle 2 Stunden: Check Industry News"

**Vorteil:** Keine manuelle Intervention, kein Scripting nötig

---

## Model-Strategie (angepasst an uns)

| Use Case | Empfohhen | Wir nutzen |
|----------|-----------|------------|
| Standard | Kimi K2.5 | Kimi K2.5 ✓ |
| Schnell/Billig | Haiku 4.5 | Haiku 4.5 ✓ |
| Ausnahme/Komplex | Sonnet 4.6 | Sonnet 4.6 ✓ |
| Heartbeat | Gemini Flash | Llama 3.2:3b ✓ |
| Coding | GPT 5.3 Codex | (optional) |
| Web Search | Perplexity Sonar Pro | ✓ |
| Deep Research | Perplexity Deep Research | ✓ |

---

## Unsere Situation - Was implementieren?

### ✅ Bereits vorhanden:
- VPS läuft
- Kimi/Haiku als Default
- Perplexity Sonar Pro/Deep Research
- Telegram (kein Slack nötig, kein Team-Zugriff)

### 🎯 Zu implementieren:

1. **Heartbeat mit Llama optimieren**
   - Aktuell: default 30min
   - Ziel: Alle 10-15 Minuten
   - Tasks: Updates checken, Security audit, Calendar check

2. **Living Files Struktur aufbauen**
   - Ordner für: coding, research, journals, playbooks
   - Root-Files: business_priorities, mistakes_log, leverage_moves
   - Täglich 1-3h in Markdown-Dateien investieren

3. **Chrome Jobs einrichten**
   - Automatische Checks (News, Updates)
   - Scheduled Reminders
   - Wöchentliche Reports

4. **Security Audit laufen lassen**
   - OpenClaw selbst checken lassen
   - SSH hardening prüfen

5. **Memory-Management verbessern**
   - /compact regelmäßig nutzen
   - memory.md pflegen
   - Wichtiges ins Long-term Memory schreiben

---

## Quick Wins

1. **Heartbeat-Prompt erstellen** für auto-updates
2. **Folder-Struktur** nach "Living Files" anlegen
3. **Chrome Job** für tägliche/weekly tasks
4. **Security-Check** durchführen lassen
5. **Mistakes Log** anlegen (aus Video 1)

---

## Ignorieren wir (nicht relevant):
- Slack-Integration (kein Team, Telegram reicht)
- Hostinger-Spezifika (VPS läuft schon)
- Mac Mini vs VPS (entschieden)
- ChatGPT-Subscription-Trick (nicht nötig)

---

## Video 3: WordPress Integration & Multi-Agent Setups
**Focus:** WordPress-Automatisierung, Skills, Multi-Agent Chains

### Core Insights für niemieckieubezpieczenia.de
- **WordPress-Integration** via CLI oder REST API möglich
- **Autonome Content-Erstellung:** Recherche → Schreiben → Publish (SEO + CTAs)
- **Skill-Security:** Nur verifizierte GitHub-Accounts, Skills vor Installation reviewen
- **Multi-Agent Chains:** Mehrere Agents für verschiedene Tasks (Marketing, Support, Coding)
- **Malt Worker:** Für sichere Authorisierung zwischen Agents

---

## WordPress-Integration für niemieckieubezpieczenia.de ⭐ PRIORITÄT

### Möglichkeiten
1. **WordPress CLI** - Direkte Kommandozeilen-Steuerung
2. **REST API** - HTTP-Requests für Posts, Pages, Media
3. **Bestehende Skills** - Wiederverwendbare Integrationen

### Autonome Blog-Workflows
**Was OpenClaw kann:**
- Thema recherchieren (z.B. "Vermieterversicherung 2026")
- Artikel strukturiert schreiben (Headings, Links, SEO)
- CTAs einbetten (Kontakt, Funnel, Gratis-Session)
- Direkt auf WordPress publishen
- SEO-Meta (Title, Description, Keywords) optimieren

**Typischer Flow:**
```
Recherche (Perplexity) → Draft erstellen → SEO optimieren → 
CTAs einfügen → Auf WordPress publishen → Social Media ankündigen
```

---

## Benötigte Skills für Website-Management

### 🛠️ Core Skills (selbst erstellen/bevorzugt)
| Skill | Funktion | Status |
|-------|----------|--------|
| `wordpress-rest` | Posts lesen/schreiben/aktualisieren | ⬜ Anlegen |
| `wordpress-media` | Bilder hochladen/verwalten | ⬜ Anlegen |
| `wp-seo` | SEO-Metadaten optimieren (Yoast/RankMath) | ⬜ Anlegen |
| `content-research` | Themen recherchieren (Perplexity) | ⬜ Konfigurieren |
| `image-gen` | Featured Images generieren (optional) | ⬜ Optional |

### 🔐 Security-Praktiken bei Skills
- **Skill-Review vor Installation:** `skills.md` durch Claude/AI checken lassen
- **Nur verifizierte GitHub-Accounts:** OpenClaw Repo erfordert jetzt verified accounts
- **Eigene Skills bevorzugen:** Keine fremden Skills für sensitive Operationen
- **Sandbox testen:** Neuen Skills erst in isolierter Umgebung testen

---

## Aufgabenliste: niemieckieubezpieczenia.de Integration

### Phase 1: Setup & Credentials (Woche 1)
- [ ] WordPress REST API aktivieren (ggf. Application Password erstellen)
- [ ] API-Credentials sicher in `tools.md` oder ENV hinterlegen
- [ ] Verbindung testen (lesender Zugriff auf Posts)
- [ ] Schreib-Zugriff testen (Draft erstellen)

### Phase 2: Core Skills entwickeln (Woche 2-3)
- [ ] `skill-wordpress-rest` erstellen:
  - `list_posts()` - Alle Posts auflisten
  - `create_post(title, content, status)` - Post erstellen
  - `update_post(id, updates)` - Post aktualisieren
  - `get_post(id)` - Einzelnen Post abrufen
- [ ] `skill-wp-seo` erstellen (falls Yoast/RankMath genutzt):
  - SEO-Title generieren
  - Meta-Description erstellen
  - Focus-Keyword vorschlagen
- [ ] Skills in `tools.md` dokumentieren

### Phase 3: Content Workflow (Woche 4)
- [ ] Research-Workflow definieren:
  - Welche Themen? (Vermieterversicherung, Mieterschutz, etc.)
  - Welche Quellen? (Branchennews, Gesetzesänderungen)
  - Wie oft? (z.B. 1x pro Woche)
- [ ] Chrome Job erstellen: "Wöchentlich Content recherchieren"
- [ ] Chrome Job erstellen: "Monatlich SEO-Audit durchführen"

### Phase 4: Automation (Woche 5+)
- [ ] Autonomen Post-Workflow einrichten:
  - Trigger: Keyword/Befehl
  - Recherche via Perplexity
  - Artikel schreiben (mit SEO)
  - CTA einfügen
  - Auf WP publishen (als Draft zur Review)
- [ ] Heartbeat-Extension: "Checke niemieckieubezpieczenia.de für Updates"
- [ ] Backup-Workflow: Regelmäßige Content-Backups als Markdown

### Phase 5: Erweiterte Features (optional)
- [ ] Image-Upload Skill (Featured Images automatisch)
- [ ] Social-Media-Crosspost (neuer Post → Telegram/Draft)
- [ ] Analytics-Skill (Pageviews, Rankings checken)
- [ ] Kommentar-Moderation (Spam checken)

---

## Multi-Agent Strategie (Zukunft)

**Vision:** Mehrere spezialisierte Agenten für niemieckieubezpieczenia.de:

| Agent | Rolle | Tasks |
|-------|-------|-------|
| **Content-Agent** | Blog & SEO | Artikel schreiben, SEO optimieren, publishen |
| **Support-Agent** | Kundenanfragen | FAQs beantworten, Leads qualifizieren |
| **Tech-Agent** | Website-Mgmt | Updates, Backups, Performance-Checks |
| **Research-Agent** | Marktbeobachtung | Konkurrenz, Gesetze, Trends monitoren |

**Kommunikation:** Via Maltbook oder geteilte Memory-Files

---

## Unsere 3-Video-Prioritäten

### Für den VPS/Agent:
1. ✅ Living Files Struktur
2. ✅ Heartbeat optimieren
3. ✅ Chrome Jobs

### Für niemieckieubezpieczenia.de:
1. 🎯 **WordPress REST API Skill** (diesen Monat)
2. 🎯 **Autonomer Content-Workflow** (nächsten Monat)
3. 🎯 **SEO-Integration** (optional)

---

## Sicherheits-Checkliste für Skills

- [ ] API-Keys niemals hardcoded, nur ENV vars
- [ ] WordPress-User mit minimalen Rechten (nicht Admin wenn möglich)
- [ ] Skills vor Installation durch Claude reviewen lassen
- [ ] Keine fremden Skills für WordPress-Operationen
- [ ] Alle WP-Operationen erst als Draft testen
- [ ] Backup vor mass updates

---

*Zusammengefasst aus drei YouTube-Videos. Priorität: Living Files + Heartbeat + Chrome Jobs + WordPress Integration.*
