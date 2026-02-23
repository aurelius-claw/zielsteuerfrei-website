# Mistakes Log
> Nicht um sich schuldig zu fühlen. Um nicht zweimal denselben Fehler zu machen.

## 2026

### 2026-02-23: Config-Datei ohne Backup bearbeitet
**Fehler:** `models.json` direkt bearbeitet ohne `.bak` zu erstellen.
**Konsequenz:** Bei Fehler keine schnelle Rückkehr zum letzten Stand.
**Fix:** Workflow: Draft → Validate → Backup → Swap → Verify
**Status:** ✅ Dokumentiert in MEMORY.md

### 2026-02-23: WordPress Auth mit falschem Username probiert
**Fehler:** Application Password mit "admin", "Martin", "aurelius@..." getestet statt dem echten WP-Username "Aurelius". 5+ failed Requests.
**Konsequenz:** Zeitverlust, 401-Frustration, hatte fast aufgegeben.
**Fix:** Im WP-Admin unter Users den exakten Username prüfen — nicht die E-Mail, nicht den Anzeigenamen.
**Status:** ✅ Verifiziert: Username = "Aurelius" (case-sensitive)

### 2026-02-23: Tags als Text-Array statt ID-Array übergeben
**Fehler:** JSON payload mit `"tags": ["Vermieterversicherung", "Kurzzeitmiete", ...]` — WordPress REST API erwartet Integer-IDs.
**Konsequenz:** API-Error "Nieprawidłowe parametry: tags", Post wurde nicht erstellt.
**Fix:** Tags erst als separate API-Calls anlegen (oder weglassen für Drafts) und dann IDs übergeben.
**Workaround:** Tags im ersten Draft weggelassen — kann später manuell ergänzt werden.
**Status:** ⚠️ Offen: Auto-Tag-Creation implementieren

### 2026-02-23: WordPress Skills vs. Content-Publishing verwechselt
**Fehler:** Automattic/WordPress agent-skills geklont, gedacht die lösen Content-Publishing. Skills sind für CODE-Entwicklung (Plugin, Theme, Blocks programmieren).
**Konsequenz:** 20 Min verbracht mit Skill-Build, die für Content-Workflow irrelevant sind.
**Fix:** Klarer trennen: GitHub Skills = Dev | Clawhub Skills = Content Ops.
**Status:** ✅ Gelernt: Beide Skill-Typen werden jetzt genutzt (dev für Code, clawhub für publishing)

---

## Heutige Wins (2026-02-23)
- ✅ REST API Verbindung läuft
- ✅ Erster Draft autonom erstellt (ID 8182)
- ✅ Skills installiert (13x Dev + 2x Publishing)
- ✅ Application Passwords verstanden
- ✅ Content-Workflow von Recherche bis Draft funktioniert

---

*Template:*
```
### DATE: DESCRIPTION
**Fehler:**
**Konsequenz:**
**Fix:**
**Status:**
```
