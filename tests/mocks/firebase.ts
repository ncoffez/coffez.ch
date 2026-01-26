import { vi } from 'vitest'

export const Timestamp = class Timestamp {
  constructor(public seconds: number, public nanoseconds: number) {}
  toDate() {
    return new Date(this.seconds * 1000)
  }
}

export const mockApp = {
  auth: () => ({
    currentUser: null,
    onAuthStateChanged: vi.fn(),
  }),
  firestore: () => ({
    collection: vi.fn(),
    doc: vi.fn(),
  }),
}

export const mockFunctions = {
  httpsCallable: vi.fn(),
  onRequest: vi.fn(),
  sendmail: vi.fn(),
  reduceImage: vi.fn(),
  getSlackPush: vi.fn(),
  getEventList: vi.fn(),
  newGallery: vi.fn(),
  getAppleShortcut: vi.fn(),
  uploadEventCover: vi.fn(),
  uploadGalleryImage: vi.fn(),
  uploadGalleryVideo: vi.fn(),
  updateCurrentLocation: vi.fn(),
}

export const mockFirestore = {
  collection: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  addDoc: vi.fn(),
  updateDoc: vi.fn(),
  deleteDoc: vi.fn(),
  setDoc: vi.fn(),
  Timestamp,
}

export const mockAuth = {
  currentUser: null,
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(),
}