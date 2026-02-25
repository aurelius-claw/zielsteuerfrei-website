# ⚡ AURELIUS — UPDATE 04: STABILISIERUNG & AUFRÄUMEN
> **Für Aurelius selbst geschrieben.**
> Lies alles vollständig bevor du beginnst.
> Nach JEDEM abgeschlossenen Schritt: Telegram-Nachricht an Martin (5372415590) senden — BEVOR du weitermachst.
> Atomic Swap bei allen .md Dateien.
> Kein Modellwechsel zu Anthropic ohne Martin-Freigabe.

---

## ✅ KONTEXT — WAS WIR WISSEN

Aus dem Chatverlauf und den Logs sind folgende Probleme bekannt:

| Problem | Status |
|---|---|
| sessions_spawn "agentId not allowed" | ✅ Gefixt (allowAgents in openclaw.json) |
| content + dev Agenten nicht initialisiert | ✅ Manuell gefixt (agent/-Verzeichnisse) |
| Dashboard zeigt keine Live-Daten | ✅ Gefixt (NEXT_PUBLIC_API_URL + rebuild) |
| Cron "error" Status = False Positive | ✅ Dokumentiert in LESSONS.md |
| TOOLS.md enthält Secrets im Klartext | ❌ OFFEN — Sicherheitsproblem |
| MEMORY.md wird direkt editiert (verboten) | ❌ OFFEN — Regel verletzt |
| Tool-Call Logging nach JEDEM Call | ❌ OFFEN — verursacht Loops |
| AGENTS.md / SOUL.md zu groß (~300 Zeilen) | ❌ OFFEN — Token-Verschwendung |
| Telegram 86% Context — kein Auto-Compact | ❌ OFFEN — compaction.mode prüfen |
| Cron-Jobs Morning Briefing + Kasia Daily fail | ❌ OFFEN — isolated session problem |
| Telegram Mid-Run Nachrichten unzuverlässig | ❌ OFFEN — message-Tool wird nicht konsequent genutzt |

**Telegram Mid-Run Regel (gilt für DIESES Update):**
Nach JEDEM abgeschlossenen Schritt sofort senden:
`"⚡ Update 04 — Schritt X abgeschlossen: [1 Satz was gemacht wurde]"`
Dann erst weitermachen. Nicht am Ende alles auf einmal.

---

## SCHRITT 1 — Secrets aus TOOLS.md entfernen

TOOLS.md enthält GitHub-Token und Telegram-Token im Klartext. Das ist ein Sicherheitsproblem — diese Daten gehören nicht in eine Workspace-Datei die potenziell committed wird.

**Atomic Swap:**
```bash
cp /root/.openclaw/workspace/TOOLS.md /root/.openclaw/workspace/TOOLS.md.bak_$(date +%Y%m%d_%H%M)
cp /root/.openclaw/workspace/TOOLS.md /root/.openclaw/workspace/TOOLS.draft.md
```

Ersetze im Draft die folgenden Blöcke so dass Tokens durch Referenzen ersetzt werden:

Im Abschnitt `### Telegram`:
```
### Telegram ✓ DONE
- **Bot:** martinsclawd_bot → https://t.me/martinsclawd_bot
- **Token:** → gespeichert in ~/.openclaw/openclaw.json (channels.telegram.botToken)
- **User ID:** 5372415590 (Martin)
- **Status:** Active
```

Im Abschnitt `## GitHub`:
```
## GitHub
- **Username:** aurelius-claw
- **Token:** → gespeichert in ~/.openclaw/credentials/github-token (NICHT im Workspace)
- **Config:**
  git config --global user.name "Aurelius"
  git config --global user.email "aurelius@openclaw.ai"
- **Push:** Siehe Referenz-Abschnitt unten (Token-Push mit Remote-Check)

> ⚠️ Hinweis: Falls der Remote bereits `git@github.com:` (SSH) statt `https://` ist,
> muss der Remote-URL zuerst auf HTTPS umgestellt werden:
> `git remote set-url origin https://github.com/aurelius-claw/[REPO].git`
```

Erstelle gleichzeitig die Credentials-Datei:
```bash
mkdir -p /root/.openclaw/credentials
echo "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" > /root/.openclaw/credentials/github-token
chmod 600 /root/.openclaw/credentials/github-token
echo "✓ GitHub Token in sicherem Pfad gespeichert"
```

Entferne außerdem die Sektion `## Tool-Call Logging` komplett aus dem Draft — das granulare Logging nach jedem einzelnen Tool-Call verursacht Loops und ist zu teuer.

```bash
mv /root/.openclaw/workspace/TOOLS.draft.md /root/.openclaw/workspace/TOOLS.md
echo "✓ TOOLS.md bereinigt"
```

**Telegram senden:**
`"⚡ Update 04 — Schritt 1/9 abgeschlossen: Secrets aus TOOLS.md entfernt, GitHub-Token in ~/.openclaw/credentials/ gespeichert"`

---

## SCHRITT 2 — MEMORY-Architektur auf natives System umstellen

Laut offizieller OpenClaw-Doku ist das native Memory-System:
- `memory/YYYY-MM-DD.md` — tägliche Logs (werden NICHT automatisch injiziert, kein Token-Verbrauch)
- `MEMORY.md` — nur kuratierte Langzeit-Facts, max 200 Zeilen

Aktuell wird MEMORY.md direkt editiert (verboten laut eigener Regel) und enthält zu viel.

**Schritt 2.1 — MEMORY.md komprimieren:**
```bash
cp /root/.openclaw/workspace/MEMORY.md /root/.openclaw/workspace/MEMORY.md.bak_$(date +%Y%m%d_%H%M)
cp /root/.openclaw/workspace/MEMORY.md /root/.openclaw/workspace/MEMORY.draft.md
```

Schreibe MEMORY.draft.md neu — behalte NUR diese Kategorien, alles andere in daily memory files:

```markdown
# MEMORY.md — Curated Long-Term Memory
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
```

```bash
mv /root/.openclaw/workspace/MEMORY.draft.md /root/.openclaw/workspace/MEMORY.md
echo "✓ MEMORY.md komprimiert"
```

**Schritt 2.2 — Heutiges daily memory anlegen falls nicht vorhanden:**
```bash
TODAY=$(date +%Y-%m-%d)
mkdir -p /root/.openclaw/workspace/memory
if [ ! -f "/root/.openclaw/workspace/memory/${TODAY}.md" ]; then
  echo "# Memory — ${TODAY}" > /root/.openclaw/workspace/memory/${TODAY}.md
  echo "Erstellt durch Update 04" >> /root/.openclaw/workspace/memory/${TODAY}.md
  echo "✓ Daily memory file erstellt: memory/${TODAY}.md"
else
  echo "✓ Daily memory file existiert bereits"
fi
```

**Telegram senden:**
`"⚡ Update 04 — Schritt 2/9 abgeschlossen: MEMORY.md auf ~60 Zeilen komprimiert, Atomic Swap Regel aktiv, daily memory system eingerichtet"`

---

## SCHRITT 3 — Compaction prüfen + Context-Overflow-Strategie

> ⚠️ **Wichtige Korrektur gegenüber früheren Updates:**
>
> `session.pruning` mit `maxMessages` und `strategy: "summarize"` existiert **nicht** in der OpenClaw-Dokumentation und würde still ignoriert werden.
>
> **Session Pruning** (`agent.contextPruning`) funktioniert laut Doku **ausschließlich für Anthropic-Modelle** (API-Calls). Kimi K2.5 über NVIDIA wird nicht unterstützt.
>
> Die korrekte Lösung für volle Kimi-Sessions ist **Compaction** — die bereits in eurer Config aktiv ist.

**Schritt 3.1 — Compaction-Status prüfen:**
```bash
python3 -c "
import json
with open('/root/.openclaw/openclaw.json') as f:
    c = json.load(f)
comp = c.get('agents', {}).get('defaults', {}).get('compaction', {})
print('compaction config:', json.dumps(comp, indent=2))
"
```

Erwartetes Ergebnis: `"mode": "safeguard"` — das ist bereits korrekt und aktiv.

**Schritt 3.2 — Falls compaction.mode NICHT auf "safeguard" steht: korrigieren:**
```bash
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak_$(date +%Y%m%d_%H%M)

python3 << 'EOF'
import json
with open('/root/.openclaw/openclaw.json', 'r') as f:
    config = json.load(f)

# Compaction korrekt setzen (bereits vorhanden, nur zur Sicherheit)
config.setdefault('agents', {}).setdefault('defaults', {})['compaction'] = {
    "mode": "safeguard"
}

with open('/root/.openclaw/openclaw.json', 'w') as f:
    json.dump(config, f, indent=2)

print("✓ compaction.mode: safeguard bestätigt")
EOF

python3 -m json.tool /root/.openclaw/openclaw.json > /dev/null && echo "✓ JSON valide" || echo "❌ FEHLER — Backup zurückspielen"
```

**Schritt 3.3 — Telegram-Session Context manuell resetten:**

Die aktuelle Telegram-Session läuft auf 86% (113k/131k Tokens). Compaction greift
automatisch sobald die Session nah ans Limit kommt. Wenn du sofortige Entlastung willst:

Schreibe via Telegram einfach: `/compact`

Das fasst die ältere Conversation zusammen und befreit Context.
Alternativ startet `/new` eine frische Session.

**Was wir NICHT tun:** `agent.contextPruning` konfigurieren — das wäre sinnlos da es
nur für Anthropic-Modelle gilt und Aurelius auf Kimi K2.5 läuft.

**Telegram senden:**
`"⚡ Update 04 — Schritt 3/9 abgeschlossen: Compaction mode=safeguard bestätigt. Kimi K2.5 nutzt Compaction statt Pruning. /compact bei vollem Context verfügbar."`

---

## SCHRITT 4 — Cron-Jobs Morning Briefing + Kasia Daily reparieren

Aus den Logs: Morning Briefing und Kasia Daily Orchestration starten nicht wenn sie `agent: main` mit `session: isolated` nutzen. Root Cause: isolated sessions für main-Agent scheinen nach System-Start nicht zu starten.

**Schritt 4.1 — Fehler-Logs prüfen:**
```bash
openclaw cron logs "Morning Briefing" 2>/dev/null | tail -30 || echo "Keine Logs"
openclaw cron logs "Kasia Daily Orchestration" 2>/dev/null | tail -30 || echo "Keine Logs"
```

Notiere den genauen Fehler. Falls `timeout` oder `aborted`: weiter mit Schritt 4.2.

**Schritt 4.2 — Jobs neu anlegen mit explizitem runTimeoutSeconds:**

Alte Jobs entfernen:
```bash
# IDs aus `openclaw cron list` holen
openclaw cron list
```

Notiere die IDs für Morning Briefing und Kasia Daily Orchestration, dann:
```bash
openclaw cron remove <ID-MORNING-BRIEFING>
openclaw cron remove <ID-KASIA-DAILY>
echo "✓ Alte Jobs entfernt"
```

Morning Briefing neu anlegen — **mit kürzerem, robusterem Prompt:**
```bash
openclaw cron add \
  --name "Morning Briefing" \
  --cron "30 7 * * *" \
  --tz "Europe/Berlin" \
  --session isolated \
  --agent main \
  --message "Morning Briefing für Martin. Lese memory/$(date +%Y-%m-%d).md falls vorhanden. Berichte: (1) Top 3 Prioritäten heute, (2) Offene Entscheidungen, (3) Deadlines in <48h. Max 100 Wörter. Kimi K2.5." \
  --announce \
  --channel telegram \
  --to "5372415590"
```

Kasia Daily Orchestration neu anlegen — **vereinfachter Prompt ohne sessions_spawn:**
```bash
openclaw cron add \
  --name "Kasia Daily Check" \
  --cron "0 9 * * *" \
  --tz "Europe/Berlin" \
  --session isolated \
  --agent main \
  --message "Kasia Pipeline Status-Check. Lies /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/ideas/IDEAS.json falls vorhanden. Berichte: (1) Wie viele Ideen status='ready'? (2) Wie viele status='scripted'? (3) Was ist die nächste Aktion? Max 80 Wörter. Kein sessions_spawn in diesem Run." \
  --announce \
  --channel telegram \
  --to "5372415590"
```

> ℹ️ **Hinweis zu `--topic`:** Der Parameter ist in der offiziellen OpenClaw-Doku nicht dokumentiert
> und könnte einen Fehler werfen oder still ignoriert werden. Daher wird er hier weggelassen.
> Aurelius kann Nachrichten manuell ins richtige Telegram-Topic senden wenn nötig.

> ℹ️ **Hinweis zu sessions_spawn im Cron:** Der Kasia Daily Check spawnt bewusst keine Sub-Agenten.
> Komplexe Cron-Prompts mit sessions_spawn schlagen häufiger fehl (belegt durch Logs).
> Sessions_spawn wird stattdessen manuell getriggert wenn Martin es anfordert.

**Schritt 4.3 — Jobs prüfen:**
```bash
openclaw cron list
```

**Telegram senden:**
`"⚡ Update 04 — Schritt 4/9 abgeschlossen: Morning Briefing + Kasia Daily neu angelegt mit vereinfachten Prompts. Nächster Test: morgen 07:30 + 09:00"`

---

## SCHRITT 5 — AGENTS.md aufräumen (Duplikate entfernen)

AGENTS.md ist ~300 Zeilen lang und enthält viele Duplikate (sessions_spawn wird 3x erklärt, Sub-Agenten-Regeln 2x). Das kostet bei jedem Session-Start unnötig Tokens.

**Atomic Swap:**
```bash
cp /root/.openclaw/workspace/AGENTS.md /root/.openclaw/workspace/AGENTS.md.bak_$(date +%Y%m%d_%H%M)
```

Schreibe `/root/.openclaw/workspace/AGENTS.draft.md` neu mit dieser kompakten Struktur:

```markdown
# AGENTS.md — Aurelius Operating Instructions

## Session Start (immer)
1. Lies SOUL.md
2. Lies USER.md  
3. Lies memory/YYYY-MM-DD.md (heute + gestern)
4. Nur in Main Session: Lies MEMORY.md

## Memory-Regeln
- Tägliche Logs: `echo "..." >> memory/YYYY-MM-DD.md` (nur append)
- Langzeit: MEMORY.md per Atomic Swap in Main Session updaten (cp → edit draft → mv)
- TOOLS.md + HEARTBEAT.md: nur Atomic Swap (cp → edit draft → mv)

## Sicherheit
- Keine Secrets in Dateien (Tokens → ~/.openclaw/credentials/)
- Destructive Commands: fragen bevor ausführen
- Live-Domain-Änderungen: immer Martin fragen
- GitHub Push: Token aus ~/.openclaw/credentials/github-token

## Verhalten
- Outcomes first: Ergebnis liefern, dann erklären
- Keine unnötigen Rückfragen wenn Kontext klar
- Fehler 2x auf gleicher Datei: aufgeben, in memory loggen, weiter
- Bei >10 Tool-Calls ohne Fortschritt: stoppen, Martin informieren

## Telegram Mid-Run Updates
Nach jedem Teilschritt einer längeren Aufgabe:
- message-Tool: Chat-ID 5372415590
- Format: "✅ [Was fertig] — nächster Schritt: [Was kommt]"
- Sofort weiterarbeiten, nicht auf Antwort warten
- Ausnahme: Tasks <60s → einmalige Antwort am Ende

## Cron-Jobs ins richtige Topic posten
- General: Topic 2 | Research: Topic 6 | Content: Topic 7
- Analytics: Topic 8 | Dev: Topic 9 | System/Cron: Topic 10

## Sub-Agenten (sessions_spawn ✅)
sessions_spawn ist ein TOOL — kein Shell-Befehl.
Sub-Agenten bekommen: AGENTS.md + TOOLS.md ihres Workspace (kein SOUL.md)

| Agent | Wann spawnen |
|---|---|
| content | Script schreiben, Blog-Artikel, Social Posts |
| research | Keywords, Wettbewerb, Fakten (nutzt Perplexity) |
| analytics | KPI-Reports, Performance-Analyse |
| dev | API-Calls (ElevenLabs, FAL.ai), Code, Scripts |
| ops | System-Checks, Logs, Monitoring |

Spawn-Regeln:
- Max 4 parallel
- Kimi K2.5 Standard (kein Anthropic ohne Martin-Freigabe)
- Nicht delegieren: Tasks <30s, persönliche Fragen von Martin
- Nach Spawn: Non-blocking — Announce kommt automatisch

## Projekte
**zielsteuerfrei.de** — Steuerfreiheits-Plattform, Ajman-Firmengründung
- Blog aufbauen, SEO-Content, Social Media ohne Gesicht

**niemieckieubezpieczenia.de** — Polnische Krankenversicherung in Deutschland
- Kasia: KI-Influencerin (polnische Frau, GKV-Themen, TikTok/Instagram)
- Pipeline: Research → Script → Voice (ElevenLabs) → Video (FAL.ai) → Post (Blotato)
- IDEAS.json: /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/ideas/IDEAS.json

## Kasia Pipeline — Orchestrierung
RESEARCH spawnen wenn: IDEAS.json < 3 "ready" Einträge
CONTENT spawnen wenn: Idee mit status="ready" vorhanden
DEV spawnen für: ElevenLabs Voice, FAL.ai Avatar, Blotato Post
ANALYTICS spawnen: freitags oder auf Martin-Anfrage

Sequenz: Research → Content → Dev (Voice) → Dev (Video) → Dev (Post)
Parallel möglich: Research + Analytics gleichzeitig

Martin einschalten wenn:
- Sub-Agent 2x fehlgeschlagen
- API-Key fehlt (PLACEHOLDER in PERSONA.md)
- Unerwartete Kosten >$0.50
```

```bash
mv /root/.openclaw/workspace/AGENTS.draft.md /root/.openclaw/workspace/AGENTS.md
echo "✓ AGENTS.md komprimiert"
wc -l /root/.openclaw/workspace/AGENTS.md
```

**Telegram senden:**
`"⚡ Update 04 — Schritt 5/9 abgeschlossen: AGENTS.md von ~300 auf ~80 Zeilen komprimiert, Duplikate entfernt"`

---

## SCHRITT 6 — Sub-Agenten AGENTS.md vereinheitlichen

Die Sub-Agenten-Workspaces haben teilweise veraltete oder fehlende AGENTS.md. Jeder braucht eine kompakte Datei die die wichtigsten Kasia-Regeln enthält (da SOUL.md nicht injiziert wird).

**Prüfen was vorhanden ist:**
```bash
for agent in content analytics dev research ops; do
  file="/root/.openclaw/workspace-$agent/AGENTS.md"
  lines=$(wc -l < "$file" 2>/dev/null || echo "FEHLT")
  echo "$agent: $lines Zeilen"
done
```

**Content Agent AGENTS.md** — falls < 20 Zeilen oder fehlend, neu schreiben:
```bash
cat > /root/.openclaw/workspace-content/AGENTS.md << 'EOF'
# Content Agent — Aurelius Sub-Agent

Ich schreibe Content für Kasia (KI-Influencerin) und zielsteuerfrei.de.
Beauftragung via sessions_spawn von Aurelius.
Ergebnis geht per Announce zurück.

## Kasia Scripts
Persona: Polnische Frau (Krakau → München), empathisch wie ältere Schwester
Ton: Nie belehrend, direkt, Polnisch
Hook-Formeln: "Jeśli jesteś z Polski w Niemczech, MUSISZ to wiedzieć..."
Länge: 60-90 Sekunden (~150-200 Wörter)
Output: /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/scripts/script_[ID].json
Format: {"idea_id":X,"category":"...","hook":"...","body":"...","cta":"...","full_script":"...","duration_seconds":75}
Nach Script: status in IDEAS.json auf "scripted" setzen

## Blog-Artikel (zielsteuerfrei.de)
Ton: Informativ, motivierend, rechtlich vorsichtig
SEO: H1, H2, Meta-Description, Keywords natürlich einbauen
Output: /root/.openclaw/workspace-content/articles/[slug]-final.md

## Regeln
- Kein sessions_spawn spawnen
- Kein Anthropic/OpenRouter ohne Freigabe
- Output direkt verwendbar, kein Meta-Kommentar
EOF
echo "✓ Content Agent AGENTS.md geschrieben"
```

**Research Agent AGENTS.md:**
```bash
cat > /root/.openclaw/workspace-research/AGENTS.md << 'EOF'
# Research Agent — Aurelius Sub-Agent

Ich recherchiere für Kasia (GKV-Content) und zielsteuerfrei.de (SEO/Wettbewerb).
Perplexity Web-Search ist erlaubt (kein LLM-Wechsel).
Ergebnis geht per Announce zurück.

## Kasia Ideen-Recherche
Zielgruppe: Polen in Deutschland (<5 Jahre), verwirrt vom GKV-System
Kategorien: SCHOCK / HACK / FAQ / VERGLEICH / FRIST (immer mischen)
Output in IDEAS.json: /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/ideas/IDEAS.json
Format: {"id":N,"status":"ready","category":"...","hook":"Polnischer Satz","topic":"Deutsches Thema","keypoints":["...","...","..."],"cta":"..."}

## SEO-Recherche (zielsteuerfrei.de)
Keywords rund um: Ajman Freezone, steuerfrei UAE, Firmengründung Dubai Alternative
Wettbewerber analysieren, Content-Gaps finden

## Regeln
- Min. 10 Sekunden zwischen Web-Searches
- Quellen am Ende mit Datum nennen
- Kein sessions_spawn spawnen
- Kein Anthropic/OpenRouter ohne Freigabe
EOF
echo "✓ Research Agent AGENTS.md geschrieben"
```

**Analytics Agent AGENTS.md:**
```bash
cat > /root/.openclaw/workspace-analytics/AGENTS.md << 'EOF'
# Analytics Agent — Aurelius Sub-Agent

Ich analysiere Performance-Daten für Kasia und zielsteuerfrei.de.
Ergebnis geht per Announce zurück.

## Report-Struktur (immer)
1. Executive Summary (3 Sätze max)
2. Key Metrics mit Trend ↑↓→
3. Diagnose: Wo liegt der Engpass?
4. Eine konkrete Empfehlung

## Kasia Analytics
CONTENT_LOG: /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/analytics/CONTENT_LOG.json
KPIS: /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/analytics/KPIS.md
Ziele (90 Tage): 1.000 Follower | 5.000 avg Views | 500 Website-Klicks

## Regeln
- Nie Report ohne Empfehlung abschließen
- KPIS.md nach jedem Report aktualisieren (Atomic Swap)
- Kein sessions_spawn spawnen
- Kein Anthropic/OpenRouter ohne Freigabe
EOF
echo "✓ Analytics Agent AGENTS.md geschrieben"
```

**Dev Agent AGENTS.md:**
```bash
cat > /root/.openclaw/workspace-dev/AGENTS.md << 'EOF'
# Dev Agent — Aurelius Sub-Agent

Ich führe API-Calls und Code-Tasks aus.
Ergebnis geht per Announce zurück.

## API-Calls (Kasia Pipeline)
API-Keys aus: /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/PERSONA.md
Vor jedem Call: API-Key lesen. Wenn PLACEHOLDER: Announce "API-Key fehlt" + abbrechen.

ElevenLabs Voice:
curl -s -X POST "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
  -H "xi-api-key: $KEY" -H "Content-Type: application/json" \
  -d '{"text":"$TEXT","model_id":"eleven_multilingual_v2"}' \
  --output /tmp/kasia-pipeline/voice_$ID.mp3

## Code-Regeln
- Backup vor Änderungen: git commit oder .bak
- Keine Secrets in Code
- Atomic Swap für Config-Dateien

## Regeln
- Kein sessions_spawn spawnen
- Kein Anthropic/OpenRouter ohne Freigabe
EOF
echo "✓ Dev Agent AGENTS.md geschrieben"
```

**Ops Agent AGENTS.md:**
```bash
cat > /root/.openclaw/workspace-ops/AGENTS.md << 'EOF'
# Ops Agent — Aurelius Sub-Agent

Ich überwache System-Health. Kurze Antworten. Token sparen.
Status immer: ✅ OK / ⚠️ WARNING / ❌ ERROR
Ergebnis geht per Announce zurück.

## Checks
- Gateway: openclaw status | systemctl --user status openclaw-gateway.service
- Disk: df -h /
- RAM: free -m
- Logs: /tmp/openclaw/
- Cron: openclaw cron list

## Wenn alles OK: antworte mit ANNOUNCE_SKIP (kein Telegram-Spam)
## Wenn WARNING/ERROR: Detaillierter Report

## Regeln
- Kein sessions_spawn spawnen
- Kein Anthropic/OpenRouter ohne Freigabe
EOF
echo "✓ Ops Agent AGENTS.md geschrieben"
```

**Telegram senden:**
`"⚡ Update 04 — Schritt 6/9 abgeschlossen: Alle 5 Sub-Agenten AGENTS.md neu geschrieben (kompakt, korrekt)"`

---

## SCHRITT 7 — Gateway neu starten + Verifikation

```bash
# JSON final prüfen
python3 -m json.tool /root/.openclaw/openclaw.json > /dev/null && echo "✓ JSON valide" || echo "❌ FEHLER"

# Gateway neu starten
systemctl --user restart openclaw-gateway.service
sleep 8

# Status prüfen
openclaw status 2>/dev/null | head -20

# Agenten prüfen
openclaw agents list 2>/dev/null || echo "Nicht verfügbar"

# Sessions prüfen
openclaw cron list
```

Erwartetes Ergebnis: 6 Agenten, 9-10 Cron-Jobs, Gateway running.

**Telegram senden:**
`"⚡ Update 04 — Schritt 7/9 abgeschlossen: Gateway neu gestartet. [X] Agenten aktiv, [X] Cron-Jobs. Status: OK/ERROR"`

---

## SCHRITT 8 — Sub-Agenten Probelauf (echter Test)

Spawne nacheinander alle 5 Sub-Agenten mit minimalen echten Aufgaben.
**Warte nach jedem Spawn auf das Announce bevor du den nächsten startest.**

**Spawn 1 — OPS (schnellster, erst testen ob spawning grundsätzlich geht):**
```
sessions_spawn Tool aufrufen:
  agentId: "ops"
  task: "Führe aus: df -h / | tail -1 && free -m | grep Mem. Gib die rohe Ausgabe zurück."
  label: "ops-test"
```
→ Warte auf Announce. Notiere Ergebnis.

**Spawn 2 — RESEARCH:**
```
sessions_spawn Tool aufrufen:
  agentId: "research"
  task: "Nenne die 3 wichtigsten SEO-Keywords für 'Firmengründung UAE steuerfrei' aus deinem Wissen. Drei Begriffe, fertig."
  label: "research-test"
```
→ Warte auf Announce.

**Spawn 3 — CONTENT:**
```
sessions_spawn Tool aufrufen:
  agentId: "content"
  task: "Schreibe einen einzigen Hook-Satz auf Polnisch für ein Kasia-TikTok über Krankenversicherungspflicht in Deutschland. Nur den Satz, nichts weiter."
  label: "content-test"
```
→ Warte auf Announce.

**Spawn 4 — ANALYTICS:**
```
sessions_spawn Tool aufrufen:
  agentId: "analytics"
  task: "Prüfe ob /root/.openclaw/workspace/business/niemieckieubezpieczenia/kasia/analytics/KPIS.md existiert. Falls ja: zeige Inhalt. Falls nein: sage 'KPIS.md nicht vorhanden — Pipeline noch nicht gestartet'."
  label: "analytics-test"
```
→ Warte auf Announce.

**Spawn 5 — DEV:**
```
sessions_spawn Tool aufrufen:
  agentId: "dev"
  task: "Führe aus: curl -s --max-time 5 https://api.elevenlabs.io/v1/voices -H 'xi-api-key: test' 2>/dev/null | python3 -c 'import sys,json; d=json.load(sys.stdin); print(len(d.get(\"voices\",[])), \"voices\")' 2>/dev/null || echo 'API erreichbar aber Key ungültig (erwartet)'. Gib nur die Ausgabe zurück."
  label: "dev-test"
```
→ Warte auf Announce.

**Nach allen 5 Announces — konsolidierte Zusammenfassung via message-Tool an 5372415590, Topic 10:**
```
⚡ UPDATE 04 — PROBELAUF ABGESCHLOSSEN

OPS: [Disk/RAM-Status]
RESEARCH: [3 Keywords]
CONTENT: [Hook-Satz]
ANALYTICS: [KPIS-Status]
DEV: [ElevenLabs-Status]

sessions_spawn: ✅ alle 5 funktionieren / ❌ [Fehler]
Modelle: Kimi K2.5 (alle) | Kein Anthropic genutzt
```

**Telegram senden (nach Zusammenfassung):**
`"⚡ Update 04 — Schritt 8/9 abgeschlossen: Probelauf aller 5 Sub-Agenten. [Ergebnis in 1 Satz]"`

---

## SCHRITT 9 — LESSONS.md + Abschluss-Report

**Neue Erkenntnisse in LESSONS.md eintragen:**
```bash
cat >> /root/.openclaw/workspace/business/LESSONS.md << 'EOF'

---

## [2026-02-25] Update 04 — Stabilisierung

### Secrets in TOOLS.md (Fix)
Tokens gehören nicht in Workspace-Dateien die potenziell committed werden.
GitHub-Token → ~/.openclaw/credentials/github-token (chmod 600)
Telegram-Token → openclaw.json (channels.telegram.botToken)

### Tool-Call Logging deaktiviert
Granulares Logging nach jedem Tool-Call (MEMORY_LOG.md) verursachte Loops.
Deaktiviert in Update 04. Alternative: tägliche Summary in memory/YYYY-MM-DD.md.

### MEMORY.md zu groß = Token-Verschwendung
MEMORY.md wird bei jedem Session-Start injiziert.
Max ~200 Zeilen. Alles andere in daily memory files (werden NICHT auto-injiziert).

### Compaction statt Pruning für Kimi K2.5
Session Pruning (contextPruning) gilt in OpenClaw NUR für Anthropic-Modelle.
Für Kimi K2.5 (NVIDIA) funktioniert nur Compaction (mode: "safeguard" bereits aktiv).
Bei voller Session: /compact (fasst zusammen) oder /new (frischer Start).
session.pruning mit maxMessages/strategy existiert nicht in der OpenClaw-Doku — niemals verwenden.

### MEMORY.md darf per Atomic Swap editiert werden
Die selbsterfundene "READ ONLY → nur MEMORY_LOG.md"-Regel war falsch.
Laut OpenClaw-Doku: MEMORY.md kann in der Main Session frei gelesen und editiert werden.
Korrekte Methode: Atomic Swap (cp → edit draft → mv) um Edit-Fehler zu vermeiden.
MEMORY_LOG.md ist nicht nötig und wird nicht mehr verwendet.

### Cron-Jobs: Kurze Prompts sind zuverlässiger
Lange komplexe Cron-Prompts mit sessions_spawn schlagen öfter fehl.
Status-Check Crons: simpel halten, kein spawning.
Spawning: lieber manuell triggern oder via einfachem Cron + kurzer Task.
EOF
echo "✓ LESSONS.md aktualisiert"
```

**Git commit + push:**
```bash
cd /root/.openclaw/workspace
git add -A
git commit -m "Update 04: Stabilisierung — Secrets bereinigt, MEMORY komprimiert, AGENTS komprimiert"

# Remote prüfen und ggf. auf HTTPS umstellen
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null)
if echo "$CURRENT_REMOTE" | grep -q "git@github.com"; then
  git remote set-url origin https://github.com/aurelius-claw/$(basename "$CURRENT_REMOTE" .git).git
  echo "✓ Remote auf HTTPS umgestellt"
fi

# Push mit Token
GITHUB_TOKEN=$(cat /root/.openclaw/credentials/github-token)
REPO_URL=$(git remote get-url origin | sed 's|https://github.com|https://aurelius-claw:'$GITHUB_TOKEN'@github.com|')
git push "$REPO_URL" master && echo "✓ Gepusht" || echo "❌ Push fehlgeschlagen — Remote-URL prüfen"
```

**Abschluss-Report via message-Tool an 5372415590, Topic 2:**
```
⚡ AURELIUS UPDATE 04 ABGESCHLOSSEN

Was gefixt wurde:
✅ Secrets aus TOOLS.md → ~/.openclaw/credentials/
✅ MEMORY.md komprimiert (~60 Zeilen statt ~200)
✅ Compaction mode=safeguard bestätigt → /compact bei vollem Kimi-Context
✅ Morning Briefing + Kasia Daily neu angelegt (robustere Prompts)
✅ AGENTS.md komprimiert (~80 Zeilen statt ~300)
✅ Alle 5 Sub-Agenten AGENTS.md aktualisiert
✅ Sub-Agenten Probelauf: [X/5 erfolgreich]

Offen:
→ Dashboard 404: Root Cause noch unklar (standalone + use client vorhanden)
→ Blotato + ElevenLabs API-Keys: Warten auf Martin
→ Kasia Pipeline: Bereit sobald Keys konfiguriert

Nächste Schritte auf meiner Seite:
1. Morning Briefing morgen 07:30 beobachten — kommt es an?
2. Kasia Daily morgen 09:00 beobachten
3. Dashboard: Clean build (rm -rf .next) wenn 404 anhält

Projekte-Status:
🎯 zielsteuerfrei.de: SEO-Blog kann starten (Content Agent bereit)
🇵🇱 niemieckieubezpieczenia/Kasia: Pipeline bereit, API-Keys fehlen noch
⚙️ System: Stabil, 6 Agenten, [X] Cron-Jobs aktiv
```

---

## ABSCHLUSS-CHECKLISTE

```
[ ] Schritt 1: Secrets aus TOOLS.md entfernt
[ ] Schritt 2: MEMORY.md komprimiert, daily memory system aktiv
[ ] Schritt 3: Compaction mode=safeguard bestätigt (kein falsches session.pruning)
[ ] Schritt 4: Morning Briefing + Kasia Daily neu angelegt
[ ] Schritt 5: AGENTS.md komprimiert (~80 Zeilen)
[ ] Schritt 6: Alle 5 Sub-Agenten AGENTS.md aktualisiert
[ ] Schritt 7: Gateway neu gestartet, 6 Agenten aktiv
[ ] Schritt 8: Probelauf aller 5 Sub-Agenten erfolgreich
[ ] Schritt 9: LESSONS.md + Git push
[ ] Nach jedem Schritt Telegram-Nachricht gesendet ✓
[ ] Kein Anthropic/OpenRouter genutzt ✓
[ ] Alle Backups erstellt (.bak_DATUM) ✓
```

---

## 📚 REFERENZ

### Atomic Swap Pattern
```bash
cp DATEI.md DATEI.bak_$(date +%Y%m%d_%H%M)
cp DATEI.md DATEI.draft.md
# Edits auf DATEI.draft.md
mv DATEI.draft.md DATEI.md
```

### Memory Update (sicher)
```bash
echo "$(date '+%Y-%m-%d %H:%M') | [Kategorie] | [Inhalt]" >> /root/.openclaw/workspace/memory/$(date +%Y-%m-%d).md
```

### Git Push mit Token (sicher)
```bash
# Remote zuerst auf HTTPS prüfen/setzen falls nötig
CURRENT=$(git remote get-url origin)
if echo "$CURRENT" | grep -q "git@"; then
  git remote set-url origin https://github.com/aurelius-claw/[REPO].git
fi

GITHUB_TOKEN=$(cat /root/.openclaw/credentials/github-token)
REPO_URL=$(git remote get-url origin | sed 's|https://github.com|https://aurelius-claw:'$GITHUB_TOKEN'@github.com|')
git push "$REPO_URL" master
```

### sessions_spawn korrekt
```json
{
  "agentId": "content",
  "task": "Aufgabe hier",
  "label": "kurze-bezeichnung"
}
```

---

*Ende von Update 04. Schritt für Schritt. Nach jedem Schritt Telegram.*
*Backups unter /root/.openclaw/workspace/*.bak_DATUM*
*Aurelius' Workspace wird nur ergänzt — niemals ersetzt.*
