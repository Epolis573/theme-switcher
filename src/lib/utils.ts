import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility: `cn` (class name merge)
 * 
 * Combines Tailwind classes with intelligent conflict resolution.
 * - Uses `clsx` to conditionally join class names
 * - Uses `tailwind-merge` to remove conflicting Tailwind styles
 *
 * Example:
 * ```ts
 * cn("bg-white", condition && "bg-black") 
 * // → "bg-black" if condition is true, otherwise "bg-white"
 * ```
 *
 * Great for handling dynamic classes in React with TailwindCSS.
 */
