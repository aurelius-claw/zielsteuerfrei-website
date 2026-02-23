#!/bin/bash
# Subagent Runner - Workaround für OpenClaw Headless-Limitation
# Nutzt --local für embedded agent execution (kein Gateway nötig)
# Usage: ./subagent-runner.sh "TASK DESCRIPTION"

set -e

TASK="${1:-No task provided}"
SUBAGENT_ID="subagent-$(date +%s)-$RANDOM"
WORK_DIR="/tmp/openclaw-subagent-$SUBAGENT_ID"
LOG_FILE="$WORK_DIR/subagent.log"

echo "[Subagent] Starting: $SUBAGENT_ID"
echo "[Subagent] Task: $TASK"

# Create workspace
mkdir -p "$WORK_DIR"

# Run agent LOCAL (no gateway, no channels)
# --local nutzt API keys direkt aus env
export NVIDIA_API_KEY="${NVIDIA_API_KEY:-$(grep NVIDIA_API_KEY ~/.openclaw/openclaw.json | head -1 | cut -d'"' -f4)}"
export OPENROUTER_API_KEY="${OPENROUTER_API_KEY:-$(grep OPENROUTER_API_KEY ~/.openclaw/openclaw.json | head -1 | cut -d'"' -f4)}"

openclaw agent \
  --local \
  --session-id "$SUBAGENT_ID" \
  --message "$TASK" \
  --json \
  2>&1 | tee "$LOG_FILE"

EXIT_CODE=${PIPESTATUS[0]}

echo "[Subagent] Completed with exit code: $EXIT_CODE"
echo "[Subagent] Logs: $LOG_FILE"
exit $EXIT_CODE
