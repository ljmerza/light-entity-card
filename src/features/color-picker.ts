/**
 * Color picker feature
 */
import { html, TemplateResult } from 'lit';
import { debounce } from '../utils/debounce';
import { validateHsColor } from '../utils/validation';
import { logger } from '../utils/logger';
import { shouldHideFeature } from '../utils/feature-support';
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
export function createDebouncedColorHandler(
  onColorChange: (hsColor: [number, number], stateObj: CardEntity) => void,
  delay: number = 100
) {
  return debounce((hsColor: [number, number], stateObj: CardEntity) => {
    logger.debug('Applying color change', { hsColor, entity: stateObj.entity_id });
    onColorChange(hsColor, stateObj);
  }, delay);
}

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
export function handleColorChanged(
  event: CustomEvent,
  stateObj: CardEntity,
  debouncedHandler: (hsColor: [number, number], stateObj: CardEntity) => void
): void {
  // Try multiple possible event structures for compatibility
  let hsColor: any;

  // Check various possible event detail structures
  if (event.detail?.value?.hs) {
    hsColor = event.detail.value.hs;
  } else if (event.detail?.hs) {
    hsColor = event.detail.hs;
  } else if (event.detail?.value && Array.isArray(event.detail.value)) {
    hsColor = event.detail.value;
  }

  // Validate the color format
  if (!validateHsColor(hsColor)) {
    logger.warn('Invalid HS color received from color picker', {
      detail: event.detail,
      entity: stateObj.entity_id,
    });
    return;
  }

  // Round values to avoid floating point precision issues
  const roundedColor: [number, number] = [
    Math.round(hsColor[0] * 100) / 100,
    Math.round(hsColor[1] * 100) / 100,
  ];

  logger.debug('Color picker changed', {
    entity: stateObj.entity_id,
    color: roundedColor,
  });

  // Use debounced service call to avoid flooding the API
  debouncedHandler(roundedColor, stateObj);
}

/**
 * Creates color picker wheel for a light entity
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param hass - Home Assistant object
 * @param onColorChange - Callback for color change events
 * @returns Template result with color picker or empty
 */
export function renderColorPicker(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  hass: HomeAssistant,
  onColorChange: (event: CustomEvent, stateObj: CardEntity) => void
): TemplateResult {
  if (config.color_picker === false) return html``;
  if (shouldHideFeature('color', stateObj, config)) return html``;

  const hsColor = stateObj.attributes.hs_color || [0, 0];

  const hasHaColorPicker = typeof customElements !== 'undefined' && !!customElements.get('ha-color-picker');
  const hasLovelaceColorPicker = typeof customElements !== 'undefined' && !!customElements.get('ha-lovelace-color-picker');

  // Prefer ha-color-picker when available; fall back to ha-lovelace-color-picker
  if (hasHaColorPicker) {
    return html`
      <div class="light-entity-card__color-picker">
        <ha-color-picker
          .hass=${hass}
          .desiredHsColor=${hsColor}
          .value=${{ hs: hsColor }}
          @value-changed=${(e: CustomEvent) => onColorChange(e, stateObj)}
          @color-changed=${(e: CustomEvent) => onColorChange(e, stateObj)}
        ></ha-color-picker>
      </div>
    `;
  }

  if (hasLovelaceColorPicker) {
    return html`
      <div class="light-entity-card__color-picker">
        <ha-lovelace-color-picker
          .hass=${hass}
          .desiredHsColor=${hsColor}
          .value=${{ hs: hsColor }}
          @value-changed=${(e: CustomEvent) => onColorChange(e, stateObj)}
          @color-changed=${(e: CustomEvent) => onColorChange(e, stateObj)}
        ></ha-lovelace-color-picker>
      </div>
    `;
  }

  // If neither element is available yet, render an empty container to preserve layout.
  // The async loader in the card will attempt to register the element shortly after.
  return html`<div class="light-entity-card__color-picker"></div>`;
}
