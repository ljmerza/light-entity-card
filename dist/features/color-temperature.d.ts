/**
 * Color temperature slider feature
 */
import { TemplateResult } from 'lit';
import type { CardEntity, LightEntityCardConfig } from '../types/index';
/**
 * Creates color temperature slider for a light entity
 *
 * Color temperature is measured in mireds (micro reciprocal degrees).
 * Lower values are cooler (more blue), higher values are warmer (more red/orange).
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with color temperature slider or empty
 */
export declare function renderColorTemperature(stateObj: CardEntity, config: LightEntityCardConfig, onChange: (event: Event, stateObj: CardEntity, valueName: string) => void): TemplateResult;
//# sourceMappingURL=color-temperature.d.ts.map