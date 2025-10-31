/**
 * White value slider feature
 */
import { html, TemplateResult } from 'lit';
import { renderSlider } from './slider-common';
import { shouldHideFeature } from '../utils/feature-support';
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
export function renderWhiteValue(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  onChange: (event: Event, stateObj: CardEntity, valueName: string) => void
): TemplateResult {
  if (config.white_value === false) return html``;
  if (shouldHideFeature('whiteValue', stateObj, config)) return html``;

  const whiteIcon = config.white_icon || 'file-word-box';
  const whiteValue = stateObj.attributes.white_value || 0;

  return renderSlider(
    whiteIcon,
    whiteValue,
    0,
    255,
    (event) => onChange(event, stateObj, 'white_value'),
    config.show_slider_percent || false
  );
}
