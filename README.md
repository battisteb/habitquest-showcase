<p align="center"><img src="docs/assets/icon.png" width="96" alt="HabitQuest" /></p>

<h1 align="center">HabitQuest</h1>
<p align="center"><b>A habit tracker built like an RPG.</b> Habits become daily quests, every good day moves your hero across a pixel-art sea, and bad habits become the bosses waiting on the way.</p>

<p align="center">
  <a href="https://gethabitquest.com">Website</a> ·
  <a href="https://habitquest.expo.app">Play on the web</a> ·
  iOS (in review) · Android (closed test)
</p>

<p align="center">
  <img src="docs/assets/screens/today.png" width="200" alt="Today: quests, to-dos and the voyage" />
  <img src="docs/assets/screens/voyage-world.png" width="200" alt="The world map, half in the fog" />
  <img src="docs/assets/screens/voyage-island.png" width="200" alt="An island of the voyage" />
  <img src="docs/assets/screens/chapter.png" width="200" alt="A chapter of the story" />
</p>
<p align="center">
  <img src="docs/assets/screens/bottle.png" width="200" alt="A message in a bottle" />
  <img src="docs/assets/screens/todos.png" width="200" alt="To-dos with steps" />
  <img src="docs/assets/screens/add-quest.png" width="200" alt="Creating a quest" />
  <img src="docs/assets/screens/profile.png" width="200" alt="The hero and their rank" />
</p>

## What it is

- **Daily quests**: every habit earns XP and gold; streaks forgive a missed day and a "mini version" counts on hard days.
- **The Voyage** *(new)*: your good days sail the hero from island to island on a world map that comes out of the fog. Each archipelago has stages, story chapters told by Pip the slime, and messages in a bottle kept in a logbook with one page per island.
- **Bosses on the map** *(new)*: the Doomscroll Kraken, the Notification Siren, the Later Specter, the Snooze Golem, the Couch Troll and the Night Owl wait on the route; every completed quest hits the boss of the week.
- **Seasonal arcs**: eight good weeks in a season earn its rune and its gear.
- **To-dos next to habits** *(new)*: one-off tasks with steps and any due date, in a pixel calendar.
- **Quick quest creation** *(new)*: name, category and frequency in one step, with suggestions; details (goal, reason, timer, checklist, reminder) only if you want them.
- **A hero that grows**: a 32×32 pixel hero you create like an RPG character, with poses, gear and six ranks from Novice to Legend.
- **Pip checks in**: a daily mood check-in that adapts Pip's messages, and Stats that show what does you good.
- **Social**: friends, turn-based duels, arena leagues and co-op challenges.
- **Habit mastery**: after 21 days in a row, raise your own goal and earn a star.
- Five languages: English, French, Japanese, Korean, Traditional Chinese.

## How it's built

| | |
|---|---|
| App | Expo SDK 55, React Native, expo-router, TypeScript (strict), Legend-State + MMKV for offline-first state, Reanimated |
| Backend | Supabase: Postgres with Row Level Security on every table, RPC functions and triggers, Edge Functions (Deno) |
| Game rules | Server-authoritative: XP, gold, levels, streaks, the voyage and bosses are computed in Postgres, the client never writes them |
| Pixel art | Map, islands, bosses and hero drawn by code: procedural painters for the sea, islands and fog, a sprite composer for the hero |
| Payments | RevenueCat (App Store / Google Play subscriptions) |
| Delivery | EAS Build and over-the-air updates, web app on EAS Hosting, CI on GitHub Actions |
| Quality | 900+ Jest / React Native Testing Library tests, 50 pgTAP database test suites, Monte-Carlo simulation of the game economy, a web smoke test after every deploy |

Some numbers from the private codebase: 90+ database migrations, 40 architecture decision records, 7 Edge Functions.

## About

Designed and built solo by **Battiste Boungo**, from game design and pixel art to backend, payments and store releases.
The source code is private; this repository holds the public website ([gethabitquest.com](https://gethabitquest.com), in `docs/`).

Contact: habitquest.application@gmail.com · [GitHub](https://github.com/battisteb)

© 2026 Battiste Boungo. All rights reserved.
