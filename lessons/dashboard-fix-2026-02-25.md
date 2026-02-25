# Dashboard Fix - 2026-02-25

## Problem
Dashboard zeigt keine Agenten, CPU, Cron-Jobs.

## Ursache 1. Versuch
Vermutung: Statischer Export (output: 'export') cached HTML

## Tatsächliche Ursache
404 Fehler - Seite existiert nicht.

## Fixes Applied
1. Rebuild + PM2 restart - keine Änderung
2. next.config.ts: output: 'standalone' war korrekt
3. page.tsx: 'use client' vorhanden

## Root Cause
Build erfolgreich, aber Route/Datei issue möglichweise:
- /app/page.tsx Pfadproblem
- Oder dist corruption

## Nächste Schritte
- Prüfen ob /app/page.tsx existiert und valide
- Alternative: /pages/index.tsx nutzen
- Dist löschen und clean rebuild
