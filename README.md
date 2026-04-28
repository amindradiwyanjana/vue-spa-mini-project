# 🎵 SoundSoul

SoundSoul is a music discovery app where you can browse tracks, search for your favorites, and explore artist details — all in a clean, modern interface with full dark mode support.

Built as a mini project for CS3404: GUI Programming using Vue 3, TypeScript, and Tailwind CSS.

**Author:** EDIRISURIYA E.M.A.D
**Reg No:** EG/2023/5584

---

## Getting Started

First make sure you have [Bun](https://bun.sh/) installed on your machine.

Then clone the project and install dependencies:

```bash
git clone https://github.com/amindradiwyanjana/vue-spa-mini-project.git
cd vue-spa-mini-project
bun install
```

To start the app:

```bash
bun run dev
```

Open your browser and head to `http://localhost:5173` and you should see the app running.

---

## What it does

- Browse a grid of music tracks fetched live from DummyJSON
- Search tracks by song title or artist name in real time
- Click any track to open a full detail view
- Toggle between dark and light mode
- Collapse the sidebar for a more immersive view on smaller screens

---

## Built with

- Vue 3 — Composition API with `<script setup>`
- TypeScript — strict interfaces, no `any` types
- Tailwind CSS — utility-first responsive styling
- Vite — lightning fast dev server
- Bun — package manager and runtime
- DummyJSON — public API for track data