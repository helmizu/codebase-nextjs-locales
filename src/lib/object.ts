export function mapArrayToObject<
  T extends Record<string, any> | string | number
>(arr: T[], keyName?: keyof T): Record<string, T> {
  return arr.reduce((acc, item) => {
    if (typeof item === "string" || typeof item === "number") {
      // If item is a string or number, use it as the key and value
      acc[item as string | number] = item;
    } else if (keyName && typeof item === "object" && item !== null) {
      // If item is an object, use the specified keyName
      const key = item[keyName];
      if (typeof key === "string" || typeof key === "number") {
        acc[key] = item;
      } else {
        throw new Error(
          `Invalid key type: ${typeof key}. Key must be a string or number.`
        );
      }
    } else {
      throw new Error(
        "Invalid input type. Array must contain objects, strings, or numbers."
      );
    }
    return acc;
  }, {} as Record<string, T>);
}

export function deepEqual(obj1: any, obj2: any): boolean {
  // Check if both are the same reference
  if (obj1 === obj2) return true;

  // Check if either is null or undefined
  if (obj1 == null || obj2 == null) return obj1 === obj2;

  // Check if both are not objects (i.e., primitives)
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // Check if both are arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((item, index) => deepEqual(item, obj2[index]));
  }

  // If one is an array and the other is not, return false
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

  // Get keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, return false
  if (keys1.length !== keys2.length) return false;

  // Check if all keys and their values are equal recursively
  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}
