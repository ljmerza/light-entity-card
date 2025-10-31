/**
 * Effects list feature
 */
import { TemplateResult } from 'lit';
import type { HomeAssistant, CardEntity, LightEntityCardConfig } from '../types/index';
/**
 * Creates effect list dropdown for a light entity
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param hass - Home Assistant object
 * @param language - Home Assistant localization resources
 * @param onEffectChange - Callback when effect is selected
 * @returns Template result with effect list dropdown or empty
 */
export declare function renderEffectList(stateObj: CardEntity, config: LightEntityCardConfig, hass: HomeAssistant, language: any, onEffectChange: (event: any, stateObj: CardEntity) => void): TemplateResult;
/**
 * Handles effect selection event
 *
 * @param event - Selection event from ha-select
 * @param stateObj - The light entity state object
 * @param onEffect - Callback to set the effect
 */
export declare function handleEffectChange(event: any, stateObj: CardEntity, onEffect: (effect: string, stateObj: CardEntity) => void): void;
//# sourceMappingURL=effects.d.ts.map