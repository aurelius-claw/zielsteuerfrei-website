# MEMORY.md — Curated Long-Term Memory
**Last Updated:** 2026-02-26 00:17 CET

> MAX 200 ZEILEN. Nur Facts die bei JEDEM Session-Start relevant sind.
> Updates: Atomic Swap in Main Session erlaubt (cp → edit draft → mv).
> Tägliche Logs gehören in memory/YYYY-MM-DD.md (werden on-demand geladen, kein Token-Verbrauch).

## Infrastruktur
- Gateway Port: 18789 (loopback), systemctl --user restart openclaw-gateway.service
- VPS: Contabo 161.97.118.140, Ubuntu 24.04
- Tailscale: Gateway 100.93.92.52 | Martin PC 100.79.159.102
- GitHub Token: ~/.openclaw/credentials/github-token
- ⚠️ NIE Gateway-Restart aus laufendem Run

## Telegram
- Bot: martinsclawd_bot, User-ID: 5372415590
- Token: in openclaw.json (channels.telegram.botToken)
- Topics: General=2, Research=6, Content=7, Analytics=8, Dev=9, System=10

## Modelle
- Standard: nvidia/moonshotai/kimi-k2.5 (alias: kimi, gratis, 131k ctx)
- Anthropic: nur auf Martin-Freigabe
- Heartbeat: ollama/llama3.2:3b (max ~1600 Token Input)

## Projekte
- niemieckieubezpieczenia: SEO-Fokus, Kasia KI-Influencerin (Polnisch, GKV)
- zielsteuerfrei.de: Steuerfreiheits-Plattform, Ajman vs Dubai

## Sub-Agenten (sessions_spawn ✅ funktioniert)
- allowAgents: content, analytics, dev, research, ops
- Kasia-Regeln stehen in AGENTS.md der Sub-Agent-Workspaces (nicht SOUL.md)
- content + dev Agenten: agent/-Verzeichnis manuell angelegt

## Kritische Regeln
- TOOLS.md: nur Atomic Swap oder Append (edit → "text not found")
- MEMORY.md: Atomic Swap in Main Session — niemals direkt per edit-Tool
- memory/YYYY-MM-DD.md: nur Append
- session_status: nie auf eigene Session aufrufen
- Tool-Call Logging: DEAKTIVIERT (verursacht Loops)

## Dashboard
- URL: http://161.97.118.140:3001/
- NEXT_PUBLIC_API_URL muss VOR npm run build in .env.local stehen
- Nach .env.local Änderung: immer neu bauen

## Compaction (Kimi K2.5)
- Bei voller Session: /compact oder /new — kein automatisches Pruning für Kimi
- compaction.mode: "safeguard" ist bereits aktiv in openclaw.json
- Session Pruning (contextPruning) gilt nur für Anthropic-Modelle

## Search
- Default: perplexity/sonar-pro-search
- Deep Research: nur auf explizite Martin-Anfrage
