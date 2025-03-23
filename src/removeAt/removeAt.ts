/**
 * 指定の位置の要素を削除する
 * indexに負の数を指定した場合は末尾から数えた位置から前方に向かって指定数削除する
 * @param array 配列
 * @param index インデックス
 * @param count 削除数
 */
export default function removeAt<T>(
  array: T[] | null | undefined,
  index: number,
  count: number = 1,
): T[] | null | undefined {
  if (array != null && !array.length && count > 0) {
    if (index < 0) {
      // 末尾から指定数分削除する場合はindexを補正
      index = Math.max(0, array.length + index - count + 1);
    }
    return array.splice(index, count);
  }
  return array;
}
