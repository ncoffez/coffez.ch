# Agent Development Guide for Coffez.ch

This guide helps AI agents work with the Coffez.ch Nuxt 3 + Firebase project.

## Essential Commands

### Running Tests
```bash
# Run all tests
npx vitest run

# Run a single test file
npx vitest run path/to/test-file.test.ts
```

### Development
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Build and deploy
npm run deploy
```

### Code Quality
```bash
# Type checking
npx vue-tsc --noEmit
```

## Code Style Guidelines

### Imports & File Organization
- Import Vue composables from `vue` first, then third-party packages, then local modules
- Use `~/` alias for project root imports from Nuxt
- Group related imports with blank lines between categories
- Example:
  ```typescript
  import { ref, computed } from 'vue'
  import { useNuxtApp } from '#app'
  import { doc, getDoc } from 'firebase/firestore'
  ```

### Naming Conventions
- **Components**: PascalCase (e.g., `GalleryMasonry.vue`, `Header.vue`)
- **Composables**: camelCase with `use` prefix (e.g., `useCurrentUser.ts`, `useFirestore.ts`)
- **Utils**: camelCase functions (e.g., `toRelativeDate.ts`)
- **Server routes**: Lowercase with hyphens (e.g., `/api/getEvent/[event].ts`)
- **Icons**: PascalCase with `Icons` prefix (e.g., `IconsHeart.vue`)

### TypeScript Usage
- Prefer explicit types over `any`. Use proper type annotations for function parameters and returns.
- Use `export function` for utilities and composables
- Define interfaces for complex types
- Handle null/undefined explicitly:

  ```typescript
  export async function useCurrentUser() {
    const { $auth } = useNuxtApp()
    const user = ref<User | null>(null)
    // ...
  }
  ```

### Vue Components
- Use `<script setup lang="ts">` syntax
- Define props with types or validators:
  ```typescript
  defineProps({
    admin: {
      type: Boolean,
      required: false,
      default: false,
    },
  })
  ```
- Emit events properly typed:
  ```typescript
  const $emit = defineEmits(['close', 'open'])
  ```

### Error Handling
- Handle promise rejections with try/catch
- Validate Firebase document existence before access:
  ```typescript
  if (!galleryRef.exists()) router.push('/')
  ```
- Use proper type guards for Firebase queries

### File Naming
- Test files: match source file name with `.test.ts` suffix (e.g., `utils/toRelativeDate.test.ts`)
- Component files: match Vue component name exactly
- Server routes: match route structure (e.g., `server/api/getEvent/[event].ts`)

### Styling (Tailwind CSS)
- Use utility classes from Tailwind, defined in `tailwind.config.js`
- Prefer semantic class names for composition
- Scoped styles in `<style scoped>` blocks when utilities aren't enough

## Firebase Integration Patterns

### Frontend (Client-side)
- Access Firebase services via Nuxt app context:
  ```typescript
  const { $db, $auth, $functions } = useNuxtApp()
  ```
- Use composables for Firebase queries (`useFirestore`, `useCurrentUser`)
- Initialize Firebase in `plugins/useFirebase.ts`

### Backend (Server-side)
- Use Firebase Admin SDK via `server/firestore.ts`:
  ```typescript
  import { adminDB } from '~/server/firestore'
  ```
- Server-side functions return JSON responses via `defineEventHandler`
- Handle errors gracefully with appropriate HTTP status codes

## GitHub Actions Deployment Workflow

This project uses an unorthodox but efficient multi-branch deployment strategy that agents must understand.

### Overview

**Three main workflows control deployment:**

1. **deploy-hosting-on-push.yml** - Production hosting deployment
2. **deploy-functions-on-push.yml** - Smart Firebase Functions deployment
3. **preview-hosting-on-branch-push.yml** - Automatic preview environments

### Workflow 1: Production Hosting

**Triggers:**
- Push to `main` branch
- Files changed: any EXCEPT `functions/**` and `.github/**`

**Process:**
1. Runs on Node.js 20
2. Installs Firebase Tools v14.2.1
3. Builds Nuxt app with environment variables
4. Creates Firebase Service Account file
5. Deploys to Firebase Hosting (channel: "live")
6. Deploys server function: `functions:nuxt:server`

**Key characteristics:**
- ✅ Always deploys hosting on main branch push
- ✅ Always deploys the server function
- ❌ Ignores function-only changes (handled by workflow #2)
- 🔐 Uses production Firebase project: `coffez-ch`

### Workflow 2: Firebase Functions

**Triggers:**
- Push to `main` branch
- Files changed: only `functions/**` or `.github/workflows/deploy-functions-on-push.yml`

**Smart Deployment Logic:**

The workflow intelligently detects which functions changed to minimize deployment time.

**Scenario A - package.json changed:**
- Deploys ALL functions (full redeploy required)

**Scenario B - Specific function files changed:**
- Only deploys affected functions detected via git diff

**Detection pattern:**
```bash
CHANGED_FILES=$(git diff --name-only HEAD^ HEAD -- functions/)
case $file in
  *sendmail*) deploys functions:sendmail ;;
  *reduceImage*) deploys functions:reduceImage ;;
  # ... pattern matching for each function
esac
```

**Critical:** This enables rapid deployments - only changed functions are deployed!

### Workflow 3: Preview Environments

**Triggers:**
- Push to ANY branch EXCEPT `main`
- Files changed: any EXCEPT `functions/**` and workflow files

**Dynamic Function Naming:**

Function names are auto-generated from branch names:
```
branch: "feature/testing-upgrade"
→ Function: "FeatureTestingUpgradeServer"

branch: "phase1-security-updates"
→ Function: "Phase1SecurityUpdatesServer"
```

**Algorithm:**
```bash
BRANCH_NAME=$(echo $REF_NAME | tr '/' '-' | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
CAMEL_CASE=$(echo $BRANCH_NAME | awk -F- '{for(i=1;i<=NF;i++) 
  $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1' OFS="")
FUNCTION_NAME="${CAMEL_CASE}Server"
```

**Process:**
1. Generates function name from branch
2. Updates `firebase-preview.json` with dynamic function name
3. Builds Nuxt app (preview environment variables)
4. Deploys preview function
5. Deploy preview hosting (expires in 3 days)
6. Extracts preview URL
7. Updates README.md with new preview URL

**Key characteristics:**
- ✅ Automatic preview creation for all non-main branches
- ✅ URL tracking in README.md
- ❌ Prevents infinite loops (ignores workflow/config changes)
- ⏱️ Preview expires automatically (3 days)

### Firebase Configuration Files

**firebase.json** (main production):
```json
{
  "functions": [{ "source": ".output/server", "codebase": "nuxt", "runtime": "nodejs20" }],
  "hosting": { "public": ".output/public" }
}
```

**firebase-preview.json** (dynamic for previews):
```json
{
  "functions": [{ "source": ".output/server", "codebase": "nuxt", "runtime": "nodejs20" }],
  "hosting": { "public": ".output/public", "rewrites": [{ "source": "**", "function": "previewServer" }] }
}
```

**Key difference:** Preview uses `previewServer` function name (replaced dynamically).

### Deployment Implications

**For agents working on this project:**

1. **Feature branches = automatic preview deployments**
   - Any non-main branch push creates a preview environment
   - Function name derived from branch name
   - URL automatically added to README

2. **Main branch = production deployment**
   - Hosting always deploys on main
   - Functions deploy smartly (only changed ones)
   - Both workflows can fire simultaneously

3. **Testing strategy advantage:**
   - Perfect for migration work
   - Preview environment before production
   - Can test all 10 Firebase functions in preview
   - No risk to production during experiments

4. **Workflow conflicts to avoid:**
   - Don't commit README changes during migration (workflow modifies it)
   - Branch names are camelCased - plan accordingly
   - Function changes trigger smart redeploy - don't manually deploy

### Critical Functions List

All 10 Firebase functions are critical for production:
- `functions:sendmail` - Email confirmations
- `functions:reduceImage` - Image processing
- `functions:getSlackPush` - Slack notifications
- `functions:getEventList` - Event queries
- `functions:newGallery` - Gallery creation
- `functions:getAppleShortcut` - Apple shortcuts
- `functions:uploadEventCover` - Event cover uploads
- `functions:uploadGalleryImage` - Gallery image uploads
- `functions:uploadGalleryVideo` - Gallery video uploads
- `functions:updateCurrentLocation` - Location updates

**Important:** Before merging any branch to main, ALL these functions must work correctly in preview!

### Best Practices

1. **Use feature branches for all work** - Automatic preview makes testing easy
2. **Test thoroughly in preview before merge** - Preview = production replica
3. **Monitor README.md** - Check preview URLs are added correctly
4. **Coordinate branch names** - Meaningful names = readable function names
5. **Function testing** - Test all 10 critical functions in preview
6. **Production monitoring** - After main merge, watch production closely

## Testing Guidelines

- Write tests alongside source files with `.test.ts` suffix
- Use Vitest features: `describe`, `test`, `expect`
- Skip unimplemented tests with `test.skip()` with TODO comment
- Test happy paths, error paths, and edge cases

## Architecture Notes

### Directory Structure
- `components/`: Organize by feature (ui components in `components/ui/`)
- `composables/`: Reusable Vue composition functions
- `server/api/`: API route handlers (Nitro)
- `utils/`: Pure utility functions
- `pages/`: File-based routing with layouts

### State Management
- Use Vue 3 Composition API with `ref` and `computed`
- Leverage Nuxt `useAsyncData` for data fetching in pages
- Use `useRoute` and `useRouter` for navigation

### Internationalization
- Use `@nuxtjs/i18n` module
- Access translations via `$t()` in templates
- Locale files in `locales/` directory (de, fr, en)

## Important Patterns

- **Don't use `.filter()` on non-existent collections** - always check for existence first
- **Hybrid file extensions** - Some files are `.js`, others `.ts`. Match local conventions.
- **Avoid hardcoded values** - Use runtime config for environment variables
- **Type safety** - Always check if data exists before operations, especially with Firebase
- **Client-only components** - Use `<ClientOnly>` for components that require browser APIs (like localStorage)
- **Responsive design** - Mobile-first approach with Tailwind breakpoint utilities
- **Authentication** - Check user permissions, especially for admin routes

## Code Quality Principles

1. **Consistency over strictness** - Follow existing patterns in the codebase
2. **Type safety matters** - Use proper TypeScript types, avoid `any` unless necessary
3. **Test coverage** - Write tests for utilities and composables
4. **User experience** - Consider loading states, error states, and empty states
5. **Performance** - Use `<ClientOnly>` for heavy components, lazy load when appropriate