/**
 * 配列の前方の要素を削除し末尾に追加する
 * @param array 対象の配列
 * @param count シフトする数
 * @returns 新しい配列
 */
export default function rotate<T>(array: T[], count: number = 1): T[] {
  if (array) {
    const newArray = array.slice(0);
    if (0 < count) {
      if (newArray.length) {
        for (let i = 0; i < count; i++) {
          newArray.push(newArray.shift() as T);
        }
      }
    }
    return newArray;
  }
  return array;
}
