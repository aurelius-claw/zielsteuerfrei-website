# MEMORY.md - Long-Term Memory

## Setup & Configuration

### Gateway
- **Port:** 18789 (loopback)
- **Startup:** ALWAYS use `systemctl --user restart openclaw-gateway.service` - never multiple mechanisms at once
- **Restart-Loop-Fix:** If gateway crashes in a loop → `kill -9 <PIDs>`, check port is free, single restart
- **Status:** Can be checked with `openclaw status` or `systemctl --user status openclaw-gateway.service`

### Telegram Integration ✓ DONE
- **Bot:** martinsclawd_bot (https://t.me/martinsclawd_bot)
- **Token:** 8200860488:AAHqnKfXNowCcDZn75e6aLulEvqmIAkNreg
- **Pairing:** User 5372415590 - already approved
- **Features:** All slash commands work (/new, /model, /status, /reasoning)
- **Setup Date:** 2026-02-23

### Infrastructure
- **Tailscale:** Running (PID 10324), connected
  - Gateway IP: 100.93.92.52
  - Martin's PC: 100.79.159.102
- **ollama serve:** Running in background (part of gateway)

## Working Patterns

### Token Management
- When Martin provides a token/secret → **Save immediately to a file**, don't rely on memory
- Tokens in openclaw.json are persistent and survive restarts
- Always confirm token is in place before proceeding

### Important Commands
```bash
openclaw status              # Full system status
openclaw pairing list X      # List pending pairings for channel X
openclaw pairing approve X Y  # Approve code Y for channel X
systemctl --user restart openclaw-gateway.service  # Restart gateway (single mechanism)
```

## Preferences & Notes

- Martin prefers direct, practical communication
- Timezone: Europe/Berlin (GMT+1)
- Workspace: /root/.openclaw/workspace
- Platform: alemán / German for most context

---

Last updated: 2026-02-23 06:12 GMT+1

### Subagent Workaround (2026-02-23)
- **Script:** `./subagent-runner.sh` (Shell-basierter Workaround)
- **Mechanismus:** `openclaw agent --local` (embedded, no gateway)
- **Status:** ✅ Funktioniert für Research-Tasks
- **Limitation:** Kein nativer Rückkanal, nur sequentiell

### Workspace Struktur (2026-02-23)
```
/root/.openclaw/workspace/
├── business/
│   ├── niemieckieubezpieczenia/  ← SEO-Keywords-Research etc.
│   └── zielsteuerfrei.de/        ← Bestehende HTML/Content
├── personal/
│   └── MARTIN-PROFILE.md         ← User-Profil
├── memory/
├── SKILLS.md                     ← Subagent-Doku
├── HEARTBEAT.md                  ← 15min Checks
└── ...
```

### Heartbeat (2026-02-23)
- **Intervall:** 15 Minuten
- **Model:** ollama 3.2:3b (kleiner, effizient)
- **Command:** `/savedata` (manueller Trigger)
- **Aufgaben:** Memory-Sync, Project-Data, Session-Health

### Projekte
- **niemieckieubezpieczenia:** SEO-Fokus, organisches Wachstum
- **zielsteuerfrei.de:** Steuerfreiheits-Plattform (bestehend)

### Search Models (Aktuell)
- **Default:** perplexity/sonar-pro-search
- **Deep Research:** Nur auf explizite Anfrage

### Config-Cleanup Workflow (2026-02-23) ✓ DONE
**Beim Bereinigen von Konfigdateien verwenden:**
1. Draft schreiben → `.draft` extension
2. JSON syntax validieren
3. Backup erstellen → `.bak`
4. Draft → Original (atomer Swap)
5. Verify (Gateway restart, kurz testen)

**Dateien betroffen:**
- `/root/.openclaw/agents/main/agent/models.json` ✓ (NVIDIA Llama-Modelle entfernt)
  - Backup: `models.json.bak`
  - Behalten: Kimi K2.5 (NVIDIA) + llama3.2:3b (Ollama lokal)

**Aktueller Stand (2026-02-23 12:42):**
- `/savedata` ist Telegram Slash-Command, nicht Shell-Befehl
- Heartbeat läuft automatisch alle 15 Min (ollama 3.2:3b)
- Ollama API direkt nutzbar für Lightweight-Tasks: `curl http://127.0.0.1:11434/api/generate`
- Subagents funktionieren NICHT mit Telegram-Config aktiv (known limitation)

### Models (Aktuell)
| Modell | Provider | Kontext | Use-Case |
|--------|----------|---------|----------|
| **Kimi K2.5** | `nvidia/moonshotai/kimi-k2.5` | ~50K tokens | Default, Research, komplexe Aufgaben |
| **Sonnet 4.6** | `anthropic/claude-sonnet-4-6` | ~50K tokens | Starker Reasoning, Code, Analyse |
| **Haiku 4.5** | `anthropic/claude-haiku-4-5` | ~50K tokens | Schnell, günstig, einfache Tasks |
| **Llama 3.2:3b** | `ollama/llama3.2:3b` | **~1600 In / ~600 Out** | Alltags-Chats, kurze Zusammenfassungen, Heartbeats |
| **Perplexity** | `perplexity/*` | - | Web-Search/Research nur |

#### ⚠️ Llama 3.2:3b Grenzen
- **Input:** Max ~1000-1600 Tokens (inkl. System-Prompt + History)
- **Output:** Max ~600 Tokens
- **RAM:** Server hat nur 6.4 GiB, Llama braucht max ~4 GiB
- **Fehler:** `500 model requires more system memory` = zu großer Kontext
- **Lösung:** Kürzeren Prompt schicken oder auf Kimi/Sonnet wechseln

---
Last updated: 2026-02-23 14:42 GMT+1 (OpenClaw Videos Session)

## OpenClaw Deployment Erkenntnisse (2026-02-23)

### Living Files Theory
**Kernkonzept:** Wissen in statischen Formaten (PDFs, lokale Docs) ist "tot". 
Nur AI-modifizierbare Markdown-Dateien auf
--- Last updated: 2026-02-23 16:22 GMT+1 (Heartbeat sync, gateway OK, disk OK)
