/**
 * Central export point for all type definitions
 */

// Home Assistant types
export type {
  HassEntityBase,
  LightEntityAttributes,
  GroupEntityAttributes,
  LightEntity,
  GroupEntity,
  SwitchEntity,
  InputSelectEntity,
  CardEntity,
  LightServiceData,
  HassUser,
  HassPanel,
  HassTheme,
  HassResources,
  HomeAssistant,
  LovelaceCardConfig,
  LovelaceCardEditor,
} from './homeassistant';

// Card-specific types
export type {
  LightEntityCardConfig,
  ColorPickerEventDetail,
  ColorPickerEvent,
  SliderChangeEvent,
  SelectChangeEvent,
  ServiceCallErrorDetail,
  FeatureName,
  ToggleCommand,
  EntityType,
  FeatureCheckResult,
  CardSize,
  ElementLoader,
  ElementConstructor,
  PresetConfig,
  ExtendedLightEntityCardConfig,
  CardMetadata,
  HSLColor,
  RGBColor,
  ColorTemp,
  SliderConfig,
  EditorChangeEventDetail,
  ConfigValidationResult,
  GroupStatus,
  FeatureSupport,
} from './card';

// Type guards
export {
  isValidConfig,
  isLightEntity,
  isSwitchEntity,
  isGroupEntity,
} from './card';
