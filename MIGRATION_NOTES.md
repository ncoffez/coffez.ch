# Migration Progress Notes

## Overview
Documenting the major version upgrade and cleanup process for the Coffez.ch Nuxt 3 + Firebase project.

## Completed Phases

### ✅ Phase 0: Testing Infrastructure Setup (2025-01-26)
**Status:** Complete
**Branch:** main (commit: c19901d)

**What was done:**
- Installed Vitest, Playwright, @nuxt/test-utils
- Created vitest.config.ts (node environment)
- Created playwright.config.ts
- Created tests/setup.ts (Firebase mocks)
- Created tests/mocks/firebase.ts (test fixtures)
- Created tests/api/firebase.spec.ts
- Created tests/functions/reduceImage.spec.ts
- Created tests/e2e/homepage.spec.ts
- Updated package.json with test scripts
- Updated AGENTS.md with GitHub workflow documentation

**Test Results:**
- 6 test files passed
- 10 tests passed
- 25 tests skipped (placeholder tests)
- 0 failures

**Files Added:**
- vitest.config.ts
- playwright.config.ts
- tests/api/firebase.spec.ts
- tests/e2e/homepage.spec.ts
- tests/functions/reduceImage.spec.ts
- tests/mocks/firebase.ts
- tests/setup.ts
- tests/ directory structure

---

### ✅ Phase 1: Security Patch Updates (2025-01-26)
**Status:** Complete
**Branch:** phase1-security-updates (commit: aea4b12)
**Preview URL:** Auto-deploying by GitHub Actions

**What was done:**
- Updated axios to 1.13.3 (fixes GHSA-4hjh-wcwx-vvwj)
- Updated @vueuse packages to 14.1.0
- Updated firebase-admin to 13.6.0
- Updated typescript to 5.9.3
- Updated @types/node to 22.19.7
- Ran `npm update --legacy-peer-deps` to resolve transitive dependencies

**Security Results:**
- Before: 32 vulnerabilities (2 critical, 17 high, 8 moderate, 5 low)
- After: 0 vulnerabilities ✅

**Tests:** All passing (6 passed, 25 skipped)
**Build:** Successful

**Preview Deployment:** GitHub Actions will automatically deploy to preview as function name: `Phase1SecurityUpdatesServer`

---

## In Progress

### 🔲 Phase 2: Firebase SDK 11→12 Migration
**Status:** Not started
**Branch:** To be created: phase2-firebase-11-to-12-migration
**Risk Level:** Medium

**Planned Changes:**
- Update Firebase SDK from 11.x to 12.8.0
- Verify all code is compatible with modular API (already using in v11+)
- Test all 10 critical Firebase functions in preview environment
- Update Firebase Functions if needed

**Critical Functions to Test:**
- functions:sendmail - Email confirmations
- functions:reduceImage - Image processing
- functions:getSlackPush - Slack notifications
- functions:getEventList - Event queries
- functions:newGallery - Gallery creation
- functions:getAppleShortcut - Apple shortcuts
- functions:uploadEventCover - Event cover uploads
- functions:uploadGalleryImage - Gallery image uploads
- functions:uploadGalleryVideo - Gallery video uploads
- functions:updateCurrentLocation - Location updates

---

## Upcoming Phases

### 📌 Phase 3: Nuxt 4 Preparation (Codemods)
**Status:** Not started
**Branch:** phase3-nuxt4-prep-codemods
**Risk Level:** Medium

**Planned Changes:**
- Run npx codemod@latest nuxt/4/migration-recipe
- Enable compatibilityVersion: 4
- Keep current directory structure
- Test all components/composables
- Fix any issues from codemods

---

### ⚡ Phase 4: Full Nuxt 4 Upgrade
**Status:** Not started
**Branch:** phase4-nuxt4-full-upgrade
**Risk Level:** HIGH

**Planned Changes:**
- Create app/ directory structure
- Move components, composables, layouts, middleware, pages, plugins, utils, app.vue to app/
- Run npx nuxi upgrade
- Update nuxt.config.ts
- Test everything thoroughly
- Extensive manual testing

**Critical Step:** Test ALL 10 Firebase functions in preview before merging to main

---

### ✨ Phase 5: Post-Migration Stabilization
**Status:** Not started
**Branch:** phase5-nuxt4-optimizations
**Risk Level:** Low

**Planned Changes:**
- Enable Nuxt 4 performance features
- Improve test coverage
- Update AGENTS.md for Nuxt 4 patterns
- Final testing

---

## Testing Infrastructure

Current Test Coverage:
- Unit Tests: 6 test files, 10 tests passing, 25 skipped (placeholders)
- E2E Tests: Template created, needs expansion

Target Coverage: 80% (as agreed)

Next Steps for Testing:
- Implement skipped tests for critical components
- Add E2E tests for all major user flows
- Add API integration tests for all endpoints
- Add visual regression tests

---

## Breakdown by Risk

| Phase | Duration | Risk | Branch Name | Preview Deploy |
|-------|----------|------|-------------|----------------|
| Phase 0 | 4-6 hours | Low | n/a | N/A |
| Phase 1 | 1-2 hours | Low | phase1-security-updates | Phase1SecurityUpdatesServer ⏳ |
| Phase 2 | 2-3 hours | Medium | phase2-firebase-11-to-12-migration | Phase2Firebase11To12MigrationServer |
| Phase 3 | 2-3 hours | Medium | phase3-nuxt4-prep-codemods | Phase3Nuxt4PrepCodemodsServer |
| Phase 4 | 4-6 hours | High | phase4-nuxt4-full-upgrade | Phase4Nuxt4FullUpgradeServer |
| Phase 5 | 2-3 hours | Low | phase5-nuxt4-optimizations | Phase5Nuxt4OptimizationsServer |

**Total Estimated Time:** 15-23 hours

---

## Notes

- GitHub Actions automatically deploy preview environments for non-main branches
- Function names are dynamically generated from branch names (camelCase)
- Preview URLs are automatically added to README.md by GitHub Actions
- Must test ALL 10 critical Firebase functions before merging to main
- Manual verification required after each phase before merging to main

---

## Questions Logged

1. ✅ Directory structure: Migrating to app/ directory (confirmed)
2. ✅ Testing coverage: Target 80% (confirmed)
3. ✅ Critical functions: All 10 Firebase functions are critical (confirmed)
4. ✅ Deployment verification: Preview before merge (confirmed)
5. ✅ Manual testing: No documentation needed, verified in preview instead

---

Last Updated: 2025-01-26
Current Branch: phase1-security-updates
Next Step: Wait for Phase 1 preview deployment → Verify → Merge to main → Start Phase 2