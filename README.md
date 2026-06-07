# Coffez.ch

Coffez.ch is the website for Pascal Coffez, built with Nuxt 4 and Firebase. It combines a multilingual marketing site with live event pages, sales galleries, an admin area, and Firebase-backed media workflows.

The production site is available at [coffez.ch](https://www.coffez.ch).

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS
- Firebase Hosting
- Firebase Functions
- Firestore

## Requirements

- Node.js 22
- npm
- Firebase CLI for manual deploys

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
  - `ENV`
- Public:
  - `FIREBASE_FRONTEND_KEY`
  - `GOOGLE_MAPS_EMBED_API_KEY`

Firebase functions still use `process.env.*` directly where appropriate.

## Deployment

There are two deployment paths in this repository:

- Manual deploy:
  - `npm run deploy`
- GitHub Actions publish on push to `main`:
  - [deploy-hosting-on-push.yml](/Users/nco/Coffez-Labs/coffez.ch/.github/workflows/deploy-hosting-on-push.yml:1)

The publish workflow expects the relevant GitHub secrets to be configured, including Firebase credentials and function-related secrets.

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

## Contact

For project or production questions, contact Nicolas Coffez at <ncoffez@gmail.com>.

## License

[MIT](https://opensource.org/licenses/MIT)  
Copyright © 2023 - present, Nicolas Coffez
