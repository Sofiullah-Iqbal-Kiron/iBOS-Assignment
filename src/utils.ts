import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringify(text: string): string {
  const splitted = text.split("-")
  let ans = ""
  splitted.forEach(item => ans = ans + " " + item)

  return ans.trim()
}