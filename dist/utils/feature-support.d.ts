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
export declare function shouldHideFeature(featureName: FeatureName, stateObj: CardEntity, config: LightEntityCardConfig): boolean;
/**
 * Checks if a specific feature is supported by the entity
 *
 * @param featureName - The name of the feature to check
 * @param stateObj - The entity state object
 * @returns true if the feature is supported
 */
export declare function isFeatureSupported(featureName: FeatureName, stateObj: CardEntity): boolean;
/**
 * Gets all supported features for an entity
 *
 * @param stateObj - The entity state object
 * @returns Object with feature support flags
 */
export declare function getSupportedFeatures(stateObj: CardEntity): Record<FeatureName, boolean>;
//# sourceMappingURL=feature-support.d.ts.map