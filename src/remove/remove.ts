import isPlainObject from 'lodash-es/isPlainObject';
import _remove from 'lodash-es/remove';

type Predicate<T> = Parameters<typeof _remove>[1] | { [K in keyof T]?: T[K] };

/**
 * lodashのremoveの拡張。predicateへ削除したいプロパティ値を持つオブジェクトを渡すことができる
 * @param array
 * @param predicate
 */
export default function remove<T>(array: T[], predicate: Predicate<T>): T[] {
  if (isPlainObject(predicate)) {
    const values = predicate;
    const keys = Object.keys(values);
    predicate = keys.length
      ? (item: any) => keys.every((key) => values[key] === item[key])
      : () => false;
  }
  return _remove(array, predicate) as T[];
}
