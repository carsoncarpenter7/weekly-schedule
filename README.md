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

Single-file HTML/CSS/JS. All data stored in `localStorage`.

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
