# TODO - OpenClaw & Business Automation

## 🔥 Aktive Projekte

### niemieckieubezpieczenia.de Integration
**Status:** Planung | **Priorität:** Hoch
- [ ] WordPress REST API aktivieren (Application Password erstellen)
- [ ] API-Credentials sicher hinterlegen (tools.md oder ENV)
- [ ] Verbindung testen (lesender Zugriff auf Posts)
- [ ] Skill `wordpress-rest` erstellen:
  - [ ] `wp_list_posts()` - Posts auflisten
  - [ ] `wp_create_post()` - Post erstellen
  - [ ] `wp_update_post()` - Post aktualisieren
  - [ ] `wp_get_post()` - Einzelnen Post abrufen
- [ ] Ersten autonomen Post testen (als Draft)
- [ ] Content-Workflow definieren:
  - Themen festlegen (Vermieterversicherung, Mieterschutz, Gesetzesänderungen)
  - Recherche-Quellen identifizieren
  - Publikations-Rhythmus (1x/Woche?)
- [ ] Chrome Job erstellen: "Wöchentlich Content recherchieren"
- [ ] Chrome Job erstellen: "Monatlich SEO-Audit durchführen"

### Living Files Struktur
**Status:** ✅ DONE | **Priorität:** Kritisch
- [x] Ordner-Struktur anlegen:
  - [x] `business/` (vorhanden, erweitern)
  - [x] `playbooks/` (SOPs, Workflows)
  - [x] `research/` (Markt, Konkurrenz, Gesetze)
  - [x] `journals/` (tägliche Reflexionen)
  - [x] `content/` (Blog-Ideen, Social Media)
- [x] Root-Level Files erstellen:
  - [x] `business_priorities.md`
  - [x] `highest_leverage_moves.md`
  - [x] `mistakes_log.md`
  - [x] `content_calendar.md`
  - [x] `playbooks/wordpress-api-setup.md`
- [ ] Zeitblock einrichten: 1-3h täglich für Living Files

### Heartbeat Optimierung
**Status:** Läuft (15min) | **Priorität:** Mittel
- [ ] Heartbeat-Aufgaben erweitern:
  - [ ] WordPress-Updates checken
  - [ ] Security-Audit (wöchentlich)
  - [ ] Content-Ideen vorschlagen
  - [ ] Wichtige News/Alerts
- [x] Heartbeat-LLM bleibt Llama 3.2:3b (kostengünstig)

---

## 🚀 Backlog (Warten auf Priorisierung)

### Multi-Agent Setup
- [ ] Malt Worker evaluieren (für Multi-Agent Coordination)
- [ ] Content-Agent vs Support-Agent trennen (optional)

### Skills & Integrationen
- [ ] YouTube-Transkript-Skill (Video-Analyse selbst hosten)
- [ ] Web-Scraping Skill (für Konkurrenz-Monitoring)
- [ ] Analytics-Skill (Pageviews, Rankings)

### Content-Automatisierung
- [ ] Autonomer Blog-Post Workflow (Recherche → Write → Publish)
- [ ] SEO-Metadaten automatisch generieren
- [ ] CTAs und Funnel-Links einbetten

### Security & Maintenance
- [ ] Security-Audit durchführen (OpenClaw selbst prüfen lassen)
- [ ] Backup-Workflow für Website-Content
- [ ] Skill-Security-Policy dokumentieren

---

## ✅ Abgeschlossen

### 2026-02-23
- [x] Dashboard aktiviert
- [x] Config-Cleanup (NVIDIA Modelle entfernt)
- [x] Telegram Integration verifiziert
- [x] Heartbeat auf 15min optimiert (mit Llama)
- [x] Ollama für lokale LLMs eingerichtet
- [x] Research-Ordner angelegt
- [x] YouTube-Video-Zusammenfassungen erstellt
- [x] Living Files Struktur komplett angelegt
- [x] Security-Präferenzen in USER.md dokumentiert

### 2026-02-24
- [x] Heartbeat erfolgreich ausgeführt (Llama 3.2:3b)

---

## 📝 Quick Actions

**5 Minuten:**
- `/new` für frischen Kontext
- `/compact` wenn Tokens hoch
- `/status` für System-Check

**15 Minuten:**
- Einen Punkt aus WordPress Integration bearbeiten
- Memory.md mit neuen Erkenntnissen updaten

**1 Stunde:**
- WordPress Skill skeleton erstellen
- Ersten autonomen Content-Workflow testen

---
*Zuletzt aktualisiert: 2026-02-24*
