import { sum, mulStr } from './math';

describe('math functionality', () => {
  test('check if sum with positive', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('check if sum with negative', () => {
    expect(sum(-2, -1)).toBe(-3);
  });
});
