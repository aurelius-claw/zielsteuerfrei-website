#!/bin/bash
# Heartbeat Runner - Alle 15 Minuten
# Model: ollama 3.2:3b über API

export OLLAMA_HOST="127.0.0.1:11434"

# Heartbeat check - simple status call
/usr/bin/curl -s "http://$OLLAMA_HOST/api/generate" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3.2:3b",
    "prompt": "Memory sync: Check HEARTBEAT.md and save data if needed. Reply: HEARTBEAT_DONE"
  }' 2>/dev/null | grep -q "HEARTBEAT_DONE"

# Actually run the save through subagent mechanism
/root/.openclaw/workspace/subagent-runner.sh \
  "Heartbeat 15min check: Read HEARTBEAT.md, sync memory to business/*/, update MEMORY.md timestamp. Reply HEARTBEAT_OK." \
  > /tmp/heartbeat-$(date +%Y%m%d-%H%M).log 2>&1 &

# Mail-Log Cleanup (keep last 24h)
find /tmp/heartbeat-*.log -mtime +1 -delete 2>/dev/null

echo "Heartbeat triggered at $(date)"
