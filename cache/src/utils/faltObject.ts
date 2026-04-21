// Limit recursion depth to prevent infinite type instantiation
type Prev<T extends number> = [-1, 0, 1, 2, 3, 4, 5][T];

type Leaf<T, Depth extends number = 5> = Depth extends 0
  ? unknown
  : T extends object
    ? T extends (...args: unknown[]) => unknown
      ? never
      : T extends Array<infer U>
        ? Leaf<U, Prev<Depth>>
        : T extends Record<string, unknown>
          ? Leaf<T[keyof T], Prev<Depth>>
          : T
    : T;

export function flat<T>(obj: T): Array<Leaf<T>> {
  const res: unknown[] = [];

  function helper(value: unknown, depth = 0): void {
    // Add depth limit to prevent infinite recursion
    if (depth > 100) {
      res.push(value);
      return;
    }

    if (value && typeof value === "object" && !(value instanceof Date)) {
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          helper((value as Record<string, unknown>)[key], depth + 1);
        }
      }
    } else {
      res.push(value);
    }
  }

  helper(obj);
  return res as Array<Leaf<T>>;
}
