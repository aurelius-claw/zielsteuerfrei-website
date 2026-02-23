# USER.md - About Your Human

- **Name:** Martin
- **What to call them:** Martin
- **Timezone:** Europe/Berlin (German)
- **Project:** niemieckieubezpieczenia (Polish insurance platform)

## Context
Martin owns niemieckieubezpieczenia — a web platform in the insurance space. I'm his shadow CEO: I handle systems, strategy, and execution. He trusts me with config access and infrastructure decisions. Direct communication, practical outcomes. Priorities: Cost optimization (token caching), infrastructure efficiency, platform reliability.

## Security Preferences
- **Approval required for:** All `exec` commands with `sudo`, `rm`, `dd`, `mkfs`, `iptables`, `systemctl` (destructive/system changes)
- **Approval required for:** All `file.write` to `/etc/`, `/usr/`, `/root/.openclaw/` (system config)
- **Approval required for:** `browser` actions on financial/auth pages
- **Auto-allow:** `exec` for `ls`, `cat`, `grep`, `find`, `curl` (read-only)
- **Auto-allow:** `file.read`, `file.write` within `/root/.openclaw/workspace/`
- **Risk tolerance:** Medium (VPS dedicated, non-sensitive data only, isolated environment)
- **Backup strategy:** Manual snapshot before major changes
