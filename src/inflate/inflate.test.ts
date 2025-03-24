import inflate from './inflate';

describe('inflate', () => {
  test('0周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, 0);
    expect(result).toEqual([]);
  });

  test('0.5周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, 2);
    expect(result).toEqual([0, 1]);
  });

  test('1周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, 4);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  test('1.5周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, 6);
    expect(result).toEqual([0, 1, 2, 3, 0, 1]);
  });

  test('2周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, 8);
    expect(result).toEqual([0, 1, 2, 3, 0, 1, 2, 3]);
  });

  test('-0.5周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, -2);
    expect(result).toEqual([3, 2]);
  });

  test('-1周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, -4);
    expect(result).toEqual([3, 2, 1, 0]);
  });

  test('-1.5周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, -6);
    expect(result).toEqual([3, 2, 1, 0, 3, 2]);
  });

  test('-2周', () => {
    const array = [0, 1, 2, 3],
      result = inflate(array, -8);
    expect(result).toEqual([3, 2, 1, 0, 3, 2, 1, 0]);
  });
});
