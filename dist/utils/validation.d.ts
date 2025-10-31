/**
 * Validation utilities for Home Assistant light entity values
 */
/**
 * Validates an entity ID format (domain.entity_name)
 *
 * @param entityId - The entity ID to validate
 * @returns true if the entity ID is valid
 *
 * @example
 * ```typescript
 * validateEntityId('light.living_room'); // true
 * validateEntityId('invalid'); // false
 * ```
 */
export declare function validateEntityId(entityId: string): boolean;
/**
 * Type guard to check if a value is a valid HS color array
 *
 * @param color - The value to check
 * @returns true if the value is a valid HS color [hue, saturation]
 *
 * @remarks
 * - Hue: 0-360 degrees
 * - Saturation: 0-100 percent
 *
 * @example
 * ```typescript
 * if (validateHsColor(color)) {
 *   // TypeScript knows color is [number, number]
 *   callService({ hs_color: color });
 * }
 * ```
 */
export declare function validateHsColor(color: any): color is [number, number];
/**
 * Type guard to check if a value is a valid RGB color array
 *
 * @param color - The value to check
 * @returns true if the value is a valid RGB color [red, green, blue]
 *
 * @remarks
 * Each component should be 0-255
 *
 * @example
 * ```typescript
 * if (validateRgbColor(color)) {
 *   callService({ rgb_color: color });
 * }
 * ```
 */
export declare function validateRgbColor(color: any): color is [number, number, number];
/**
 * Type guard to check if a value is a valid brightness value
 *
 * @param value - The value to check
 * @returns true if the value is a valid brightness (0-255)
 *
 * @example
 * ```typescript
 * if (validateBrightness(value)) {
 *   callService({ brightness: value });
 * }
 * ```
 */
export declare function validateBrightness(value: any): value is number;
/**
 * Type guard to check if a value is a valid color temperature
 *
 * @param value - The value to check
 * @param min - Minimum mireds value for the light
 * @param max - Maximum mireds value for the light
 * @returns true if the value is within the valid range
 *
 * @example
 * ```typescript
 * const light = hass.states['light.bedroom'];
 * if (validateColorTemp(value, light.attributes.min_mireds, light.attributes.max_mireds)) {
 *   callService({ color_temp: value });
 * }
 * ```
 */
export declare function validateColorTemp(value: any, min: number, max: number): value is number;
/**
 * Sanitizes a display name by removing potentially dangerous HTML characters
 *
 * @param name - The name to sanitize
 * @returns The sanitized name
 *
 * @example
 * ```typescript
 * const safe = sanitizeDisplayName(entity.attributes.friendly_name);
 * ```
 */
export declare function sanitizeDisplayName(name: string): string;
/**
 * Validates that a number is within a specified range
 *
 * @param value - The value to check
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns true if the value is within the range
 */
export declare function validateRange(value: any, min: number, max: number): value is number;
//# sourceMappingURL=validation.d.ts.map