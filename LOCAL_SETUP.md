# Local Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local and add your Firebase credentials
```

3. Start development server:
```bash
npm run dev
```

The app will run at http://localhost:3000

## Troubleshooting

If you see "spawn EBADF" error, it's a known issue with Nitro's Firebase preset in local development. The app should still load in the browser despite this error in the console.

If you see i18n config warnings, check that i18.config.ts exists (not .js).

## Environment Variables Required

- FIREBASE_FRONTEND_KEY - Get from Firebase Console
- FIREBASE_ADMIN_KEY - Get from Firebase Console  
- GOOGLE_MAPS_EMBED_API_KEY - Get from Google Cloud Console
- ENV=development - Set this in .env.local