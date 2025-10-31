/**
 * TypeScript type definitions specific to the light-entity-card
 */
import { LovelaceCardConfig } from './homeassistant';
/**
 * Configuration interface for the light entity card
 */
export interface LightEntityCardConfig extends LovelaceCardConfig {
    /** Main entity to control */
    entity: string;
    /** Card display options */
    shorten_cards?: boolean;
    consolidate_entities?: boolean;
    child_card?: boolean;
    hide_header?: boolean;
    show_header_icon?: boolean;
    header?: string;
    /** Feature toggles */
    brightness?: boolean;
    color_temp?: boolean;
    white_value?: boolean;
    color_picker?: boolean;
    speed?: boolean;
    intensity?: boolean;
    effects_list?: boolean | string | string[];
    /** Feature behavior */
    persist_features?: boolean;
    force_features?: boolean;
    /** Slider options */
    show_slider_percent?: boolean;
    full_width_sliders?: boolean;
    /** Icon customization */
    brightness_icon?: string;
    white_icon?: string;
    temperature_icon?: string;
    speed_icon?: string;
    intensity_icon?: string;
    /** Internal use */
    group?: boolean;
}
/**
 * Color picker event detail for ha-color-picker component
 */
export interface ColorPickerEventDetail {
    hs?: [number, number];
    value?: {
        hs?: [number, number];
    };
}
/**
 * Color picker change event
 */
export interface ColorPickerEvent extends CustomEvent {
    detail: ColorPickerEventDetail;
}
/**
 * Slider change event
 */
export interface SliderChangeEvent extends Event {
    target: EventTarget & {
        value: string | number;
    };
}
/**
 * Select change event
 */
export interface SelectChangeEvent extends CustomEvent {
    target: EventTarget & {
        value: string;
    };
}
/**
 * Service call error event detail
 */
export interface ServiceCallErrorDetail {
    error: string;
    entity: string;
}
/**
 * Feature names used for capability checking
 */
export type FeatureName = 'brightness' | 'colorTemp' | 'effectList' | 'color' | 'whiteValue' | 'speed' | 'intensity';
/**
 * Toggle command types
 */
export type ToggleCommand = 'turn_on' | 'turn_off';
/**
 * Entity type that can be extracted from entity_id
 */
export type EntityType = 'light' | 'switch' | 'group';
/**
 * Feature check result for debugging
 */
export interface FeatureCheckResult {
    feature: FeatureName;
    entity: string;
    supported: boolean;
    legacyFlag: number;
    colorModes: string[];
    reason?: string;
}
/**
 * Card size calculation result
 */
export interface CardSize {
    height: number;
    width?: number;
}
/**
 * Light entity card element loader interface
 */
export interface ElementLoader {
    name: string;
    promise: Promise<CustomElementConstructor>;
    defineId?: string;
}
/**
 * Element constructor with registry
 */
export interface ElementConstructor {
    registry: {
        get(name: string): CustomElementConstructor | undefined;
        define(name: string, constructor: CustomElementConstructor): void;
    };
}
/**
 * Preset configuration for quick color/scene access
 */
export interface PresetConfig {
    name: string;
    color?: [number, number];
    brightness?: number;
    color_temp?: number;
    icon?: string;
    effect?: string;
}
/**
 * Extended card configuration with future features
 */
export interface ExtendedLightEntityCardConfig extends LightEntityCardConfig {
    presets?: PresetConfig[];
    transition_duration?: number;
    confirm_actions?: boolean;
    brightness_range?: {
        min: number;
        max: number;
    };
    color_temp_range?: {
        min: number;
        max: number;
    };
}
/**
 * Card metadata for Home Assistant
 */
export interface CardMetadata {
    type: string;
    name: string;
    description: string;
    preview?: boolean;
    documentationURL?: string;
}
/**
 * HSL color representation
 */
export interface HSLColor {
    h: number;
    s: number;
    l: number;
}
/**
 * RGB color representation
 */
export interface RGBColor {
    r: number;
    g: number;
    b: number;
}
/**
 * Color temperature representation
 */
export interface ColorTemp {
    mireds: number;
    kelvin?: number;
}
/**
 * Slider configuration
 */
export interface SliderConfig {
    min: number;
    max: number;
    step?: number;
    value: number;
    label?: string;
    icon?: string;
}
/**
 * Editor change event detail
 */
export interface EditorChangeEventDetail {
    config: LightEntityCardConfig;
}
/**
 * Config validation result
 */
export interface ConfigValidationResult {
    valid: boolean;
    errors?: string[];
    warnings?: string[];
}
/**
 * Group status for multiple entities
 */
export interface GroupStatus {
    allOn: boolean;
    allOff: boolean;
    mixed: boolean;
    averageBrightness: number;
    entities: string[];
}
/**
 * Feature support detection result
 */
export interface FeatureSupport {
    brightness: boolean;
    colorTemp: boolean;
    color: boolean;
    effect: boolean;
    whiteValue: boolean;
    speed: boolean;
    intensity: boolean;
}
/**
 * Type guard to check if config is valid
 */
export declare function isValidConfig(config: any): config is LightEntityCardConfig;
/**
 * Type guard to check if entity is a light
 */
export declare function isLightEntity(entityId: string): boolean;
/**
 * Type guard to check if entity is a switch
 */
export declare function isSwitchEntity(entityId: string): boolean;
/**
 * Type guard to check if entity is a group
 */
export declare function isGroupEntity(entityId: string): boolean;
//# sourceMappingURL=card.d.ts.map