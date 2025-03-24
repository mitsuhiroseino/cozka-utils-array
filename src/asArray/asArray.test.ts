import asArray from './asArray';

describe('asArray', () => {
  test('null', () => {
    const result = asArray(null);
    expect(result).toEqual([]);
  });

  test('undefined', () => {
    const result = asArray(undefined);
    expect(result).toEqual([]);
  });

  test('空文字', () => {
    const result = asArray('');
    expect(result).toEqual(['']);
  });

  test('0', () => {
    const result = asArray(0);
    expect(result).toEqual([0]);
  });

  test('false', () => {
    const result = asArray(false);
    expect(result).toEqual([false]);
  });

  test('空配列', () => {
    const array = [];
    const result = asArray(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
  });

  test('配列', () => {
    const array = [0, 1, 2];
    const result = asArray(array);
    expect(result).not.toBe(array);
    expect(result).toEqual(array);
  });
});
