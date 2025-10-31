/**
 * White value slider feature
 */
import { TemplateResult } from 'lit';
import type { CardEntity, LightEntityCardConfig } from '../types/index';
/**
 * Creates white value slider for a light entity
 *
 * White value is used for lights with separate white LEDs (e.g., RGBW lights).
 * This allows controlling the brightness of the dedicated white channel.
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with white value slider or empty
 */
export declare function renderWhiteValue(stateObj: CardEntity, config: LightEntityCardConfig, onChange: (event: Event, stateObj: CardEntity, valueName: string) => void): TemplateResult;
//# sourceMappingURL=white-value.d.ts.map