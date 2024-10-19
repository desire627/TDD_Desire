const {test, expect } = require('@jest/globals');
const multiply = require('../multiply');

test('multiply 1 * 1 should return 1', () => {
  expect(multiply(1, 1)).toBe(1);
});

test('multiply 2 * 2 should return 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('multiply 3 * 3 should return 9', () => {
  expect(multiply(3, 3)).toBe(9);
});

test('multiply 4 * 4 should return 16', () => {
  expect(multiply(4, 4)).toBe(16);
});

test('multiply 23 * 45 should return 1035', () => {
  expect(multiply(23, 45)).toBe(1035);
});
