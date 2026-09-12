# Weekly Schedule — Recomp Night Shift

A mobile-first progressive web app (PWA) for tracking a comprehensive body recomposition program tailored to a night shift schedule (Sun–Thu). Built with vanilla HTML/CSS/JS with zero build steps, dependencies, or backend servers.

## Features

### Schedule & Day Hub
- **Interactive Schedule Timeline**: Checkable time blocks, provisional blocks, custom block creation, and versioned schedule migration.
- **Modular Day Hub Dashboard**: Configurable widgets for macros, fasting timer, motivational affirmations, daily todos, to-don'ts, up-next schedule blocks, upcoming meals, workout routines, and check-ins.
- **Dedicated Daily Logging Strip**: One-tap daily tracking for:
  - Morning and evening weight, body fat %, and muscle mass
  - Sleep duration and sleep quality
  - Caffeine intake logging (mg & timing)
  - Supplements and scoop/powder logging
  - Water intake tracking
  - Sauna sessions and heat exposure
  - Cardio, step counts, and progress photos

### Nutrition & Meal Planning
- **Macro & Calorie Tracker**: Real-time progress bars for protein, carbohydrates, fats, and total caloric targets.
- **Sticky Food Database**: Custom food catalog with persistent edits, custom serving sizes, and nutrition calculations.
- **Smart Meal Planner**: Automated meal schedules, out-of-stock item flagging, and intelligent substitution/swap recommendations.
- **Phase & Weekly Rollups**: Multi-day macro averages, compliance tracking, and phase-by-phase nutrition views.

### Strength & Habits
- **Workout & Volume Tracking**: Routine tracking, exercise sets, reps, load, and total session volume metrics.
- **Consistency & Calendar Views**: Multi-week consistency rings, habit adherence scoring, and monthly calendar heatmaps.
- **Trading Journal**: Dedicated trading block session logging with execution notes and dual-metric PnL tracking.
- **Chronological Timeline**: Unified daily timeline capturing workouts, meals, logs, and scheduled events in sequence.

### Architecture & Interface
- **Responsive Dual UI**: Mobile-first layout with floating tab bar and expandable quick drawers, plus full desktop sidebar view.
- **Offline-First PWA**: Network-first Service Worker caching with offline fallback support and homescreen installability.
- **Private & Local-First Storage**: 100% client-side storage using `localStorage` and IndexedDB. Date-isolated architecture ensures each calendar day operates independently without cross-day state corruption.

---

## Stack & Directory Structure

- **App Shell**: Single-file app in [`index.html`](index.html), styled with custom CSS variables and dark-mode aesthetic.
- **Service Worker**: [`sw.js`](sw.js) handles offline asset caching and immediate cache-updating on deploy.
- **PWA Manifest**: [`manifest.json`](manifest.json) configured for standalone portrait display.
- **Data Layers**:
  - Browser Storage: Photos, logs, weights, and daily state remain private in `localStorage` / IndexedDB.
  - Personal Profile: Schedule templates, custom foods, baseline metrics, and goals live in [`personal/`](personal/).

### Personal Profile Files

| File | Purpose | Git Status |
|------|---------|------------|
| `personal/personal-profile.js` | Your active profile (schedule, meals, macros, foods, baseline) | Gitignored |
| `personal/historical-seeds.js` | Historical health data backfills (Bevel, Renpho, InBody) | Gitignored |
| `personal/debug-backup.js` | Local debug backups and data restore snapshots | Gitignored |
| `personal/personal-profile.prod.js` | Production profile exported for GitHub Pages deployment | Committed |
| `personal/*.example.js` | Template files with starter data for new users | Committed |

### Script Loading Cascade

When the app opens, [`personal/load-personal.js`](personal/load-personal.js) loads profiles in hierarchical order, with later scripts overriding earlier defaults:
1. `personal/historical-seeds.example.js` (baseline example seeds)
2. `personal/personal-profile.example.js` (starter profile)
3. `personal/personal-profile.prod.js` (deployed production profile)
4. `personal/historical-seeds.js` (your private local historical data, if present)
5. `personal/personal-profile.js` (your private local profile, if present)
6. `personal/debug-backup.js` (local debug recovery data, if present)

---

## Usage & Development

### Running Locally

Opening `index.html` directly via `file://` works for the app interface and personal data overrides (service worker and manifest registration are skipped automatically on `file://` to avoid console warnings).

To test PWA installation or offline service worker caching, serve locally:

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

### Preparing for Deployment

When deploying to GitHub Pages or static hosting where gitignored files are not uploaded, sync your local `personal-profile.js` into `personal-profile.prod.js` using the deployment helper:

```bash
bash scripts/prepare-deploy.sh
```

This ensures your meals, targets, and foods are available on the hosted app without exposing raw private seed files.

### Sharing with Others

When someone else clones the repository, gitignored files are omitted. They can copy the template files and customize their own profile:

```bash
cp personal/personal-profile.example.js personal/personal-profile.js
cp personal/historical-seeds.example.js personal/historical-seeds.js
```

All logged data, photos, and journal entries will remain strictly within their own browser.

---

## GitHub Steps

### First time setup
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/carsoncarpenter7/weekly-schedule.git
git push -u origin main
```

### Force push (if repo already has content)
```bash
git push -u origin main --force
```

### Subsequent updates
```bash
git add .
git commit -m "update"
git push
```
