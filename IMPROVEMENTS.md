# Light Entity Card - Improvements & Bug Fixes

> Comprehensive list of potential improvements, bug fixes, and enhancements for the light-entity-card project.

**Last Updated**: October 2025
**Version**: 6.1.3

---

## Table of Contents

1. [Critical Bug Fixes](#critical-bug-fixes)
2. [TypeScript Improvements](#typescript-improvements)
3. [Code Quality & Maintainability](#code-quality--maintainability)
4. [Performance Optimizations](#performance-optimizations)
5. [Feature Enhancements](#feature-enhancements)
6. [Accessibility (a11y)](#accessibility-a11y)
7. [Security](#security)
8. [Testing](#testing)
9. [Documentation](#documentation)
10. [Build & Tooling](#build--tooling)

---

## Critical Bug Fixes

### 1. Color Picker Event Handling
**File**: `src/index.ts:575-580`
**Issue**: The `handleColorChanged` method assumes `event.detail.hs` exists, but the actual event structure from `ha-color-picker` may differ.

**Current Code**:
```typescript
handleColorChanged(event: CustomEvent, stateObj: any) {
  const hsColor = event.detail.hs;
  if (!hsColor) return;
  this.callEntityService({ hs_color: hsColor }, stateObj);
}
```

**Fix**:
- Research the actual `ha-color-picker` event structure
- Add proper null checks and type guards
- Consider debouncing to avoid excessive API calls during color dragging

**Suggested Implementation**:
```typescript
private colorChangeDebounce: number | null = null;

handleColorChanged(event: CustomEvent, stateObj: any) {
  // Clear previous debounce
  if (this.colorChangeDebounce) {
    clearTimeout(this.colorChangeDebounce);
  }

  // Debounce color changes
  this.colorChangeDebounce = window.setTimeout(() => {
    const hsColor = event.detail?.hs || event.detail?.value?.hs;
    if (!hsColor || !Array.isArray(hsColor) || hsColor.length !== 2) {
      console.warn('Invalid hs color received:', event.detail);
      return;
    }
    this.callEntityService({ hs_color: hsColor }, stateObj);
  }, 100);
}
```

---

### 2. Effects List Type Safety Issue
**File**: `src/index.ts:460-462`
**Issue**: TypeScript warnings about using `string[]` and `true` as index types.

**Current Code**:
```typescript
} else if (this.config.effects_list && this.hass.states[this.config.effects_list]) {
  const inputSelect = this.hass.states[this.config.effects_list];
```

**Problem**: `this.config.effects_list` can be `boolean | string | string[]`, but only `string` is valid as an object key.

**Fix**:
```typescript
} else if (
  typeof this.config.effects_list === 'string' &&
  this.hass.states[this.config.effects_list]
) {
  const inputSelect = this.hass.states[this.config.effects_list];
  effect_list = (inputSelect.attributes && inputSelect.attributes.options) || [];
```

---

### 3. Feature Support Type Mismatch
**File**: `src/index.ts:538, 545, 554, 561`
**Issue**: Assigning `boolean` to variable typed as `number`.

**Current Code**:
```typescript
let featureSupported = LightEntityCard.featureNames[featureName] & stateObj.attributes.supported_features;
// Later...
featureSupported = [...new Set(colorModes.filter(mode => supportedModes.includes(mode)))].length > 0;
```

**Fix**: Change the variable type or logic:
```typescript
let featureSupported: boolean | number = LightEntityCard.featureNames[featureName] & stateObj.attributes.supported_features;

if (!featureSupported) {
  // Convert to boolean explicitly
  featureSupported = [...new Set(colorModes.filter(mode => supportedModes.includes(mode)))].length > 0 ? 1 : 0;
}

// Or better, separate concerns:
let featureFlag = LightEntityCard.featureNames[featureName] & stateObj.attributes.supported_features;
let featureSupported = Boolean(featureFlag);
```

---

### 4. Unused Properties
**File**: `src/index.ts:58`
**Issue**: `_firstRendered` is declared but never used.

**Fix**: Either use it or remove it:
```typescript
// Remove this line if not needed:
// private _firstRendered = false;
```

---

### 5. Missing Return Type on getConfigElement
**File**: `src/index.ts:96-98`
**Issue**: ESLint comment disables `no-undef` but doesn't fix the real issue.

**Fix**:
```typescript
static async getConfigElement(): Promise<HTMLElement> {
  return document.createElement(editorName);
}
```

---

## TypeScript Improvements

### 1. Strengthen Type Definitions

**Current Issues**:
- Many `any` types throughout the codebase
- Interfaces defined inline instead of in separate types file
- Missing proper Home Assistant type definitions

**Recommendations**:

#### Create Comprehensive Type Definitions
**New File**: `src/types/homeassistant.ts`

```typescript
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    supported_features?: number;
    supported_color_modes?: string[];
    brightness?: number;
    hs_color?: [number, number];
    rgb_color?: [number, number, number];
    color_temp?: number;
    min_mireds?: number;
    max_mireds?: number;
    white_value?: number;
    effect?: string;
    effect_list?: string[];
    speed?: number;
    intensity?: number;
    entity_id?: string | string[]; // For groups
    [key: string]: any;
  };
  [key: string]: any;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data: ServiceCallData) => Promise<void>;
  resources: Record<string, any>;
  language: string;
  user?: {
    id: string;
    name: string;
  };
  themes: Record<string, any>;
}

export interface ServiceCallData {
  entity_id?: string;
  brightness?: number;
  hs_color?: [number, number];
  rgb_color?: [number, number, number];
  color_temp?: number;
  white_value?: number;
  effect?: string;
  speed?: number;
  intensity?: number;
  [key: string]: any;
}
```

#### Create Card-Specific Types
**New File**: `src/types/card.ts`

```typescript
export interface LightEntityCardConfig {
  entity: string;
  shorten_cards?: boolean;
  consolidate_entities?: boolean;
  child_card?: boolean;
  hide_header?: boolean;
  show_header_icon?: boolean;
  header?: string;
  brightness?: boolean;
  color_temp?: boolean;
  white_value?: boolean;
  color_picker?: boolean;
  speed?: boolean;
  intensity?: boolean;
  effects_list?: boolean | string | string[];
  persist_features?: boolean;
  force_features?: boolean;
  show_slider_percent?: boolean;
  full_width_sliders?: boolean;
  brightness_icon?: string;
  white_icon?: string;
  temperature_icon?: string;
  speed_icon?: string;
  intensity_icon?: string;
  group?: boolean;
}

export interface ColorPickerEvent extends CustomEvent {
  detail: {
    hs?: [number, number];
    value?: {
      hs?: [number, number];
    };
  };
}

export interface SliderChangeEvent extends Event {
  target: EventTarget & { value: string };
}

export interface SelectChangeEvent extends CustomEvent {
  target: EventTarget & { value: string };
}
```

---

### 2. Add Proper Method Signatures

**Current**: Many methods lack type annotations for parameters and return values.

**Fix**: Add complete type signatures:

```typescript
// Before
setConfig(config) {
  if (!config.entity) throw Error('entity required.');
  this.config = { ...defaultConfig, ...config };
}

// After
setConfig(config: Partial<LightEntityCardConfig>): void {
  if (!config.entity) {
    throw new Error('entity required.');
  }
  this.config = { ...defaultConfig, ...config } as LightEntityCardConfig;
}
```

---

### 3. Use Discriminated Unions for Feature Detection

```typescript
type FeatureName = 'brightness' | 'colorTemp' | 'effectList' | 'color' | 'whiteValue' | 'speed' | 'intensity';

type FeatureCheckResult =
  | { supported: true; reason?: never }
  | { supported: false; reason: string };

dontShowFeature(featureName: FeatureName, stateObj: HassEntity): boolean {
  // More type-safe implementation
}
```

---

## Code Quality & Maintainability

### 1. Extract Magic Numbers and Strings to Constants

**File**: `src/index.ts`

**Current Issues**:
- Hard-coded values scattered throughout
- String literals repeated

**Create Constants File**:
**New File**: `src/constants.ts`

```typescript
export const LIGHT_FEATURES = {
  BRIGHTNESS: 1,
  COLOR_TEMP: 2,
  EFFECT: 4,
  COLOR: 16,
  WHITE_VALUE: 128,
} as const;

export const ENTITY_DOMAINS = {
  LIGHT: 'light',
  SWITCH: 'switch',
  GROUP: 'group',
  HOMEASSISTANT: 'homeassistant',
} as const;

export const LIGHT_SERVICES = {
  TURN_ON: 'turn_on',
  TURN_OFF: 'turn_off',
  TOGGLE: 'toggle',
} as const;

export const COLOR_MODES = {
  SUPPORTED_FOR_BRIGHTNESS: ['hs', 'rgb', 'rgbw', 'rgbww', 'white', 'brightness', 'color_temp', 'xy'],
  SUPPORTED_FOR_COLOR_TEMP: ['color_temp'],
  SUPPORTED_FOR_COLOR: ['hs', 'rgb', 'rgbw', 'rgbww', 'xy'],
} as const;

export const DEFAULT_SIZES = {
  COLOR_PICKER_MAX_WIDTH: 300,
  COLOR_PICKER_MAX_WIDTH_COMPACT: 200,
  PADDING_NORMAL: 50,
  PADDING_COMPACT: 100,
  CARD_LENGTH_LIGHT: 10,
  CARD_LENGTH_SWITCH: 1,
  GROUP_MULTIPLIER: 0.8,
} as const;

export const DEBOUNCE_DELAYS = {
  COLOR_CHANGE: 100,
  SLIDER_CHANGE: 50,
} as const;
```

**Usage**:
```typescript
import { LIGHT_FEATURES, ENTITY_DOMAINS, LIGHT_SERVICES } from './constants';

static get featureNames() {
  return LIGHT_FEATURES;
}

static get cmdToggle() {
  return {
    on: LIGHT_SERVICES.TURN_ON,
    off: LIGHT_SERVICES.TURN_OFF,
  };
}
```

---

### 2. Split Large Class into Smaller Modules

**Current Issue**: The `LightEntityCard` class is ~670 lines with many responsibilities.

**Refactor Strategy**:

#### Create Feature Modules
**New File**: `src/features/brightness.ts`
```typescript
import { html, TemplateResult } from 'lit';
import { HassEntity, LightEntityCardConfig } from '../types';

export function createBrightnessSlider(
  config: LightEntityCardConfig,
  stateObj: HassEntity,
  onValueChange: (value: number, attribute: string) => void,
  showPercent: (value: number, min: number, max: number) => TemplateResult
): TemplateResult {
  if (config.brightness === false) return html``;

  const sliderClass = config.full_width_sliders ? 'ha-slider-full-width' : '';

  return html`
    <div class="control light-entity-card-center">
      <div class="icon-container">
        <ha-icon icon="hass:${config.brightness_icon || 'weather-sunny'}"></ha-icon>
      </div>
      <ha-slider
        .value="${stateObj.attributes.brightness || 0}"
        @change="${(e: Event) => onValueChange((e.target as any).value, 'brightness')}"
        min="1"
        max="255"
        class="${sliderClass}"
      ></ha-slider>
      ${showPercent(stateObj.attributes.brightness || 0, 0, 254)}
    </div>
  `;
}
```

**Similar files**:
- `src/features/color-temperature.ts`
- `src/features/effects.ts`
- `src/features/white-value.ts`

---

### 3. Implement Service Layer

**New File**: `src/services/light-service.ts`

```typescript
import { HomeAssistant, HassEntity, ServiceCallData } from '../types';
import { ENTITY_DOMAINS, LIGHT_SERVICES } from '../constants';

export class LightService {
  constructor(private hass: HomeAssistant) {}

  async turnOn(entityId: string, params: Partial<ServiceCallData> = {}): Promise<void> {
    const domain = this.getEntityDomain(entityId);
    await this.hass.callService(domain, LIGHT_SERVICES.TURN_ON, {
      entity_id: entityId,
      ...params,
    });
  }

  async turnOff(entityId: string): Promise<void> {
    const domain = this.getEntityDomain(entityId);
    await this.hass.callService(domain, LIGHT_SERVICES.TURN_OFF, {
      entity_id: entityId,
    });
  }

  async setBrightness(entityId: string, brightness: number): Promise<void> {
    await this.turnOn(entityId, { brightness });
  }

  async setColor(entityId: string, hsColor: [number, number]): Promise<void> {
    await this.turnOn(entityId, { hs_color: hsColor });
  }

  async setColorTemp(entityId: string, colorTemp: number): Promise<void> {
    await this.turnOn(entityId, { color_temp: colorTemp });
  }

  async setEffect(entityId: string, effect: string): Promise<void> {
    await this.turnOn(entityId, { effect });
  }

  private getEntityDomain(entityId: string): string {
    const domain = entityId.split('.')[0];
    return domain === ENTITY_DOMAINS.GROUP ? ENTITY_DOMAINS.HOMEASSISTANT : domain;
  }
}
```

---

### 4. Add Error Handling and Logging

**New File**: `src/utils/logger.ts`

```typescript
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

class Logger {
  private level: LogLevel = LogLevel.INFO;
  private prefix = '[light-entity-card]';

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  debug(message: string, ...args: any[]): void {
    if (this.level <= LogLevel.DEBUG) {
      console.debug(`${this.prefix} ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.level <= LogLevel.INFO) {
      console.info(`${this.prefix} ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.level <= LogLevel.WARN) {
      console.warn(`${this.prefix} ${message}`, ...args);
    }
  }

  error(message: string, error?: Error, ...args: any[]): void {
    if (this.level <= LogLevel.ERROR) {
      console.error(`${this.prefix} ${message}`, error, ...args);
    }
  }
}

export const logger = new Logger();
```

**Usage**:
```typescript
import { logger } from './utils/logger';

async callEntityService(payload: ServiceCallData, stateObj: HassEntity, state?: string): Promise<void> {
  if (!this._firstUpdate) {
    logger.debug('Skipping service call - first update not complete');
    return;
  }

  try {
    const domain = this.getEntityDomain(stateObj.entity_id);
    await this.hass.callService(domain, state || LIGHT_SERVICES.TURN_ON, {
      entity_id: stateObj.entity_id,
      ...payload,
    });
    logger.debug(`Service called successfully for ${stateObj.entity_id}`, payload);
  } catch (error) {
    logger.error(`Failed to call service for ${stateObj.entity_id}`, error as Error, payload);
    // Optionally show error to user
    this.showError('Failed to control light');
  }
}
```

---

### 5. Use Lit Lifecycle Methods Properly

**Current Issue**: Using `firstUpdated` and deprecated patterns.

**Improvements**:
```typescript
// Use willUpdate for pre-render logic
protected willUpdate(changedProps: PropertyValues): void {
  super.willUpdate(changedProps);

  if (changedProps.has('hass') || changedProps.has('config')) {
    this.updateStateObjects();
  }
}

// Use updated for post-render logic
protected updated(changedProps: PropertyValues): void {
  super.updated(changedProps);

  if (changedProps.has('_shownStateObjects')) {
    this.setupColorPickers();
  }
}

// Cache computed values
private updateStateObjects(): void {
  if (!this.hass || !this.config) return;

  const entity = this.hass.states[this.config.entity];
  if (!entity) return;

  this._stateObjects = this.getEntitiesToShow(entity);
  this._shownStateObjects = this.config.consolidate_entities
    ? [entity]
    : [...this._stateObjects];
}
```

---

## Performance Optimizations

### 1. Implement Memoization for Expensive Calculations

**New File**: `src/utils/memoize.ts`

```typescript
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  keyFn?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
```

**Usage**:
```typescript
private memoizedFeatureCheck = memoize(
  (featureName: string, entityId: string, supportedFeatures: number) => {
    // Expensive feature checking logic
    return this.checkFeatureSupport(featureName, supportedFeatures);
  },
  (featureName, entityId, supportedFeatures) => `${entityId}-${featureName}-${supportedFeatures}`
);
```

---

### 2. Debounce User Input

**New File**: `src/utils/debounce.ts`

```typescript
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(later, wait);
  };
}
```

**Usage**:
```typescript
import { debounce } from './utils/debounce';
import { DEBOUNCE_DELAYS } from './constants';

private debouncedColorChange = debounce(
  (hsColor: [number, number], stateObj: HassEntity) => {
    this.callEntityService({ hs_color: hsColor }, stateObj);
  },
  DEBOUNCE_DELAYS.COLOR_CHANGE
);

handleColorChanged(event: CustomEvent, stateObj: HassEntity): void {
  const hsColor = event.detail?.hs;
  if (!hsColor) return;

  this.debouncedColorChange(hsColor, stateObj);
}
```

---

### 3. Lazy Load Editor Component

**Current**: Editor is loaded immediately on import.

**Improved**:
```typescript
static async getConfigElement(): Promise<HTMLElement> {
  // Lazy load the editor only when needed
  if (!customElements.get('light-entity-card-editor')) {
    const { LightEntityCardEditor } = await import('./index-editor');
    customElements.define('light-entity-card-editor', LightEntityCardEditor);
  }
  return document.createElement('light-entity-card-editor');
}
```

---

### 4. Use CSS Variables for Dynamic Styling

**Instead of inline styles, use CSS custom properties**:

```typescript
// In render()
this.style.setProperty('--card-width', `${cardWidth}px`);
this.style.setProperty('--picker-size', `${pickerSize}px`);
```

```css
/* In style.ts */
.light-entity-card__color-picker ha-color-picker {
  width: var(--picker-size, 250px);
  max-width: 100%;
}
```

---

## Feature Enhancements

### 1. Add Animation Support

**New Feature**: Smooth transitions for color changes and state updates.

**File**: `src/style.ts`

```css
ha-slider {
  transition: background-color 0.3s ease;
}

.light-entity-card__color-picker ha-color-picker {
  transition: opacity 0.2s ease;
}

.light-entity-card.updating {
  opacity: 0.7;
  pointer-events: none;
}
```

---

### 2. Add Preset Colors/Scenes

**New Feature**: Quick access to preset colors or favorite scenes.

**Config Addition**:
```typescript
interface LightEntityCardConfig {
  // ... existing properties
  presets?: Array<{
    name: string;
    color?: [number, number];
    brightness?: number;
    icon?: string;
  }>;
}
```

**UI Implementation**:
```typescript
createPresets(stateObj: HassEntity): TemplateResult {
  if (!this.config.presets || this.config.presets.length === 0) {
    return html``;
  }

  return html`
    <div class="light-entity-card__presets">
      ${this.config.presets.map(preset => html`
        <button
          class="preset-button"
          @click=${() => this.applyPreset(preset, stateObj)}
          title=${preset.name}
        >
          ${preset.icon ? html`<ha-icon icon="${preset.icon}"></ha-icon>` : preset.name}
        </button>
      `)}
    </div>
  `;
}
```

---

### 3. Add Transition Duration Control

**New Feature**: Allow users to specify transition time for light changes.

**Config Addition**:
```typescript
interface LightEntityCardConfig {
  // ... existing properties
  transition_duration?: number; // in seconds
}
```

**Usage**:
```typescript
async callEntityService(payload: ServiceCallData, stateObj: HassEntity, state?: string): Promise<void> {
  const serviceData = {
    entity_id: stateObj.entity_id,
    ...payload,
  };

  // Add transition if configured
  if (this.config.transition_duration !== undefined) {
    serviceData.transition = this.config.transition_duration;
  }

  await this.hass.callService(domain, service, serviceData);
}
```

---

### 4. Add Group Controls

**New Feature**: When controlling a group, show aggregate status.

```typescript
private getGroupStatus(entities: HassEntity[]): {
  allOn: boolean;
  allOff: boolean;
  mixed: boolean;
  averageBrightness: number;
} {
  const onEntities = entities.filter(e => e.state === 'on');

  return {
    allOn: onEntities.length === entities.length,
    allOff: onEntities.length === 0,
    mixed: onEntities.length > 0 && onEntities.length < entities.length,
    averageBrightness: onEntities.length > 0
      ? onEntities.reduce((sum, e) => sum + (e.attributes.brightness || 0), 0) / onEntities.length
      : 0,
  };
}
```

---

### 5. Add Custom Slider Ranges

**Config Addition**:
```typescript
interface LightEntityCardConfig {
  // ... existing properties
  brightness_range?: { min: number; max: number };
  color_temp_range?: { min: number; max: number };
}
```

---

### 6. Add Confirmation for Potentially Destructive Actions

**New Feature**: Optional confirmation before turning off multiple lights.

```typescript
private async confirmAction(message: string): Promise<boolean> {
  if (!this.config.confirm_actions) return true;

  // Use HA's confirmation dialog
  return new Promise((resolve) => {
    const event = new CustomEvent('hass-confirmation', {
      detail: {
        text: message,
        confirm: () => resolve(true),
        dismiss: () => resolve(false),
      },
    });
    this.dispatchEvent(event);
  });
}
```

---

## Accessibility (a11y)

### 1. Add ARIA Labels and Roles

**Current Issue**: Missing accessibility attributes.

**Fixes**:

```typescript
createBrightnessSlider(stateObj: HassEntity): TemplateResult {
  const brightness = stateObj.attributes.brightness || 0;
  const percent = Math.floor((brightness / 254) * 100);

  return html`
    <div class="control light-entity-card-center" role="group" aria-label="Brightness control">
      <div class="icon-container" aria-hidden="true">
        <ha-icon icon="hass:${this.config.brightness_icon}"></ha-icon>
      </div>
      <ha-slider
        .value="${brightness}"
        @change="${(event: Event) => this._setValue(event, stateObj, 'brightness')}"
        min="1"
        max="255"
        aria-label="Brightness"
        aria-valuemin="1"
        aria-valuemax="255"
        aria-valuenow="${brightness}"
        aria-valuetext="${percent} percent"
      ></ha-slider>
      ${this.showPercent(brightness, 0, 254)}
    </div>
  `;
}
```

---

### 2. Keyboard Navigation

**Add keyboard shortcuts**:

```typescript
connectedCallback(): void {
  super.connectedCallback();
  this.addEventListener('keydown', this.handleKeyDown);
}

disconnectedCallback(): void {
  super.disconnectedCallback();
  this.removeEventListener('keydown', this.handleKeyDown);
}

private handleKeyDown = (e: KeyboardEvent): void => {
  // Space/Enter to toggle
  if (e.key === ' ' || e.key === 'Enter') {
    if (e.target === this) {
      e.preventDefault();
      this.toggleLight();
    }
  }

  // Arrow keys to adjust brightness
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    this.adjustBrightness(e.key === 'ArrowUp' ? 10 : -10);
  }
};
```

---

### 3. Focus Management

```typescript
protected updated(changedProps: PropertyValues): void {
  super.updated(changedProps);

  // Restore focus after re-render
  if (this._lastFocusedElement) {
    const element = this.shadowRoot?.querySelector(`[data-id="${this._lastFocusedElement}"]`);
    if (element instanceof HTMLElement) {
      element.focus();
    }
  }
}

private saveFocus(e: FocusEvent): void {
  const target = e.target as HTMLElement;
  this._lastFocusedElement = target.getAttribute('data-id');
}
```

---

### 4. High Contrast Mode Support

**CSS additions**:

```css
@media (prefers-contrast: high) {
  .light-entity-card {
    border: 2px solid currentColor;
  }

  ha-slider {
    filter: contrast(1.5);
  }

  .icon-container ha-icon {
    filter: contrast(2);
  }
}
```

---

### 5. Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Security

### 1. Update Dependencies with Known Vulnerabilities

**Current Issues** (from npm audit):
- `cross-spawn` < 6.0.6 (HIGH severity - ReDoS)
- `brace-expansion` 1.0.0-1.1.11 (LOW severity)
- `eslint` 4.0.0-7.2.0 (LOW severity)

**Fix**:
```bash
npm update cross-spawn
npm install eslint@latest --save-dev
```

---

### 2. Input Validation

**Add validation for user inputs**:

**New File**: `src/utils/validation.ts`

```typescript
export function validateEntityId(entityId: string): boolean {
  // Entity IDs should be format: domain.entity_name
  return /^[a-z_]+\.[a-z0-9_]+$/.test(entityId);
}

export function validateHsColor(color: any): color is [number, number] {
  return (
    Array.isArray(color) &&
    color.length === 2 &&
    typeof color[0] === 'number' &&
    typeof color[1] === 'number' &&
    color[0] >= 0 &&
    color[0] <= 360 &&
    color[1] >= 0 &&
    color[1] <= 100
  );
}

export function validateBrightness(value: any): value is number {
  return typeof value === 'number' && value >= 0 && value <= 255;
}

export function validateColorTemp(value: any, min: number, max: number): value is number {
  return typeof value === 'number' && value >= min && value <= max;
}
```

**Usage**:
```typescript
import { validateEntityId, validateHsColor } from './utils/validation';

setConfig(config: Partial<LightEntityCardConfig>): void {
  if (!config.entity) {
    throw new Error('entity required.');
  }

  if (!validateEntityId(config.entity)) {
    throw new Error(`Invalid entity ID: ${config.entity}`);
  }

  this.config = { ...defaultConfig, ...config } as LightEntityCardConfig;
}

handleColorChanged(event: CustomEvent, stateObj: HassEntity): void {
  const hsColor = event.detail?.hs;

  if (!validateHsColor(hsColor)) {
    logger.warn('Invalid HS color received', hsColor);
    return;
  }

  this.callEntityService({ hs_color: hsColor }, stateObj);
}
```

---

### 3. Content Security Policy (CSP) Compliance

**Ensure no inline scripts or unsafe evals**:
- Already compliant (using Lit templates)
- No `eval()` usage
- No inline event handlers

---

### 4. Sanitize Display Values

```typescript
import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

// DON'T do this:
return html`<div>${stateObj.attributes.friendly_name}</div>`;

// DO this (Lit already escapes, but be explicit):
private sanitizeDisplayName(name: string): string {
  return name.replace(/[<>]/g, '');
}

return html`<div>${this.sanitizeDisplayName(stateObj.attributes.friendly_name || '')}</div>`;
```

---

## Testing

### 1. Add Unit Tests

**Setup Testing**:

```bash
npm install --save-dev @web/test-runner @esm-bundle/chai @open-wc/testing-helpers
```

**New File**: `test/light-entity-card.test.ts`

```typescript
import { fixture, expect, html } from '@open-wc/testing';
import { LightEntityCard } from '../src/index';

describe('LightEntityCard', () => {
  it('renders correctly with basic config', async () => {
    const el = await fixture<LightEntityCard>(html`
      <light-entity-card .hass=${{ states: {} }} .config=${{ entity: 'light.test' }}>
      </light-entity-card>
    `);

    expect(el).to.exist;
    expect(el.config.entity).to.equal('light.test');
  });

  it('throws error when entity is missing', async () => {
    const el = await fixture<LightEntityCard>(html`<light-entity-card></light-entity-card>`);

    expect(() => el.setConfig({})).to.throw('entity required.');
  });

  it('shows brightness slider when brightness is true', async () => {
    const el = await fixture<LightEntityCard>(html`
      <light-entity-card
        .hass=${{
          states: {
            'light.test': {
              entity_id: 'light.test',
              state: 'on',
              attributes: { brightness: 128, supported_features: 1 },
            },
          },
        }}
        .config=${{ entity: 'light.test', brightness: true }}
      >
      </light-entity-card>
    `);

    const slider = el.shadowRoot?.querySelector('ha-slider');
    expect(slider).to.exist;
  });

  it('hides brightness slider when brightness is false', async () => {
    const el = await fixture<LightEntityCard>(html`
      <light-entity-card
        .hass=${{
          states: {
            'light.test': {
              entity_id: 'light.test',
              state: 'on',
              attributes: { brightness: 128 },
            },
          },
        }}
        .config=${{ entity: 'light.test', brightness: false }}
      >
      </light-entity-card>
    `);

    const slider = el.shadowRoot?.querySelector('ha-slider');
    expect(slider).to.not.exist;
  });
});
```

**New File**: `web-test-runner.config.js`

```javascript
export default {
  files: 'test/**/*.test.ts',
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    threshold: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },
  },
};
```

**Add to package.json**:
```json
{
  "scripts": {
    "test": "web-test-runner",
    "test:watch": "web-test-runner --watch"
  }
}
```

---

### 2. Add E2E Tests

**Setup Playwright**:

```bash
npm install --save-dev @playwright/test
```

**New File**: `e2e/card.spec.ts`

```typescript
import { test, expect } from '@playwright/test';

test.describe('Light Entity Card E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5000/demo.html');
  });

  test('toggles light on click', async ({ page }) => {
    const toggle = page.locator('ha-switch');
    await toggle.click();

    // Verify state change
    await expect(toggle).toHaveAttribute('checked', '');
  });

  test('changes brightness with slider', async ({ page }) => {
    const slider = page.locator('ha-slider[aria-label="Brightness"]');
    await slider.fill('200');

    // Verify the brightness value updated
    await expect(slider).toHaveValue('200');
  });

  test('changes color with color picker', async ({ page }) => {
    const colorPicker = page.locator('ha-color-picker');
    await colorPicker.click({ position: { x: 100, y: 50 } });

    // Verify color change event was fired
    const color = await page.evaluate(() => {
      return (window as any).lastColorChange;
    });
    expect(color).toBeDefined();
  });
});
```

---

### 3. Add Visual Regression Tests

**New File**: `test/visual/snapshots.test.ts`

```typescript
import { fixture, expect } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';

describe('Visual Regression Tests', () => {
  it('matches snapshot for default state', async () => {
    const el = await fixture(html`
      <light-entity-card .hass=${mockHass} .config=${mockConfig}></light-entity-card>
    `);

    await visualDiff(el, 'default-state');
  });

  it('matches snapshot for compact mode', async () => {
    const el = await fixture(html`
      <light-entity-card
        .hass=${mockHass}
        .config=${{ ...mockConfig, shorten_cards: true }}
      ></light-entity-card>
    `);

    await visualDiff(el, 'compact-mode');
  });
});
```

---

## Documentation

### 1. Add JSDoc Comments

**Add comprehensive documentation**:

```typescript
/**
 * Light Entity Card for Home Assistant
 *
 * A custom Lovelace card that provides enhanced controls for light entities.
 * Supports brightness, color temperature, color picker, effects, and more.
 *
 * @element light-entity-card
 *
 * @fires {CustomEvent} config-changed - Fired when the card configuration changes
 * @fires {CustomEvent} hass-service-call - Fired when a service call is made
 *
 * @cssprop --primary-text-color - Color of the primary text
 * @cssprop --ha-slider-background - Background gradient for color temperature slider
 *
 * @example
 * ```yaml
 * type: custom:light-entity-card
 * entity: light.living_room
 * brightness: true
 * color_picker: true
 * effects_list: true
 * ```
 */
export class LightEntityCard extends ScopedRegistryHost(LitElement) {
  /**
   * Home Assistant instance
   * Contains the state of all entities and methods to call services
   */
  @property({ type: Object }) hass!: HomeAssistant;

  /**
   * Card configuration
   * Merged with default configuration on initialization
   */
  @property({ type: Object }) config!: LightEntityCardConfig;

  /**
   * Determines if a feature should be shown for a given entity
   *
   * @param featureName - The name of the feature to check
   * @param stateObj - The entity state object
   * @returns true if the feature should be hidden, false otherwise
   *
   * @remarks
   * This method checks both the entity's supported_features bitmask and
   * the newer supported_color_modes array for compatibility with different
   * Home Assistant versions.
   */
  dontShowFeature(featureName: FeatureName, stateObj: HassEntity): boolean {
    // Implementation...
  }
}
```

---

### 2. Create User Documentation

**New File**: `docs/README.md`

```markdown
# Light Entity Card Documentation

## Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Examples](#examples)
4. [Troubleshooting](#troubleshooting)
5. [FAQ](#faq)

## Installation

### HACS (Recommended)
1. Open HACS
2. Go to "Frontend"
3. Click the "+" button
4. Search for "Light Entity Card"
5. Click "Install"

### Manual Installation
1. Download `light-entity-card.js` from the latest release
2. Copy it to `config/www/light-entity-card.js`
3. Add the resource in Lovelace resources

## Configuration

### Basic Example
```yaml
type: custom:light-entity-card
entity: light.living_room
```

### All Options
```yaml
type: custom:light-entity-card
entity: light.living_room
header: Living Room Light
hide_header: false
show_header_icon: true
brightness: true
color_picker: true
color_temp: true
white_value: false
effects_list: true
persist_features: false
force_features: false
show_slider_percent: true
full_width_sliders: false
shorten_cards: false
consolidate_entities: false
child_card: false
brightness_icon: weather-sunny
temperature_icon: thermometer
white_icon: file-word-box
speed_icon: speedometer
intensity_icon: transit-connection-horizontal
```

## Examples

### Compact Group Card
```yaml
type: custom:light-entity-card
entity: group.all_lights
shorten_cards: true
consolidate_entities: true
```

### Color Lights Only
```yaml
type: custom:light-entity-card
entity: light.rgb_bulb
brightness: true
color_picker: true
color_temp: false
effects_list: false
```

### With Custom Effects
```yaml
type: custom:light-entity-card
entity: light.led_strip
effects_list:
  - Rainbow
  - Strobe
  - Fade
```

## Troubleshooting

### Color Picker Not Showing
- Ensure your light supports color (check supported_color_modes)
- Verify `color_picker: true` in config
- Check browser console for errors

### Sliders Not Working
- Verify the light entity is available
- Check that features are supported by the light
- Try setting `force_features: true` for debugging

## FAQ

**Q: Can I use this with switch entities?**
A: Yes, but only the toggle functionality will be available.

**Q: How do I customize the icons?**
A: Use the `*_icon` configuration options with Material Design Icons names.

**Q: Can I control multiple lights at once?**
A: Yes, use a group entity or set `consolidate_entities: true`.
```

---

### 3. Create Developer Documentation

**New File**: `docs/DEVELOPMENT.md`

```markdown
# Development Guide

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Setup
```bash
git clone https://github.com/ljmerza/light-entity-card.git
cd light-entity-card
npm install
```

### Development
```bash
npm start  # Start dev server with hot reload
```

### Building
```bash
npm run build  # Production build
npm run lint   # Lint code
npm run test   # Run tests
```

## Project Structure
```
light-entity-card/
├── src/
│   ├── index.ts              # Main card component
│   ├── index-editor.ts       # Config editor
│   ├── defaults.ts           # Default configuration
│   ├── style.ts             # Card styles
│   ├── types/               # TypeScript definitions
│   └── utils/               # Utility functions
├── dist/                    # Build output
├── test/                    # Tests
└── docs/                    # Documentation
```

## Architecture

### Component Hierarchy
```
LightEntityCard (main component)
  ├── Header (title + toggle)
  ├── Sliders (brightness, color temp, etc.)
  ├── Color Picker
  └── Effects List
```

### Data Flow
1. User interacts with control
2. Event handler called
3. Service call to Home Assistant
4. State updates from HA
5. Card re-renders with new state

## Adding a New Feature

1. Add config option to `LightEntityCardConfig` interface
2. Add default value in `defaults.ts`
3. Create feature component/method
4. Add to render template
5. Update documentation
6. Add tests

## Coding Standards

- Use TypeScript strict mode
- Follow Lit best practices
- Write unit tests for new features
- Use semantic commit messages
- Keep bundle size minimal
```

---

## Build & Tooling

### 1. Add Bundle Size Analysis

**Install**:
```bash
npm install --save-dev rollup-plugin-visualizer
```

**Update**: `rollup.config.prod.js`
```javascript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  // ... existing config
  plugins: [
    // ... existing plugins
    visualizer({
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
};
```

---

### 2. Add Pre-commit Hooks

**Install**:
```bash
npm install --save-dev husky lint-staged
npx husky install
```

**New File**: `.husky/pre-commit`
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

**Add to package.json**:
```json
{
  "lint-staged": {
    "*.ts": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

---

### 3. Add Prettier for Code Formatting

**Install**:
```bash
npm install --save-dev prettier
```

**New File**: `.prettierrc.json`
```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

**Add to package.json**:
```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.ts\"",
    "format:check": "prettier --check \"src/**/*.ts\""
  }
}
```

---

### 4. Add CI/CD Pipeline

**New File**: `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  release:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/master'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

---

### 5. Add Semantic Release

**Install**:
```bash
npm install --save-dev semantic-release @semantic-release/git @semantic-release/changelog
```

**New File**: `.releaserc.json`
```json
{
  "branches": ["master"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```

---

## Priority Roadmap

### High Priority (Critical Issues)
1. ✅ Fix color picker event handling
2. ✅ Fix TypeScript type errors for effects_list
3. ✅ Fix feature support type mismatches
4. ⏳ Add proper error handling and logging
5. ⏳ Add input validation

### Medium Priority (Quality & Maintainability)
1. ⏳ Split large class into smaller modules
2. ⏳ Add unit tests (target 80% coverage)
3. ⏳ Improve TypeScript types (remove `any`)
4. ⏳ Add comprehensive JSDoc comments
5. ⏳ Implement service layer pattern

### Low Priority (Enhancements)
1. ⏳ Add animation support
2. ⏳ Add preset colors feature
3. ⏳ Add transition duration control
4. ⏳ Improve accessibility
5. ⏳ Add visual regression tests

---

## Contributing

Contributions are welcome! Please:
1. Check existing issues and PRs first
2. Follow the coding standards
3. Add tests for new features
4. Update documentation
5. Use semantic commit messages

## License

MIT License - see LICENSE file for details
