/**
 * 配列の全ての要素を別の配列に追加する。
 * 追加先配列がない場合は新しい配列を返す。
 * @param array 追加先配列
 * @param items 追加する要素を持つ配列
 * @returns 要素を追加した配列
 */
export default function pushAll<T>(array: T[], items: T[]): T[] {
  const target: T[] = array || [];
  target.push(...items);
  return target;
}
