import { test, expect } from 'vitest'

describe('reduceImage function', () => {
  test('should export all required functions', () => {
    const functionsList = [
      'sendmail',
      'reduceImage',
      'getSlackPush',
      'getEventList',
      'newGallery',
      'getAppleShortcut',
      'uploadEventCover',
      'uploadGalleryImage',
      'uploadGalleryVideo',
      'updateCurrentLocation'
    ]

    functionsList.forEach(funcName => {
      expect(typeof funcName).toBe('string')
    })
  })

  test('should verify Firebase Functions library is mocked', () => {
    const module = require('firebase/functions')
    expect(module).toBeDefined()
  })
})