/**
 * Effects list feature
 */
import { html, TemplateResult } from 'lit';
import { logger } from '../utils/logger';
import { shouldHideFeature } from '../utils/feature-support';
import type { HomeAssistant, CardEntity, LightEntityCardConfig } from '../types/index';

/**
 * Gets the effect list to display
 *
 * Priority:
 * 1. Custom array from config
 * 2. Entity reference (input_select)
 * 3. Entity's built-in effect_list
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param hass - Home Assistant object
 * @returns Array of effect names
 */
function getEffectList(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  hass: HomeAssistant
): string[] {
  // Use custom list if provided as array
  if (config.effects_list && Array.isArray(config.effects_list)) {
    logger.debug('Using custom effects list', { effects: config.effects_list });
    return config.effects_list;
  }

  // Use input_select entity if provided
  if (typeof config.effects_list === 'string' && hass.states[config.effects_list]) {
    const inputSelect = hass.states[config.effects_list];
    const effects = (inputSelect.attributes && inputSelect.attributes.options) || [];
    logger.debug('Using effects from input_select entity', {
      entity: config.effects_list,
      effects,
    });
    return effects;
  }

  // Use entity's built-in effect list
  return stateObj.attributes.effect_list || [];
}

/**
 * Creates a single list item for an effect
 *
 * @param stateObj - The light entity state object
 * @param effect - Effect name
 * @returns Template result for list item
 */
function renderListItem(stateObj: CardEntity, effect: string): TemplateResult {
  return html`<mwc-list-item value="${effect}" ?selected=${effect === stateObj.attributes.effect}
    >${effect}</mwc-list-item
  >`;
}

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
export function renderEffectList(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  hass: HomeAssistant,
  language: any,
  onEffectChange: (event: any, stateObj: CardEntity) => void
): TemplateResult {
  // Check if effects list is disabled in config
  if (config.effects_list === false) return html``;

  // Check if we should show based on entity state and persist_features
  // Note: We check state here because custom effect lists may be shown
  // even if the feature doesn't exist on the entity
  if (!config.persist_features && stateObj.state !== 'on') return html``;

  // Get the effect list to display
  const effectList = getEffectList(stateObj, config, hass);

  // If no custom list and feature is not supported, hide it
  if (
    !config.effects_list &&
    shouldHideFeature('effectList', stateObj, config)
  ) {
    return html``;
  }

  // If effect list is empty, hide it
  if (!effectList || effectList.length === 0) {
    return html``;
  }

  const listItems = effectList.map(effect => renderListItem(stateObj, effect));
  const caption = language['ui.card.light.effect'] || 'Effect';

  return html`
    <div class="control light-entity-card-center light-entity-card-effectlist">
      <ha-select
        @closed="${(e: Event) => e.stopPropagation()}"
        @selected=${(e: any) => onEffectChange(e, stateObj)}
        label="${caption}"
      >
        ${listItems}
      </ha-select>
    </div>
  `;
}

/**
 * Handles effect selection event
 *
 * @param event - Selection event from ha-select
 * @param stateObj - The light entity state object
 * @param onEffect - Callback to set the effect
 */
export function handleEffectChange(
  event: any,
  stateObj: CardEntity,
  onEffect: (effect: string, stateObj: CardEntity) => void
): void {
  if (!event.target.value) return;

  logger.debug('Effect selected', {
    entity: stateObj.entity_id,
    effect: event.target.value,
  });

  onEffect(event.target.value, stateObj);
}
