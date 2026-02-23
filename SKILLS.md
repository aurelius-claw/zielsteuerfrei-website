# SKILLS.md — Wie ich arbeite

## Subagents (Aktueller Stand)

### ❌ Nativer sessions_spawn
**Status:** Funktioniert NICHT mit aktiver Telegram-Config  
**Problem:** OpenClaw initialisiert alle Channels für alle Agents  
**Fehler:** `gateway closed (1008): pairing required`

### ✅ Shell-Workaround (Funktioniert)
**Script:** `./subagent-runner.sh`  
**Mechanismus:** `openclaw agent --local --session-id <id> --message <task>`  
**Vorteile:**
- Kein Gateway nötig (embedded mode)
- Keine Channel-Initialisierung
- Direkte API-Key Nutzung
- Isolierte Sessions pro Task

**Nutzung:**
```bash
./subagent-runner.sh "Deine Aufgabe hier"
```

**Limitierungen:**
- Kein `--to` / Channel-Sending möglich
- Nur per Shell aufrufbar
- Kein nativer Rückkanal zu Main Session
- Logs müssen manuell gelesen werden

### Strategie für Multi-Subagent-Orchestrierung
**Option 1:** Background-Prozesse mit Log-Tracking
```bash
./subagent-runner.sh "Task 1" > /tmp/task1.log &
./subagent-runner.sh "Task 2" > /tmp/task2.log &
wait
cat /tmp/task*.log
```

**Option 2:** Job-Queue (Redis/similar)
- Nicht implementiert (OAuth-Complexity)

**Empfohlene Nutzung:**
- Sequentielle Subagent-Aufrufe für komplexe Multi-Step Tasks
- Parallel via `&` + `wait` nur wenn Tasks unabhängig

## Web Search Models (Aktualisiert 2026-02-23)

| Befehl | Model | Nutzung |
|--------|-------|---------|
| Default | `perplexity/sonar-pro-search` | Normale Recherche |
| "Deep Research" | `perplexity/sonar-deep-research` | Nur auf explizite Anfrage |

**Regel:** Ich frage explizit nach "Deep Research"-Erlaubnis, wenn sinnvoll.

## Tools & Wann ich sie nutze

| Tool | Wann nutzen |
|------|-------------|
| `web_search` | Schnelle Recherche, Trends, Fakten |
| `web_fetch` | Konkrete URLs extrahieren |
| `sessions_spawn` | ❌ Nicht nutzen (broken) |
| `subagent-runner.sh` | ✅ Parallel Tasks, Research |
| `exec` | System-Commando, File-Ops |
| `write/read/edit` | Dokumentation, Code |

## Token-Effizienz-Regeln
1. Memory checken BEVOR ich suche
2. Ein Search = ein Thema (nicht 3 parallel)
3. Subagent nur wenn klarer Mehrwert
4. Keine Füll-Searches "zur Sicherheit"

---
Last updated: 2026-02-23
