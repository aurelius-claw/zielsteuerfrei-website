# TOOLS.md - Local Notes & Available Functions

## Available Tools (Session Checklist)

### Core Search & Research
- ✓ **web_search** — Perplexity Sonar Pro (default, real-time)
- ✓ **web_fetch** — URL → markdown/text extraction
- ✓ Deep research — `perplexity/sonar-reasoning-pro` (when Martin requests)

### Automation & Execution
- ✓ **exec** — Shell commands (pty available for TTY CLIs)
- ✓ **browser** — Web automation, screenshot, interact
- ✓ **nodes** — Paired devices (camera snap, screen record, location)
- ✓ **canvas** — Node-hosted UI (present, eval, snapshot)

### Communication
- ✓ **message** — Send to Discord, Slack, Signal, Telegram, etc.
- ✓ **tts** — ElevenLabs text-to-speech (voice storytelling)
- ✓ **Telegram** — Primary channel (martinsclawd_bot, user 5372415590)

### Files & Memory
- ✓ **read/write/edit** — File operations in workspace
- ✓ **memory_search** — MEMORY.md + memory/*.md semantic search
- ✓ **memory_get** — Safe snippet read from memory files

### AI & Analysis
- ✓ **image** — Vision model (single or batch, up to 20)
- ✓ **sessions_spawn** — Sub-agents for complex tasks
- ✓ **subagents** — List/steer/kill sub-agent runs

### Media (NEW: YouTube)
- ⚠️ **YouTube Transcripts** — Coming soon (yt-dlp needs install)
  - Status: Not yet configured
  - Plan: `yt-dlp` for metadata + `youtube-transcript-api` for subtitles
  - Fallback: Browser snapshot if direct extraction fails

### Skills (Specialized Playbooks)
- ✓ **healthcheck** — Security audit, version check, hardening
- ✓ **weather** — wttr.in or Open-Meteo (no API key needed)
- ✓ **tmux** — Remote tmux session control
- ✓ **skill-creator** — Create/update AgentSkills

---

## What Goes Here

Things like:
- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples
```markdown
### Cameras
- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH
- home-server → 192.168.1.100, user: admin

### TTS
- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?
Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

### Web Search / Research
- **Default:** Perplexity Sonar Pro Search (`perplexity/sonar-pro-search`) — für normale Recherche
- **Deep Research:** Perplexity Sonar Deep Research (`perplexity/sonar-deep-research`) — NUR wenn Martin explizit "deep research" sagt
- Ich darf fragen ob Deep Research Sinn macht, wenn es angebracht ist

### YouTube Video Analysis (Planned)
- **Transkripte:** `yt-dlp` + `youtube-transcript-api` für Untertitel/Transkripte
- **Metadaten:** Videobeschreibung, Titel, Kanal, Upload-Datum, Views
- **Usage:** YouTube URL → Transkript extrahieren → Analyse/Zusammenfassung
- **Falls kein Transkript:** Informieren + Metadaten trotzdem nutzen
- **Rate Limit:** YouTube-Extraktion zählt als "web operation" → 10s Pause danach

### Subagents (⚠️ Limitiert)
- **Status:** Funktionieren NICHT mit aktiver Telegram-Config
- **Grund:** OpenClaw initialisiert alle Channels für alle Agents
- **Limitation:** Kein echter Headless-Mode verfügbar
- **Workaround:** Shell-basierte Isolation (siehe SUBAGENT-WORKAROUND.md)

### Models
- `/model kimi` → **Kimi K2.5** via NVIDIA (default, großer Kontext ~50K tokens)
- `/model haiku` → Claude Haiku 4.5 (schnell, günstig)
- `/model sonnet` → Claude Sonnet 4.6 (stärker)
- `/model llama` → **Llama 3.2:3b** lokal via Ollama (kostenlos, **kurzer Kontext**)

#### ⚠️ Llama 3.2:3b Context-Limits
| Limit | Wert |
|-------|------|
| Input | ~1000-1600 Tokens |
| Output | ~600 Tokens |
| Use-Case | Alltags-Chats, einfache Zusammenfassungen, kurze Aufgaben |
| **NICHT für** | Lange Dokumente, komplexes Research, große Code-Reviews |

→ Für große Jobs: `/model kimi` oder `/model sonnet`

### Prompt Caching (Anthropic only, not for Kimi)
- Relevant für Haiku/Sonnet bei Anthropic API-Nutzung
- **Cache:** SOUL.md, USER.md, TOOLS.md (stabile Files)
- **Discount:** 90% auf cached Tokens
- **Nicht cachen:** Daily memory files (ändern sich oft)
- **Kimi:** Kein Caching nötig (kostenlos)

### Tailscale
- **PC (Martin):** 100.79.159.102
- **Gateway:** 100.93.92.52

### Server (Contabo VPS)
- **Public IP:** 161.97.118.140
- **Provider:** Contabo
- **OS:** Ubuntu 24.04 LTS

### Telegram ✓ DONE
- **Bot:** `martinsclawd_bot` → https://t.me/martinsclawd_bot
- **Token:** `8200860488:AAHqnKfXNowCcDZn75e6aLulEvqmIAkNreg`
- **User ID:** 5372415590 (Martin)
- **Pairing Code:** G3RV6NHF (approved 2026-02-23 06:12)
- **Status:** Active, ready to use

---

Add whatever helps you do your job. This is your cheat sheet.

### Commands

#### /savedata
Manueller Trigger für sofortigen Heartbeat (Memory-Sync + Data-Save).
- Führt `heartbeat-runner.sh` sofort aus
- Speichert alle offenen Daten
- Updated Timestamps in MEMORY.md
- Läuft auch mit `ollama 3.2:3b` (leichtgewichtig)

**Nutzung:** Einfach `/savedata` in Chat schreiben.
