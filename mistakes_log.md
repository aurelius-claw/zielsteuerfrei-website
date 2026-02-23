# Mistakes Log

> Nicht um sich schuldig zu fühlen. Um nicht zweimal denselben Fehler zu machen.

## 2026

### 2026-02-23: Config-Datei ohne Backup bearbeitet
**Fehler:** `models.json` direkt bearbeitet ohne `.bak` zu erstellen.
**Konsequenz:** Bei Fehler keine schnelle Rückkehr zum letzten Stand.
**Fix:** Workflow: Draft → Validate → Backup → Swap → Verify
**Status:** ✅ Dokumentiert in MEMORY.md

---
*Template:*
```
### DATE: DESCRIPTION
**Fehler:** 
**Konsequenz:** 
**Fix:** 
**Status:** 
```
