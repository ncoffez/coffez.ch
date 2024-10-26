// Ensure that the date is correctly converted from a timestamp, including handling edge cases.

// utils/dateFromTimestamp.test.ts
// This test file covers the `dateFromTimestamp` utility function, which converts a Firebase `Timestamp` object into a JavaScript `Date` object. Testing ensures that the function correctly converts valid timestamps and handles edge cases. This is meaningful because timestamps are commonly used in Firebase to track event times, and accurate conversion is essential for displaying dates.

import { describe, test, expect } from 'vitest';
import { Timestamp } from 'firebase/firestore';
import dateFromTimestamp from './dateFromTimestamp';

describe('dateFromTimestamp', () => {
  // Test if the function correctly converts a Firebase Timestamp to a Date object
  test('correctly converts a Timestamp to a Date', () => {
    const timestamp = new Timestamp(1609459200, 0); // January 1, 2021, at midnight UTC
    const date = dateFromTimestamp(timestamp);

    expect(date).toBeInstanceOf(Date);
    expect(date.toISOString()).toBe('2021-01-01T00:00:00.000Z');
  });

  // Test if the function handles null or undefined timestamps
  test('handles null or undefined timestamp', () => {
    expect(() => dateFromTimestamp(null as any)).toThrow();
    expect(() => dateFromTimestamp(undefined as any)).toThrow();
  });

  // Omitted tests:
  // - Edge case handling: Testing for unusual timestamps such as far future or past dates.
  // - Timezone verification: Ensure that the Date object returned reflects the correct timezone.
});
