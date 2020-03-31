const sum = require('../../math');

describe('Sum of two numbers', () => {
  test('should be 10', () => {
    expect(sum(5, 5)).toBe(11);
  });
});
