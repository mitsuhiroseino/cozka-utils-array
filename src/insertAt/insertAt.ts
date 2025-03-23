/**
 * 配列の指定の位置に要素を追加する。
 * @param array 配列
 * @param index 追加先のインデックス
 * @param items 追加する要素
 */
export default function insertAt<T>(
  array: T[],
  index: number,
  items: T[],
): T[] {
  if (array) {
    index = Math.max(0, index);
    array.splice(index, 0, ...items);
  }
  return array;
}
