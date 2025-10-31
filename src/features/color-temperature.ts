/**
 * Color temperature slider feature
 */
import { html, TemplateResult } from 'lit';
import { renderSliderPercent } from './slider-common';
import { shouldHideFeature } from '../utils/feature-support';
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
export function renderColorTemperature(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  onChange: (event: Event, stateObj: CardEntity, valueName: string) => void
): TemplateResult {
  if (config.color_temp === false) return html``;
  if (shouldHideFeature('colorTemp', stateObj, config)) return html``;

  const temperatureIcon = config.temperature_icon || 'thermometer';
  const colorTempValue = stateObj.attributes.color_temp || 0;
  const minMireds = stateObj.attributes.min_mireds || 153;
  const maxMireds = stateObj.attributes.max_mireds || 500;

  const percent = renderSliderPercent(
    colorTempValue,
    minMireds - 1,
    maxMireds - 1,
    config.show_slider_percent || false
  );

  return html`
    <div class="control light-entity-card-center">
      <div class="icon-container">
        <ha-icon icon="hass:${temperatureIcon}"></ha-icon>
      </div>
      <ha-slider
        class="light-entity-card-color_temp"
        min="${minMireds}"
        max="${maxMireds}"
        .value=${colorTempValue}
        @change="${(event: Event) => onChange(event, stateObj, 'color_temp')}"
      >
      </ha-slider>
      ${percent}
    </div>
  `;
}
