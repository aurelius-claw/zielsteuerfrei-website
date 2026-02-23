# Subagent Architecture - Sauberer Weg

## Ziel
Subagents funktionieren ohne Telegram-Pairing, Telegram bleibt privat (pairing required).

## Architektur

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Main Agent    │────▶│ Gateway (18789)  │────▶│  Telegram Bot   │
│   (Martins UI)  │     │  + Pairing       │     │  (privat)       │
└─────────────────┘     └──────────────────┘     └─────────────────┘
         │
         │ spawn
         ▼
┌─────────────────┐     ┌──────────────────┐
│   Subagents     │────▶│ Dev Gateway      │
│   (Headless)    │     │ (19001, no Ch)   │
└─────────────────┘     └──────────────────┘
```

## Umsetzung

### Step 1: Dev-Gateway starten
```bash
openclaw --dev gateway --port 19001
```
- Nutzt isolierten State unter `~/.openclaw-dev/`
- Keine Channels konfiguriert
- Subagents können sich hier verbinden

### Step 2: Subagent spawn mit dev-Profil
- Entweder: `OPENCLAW_PROFILE=dev` env var setzen
- Oder: `--dev` Flag beim spawn

### Step 3: Main Gateway bleibt unverändert
- Port 18789
- Telegram mit pairing
- Alles wie gehabt

## Vorteile
- Keine Config-Risiken am Main Gateway
- Subagents haben keine Channel-Initialisierung
- Telegram bleibt secured
- Einfach zu debuggen (isolierte Logs)

## Risiken
- Zwei Gateway-Prozesse = mehr Ressourcen
- Dev-Profil State wird bei `--dev` neu erstellt
- Subagents haben keinen Zugriff auf Channels (geplant)
