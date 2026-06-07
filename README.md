# Coffez.ch

Coffez.ch is the website for Pascal Coffez, built with Nuxt 4 and Firebase. It combines a multilingual marketing site with live event pages, sales galleries, an admin area, and Firebase-backed media workflows.

The production site is available at [coffez.ch](https://www.coffez.ch).

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS
- Firebase App Hosting
- Firebase Functions
- Firestore

## Requirements

- Node.js 22
- npm
- Firebase CLI for local Firebase workflows

This repository includes an `.nvmrc` file:

```bash
nvm use
```

## Getting Started

1. Install dependencies:

```bash
npm ci
```

2. Create your local environment file:

```bash
cp .env.example .env.local
```

3. Fill in the required values in `.env.local`:

- `FIREBASE_FRONTEND_KEY`
- `FIREBASE_ADMIN_KEY`
- `FUNCTION_NAME=server`
- `GOOGLE_MAPS_EMBED_API_KEY`
- `ENV=development`

4. Start the dev server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000/` by default.

## Useful Commands

```bash
# Start local development
npm run dev

# Build the Nuxt app
npm run build

# Build Firebase functions
npm run functions

# Run unit tests
npm run test

# Run Playwright end-to-end tests
npm run test:e2e

# Type-check the app
npx vue-tsc --noEmit

# Build and deploy everything manually
npm run deploy
```

## Environment Notes

Nuxt runtime config is defined in [nuxt.config.ts](/Users/nco/Coffez-Labs/coffez.ch/nuxt.config.ts:1):

- Server-only:
  - `FIREBASE_ADMIN_KEY`
  - `FIREBASE_CONFIG`
  - `ENV`
- Public:
  - `FIREBASE_FRONTEND_KEY`
  - `FIREBASE_WEBAPP_CONFIG`
  - `GOOGLE_MAPS_EMBED_API_KEY`

Local development uses `FIREBASE_FRONTEND_KEY` and `FIREBASE_ADMIN_KEY` from `.env.local`.

In Firebase App Hosting:

- `FIREBASE_WEBAPP_CONFIG` is populated automatically for the web SDK
- `FIREBASE_CONFIG` is populated automatically for the Admin SDK
- [apphosting.yaml](/Users/nco/Coffez-Labs/coffez.ch/apphosting.yaml:1) is used for App Hosting runtime settings and additional environment variables

## Deployment

This project is now intended to deploy through Firebase App Hosting.

App Hosting setup is created in the Firebase console by connecting the GitHub repository and enabling rollouts from the live branch. Firebase’s App Hosting docs describe that flow here:

- [Get started with App Hosting](https://firebase.google.com/docs/app-hosting/get-started)
- [Configure App Hosting backends](https://firebase.google.com/docs/app-hosting/configure)

Repository-side App Hosting config lives in [apphosting.yaml](/Users/nco/Coffez-Labs/coffez.ch/apphosting.yaml:1).

`npm run deploy` no longer deploys the Nuxt app. It only deploys the remaining Firebase CLI-managed resources in this repository, such as custom Cloud Functions and Firestore configuration.

## Project Structure

- `app/`: Nuxt app shell
- `components/`: UI and feature components
- `composables/`: reusable Vue composables
- `functions/`: Firebase Functions source
- `locales/`: translation files for `de`, `en`, and `fr`
- `middleware/`: route middleware
- `pages/`: Nuxt routes
- `plugins/`: Nuxt plugins, including Firebase setup
- `public/`: static assets
- `server/`: Nitro server routes and server helpers
- `tests/`: Playwright end-to-end tests
- `utils/`: utility functions

## Features

- Multilingual public site
- Live event pages under `/live`
- Sales gallery pages
- Admin routes protected by Firebase auth and custom claims
- Firebase-backed image and media workflows

## Troubleshooting

- If `npm run dev` shows a socket permission error on macOS, use the repository script as provided. It already routes Nuxt temp files through `.tmp/`.
- If card content looks wrong in one language, check the locale files in `locales/`.
- If local Firebase-backed pages fail, verify both frontend and admin Firebase keys in `.env.local`.
- If App Hosting deploys fail, confirm the backend is connected to the correct GitHub repository and that the required App Hosting secret `GOOGLE_MAPS_EMBED_API_KEY` exists.

## Contact

For project or production questions, contact Nicolas Coffez at <ncoffez@gmail.com>.

## License

[MIT](https://opensource.org/licenses/MIT)  
Copyright © 2023 - present, Nicolas Coffez
