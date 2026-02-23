# OpenClaw Security Audit - Deep Research Results

## Executive Summary
- **512 total vulnerabilities** in OpenClaw (per VulnDB scan)
- **8 critical** severity issues
- **~50,000 exposed instances** weltweit (RCE-fähig)

## Critical Risks

### 1. Gateway Authentication Bypass
- Default: Trusts localhost (127.0.0.1) only
- Risk: Misconfigured reverse proxies allow external attackers RCE
- **Current Status:** Token-auth enabled (`d678...`), bind=loopback ✅

### 2. Prompt Injection Attacks
- Malicious instructions in documents/emails can:
  - Leak API keys, tokens, chat histories
  - Poison persistent memory
  - Execute unwanted actions days later

### 3. Unmoderated Plugin Ecosystem
- **230+ malicious plugins** in skills catalog
- Disguised as utilities, steal browser passwords, crypto wallets
- Supply chain attack vector

### 4. Excessive Privileges
- Runs as user with full OS access
- No default approval gates for destructive commands
- Risk: System bricking, data loss

## Immediate Actions Required

### DONE - Subagent Security Decision
- Telegram temporary `dmPolicy: "open"` (mitigated by user allowlist)
- Acceptable risk for development phase
- Revert to `pairing` after OpenClaw core fix or Docker-isolation

### TODO - High Priority
1. [ ] Create dedicated OpenClaw user (non-root)
2. [ ] Sandbox sessions: `mode: "non-main"` with Docker
3. [ ] Enable approval gates: `approvalRequired: ["exec", "file.write"]`
4. [ ] Run security audit: `openclaw security audit --deep`
5. [ ] Vet installed skills/plugins manually

### TODO - Medium Priority
6. [ ] Network isolation: Tailscale only, no public ports
7. [ ] Log redaction for sensitive data
8. [ ] Regular memory audit (poisoning detection)
9. [ ] Burner accounts for all connected services

## Deployment Recommendations
- **Current VM:** Dedicated VPS ✅ (non-primary device)
- **Network:** Tailscale only ✅ (no public exposure)
- **Data:** Non-sensitive test data only ✅
- **Rebuild plan:** Documented in AGENTS.md

## Sources
- Perplexity Deep Research (Sonar Pro Search)
- VulnDB / CVE databases
- Kaspersky / Microsoft security advisories

---
Generated: 2026-02-23 10:30 GMT+1
