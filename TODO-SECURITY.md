# Security TODOs (Post Deep Research)

## Immediate (Heute)
- [x] Ich (Aurelius) dokumentiere alle sicherheitsrelevanten Entscheidungen → `mistakes_log.md`
- [x] USER.md aktualisieren: Sicherheitspräferenzen von Martin → Security Preferences Section hinzugefügt

## This Week
- [ ] Dedizierter OpenClaw-User erstellen (non-root)
- [ ] `approvalRequired` für exec/file.write aktivieren
- [ ] `openclaw security audit --deep` laufen lassen
- [ ] Skill-Bestand prüfen (230+ malicious plugins möglich)

## This Month
- [ ] Docker-Sandbox für Sessions
- [ ] Tailscale-only Networking (keine Public Ports)
- [ ] Memory-Audit: Prompt Injection Detection
- [ ] Burner-Accounts für alle externen Services

## Notes
- Current VM: Dedicated VPS ✅ Safe
- Data: Non-sensitive test only ✅ Safe
- Network: Loopback only ✅ Safe
- Risk: Medium (keine kritischen Daten, isolated)
