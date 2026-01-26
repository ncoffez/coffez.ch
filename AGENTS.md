# Agent Development Guide for Coffez.ch

This guide helps AI agents work with the Coffez.ch Nuxt 3 + Firebase project.

## Essential Commands

### Node Version Management
This project uses **Node 22 (LTS)**. Use the included `.nvmrc` file to switch versions:
```bash
nvm use
```

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

# Manual Deploy (Manual Trigger)
# This will build the project, functions and deploy to Firebase
npm run deploy
```

### Rollbacks
In case of issues, you can roll back the Hosting deployment via the Firebase Console or CLI:
```bash
# List recent releases
firebase hosting:releases:list

# Rollback to a specific version (use version ID from list)
firebase hosting:clone <site-id>:<version-id> live
```
Note: Function rollbacks must be handled by redeploying the previous stable code version.

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