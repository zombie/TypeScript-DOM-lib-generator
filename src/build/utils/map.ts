export function addToArrayMap<T>(
  map: Map<string, T[]>,
  name: string,
  value: T
): void {
  const array = map.get(name) || [];
  array.push(value);
  map.set(name, array);
}
