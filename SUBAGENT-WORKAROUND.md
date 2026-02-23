# Subagent Workaround (OpenClaw Limitation)

## Problem
OpenClaw initialisiert ALLE konfigurierten Channels für JEDEN Agent — auch Subagents.
- Subagents scheitern an `pairing required` für Telegram
- `dmPolicy: "open"` hilft nicht bei Provider-Initialisierung
- Kein echter Headless-Mode existiert aktuell

## Status
- ❌ Nativer `sessions_spawn` funktioniert nicht mit aktiver Telegram-Config
- ✅ Workaround: Direkte Shell-Ausführung (siehe unten)

## Workaround: Shell-basierte Subagents

```bash
# Subagent als separater Prozess starten
export OPENCLAW_STATE_DIR=/tmp/subagent-$$
export OPENCLAW_CONFIG_PATH=/root/.openclaw/subagent-minimal.json

mkdir -p $OPENCLAW_STATE_DIR

# Minimal-Config ohne Channels erstellen
cat > $OPENCLAW_CONFIG_PATH << 'EOF'
{
  "agents": {
    "defaults": {
      "model": { "primary": "anthropic/claude-haiku-4-5" },
      "workspace": "/tmp/subagent-workspace"
    }
  },
  "gateway": {
    "port": 19002,
    "mode": "local",
    "bind": "loopback",
    "auth": { "mode": "none" }
  }
}
EOF

# Gateway starten (separater Prozess)
openclaw gateway --port 19002 &
GATEWAY_PID=$!

# Subagent-Task ausführen
sleep 2
openclaw agent --task "Dein Task hier" --gateway ws://127.0.0.1:19002

# Cleanup
kill $GATEWAY_PID
rm -rf $OPENCLAW_STATE_DIR
```

## Alternativer Ansatz: Node.js Script

Siehe `subagent-runner.js` (zu erstellen):
- Spawnt isolierten Gateway
- Führt Task aus
- Liefert Ergebnis zurück

## Langfristige Lösung
- Feature Request bei OpenClaw: `headless: true` Flag für Subagents
- Oder: `channels` Override pro Agent-Profile
- Bis dahin: Shell-Workaround oder Akzeptanz

## Empfohlener Fokus
Statt Subagents zu fixen:
- Nutze **parallel sessions** im Main Agent
- Oder: **externe Job-Queue** (Redis + Worker)
- Bessere ROI für aktuelle Phase
