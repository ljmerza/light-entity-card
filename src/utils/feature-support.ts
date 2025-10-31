/**
 * Feature support detection for light entities
 */
import { logger } from './logger';
import { LIGHT_FEATURES } from '../constants';
import type { FeatureName, CardEntity, LightEntityCardConfig } from '../types/index';

/**
 * Determines if a feature should be shown for a given entity
 *
 * This function checks both the legacy supported_features bitmask and the newer
 * supported_color_modes array for compatibility across Home Assistant versions.
 *
 * @param featureName - The name of the feature to check
 * @param stateObj - The entity state object
 * @param config - Card configuration
 * @returns true if the feature should be HIDDEN, false if it should be shown
 */
export function shouldHideFeature(
  featureName: FeatureName,
  stateObj: CardEntity,
  config: LightEntityCardConfig
): boolean {
  // Show all features if force_features is enabled
  if (config.force_features) return false;

  // Check if feature is supported
  const supported = isFeatureSupported(featureName, stateObj);

  // Log the feature check result for debugging
  logger.debug('Feature support check', {
    feature: featureName,
    entity: stateObj.entity_id,
    supported,
    willHide: !supported || (!config.persist_features && stateObj.state !== 'on'),
  });

  // Hide if feature is not supported
  if (!supported) return true;

  // Hide if persist_features is disabled and entity is off
  if (!config.persist_features && stateObj.state !== 'on') return true;

  // Show the feature
  return false;
}

/**
 * Checks if a specific feature is supported by the entity
 *
 * @param featureName - The name of the feature to check
 * @param stateObj - The entity state object
 * @returns true if the feature is supported
 */
export function isFeatureSupported(
  featureName: FeatureName,
  stateObj: CardEntity
): boolean {
  // WLED support - check for WLED-specific attributes
  if (featureName === 'speed' && 'speed' in stateObj.attributes) return true;
  if (featureName === 'intensity' && 'intensity' in stateObj.attributes) return true;

  // Check legacy supported_features bitmask (returns number, convert to boolean)
  const legacyFeatureFlag = LIGHT_FEATURES[featureName.toUpperCase() as keyof typeof LIGHT_FEATURES] & (stateObj.attributes.supported_features || 0);
  let featureSupported = Boolean(legacyFeatureFlag);

  // Support new color modes https://developers.home-assistant.io/docs/core/entity/light/#color-modes
  const colorModes = stateObj.attributes.supported_color_modes || [];

  // If legacy check didn't find support, check modern color modes
  if (!featureSupported) {
    featureSupported = checkModernColorModeSupport(featureName, stateObj, colorModes);
  }

  logger.debug('Feature support details', {
    feature: featureName,
    entity: stateObj.entity_id,
    supported: featureSupported,
    legacyFlag: legacyFeatureFlag,
    colorModes,
  });

  return featureSupported;
}

/**
 * Checks feature support using modern color modes
 *
 * @param featureName - The name of the feature to check
 * @param stateObj - The entity state object
 * @param colorModes - Array of supported color modes
 * @returns true if the feature is supported
 */
function checkModernColorModeSupport(
  featureName: FeatureName,
  stateObj: CardEntity,
  colorModes: string[]
): boolean {
  switch (featureName) {
    case 'brightness':
      // Check if brightness attribute exists
      if (Object.prototype.hasOwnProperty.call(stateObj.attributes, 'brightness')) {
        return true;
      }

      // Or check if any supported color mode includes brightness
      const brightnessSupportedModes = ['hs', 'rgb', 'rgbw', 'rgbww', 'white', 'brightness', 'color_temp', 'xy'];
      return colorModes.some(mode => brightnessSupportedModes.includes(mode));

    case 'colorTemp':
      // Check if color_temp mode is supported
      return colorModes.includes('color_temp');

    case 'effectList':
      // Check if effect_list exists and has items
      return Boolean(
        stateObj.attributes.effect_list &&
        stateObj.attributes.effect_list.length > 0
      );

    case 'color':
      // Check if any color mode is supported
      const colorSupportedModes = ['hs', 'rgb', 'rgbw', 'rgbww', 'xy'];
      return colorModes.some(mode => colorSupportedModes.includes(mode));

    case 'whiteValue':
      // Check if white_value attribute exists
      return Object.prototype.hasOwnProperty.call(stateObj.attributes, 'white_value');

    case 'speed':
    case 'intensity':
      // These are handled by WLED-specific checks above
      return false;

    default:
      logger.warn('Unknown feature name in checkModernColorModeSupport', { featureName });
      return false;
  }
}

/**
 * Gets all supported features for an entity
 *
 * @param stateObj - The entity state object
 * @returns Object with feature support flags
 */
export function getSupportedFeatures(stateObj: CardEntity) {
  const features: FeatureName[] = ['brightness', 'colorTemp', 'effectList', 'color', 'whiteValue', 'speed', 'intensity'];

  return features.reduce((acc, feature) => {
    acc[feature] = isFeatureSupported(feature, stateObj);
    return acc;
  }, {} as Record<FeatureName, boolean>);
}
