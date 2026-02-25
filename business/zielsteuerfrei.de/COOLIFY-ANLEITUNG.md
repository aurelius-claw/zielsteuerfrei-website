# Coolify Deployment Anleitung - Zielsteuerfrei.de

## Übersicht
Diese Anleitung beschreibt, wie du `zielsteuerfrei.de` bei Coolify (https://coolify.praedurion.com) deployed.

---

## Voraussetzungen

### Auf Coolify:
- [ ] Server konfiguriert (dein VPS bei Contabo)
- [ ] Domain `zielsteuerfrei.de` als Domain hinzugefügt
- [ ] GitHub Integration verbunden (Repository: `aurelius-claw/zielsteuerfrei-website`)

### Im Repository:
- [ ] Dockerfile oder `nixpacks.toml` vorhanden
- [ ] `index.html` im Root oder `public/` Ordner
- [ ] GitHub Webhook aktiviert

---

## Schritt 1: Projekt Anlegen

1. **Einloggen** bei https://coolify.praedurion.com
2. **Projects** → **+ Create New Project**
3. **Name**: `zielsteuerfrei-website`
4. **Description**: `Ajman Firmengründung Website`

---

## Schritt 2: Service/Resource Anlegen

### Option A: Static Site (Empfohlen für HTML/CSS/JS)

1. Im Projekt auf **+ New** klicken
2. **Application** → **Public Repository**
3. Repository URL: `https://github.com/aurelius-claw/zielsteuerfrei-website`
4. Branch: `main`
5. **Build Pack:** `Static`
6. **Base Directory:** `public/` (falls vorhanden) oder `./` (für Root)
7. **Publish Directory:** `public/` oder `./`

### Option B: Nginx Docker (Für mehr Kontrolle)

Erstelle `Dockerfile` im Repo:
```dockerfile
FROM nginx:alpine
COPY public/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

Dann in Coolify:
1. **Application** → **Dockerfile**
2. Repository auswählen
3. **Port:** `80`

---

## Schritt 3: Domain Konfiguration

1. Im Service auf **Settings** → **Domains**
2. Domain hinzufügen: `zielsteuerfrei.de`
3. Falls SSL gewünscht: **SSL/TLS** → Let's Encrypt aktivieren
4. **Force HTTPS**: Empfohlen aktivieren

---

## Schritt 4: Environment Variables (Optional)

Falls du API-Keys brauchst (z.B. für Formulare):

| Variable | Wert | Beschreibung |
|----------|------|--------------|
| `WEBHOOK_SECRET` | `dein-secret` | Für GitHub Webhooks |
| `EMAIL_API_KEY` | `...` | Für Kontaktformular |

---

## Schritt 5: Deploy

1. Auf **Deploy** klicken
2. Warten bis Build fertig (Logs anzeigen lassen)
3. **URL testen**: https://zielsteuerfrei.de

---

## Automatisches Deployment (Git Push)

### Webhook einrichten:
1. In Coolify: **Settings** → **Webhooks** → URL kopieren
2. Auf GitHub: Repository → Settings → Webhooks → Add webhook
3. Payload URL: `https://coolify.praedurion.com/webhooks/github`
4. Content type: `application/json`
5. Secret: (aus Coolify)
6. Events: Push, Pull Request

**Ab jetzt:** Jeder `git push` auf `main` triggered automatisch Deployment.

---

## Troubleshooting

### Problem: Build failed
**Lösung:** 
- Logs checken unter **Deployments** → [Build-ID]
- Prüfen ob `index.html` im richtigen Ordner liegt
- Base Directory korrigieren

### Problem: 404 Not Found
**Lösung:**
- Publish Directory auf `public/` oder `./` setzen
- Falls SPA/Router: `try_files $uri $uri/ /index.html;` in nginx.conf

### Problem: SSL Error
**Lösung:**
- Domain DNS prüfen (A-Record auf Coolify-Server IP)
- Let's Encrypt neu ausstellen
- Port 80 muss erreichbar sein für ACME Challenge

---

## Empfohlene Ordnerstruktur im Repo

```
zielsteuerfrei-website/
├── public/
│   ├── index.html          # Hauptseite
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── blog/               # Optional
├── funnel/                 # Sales funnel (separat)
│   └── index.html
├── docker-compose.yml      # Optional für Coolify
├── Dockerfile             # Optional (siehe Option B)
└── README.md
```

---

## Quick Reference: Commands

```bash
# Lokal testen
python3 -m http.server 8000 --directory public/

# Oder mit Node.js npx
npx serve public/

# Git push (triggert Deployment)
git add .
git commit -m "Update content"
git push origin main
```

---

## Nächste Schritte

1. [ ] Projekt in Coolify anlegen
2. [ ] Domain konfigurieren
3. [ ] GitHub Webhook einrichten
4. [ ] Ersten Deploy testen
5. [ ] Custom 404-Seite erstellen

---

## Support

Bei Problemen:
- Coolify Docs: https://coolify.io/docs
- Coolify Discord: https://discord.gg/coolify
- Oder: Schick mir Screenshot vom Fehler

---

*Erstellt: 2026-02-24*
*Repository: https://github.com/aurelius-claw/zielsteuerfrei-website*
