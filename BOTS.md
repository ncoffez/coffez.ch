# BOTS.md

This file gives automation agents a short, practical operating guide for this repository.

For deeper repository rules and coding conventions, also review [AGENTS.md](/Users/nco/Coffez-Labs/coffez.ch/AGENTS.md:1).

## Project Summary

- Framework: Nuxt 4
- Backend: Firebase App Hosting, Firebase Functions, and Nitro server routes
- Styling: Tailwind CSS
- Languages: German, English, French
- Runtime: Node 22

## First Steps

1. Use Node 22:

```bash
nvm use
```

2. Install dependencies:

```bash
npm ci
```

3. Start local development when needed:

```bash
npm run dev
```

## Important Commands

```bash
# Build the app
npm run build

# Build functions
npm run functions

# Deploy Firebase CLI-managed resources
npm run deploy

# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Type-checking
npx vue-tsc --noEmit
```

## Environment Expectations

Agents should assume `.env.local` is required for meaningful local work.

Common required values:

- `FIREBASE_FRONTEND_KEY`
- `FIREBASE_ADMIN_KEY`
- `FUNCTION_NAME=server`
- `GOOGLE_MAPS_EMBED_API_KEY`
- `ENV=development`

Nuxt runtime config is declared in [nuxt.config.ts](/Users/nco/Coffez-Labs/coffez.ch/nuxt.config.ts:1). Prefer `useRuntimeConfig()` over reading environment variables directly in Nuxt app code.

In Firebase App Hosting, prefer the platform-provided Firebase variables when available:

- `FIREBASE_WEBAPP_CONFIG`
- `FIREBASE_CONFIG`

## Coding Instructions

- Use `<script setup lang="ts">` in Vue components.
- Prefer explicit TypeScript types over `any`.
- Keep public env vars under `runtimeConfig.public`.
- Use Firebase via Nuxt app context on the client:
  - `const { $db, $auth, $functions } = useNuxtApp()`
- Use `~/server/firestore` for admin Firestore access on the server.
- Match existing file conventions: some files are `.js`, some are `.ts`.
- Check for missing data before filtering, mapping, or reading nested properties.

## Repo Areas

- `components/` contains most UI work.
- `locales/` controls translated copy and many card/media values.
- `functions/src/` contains Firebase function logic.
- `server/api/` contains Nitro endpoints.
- `pages/live/` and `pages/sales/` are user-facing route areas worth testing after changes.

## Deployment Notes

- The Nuxt app is intended to ship through Firebase App Hosting.
- Repo-level App Hosting config lives in [apphosting.yaml](/Users/nco/Coffez-Labs/coffez.ch/apphosting.yaml:1).
- `npm run deploy` is only for the remaining Firebase CLI-managed resources in this repository.
- App Hosting rollout setup still requires Firebase console/backend configuration outside the repo.

## Validation Guidance

After meaningful changes, prefer this order:

1. `npm run build`
2. `npx vue-tsc --noEmit`
3. relevant unit or e2e tests

For frontend fixes, verify behavior in the browser when possible, especially for:

- localized content
- live event links
- cards and media rendering
- admin-only flows
