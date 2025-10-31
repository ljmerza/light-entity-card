/**
 * Brightness, speed, and intensity slider features
 *
 * These sliders all follow the same pattern with different icons and attributes.
 */
import { TemplateResult } from 'lit';
import type { CardEntity, LightEntityCardConfig } from '../types/index';
/**
 * Creates brightness slider for a light entity
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with brightness slider or empty
 */
export declare function renderBrightnessSlider(stateObj: CardEntity, config: LightEntityCardConfig, onChange: (event: Event, stateObj: CardEntity, valueName: string) => void): TemplateResult;
/**
 * Creates speed slider for WLED lights
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with speed slider or empty
 */
export declare function renderSpeedSlider(stateObj: CardEntity, config: LightEntityCardConfig, onChange: (event: Event, stateObj: CardEntity, valueName: string) => void): TemplateResult;
/**
 * Creates intensity slider for WLED lights
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with intensity slider or empty
 */
export declare function renderIntensitySlider(stateObj: CardEntity, config: LightEntityCardConfig, onChange: (event: Event, stateObj: CardEntity, valueName: string) => void): TemplateResult;
//# sourceMappingURL=brightness.d.ts.map