export function filterMapRecord<T, V>(object: Record<string, T> | undefined, mapper: (key: string, value: T) => V | undefined) {
  if (!object) {
    return;
  }
  const result = {} as Record<string, V>;
  for (const [key, value] of Object.entries(object)) {
    const newValue = mapper(key, value);
    if (newValue !== undefined) {
      result[key] = newValue;
    }
  }
  return result;
}

export function isEmptyRecord(o: object | undefined) {
  return !o || !Object.keys(o).length;
}
