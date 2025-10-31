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
export const LIGHT_FEATURES = {
  BRIGHTNESS: 1,
  COLOR_TEMP: 2,
  EFFECT: 4,
  FLASH: 8,
  COLOR: 16,
  TRANSITION: 32,
  WHITE_VALUE: 128,
} as const;

/**
 * Entity domains used in Home Assistant
 */
export const ENTITY_DOMAINS = {
  LIGHT: 'light',
  SWITCH: 'switch',
  GROUP: 'group',
  HOMEASSISTANT: 'homeassistant',
  INPUT_SELECT: 'input_select',
} as const;

/**
 * Light service commands
 */
export const LIGHT_SERVICES = {
  TURN_ON: 'turn_on',
  TURN_OFF: 'turn_off',
  TOGGLE: 'toggle',
} as const;

/**
 * Color modes supported by lights
 * Used with the supported_color_modes attribute
 *
 * @see https://developers.home-assistant.io/docs/core/entity/light/#color-modes
 */
export const COLOR_MODES = {
  /** Supports brightness control */
  BRIGHTNESS: 'brightness',
  /** Supports color temperature (mireds) */
  COLOR_TEMP: 'color_temp',
  /** Supports HS (hue/saturation) color */
  HS: 'hs',
  /** Supports RGB color */
  RGB: 'rgb',
  /** Supports RGBW (with white channel) */
  RGBW: 'rgbw',
  /** Supports RGBWW (with warm/cool white) */
  RGBWW: 'rgbww',
  /** Supports white light only */
  WHITE: 'white',
  /** Supports XY color */
  XY: 'xy',
  /** On/off only */
  ONOFF: 'onoff',
  /** Unknown mode */
  UNKNOWN: 'unknown',
} as const;

/**
 * Color modes that support brightness control
 */
export const BRIGHTNESS_SUPPORTING_MODES = [
  COLOR_MODES.HS,
  COLOR_MODES.RGB,
  COLOR_MODES.RGBW,
  COLOR_MODES.RGBWW,
  COLOR_MODES.WHITE,
  COLOR_MODES.BRIGHTNESS,
  COLOR_MODES.COLOR_TEMP,
  COLOR_MODES.XY,
] as const;

/**
 * Color modes that support color control
 */
export const COLOR_SUPPORTING_MODES = [
  COLOR_MODES.HS,
  COLOR_MODES.RGB,
  COLOR_MODES.RGBW,
  COLOR_MODES.RGBWW,
  COLOR_MODES.XY,
] as const;

/**
 * Color modes that support color temperature
 */
export const COLOR_TEMP_SUPPORTING_MODES = [
  COLOR_MODES.COLOR_TEMP,
] as const;

/**
 * Default sizes and dimensions
 */
export const SIZES = {
  /** Maximum width for color picker in normal mode */
  COLOR_PICKER_MAX_WIDTH: 300,
  /** Maximum width for color picker in compact mode */
  COLOR_PICKER_MAX_WIDTH_COMPACT: 200,
  /** Padding subtracted from card width in normal mode */
  PADDING_NORMAL: 50,
  /** Padding subtracted from card width in compact mode */
  PADDING_COMPACT: 100,
  /** Card height units for light entity */
  CARD_LENGTH_LIGHT: 10,
  /** Card height units for switch entity */
  CARD_LENGTH_SWITCH: 1,
  /** Multiplier for group card height */
  GROUP_MULTIPLIER: 0.8,
} as const;

/**
 * Debounce delays in milliseconds
 */
export const DEBOUNCE_DELAYS = {
  /** Delay for color picker changes */
  COLOR_CHANGE: 100,
  /** Delay for slider changes */
  SLIDER_CHANGE: 50,
  /** Delay for effect selection */
  EFFECT_CHANGE: 50,
} as const;

/**
 * Slider ranges
 */
export const SLIDER_RANGES = {
  /** Brightness min value */
  BRIGHTNESS_MIN: 1,
  /** Brightness max value */
  BRIGHTNESS_MAX: 255,
  /** Speed min value (WLED) */
  SPEED_MIN: 1,
  /** Speed max value (WLED) */
  SPEED_MAX: 255,
  /** Intensity min value (WLED) */
  INTENSITY_MIN: 1,
  /** Intensity max value (WLED) */
  INTENSITY_MAX: 255,
  /** White value min */
  WHITE_VALUE_MIN: 0,
  /** White value max */
  WHITE_VALUE_MAX: 255,
} as const;

/**
 * Color value ranges
 */
export const COLOR_RANGES = {
  /** Hue minimum (degrees) */
  HUE_MIN: 0,
  /** Hue maximum (degrees) */
  HUE_MAX: 360,
  /** Saturation minimum (percent) */
  SATURATION_MIN: 0,
  /** Saturation maximum (percent) */
  SATURATION_MAX: 100,
  /** RGB component minimum */
  RGB_MIN: 0,
  /** RGB component maximum */
  RGB_MAX: 255,
} as const;

/**
 * Default icon names (without mdi: prefix)
 */
export const DEFAULT_ICONS = {
  BRIGHTNESS: 'weather-sunny',
  TEMPERATURE: 'thermometer',
  WHITE: 'file-word-box',
  SPEED: 'speedometer',
  INTENSITY: 'transit-connection-horizontal',
} as const;

/**
 * Feature name keys used internally
 */
export const FEATURE_NAMES = {
  BRIGHTNESS: 'brightness',
  COLOR_TEMP: 'colorTemp',
  EFFECT_LIST: 'effectList',
  COLOR: 'color',
  WHITE_VALUE: 'whiteValue',
  SPEED: 'speed',
  INTENSITY: 'intensity',
} as const;

/**
 * Timing constants
 */
export const TIMING = {
  /** Timeout before setting color wheels (ms) */
  COLOR_WHEEL_SETUP_DELAY: 100,
  /** Decimal precision for color values */
  COLOR_PRECISION: 100,
} as const;

/**
 * Card metadata
 */
export const CARD_INFO = {
  TYPE: 'light-entity-card',
  NAME: 'Light Entity Card',
  DESCRIPTION: 'Control lights and switches',
  EDITOR_NAME: 'light-entity-card-editor',
} as const;

/**
 * CSS class names
 */
export const CSS_CLASSES = {
  CARD: 'light-entity-card',
  CARD_GROUP: 'group',
  CARD_CHILD: 'light-entity-child-card',
  HEADER: 'light-entity-card__header',
  TITLE: 'light-entity-card__title',
  TOGGLE: 'light-entity-card-toggle',
  SLIDERS: 'light-entity-card-sliders',
  SLIDER_FULL_WIDTH: 'ha-slider-full-width',
  COLOR_PICKER: 'light-entity-card__color-picker',
  COLOR_TEMP: 'light-entity-card-color_temp',
  EFFECT_LIST: 'light-entity-card-effectlist',
  CENTER: 'light-entity-card-center',
  ICON_CONTAINER: 'icon-container',
  PERCENT_SLIDER: 'percent-slider',
  HIDDEN: 'hidden',
  CONTROL: 'control',
} as const;

/**
 * Event names
 */
export const EVENTS = {
  SERVICE_CALL_ERROR: 'service-call-error',
  CONFIG_CHANGED: 'config-changed',
  VALUE_CHANGED: 'value-changed',
} as const;

/**
 * Version information
 */
export const VERSION = '6.1.3';
