/**
 * Color picker feature
 */
import { TemplateResult } from 'lit';
import type { HomeAssistant, CardEntity, LightEntityCardConfig } from '../types/index';
/**
 * Creates a debounced color change handler
 *
 * This prevents excessive API calls when the user drags the color wheel.
 *
 * @param onColorChange - Callback to handle the debounced color change
 * @param delay - Debounce delay in milliseconds (default: 100ms)
 * @returns Debounced color change handler
 */
export declare function createDebouncedColorHandler(onColorChange: (hsColor: [number, number], stateObj: CardEntity) => void, delay?: number): (hsColor: [number, number], stateObj: CardEntity) => void;
/**
 * Handles color change events from ha-color-picker
 *
 * The event structure can vary depending on the ha-color-picker version:
 * - event.detail.value.hs (newer versions)
 * - event.detail.hs (some versions)
 * - event.detail.value (with hs property)
 *
 * This function validates the color and calls the debounced handler to prevent
 * excessive API calls during user interaction.
 *
 * @param event - The color change event from ha-color-picker
 * @param stateObj - The light entity state object
 * @param debouncedHandler - Debounced color change handler
 */
export declare function handleColorChanged(event: CustomEvent, stateObj: CardEntity, debouncedHandler: (hsColor: [number, number], stateObj: CardEntity) => void): void;
/**
 * Creates color picker wheel for a light entity
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param hass - Home Assistant object
 * @param onColorChange - Callback for color change events
 * @returns Template result with color picker or empty
 */
export declare function renderColorPicker(stateObj: CardEntity, config: LightEntityCardConfig, hass: HomeAssistant, onColorChange: (event: CustomEvent, stateObj: CardEntity) => void): TemplateResult;
//# sourceMappingURL=color-picker.d.ts.map