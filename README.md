# Weekly Schedule — Recomp Night Shift

A mobile-first progressive web app for tracking a body recomposition program on a night shift schedule (Sun–Thu).

## Features

- Daily schedule timeline with checkable blocks
- Macro & calorie tracker (protein, carbs, fat)
- Progress tracking (weight, body fat, muscle mass)
- Nutrition page with weekly & phase views
- Meal planner with out-of-stock detection and swap suggestions
- Trading block, journal, sauna, and supplement tracking
- Date-isolated storage (each calendar day is independent)
- Auto-migrates schedule on version update

## Usage

Open `index.html` in any mobile browser — no server, build step, or dependencies required.

## Stack

Single-file HTML/CSS/JS app shell (`index.html`). **Live tracking** (macros, journal, photos, checked blocks) stays in `localStorage` / IndexedDB in your browser.

**Personal profile & historical import seeds** live in gitignored files under [`personal/`](personal/):

| File | Purpose |
|------|---------|
| `personal/personal-profile.js` | Schedule template, meals, baseline, goals, foods, etc. (your copy — not in git) |
| `personal/historical-seeds.js` | Bevel/Renpho/InBody/nutrition backfills (your copy — not in git) |
| `personal/*.example.js` | Empty templates committed for friends |

On load, [`personal/load-personal.js`](personal/load-personal.js) loads the `.example.js` files first, then your gitignored `personal-profile.js` / `historical-seeds.js` when those files exist (overwriting the examples). Opening `index.html` directly via `file://` works for the app and personal scripts (manifest and service worker are skipped on `file://` to avoid console errors). For install/PWA behavior, serve locally:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

### First-time setup (your machine)

Your extracted data is already in `personal/personal-profile.js` and `personal/historical-seeds.js` (gitignored). Keep those files when you pull app updates.

### Sharing the app with someone else

They clone the repo and get only the `.example.js` files — no weights, schedules, or import history. They copy and customize:

```bash
cp personal/personal-profile.example.js personal/personal-profile.js
cp personal/historical-seeds.example.js personal/historical-seeds.js
```

Photos and day-to-day logs are **not** in the repo; they remain in each person's browser storage.

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
