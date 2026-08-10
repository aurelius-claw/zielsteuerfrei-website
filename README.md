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
npm run lint
```

## Inhalte pflegen

Die Blogartikel liegen in zwei Modulen:

- `src/data/articles.ts` haelt die Metadaten (Titel, Kategorie, Datum,
  Lesezeit, Teaser). Das ist die einzige Quelle fuer Uebersicht und
  Detailseite. Datum immer als ISO-Wert `YYYY-MM-DD` pflegen, die Anzeige
  formatiert sich daraus selbst.
- `src/data/article-details.ts` haelt Volltext, Quellen und FAQ. Dieses
  Modul laedt nur die Detailseite, damit die Uebersicht nicht das komplette
  Artikel-HTML mitziehen muss.

Ein neuer Artikel braucht in beiden Dateien denselben `slug`.

## Deployment

Der Produktionsserver prueft den Branch `main` jede Minute. Sobald ein neuer Commit vorliegt, fuehrt `/usr/local/bin/deploy-zielsteuerfrei` diese Schritte aus:

1. Repository unter `/data/websites/zielsteuerfrei-website` aktualisieren.
2. Abhaengigkeiten mit `npm ci` installieren.
3. Produktionsbuild mit `npm run build` erstellen.
4. Den Container `zielsteuerfrei` neu starten.

Der Nginx-Container liefert den Ordner `/data/websites/zielsteuerfrei-website/dist` aus. Der zuletzt veroeffentlichte Commit steht auf dem Server in `.last-deploy`.

### Serverkonfiguration

`deploy/nginx.conf` ist die Auslieferungskonfiguration des Containers. Sie
wird schreibgeschuetzt nach `/etc/nginx/conf.d/default.conf` eingehaengt:

```bash
docker run -d --name zielsteuerfrei --restart unless-stopped --network coolify \
  -v /data/websites/zielsteuerfrei-website/dist:/usr/share/nginx/html:ro \
  -v /data/websites/zielsteuerfrei-website/deploy/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  nginx:alpine
```

Weil die Datei im Repository liegt, holt der Deploy-Cron Aenderungen daran
mit dem restlichen Code; der Container-Neustart im selben Lauf uebernimmt
sie. Traefik routet ueber `/data/coolify/proxy/dynamic/zielsteuerfrei.yaml`
auf `http://zielsteuerfrei:80`, der Containername ist also Teil der Route
und darf sich nicht aendern.

GitHub Actions fuehrt bei jedem Push zusaetzlich einen unabhaengigen Build-Check aus. Der Workflow benoetigt keine Server-Secrets und nimmt selbst kein Deployment vor.
