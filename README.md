# Ziel:steuerfrei Website

React/Vite Website fuer zielsteuerfrei.de.

## Lokal entwickeln

```bash
npm ci
npm run dev
```

## Build testen

```bash
npm run build
```

## Deployment

Das Deployment laeuft ueber GitHub Actions. Jeder Push auf `main` baut die Website neu und laedt den fertigen `dist/` Ordner auf den Server. Zusaetzlich kann derselbe Workflow manuell gestartet werden.

1. In GitHub das Repository `aurelius-claw/zielsteuerfrei-website` oeffnen.
2. `Settings` -> `Secrets and variables` -> `Actions` oeffnen.
3. Diese Repository-Secrets anlegen:

| Secret | Bedeutung |
| --- | --- |
| `DEPLOY_HOST` | Server-Host oder IP-Adresse |
| `DEPLOY_PORT` | SSH-Port, optional. Wenn leer, wird Port 22 genutzt. |
| `DEPLOY_USER` | SSH-Benutzer auf dem Server |
| `DEPLOY_KEY` | Privater SSH-Key fuer den Deploy-Zugriff |
| `DEPLOY_PATH` | Webroot auf dem Server, z. B. `/var/www/zielsteuerfrei.de/html` |

Automatisch deployen:

1. Lokal Aenderungen committen.
2. Auf `main` zu GitHub pushen.
3. GitHub Actions startet den Workflow `Deploy website` automatisch.

Manuell redeployen:

1. In GitHub `Actions` oeffnen.
2. Workflow `Deploy website` auswaehlen.
3. `Run workflow` klicken.

Der Workflow baut die Website mit `npm run build` und kopiert den Inhalt von `dist/` per SSH/rsync in den Server-Webroot.
