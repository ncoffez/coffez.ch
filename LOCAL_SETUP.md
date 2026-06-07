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

If you see socket permission errors from Nuxt on macOS, use the repository's `npm run dev` script as-is. It already routes temp files through `.tmp`.

## Environment Variables Required

- FIREBASE_FRONTEND_KEY - Get from Firebase Console
- FIREBASE_ADMIN_KEY - Get from Firebase Console  
- GOOGLE_MAPS_EMBED_API_KEY - Get from Google Cloud Console
- ENV=development - Set this in .env.local
