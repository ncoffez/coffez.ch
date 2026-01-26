import { vi } from 'vitest'

// Mock Firebase for unit tests - keep Timestamp but mock other methods
vi.mock('firebase/firestore', async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    collection: vi.fn(),
    doc: vi.fn(),
    getDoc: vi.fn(),
    getDocs: vi.fn(),
    query: vi.fn(),
    where: vi.fn(),
    orderBy: vi.fn(),
    limit: vi.fn(),
    addDoc: vi.fn(),
    updateDoc: vi.fn(),
    deleteDoc: vi.fn(),
    setDoc: vi.fn(),
  }
})

// Mock Firebase for unit tests
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
  getApps: vi.fn(() => []),
}))

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    onAuthStateChanged: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  })),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}))

vi.mock('firebase/functions', () => ({
  getFunctions: vi.fn(),
  httpsCallable: vi.fn(),
}))

vi.mock('firebase/analytics', () => ({
  logEvent: vi.fn(),
  isSupported: vi.fn(() => Promise.resolve(true)),
}))

// Setup global test utilities
global.fetch = vi.fn()

// Mock Nuxt composables
vi.mock('#app', () => ({
  useNuxtApp: vi.fn(() => ({
    $db: {},
    $auth: {},
    $functions: {},
  })),
  useRoute: vi.fn(() => ({
    params: {},
    query: {},
    path: '/',
  })),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
  })),
}))

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  limit: vi.fn(),
  addDoc: vi.fn(),
  updateDoc: vi.fn(),
  deleteDoc: vi.fn(),
  setDoc: vi.fn(),
  Timestamp,
}))

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    onAuthStateChanged: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  })),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}))

vi.mock('firebase/functions', () => ({
  getFunctions: vi.fn(),
  httpsCallable: vi.fn(),
}))

vi.mock('firebase/analytics', () => ({
  logEvent: vi.fn(),
  isSupported: vi.fn(() => Promise.resolve(true)),
}))

// Setup global test utilities
global.fetch = vi.fn()

// Mock Nuxt composables
vi.mock('#app', () => ({
  useNuxtApp: vi.fn(() => ({
    $db: {},
    $auth: {},
    $functions: {},
  })),
  useRoute: vi.fn(() => ({
    params: {},
    query: {},
    path: '/',
  })),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
  }))
}))

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  limit: vi.fn(),
  addDoc: vi.fn(),
  updateDoc: vi.fn(),
  deleteDoc: vi.fn(),
  setDoc: vi.fn(),
}))

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({
    onAuthStateChanged: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  })),
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}))

vi.mock('firebase/functions', () => ({
  getFunctions: vi.fn(),
  httpsCallable: vi.fn(),
}))

vi.mock('firebase/analytics', () => ({
  logEvent: vi.fn(),
  isSupported: vi.fn(() => Promise.resolve(true)),
}))

// Setup global test utilities
global.fetch = vi.fn()

// Mock Nuxt composables
vi.mock('#app', () => ({
  useNuxtApp: vi.fn(() => ({
    $db: {},
    $auth: {},
    $functions: {},
  })),
  useRoute: vi.fn(() => ({
    params: {},
    query: {},
    path: '/',
  })),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
  })),
}))