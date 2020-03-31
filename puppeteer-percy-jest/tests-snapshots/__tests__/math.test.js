const sum = require('../../math');

describe('Sum of two numbers', () => {
  test('should be 5', () => {
    expect(sum(3, 2)).toBe(5);
  });
});
