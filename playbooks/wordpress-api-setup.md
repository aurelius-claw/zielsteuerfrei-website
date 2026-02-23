# Playbook: WordPress REST API Setup

## Ziel
Autonomes Publishing von Content via OpenClaw auf niemieckieubezpieczenia.de

## Schritte

### 1. WordPress Application Password erstellen
- WP-Admin → Users → Profile → Application Passwords
- Name: "OpenClaw Publishing"
- Kopiere: Username + Password (wird nur einmal angezeigt)

### 2. Credentials sichern
- Speichere in `/root/.openclaw/credentials/wordpress.json`
- Format: `{ "url": "...", "username": "...", "app_password": "..." }`
- Berechtigungen: Nur root lesbar (`chmod 600`)

### 3. Verbindung testen
```bash
curl -u USERNAME:APP_PASSWORD \
  https://niemieckieubezpieczenia.de/wp-json/wp/v2/posts
```

### 4. Skill erstellen
- Location: `/usr/lib/node_modules/openclaw/skills/wordpress/SKILL.md`
- Functions: `wp_list_posts()`, `wp_create_post()`, `wp_update_post()`

### 5. Erster Test-Post
- Erstelle Draft via API
- Review in WP-Admin
- Freigabe für Autonomous Publishing

## Erledigt
- [ ] Application Password erstellt
- [ ] Credentials gespeichert
- [ ] Verbindung getestet
- [ ] Skill dokumentiert
- [ ] Test-Post als Draft

---
*Blocked on: Martin muss Application Password in WP erstellen*
