/**
 * Constants and configuration values for the light-entity-card
 *
 * This file centralizes all magic numbers, strings, and configuration
 * values to improve maintainability and consistency.
 */
/**
 * Light feature flags (bitmask values)
 * Used to check supported_features attribute on light entities
 *
 * @see https://developers.home-assistant.io/docs/core/entity/light/#supported-features
 */
export declare const LIGHT_FEATURES: {
    readonly BRIGHTNESS: 1;
    readonly COLOR_TEMP: 2;
    readonly EFFECT: 4;
    readonly FLASH: 8;
    readonly COLOR: 16;
    readonly TRANSITION: 32;
    readonly WHITE_VALUE: 128;
};
/**
 * Entity domains used in Home Assistant
 */
export declare const ENTITY_DOMAINS: {
    readonly LIGHT: "light";
    readonly SWITCH: "switch";
    readonly GROUP: "group";
    readonly HOMEASSISTANT: "homeassistant";
    readonly INPUT_SELECT: "input_select";
};
/**
 * Light service commands
 */
export declare const LIGHT_SERVICES: {
    readonly TURN_ON: "turn_on";
    readonly TURN_OFF: "turn_off";
    readonly TOGGLE: "toggle";
};
/**
 * Color modes supported by lights
 * Used with the supported_color_modes attribute
 *
 * @see https://developers.home-assistant.io/docs/core/entity/light/#color-modes
 */
export declare const COLOR_MODES: {
    /** Supports brightness control */
    readonly BRIGHTNESS: "brightness";
    /** Supports color temperature (mireds) */
    readonly COLOR_TEMP: "color_temp";
    /** Supports HS (hue/saturation) color */
    readonly HS: "hs";
    /** Supports RGB color */
    readonly RGB: "rgb";
    /** Supports RGBW (with white channel) */
    readonly RGBW: "rgbw";
    /** Supports RGBWW (with warm/cool white) */
    readonly RGBWW: "rgbww";
    /** Supports white light only */
    readonly WHITE: "white";
    /** Supports XY color */
    readonly XY: "xy";
    /** On/off only */
    readonly ONOFF: "onoff";
    /** Unknown mode */
    readonly UNKNOWN: "unknown";
};
/**
 * Color modes that support brightness control
 */
export declare const BRIGHTNESS_SUPPORTING_MODES: readonly ["hs", "rgb", "rgbw", "rgbww", "white", "brightness", "color_temp", "xy"];
/**
 * Color modes that support color control
 */
export declare const COLOR_SUPPORTING_MODES: readonly ["hs", "rgb", "rgbw", "rgbww", "xy"];
/**
 * Color modes that support color temperature
 */
export declare const COLOR_TEMP_SUPPORTING_MODES: readonly ["color_temp"];
/**
 * Default sizes and dimensions
 */
export declare const SIZES: {
    /** Maximum width for color picker in normal mode */
    readonly COLOR_PICKER_MAX_WIDTH: 300;
    /** Maximum width for color picker in compact mode */
    readonly COLOR_PICKER_MAX_WIDTH_COMPACT: 200;
    /** Padding subtracted from card width in normal mode */
    readonly PADDING_NORMAL: 50;
    /** Padding subtracted from card width in compact mode */
    readonly PADDING_COMPACT: 100;
    /** Card height units for light entity */
    readonly CARD_LENGTH_LIGHT: 10;
    /** Card height units for switch entity */
    readonly CARD_LENGTH_SWITCH: 1;
    /** Multiplier for group card height */
    readonly GROUP_MULTIPLIER: 0.8;
};
/**
 * Debounce delays in milliseconds
 */
export declare const DEBOUNCE_DELAYS: {
    /** Delay for color picker changes */
    readonly COLOR_CHANGE: 100;
    /** Delay for slider changes */
    readonly SLIDER_CHANGE: 50;
    /** Delay for effect selection */
    readonly EFFECT_CHANGE: 50;
};
/**
 * Slider ranges
 */
export declare const SLIDER_RANGES: {
    /** Brightness min value */
    readonly BRIGHTNESS_MIN: 1;
    /** Brightness max value */
    readonly BRIGHTNESS_MAX: 255;
    /** Speed min value (WLED) */
    readonly SPEED_MIN: 1;
    /** Speed max value (WLED) */
    readonly SPEED_MAX: 255;
    /** Intensity min value (WLED) */
    readonly INTENSITY_MIN: 1;
    /** Intensity max value (WLED) */
    readonly INTENSITY_MAX: 255;
    /** White value min */
    readonly WHITE_VALUE_MIN: 0;
    /** White value max */
    readonly WHITE_VALUE_MAX: 255;
};
/**
 * Color value ranges
 */
export declare const COLOR_RANGES: {
    /** Hue minimum (degrees) */
    readonly HUE_MIN: 0;
    /** Hue maximum (degrees) */
    readonly HUE_MAX: 360;
    /** Saturation minimum (percent) */
    readonly SATURATION_MIN: 0;
    /** Saturation maximum (percent) */
    readonly SATURATION_MAX: 100;
    /** RGB component minimum */
    readonly RGB_MIN: 0;
    /** RGB component maximum */
    readonly RGB_MAX: 255;
};
/**
 * Default icon names (without mdi: prefix)
 */
export declare const DEFAULT_ICONS: {
    readonly BRIGHTNESS: "weather-sunny";
    readonly TEMPERATURE: "thermometer";
    readonly WHITE: "file-word-box";
    readonly SPEED: "speedometer";
    readonly INTENSITY: "transit-connection-horizontal";
};
/**
 * Feature name keys used internally
 */
export declare const FEATURE_NAMES: {
    readonly BRIGHTNESS: "brightness";
    readonly COLOR_TEMP: "colorTemp";
    readonly EFFECT_LIST: "effectList";
    readonly COLOR: "color";
    readonly WHITE_VALUE: "whiteValue";
    readonly SPEED: "speed";
    readonly INTENSITY: "intensity";
};
/**
 * Timing constants
 */
export declare const TIMING: {
    /** Timeout before setting color wheels (ms) */
    readonly COLOR_WHEEL_SETUP_DELAY: 100;
    /** Decimal precision for color values */
    readonly COLOR_PRECISION: 100;
};
/**
 * Card metadata
 */
export declare const CARD_INFO: {
    readonly TYPE: "light-entity-card";
    readonly NAME: "Light Entity Card";
    readonly DESCRIPTION: "Control lights and switches";
    readonly EDITOR_NAME: "light-entity-card-editor";
};
/**
 * CSS class names
 */
export declare const CSS_CLASSES: {
    readonly CARD: "light-entity-card";
    readonly CARD_GROUP: "group";
    readonly CARD_CHILD: "light-entity-child-card";
    readonly HEADER: "light-entity-card__header";
    readonly TITLE: "light-entity-card__title";
    readonly TOGGLE: "light-entity-card-toggle";
    readonly SLIDERS: "light-entity-card-sliders";
    readonly SLIDER_FULL_WIDTH: "ha-slider-full-width";
    readonly COLOR_PICKER: "light-entity-card__color-picker";
    readonly COLOR_TEMP: "light-entity-card-color_temp";
    readonly EFFECT_LIST: "light-entity-card-effectlist";
    readonly CENTER: "light-entity-card-center";
    readonly ICON_CONTAINER: "icon-container";
    readonly PERCENT_SLIDER: "percent-slider";
    readonly HIDDEN: "hidden";
    readonly CONTROL: "control";
};
/**
 * Event names
 */
export declare const EVENTS: {
    readonly SERVICE_CALL_ERROR: "service-call-error";
    readonly CONFIG_CHANGED: "config-changed";
    readonly VALUE_CHANGED: "value-changed";
};
/**
 * Version information
 */
export declare const VERSION = "6.1.3";
//# sourceMappingURL=constants.d.ts.map