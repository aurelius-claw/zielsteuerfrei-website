# MEMORY.md - Long-Term Memory

> ⚠️ **Diese Datei ist READ-ONLY.**  
> Updates gehören in MEMORY_LOG.md (append-only via `echo >>`)

## Setup & Configuration

### Gateway
- **Port:** 18789 (loopback)
- **Startup:** ALWAYS use `systemctl --user restart openclaw-gateway.service` — never multiple mechanisms at once
- **Restart-Loop-Fix:** If gateway crashes in a loop → `kill -9 <PIDs>`, check port is free, single restart
- **Status:** Can be checked with `openclaw status` or `systemctl --user status openclaw-gateway.service`
- ⚠️ **Niemals Gateway-Restart aus laufendem Run aufrufen — timeout guaranteed**

### Telegram Integration ✓ DONE
- **Bot:** martinsclawd_bot (https://t.me/martinsclawd_bot)
- **Token:** 8200860488:AAHqnKfXNowCcDZn75e6aLulEvqmIAkNreg
- **Pairing:** User 5372415590 — already approved
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
openclaw status                    # Full system status
openclaw pairing list X            # List pending pairings for channel X
openclaw pairing approve X Y       # Approve code Y for channel X
systemctl --user restart openclaw-gateway.service  # Restart gateway (single mechanism)
```

## Preferences & Notes
- Martin prefers direct, practical communication
- Timezone: Europe/Berlin (GMT+1)
- Workspace: /root/.openclaw/workspace
- Platform: alemán / German for most context

### Subagent Workaround
- **Script:** `./subagent-runner.sh` (Shell-basierter Workaround)
- **Mechanismus:** `openclaw agent --local` (embedded, no gateway)
- **Status:** ✅ Funktioniert für Research-Tasks
- **Limitation:** Kein nativer Rückkanal, nur sequentiell
- ⚠️ **session_status auf eigene sessionId schlägt immer fehl**

### Workspace Struktur
```
/root/.openclaw/workspace/
├── business/
│   ├── niemieckieubezpieczenia/ ← SEO-Keywords-Research etc.
│   └── zielsteuerfrei.de/       ← Bestehende HTML/Content
├── personal/
│   └── MARTIN-PROFILE.md        ← User-Profil
├── memory/
├── SKILLS.md                    ← Subagent-Doku
├── HEARTBEAT.md                 ← 15min Checks
└── MEMORY_LOG.md                ← Append-only Updates
```

### Heartbeat
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

### Config-Cleanup Workflow
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

### Models
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

## OpenClaw Deployment Erkenntnisse

### Living Files Theory
**Kernkonzept:** Wissen in statischen Formaten (PDFs, lokale Docs) ist "tot". Nur AI-modifizierbare Markdown-Dateien auf dem Filesystem sind "lebend" und iterierbar.

---

Last updated: 2026-02-25 04:47 GMT+01:00 (Heartbeat 15min check)
