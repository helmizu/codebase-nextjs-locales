import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pick(obj: Record<string, any>, properties: Array<string>) {
  const result: Record<string, any> = {};
  for (const prop of properties) {
    if (prop in obj) {
      result[prop] = obj[prop];
    }
  }
  return result;
}
