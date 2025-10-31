/**
 * Brightness, speed, and intensity slider features
 *
 * These sliders all follow the same pattern with different icons and attributes.
 */
import { html, TemplateResult } from 'lit';
import { renderSlider } from './slider-common';
import { shouldHideFeature } from '../utils/feature-support';
import type { CardEntity, LightEntityCardConfig } from '../types/index';

/**
 * Creates brightness slider for a light entity
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with brightness slider or empty
 */
export function renderBrightnessSlider(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  onChange: (event: Event, stateObj: CardEntity, valueName: string) => void
): TemplateResult {
  if (config.brightness === false) return html``;
  if (shouldHideFeature('brightness', stateObj, config)) return html``;

  const brightnessIcon = config.brightness_icon || 'brightness-5';
  const brightnessValue = stateObj.attributes.brightness || 0;

  return renderSlider(
    brightnessIcon,
    brightnessValue,
    1,
    255,
    (event) => onChange(event, stateObj, 'brightness'),
    config.show_slider_percent || false
  );
}

/**
 * Creates speed slider for WLED lights
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with speed slider or empty
 */
export function renderSpeedSlider(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  onChange: (event: Event, stateObj: CardEntity, valueName: string) => void
): TemplateResult {
  if (config.speed === false) return html``;
  if (shouldHideFeature('speed', stateObj, config)) return html``;

  const speedIcon = config.speed_icon || 'speedometer';
  const speedValue = stateObj.attributes.speed || 0;

  return renderSlider(
    speedIcon,
    speedValue,
    1,
    255,
    (event) => onChange(event, stateObj, 'speed'),
    config.show_slider_percent || false
  );
}

/**
 * Creates intensity slider for WLED lights
 *
 * @param stateObj - The light entity state object
 * @param config - Card configuration
 * @param onChange - Callback when slider value changes
 * @returns Template result with intensity slider or empty
 */
export function renderIntensitySlider(
  stateObj: CardEntity,
  config: LightEntityCardConfig,
  onChange: (event: Event, stateObj: CardEntity, valueName: string) => void
): TemplateResult {
  // Note: Using config.speed check here matches original implementation
  if (config.speed === false) return html``;
  if (shouldHideFeature('intensity', stateObj, config)) return html``;

  const intensityIcon = config.intensity_icon || 'brightness-7';
  const intensityValue = stateObj.attributes.intensity || 0;

  return renderSlider(
    intensityIcon,
    intensityValue,
    1,
    255,
    (event) => onChange(event, stateObj, 'intensity'),
    config.show_slider_percent || false
  );
}
