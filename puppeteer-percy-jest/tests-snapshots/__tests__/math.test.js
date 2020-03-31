const sum = require('../../math');

describe('Sum of two numbers', () => {
  test('should be 100', () => {
    expect(sum(50, 50)).toBe(100);
  });
});
