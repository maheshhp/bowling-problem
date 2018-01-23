const exported = require('./bowling-prob');

const { calculateSum } = exported;
const { roll } = exported;


describe('Strike in 10th frame', () => {
  test('Two fill balls have been given', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 3])).toBe(113);
  });
  test('Expected score from calculation returned for non-strike in fill balls', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 10, 8, 10])).toBe(133);
  });
  test('Expected score from calculation returned for strike in fill balls', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 10, 10, 10])).toBe(135);
  });
  test('Expected score from calculation returned for spare in fill balls', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 5, 3])).toBe(118);
  });
});
describe('Tests for calculateSum helper function', () => {
  test('Expected score from helper function', () => {
    expect(calculateSum([[10], [3, 6], [3, 4], [1, 8]])).toBe(44);
  });
});
describe('Spare in 10th frame', () => {
  test('Fill ball has been given', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 5, 3])).toBe(118);
  });
  test('Expected score from calculation returned for non-strike fill ball', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 5, 3])).toBe(118);
  });
  test('Expected score from calculation returned for strike fill ball', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 5, 10])).toBe(125);
  });
});
describe('Regular game', () => {
  test('Expected score from calculation returned for games with strike', () => {
    expect(roll([10, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 5, 3])).toBe(118);
  });
  test('Expected score from calculation returned for games with spare', () => {
    expect(roll([4, 6, 3, 6, 3, 6, 4, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 5, 5, 3])).toBe(112);
  });
  test('Invalid input string returned for invalid array input containing < 10 frames', () => {
    expect(roll([10, 3, 6, 5, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6])).toMatch('Invalid input');
  });
  test('Invalid input string returned for invalid array input containing > 10 in regular frame', () => {
    expect(roll([10, 3, 6, 3, 6, 5, 6, 3, 6, 10, 3, 6, 3, 6, 3, 6, 10, 10, 10])).toMatch('Invalid input');
  });
  test('Invalid input string returned for invalid array input containing < 0 in regular frame', () => {
    expect(roll([10, 3, 6, 3, 6, 5, 6, 3, 6, 10, 3, 6, 3, 6, 3, -1, 10, 10, 10])).toMatch('Invalid input');
  });
});
