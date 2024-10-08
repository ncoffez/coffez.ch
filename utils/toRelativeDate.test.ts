import { expect, test, describe, it } from 'bun:test'
import { toRelativeDate } from './toRelativeDate'

const now = new Date('2024-07-05T10:00:00.000Z')

const testCases = [

  { input: new Date(2024, 5, 23), expected: '23.06.2024' },
  { input: new Date(2024, 5, 24), expected: '24.06.2024' },
  { input: new Date(2024, 5, 25), expected: '25.06.2024' },
  { input: new Date(2024, 5, 26), expected: '26.06.2024' },
  { input: new Date(2024, 5, 27), expected: '27.06.2024' },
  { input: new Date(2024, 5, 28), expected: '28.06.2024' },
  { input: new Date(2024, 5, 29), expected: 'last Saturday at 12:00 AM' },
  { input: new Date(2024, 5, 30), expected: 'last Sunday at 12:00 AM' },
  { input: new Date(2024, 5, 31), expected: 'last Monday at 12:00 AM' },
  { input: new Date(2024, 6, 1), expected: 'last Monday at 12:00 AM' },
  { input: new Date(2024, 6, 2), expected: 'last Tuesday at 12:00 AM' },
  { input: new Date(2024, 6, 3), expected: '2 days ago' },
  { input: new Date(2024, 6, 4), expected: 'yesterday' },
  { input: new Date(2024, 6, 5, 0, 0, 0), expected: '10 hours ago' },
  { input: new Date(2024, 6, 5, 1, 0, 0), expected: '9 hours ago' },
  { input: new Date(2024, 6, 5, 2, 0, 0), expected: '8 hours ago' },
  { input: new Date(2024, 6, 5, 3, 0, 0), expected: '7 hours ago' },
  { input: new Date(2024, 6, 5, 4, 0, 0), expected: '6 hours ago' },
  { input: new Date(2024, 6, 5, 5, 0, 0), expected: '5 hours ago' },
  { input: new Date(2024, 6, 5, 6, 0, 0), expected: '4 hours ago' },
  { input: new Date(2024, 6, 5, 7, 0, 0), expected: '3 hours ago' },
  { input: new Date(2024, 6, 5, 8, 0, 0), expected: '2 hours ago' },
  { input: new Date(2024, 6, 5, 9, 0, 0), expected: '1 hour ago' },
  { input: new Date(2024, 6, 5, 9, 30, 0), expected: '30 minutes ago' },
  { input: new Date(2024, 6, 5, 9, 40, 0), expected: '20 minutes ago' },
  { input: new Date(2024, 6, 5, 9, 45, 0), expected: '15 minutes ago' },
  { input: new Date(2024, 6, 5, 9, 50, 0), expected: '10 minutes ago' },
  { input: new Date(2024, 6, 5, 9, 55, 0), expected: '5 minutes ago' },
  { input: new Date(2024, 6, 5, 9, 59, 0), expected: '1 minute ago' },
  { input: new Date(2024, 6, 5, 9, 59, 30), expected: '30 seconds ago' },
  { input: new Date(2024, 6, 5, 9, 59, 40), expected: '20 seconds ago' },
  { input: new Date(2024, 6, 5, 9, 59, 45), expected: '15 seconds ago' },
  { input: new Date(2024, 6, 5, 9, 59, 50), expected: '10 seconds ago' },
  { input: new Date(2024, 6, 5, 9, 59, 55), expected: '5 seconds ago' },
  { input: new Date(2024, 6, 5, 9, 59, 59), expected: '1 second ago' },
  { input: new Date(2024, 6, 5, 10, 0, 0), expected: 'now' },
  { input: new Date(2024, 6, 5, 11, 0, 0), expected: 'in 1 hour' },
  { input: new Date(2024, 6, 5, 12, 0, 0), expected: 'in 2 hours' },
  { input: new Date(2024, 6, 5, 13, 0, 0), expected: 'in 3 hours' },
  { input: new Date(2024, 6, 6), expected: 'tomorrow' },
  { input: new Date(2024, 6, 7), expected: 'in 2 days' },
  { input: new Date(2024, 6, 8), expected: 'in 3 days' },
  { input: new Date(2024, 6, 9), expected: 'in 4 days' },
  { input: new Date(2024, 6, 10), expected: 'in 5 days' },
  { input: new Date(2024, 6, 11), expected: 'in 6 days' },
  { input: new Date(2024, 6, 12), expected: 'next week' },
  { input: new Date(2024, 6, 13), expected: 'next week' },
  { input: new Date(2024, 6, 14), expected: 'in 2 weeks' },
  { input: new Date(2024, 6, 15), expected: 'in 2 weeks' },
  { input: new Date(2024, 6, 16), expected: 'in 2 weeks' },
  { input: new Date(2024, 7, 5), expected: 'next month' },
  { input: new Date(2023, 6, 5), expected: '05.07.2023' },
  { input: new Date(2024, 0, 5), expected: '05.01.2024' },
]

test('Date is formatted relative to now', () => {
  for (const testCase of testCases) {
    expect(toRelativeDate(testCase.input, now), 
    `expect(${testCase.input.toLocaleString()})
    .toBe(${testCase.expected})`).toBe(testCase.expected);
  }
})