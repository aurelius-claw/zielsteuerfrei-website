# LESSONS.md — Business-Level Erkenntnisse

## Zweck
Was funktioniert, was nicht. Erkenntnisse aus Sub-Agenten, Infrastructure, Automation.
Jede Erkenntnis mit Datum und Kontext.

## Format
**[DATUM] [KATEGORIE] Titel**
→ Was haben wir gelernt?
→ Was machen wir anders?

---

## [2026-02-25] Sub-Agenten Setup — Was wir gelernt haben

### Problem 1: sessions_spawn "agentId not allowed" 
Fehlermeldung: `"agentId is not allowed for sessions_spawn (allowed: none)"`

**Ursache:** main-Agent hatte kein subagents-Objekt in openclaw.json. Ohne explizite allowAgents-Config darf ein Agent nur unter sich selbst spawnen.

**Fix:** In openclaw.json unter agents.list[main] hinzugefügt:
```json
"subagents": {
  "allowAgents": ["content", "analytics", "dev", "research", "ops"]
}
```

### Problem 2: content + dev Agenten nicht initialisiert
**Symptom:** sessions_spawn schlug fehl weil agent/ Verzeichnis fehlte.

**Ursache:** Agenten wurden in openclaw.json konfiguriert aber nie via "openclaw agents add" initialisiert.

**Fix:** Verzeichnisse manuell angelegt + models.json von einem funktionierenden Agenten (research) kopiert.

```bash
mkdir -p /root/.openclaw/agents/content/agent
cp research/agent/models.json content/agent/
```

### Problem 3: Dashboard zeigte keine Live-Daten
**Symptom:** "0 agents", "Loading...", "0 active" trotz funktionierender APIs.

**Ursache:** NEXT_PUBLIC_API_URL wurde in .env.local erst NACH dem Build gesetzt. Next.js baut NEXT_PUBLIC_* Variablen zur Build-Zeit ein — nicht zur Laufzeit.

**Fix:** .env.local anlegen, dann `npm run build` neu ausführen.

**Merke:** Nach jeder Änderung an .env.local muss neu gebaut werden.

### Problem 4: Cron-Job "error" Status als False Positive
System Health Check lief erfolgreich laut Session-Logs, zeigte aber "error". 

Der Cron-Status-Tracker in OpenClaw ist nicht 100% zuverlässig. "error" Status bedeutet nicht zwingend dass der Job fehlgeschlagen ist — immer Logs prüfen.

### Generelle Regel: Config-Änderungen immer mit Backup
Vor jeder openclaw.json Änderung:
```bash
cp ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.bak_$(date +%Y%m%d_%H%M)
```

Nach Änderung:
```bash
openclaw gateway restart
```
