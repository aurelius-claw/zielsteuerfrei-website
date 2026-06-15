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

Der Produktionsserver prueft den Branch `main` jede Minute. Sobald ein neuer Commit vorliegt, fuehrt `/usr/local/bin/deploy-zielsteuerfrei` diese Schritte aus:

1. Repository unter `/data/websites/zielsteuerfrei-website` aktualisieren.
2. Abhaengigkeiten mit `npm ci` installieren.
3. Produktionsbuild mit `npm run build` erstellen.
4. Den Container `zielsteuerfrei` neu starten.

Der Nginx-Container liefert den Ordner `/data/websites/zielsteuerfrei-website/dist` aus. Der zuletzt veroeffentlichte Commit steht auf dem Server in `.last-deploy`.

GitHub Actions fuehrt bei jedem Push zusaetzlich einen unabhaengigen Build-Check aus. Der Workflow benoetigt keine Server-Secrets und nimmt selbst kein Deployment vor.
