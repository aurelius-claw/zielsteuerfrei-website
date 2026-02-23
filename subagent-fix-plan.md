# Subagent Fix Plan

## Problem
Gateway returns "pairing required" (1008) when spawning subagents.
Cause: Telegram channel has `dmPolicy: "pairing"` and subagents can't authenticate.

## Potential Solutions

### Option 1: Telegram dmPolicy = "open" (Quick)
- Change `channels.telegram.dmPolicy` from "pairing" to "open"
- Subagents work, but bot is publicly accessible
- Risk: Anyone can message the bot

### Option 2: Subagent Profile without Channels (Clean)
- Create explicit agent profile for subagents
- Override channels to empty/null for that profile
- Keeps main Telegram secured with pairing
- Requires: Check if OpenClaw supports per-agent channel overrides

### Option 3: Environment Variable / Spawn Flag
- Check if sessions_spawn supports `--no-channels` or similar
- Or if there's a HEADLESS env var

### Option 4: Gateway Auth Mode
- Change `gateway.auth.mode` from "token" to something else?
- Not recommended, token auth is correct

## Tests to Run

1. Check if `agents.list` with subagent-specific config works
2. Check sessions_spawn for channel-override params
3. If nothing works, fall back to Option 1 as temporary fix
