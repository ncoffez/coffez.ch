import { expect, test } from 'vitest'

const testCases = [
  { input: 'hello', expected: 'hello' },
  { input: 'world', expected: 'world' },
]

test('hello World', () => {
  for (const testCase of testCases) {
    expect(testCase.input).toBe(testCase.expected);
  }
})