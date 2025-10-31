/**
 * Debounces a function call, ensuring it's only called after a specified delay
 * since the last invocation.
 *
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds
 * @returns A debounced version of the function
 *
 * @example
 * ```typescript
 * const debouncedSearch = debounce((query: string) => {
 *   console.log('Searching for:', query);
 * }, 300);
 *
 * debouncedSearch('hello'); // Will only execute after 300ms of no calls
 * ```
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Creates a debounced version of a function that also cancels pending calls
 * when the component unmounts or is destroyed.
 *
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds
 * @returns An object with the debounced function and a cancel method
 */
export declare function debouncedWithCancel<T extends (...args: any[]) => any>(func: T, wait: number): {
    debounced: (...args: Parameters<T>) => void;
    cancel: () => void;
};
//# sourceMappingURL=debounce.d.ts.map