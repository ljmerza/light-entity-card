import type { HomeAssistant, CardEntity } from '../types/index';
/**
 * Calls a Home Assistant service to update the state of an entity
 *
 * This function includes error handling and logging to help debug issues.
 * It automatically determines the correct service domain (light, switch, or homeassistant).
 *
 * @param hass - Home Assistant object
 * @param payload - Service data (brightness, color, etc.)
 * @param stateObj - The entity state object
 * @param service - Optional service name (defaults to 'turn_on')
 * @returns Promise that resolves when service call completes
 */
export declare function callEntityService(hass: HomeAssistant, payload: any, stateObj: CardEntity, service?: string): Promise<void>;
/**
 * Toggles an entity on or off
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param currentlyOn - Whether the entity is currently on
 */
export declare function toggleEntity(hass: HomeAssistant, stateObj: CardEntity, currentlyOn: boolean): Promise<void>;
/**
 * Sets brightness for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param brightness - Brightness value (0-255)
 */
export declare function setBrightness(hass: HomeAssistant, stateObj: CardEntity, brightness: number): Promise<void>;
/**
 * Sets color temperature for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param colorTemp - Color temperature in mireds
 */
export declare function setColorTemp(hass: HomeAssistant, stateObj: CardEntity, colorTemp: number): Promise<void>;
/**
 * Sets color for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param hsColor - HS color tuple [hue, saturation]
 */
export declare function setColor(hass: HomeAssistant, stateObj: CardEntity, hsColor: [number, number]): Promise<void>;
/**
 * Sets white value for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param whiteValue - White value (0-255)
 */
export declare function setWhiteValue(hass: HomeAssistant, stateObj: CardEntity, whiteValue: number): Promise<void>;
/**
 * Sets effect for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param effect - Effect name
 */
export declare function setEffect(hass: HomeAssistant, stateObj: CardEntity, effect: string): Promise<void>;
/**
 * Sets speed for a WLED light
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param speed - Speed value
 */
export declare function setSpeed(hass: HomeAssistant, stateObj: CardEntity, speed: number): Promise<void>;
/**
 * Sets intensity for a WLED light
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param intensity - Intensity value
 */
export declare function setIntensity(hass: HomeAssistant, stateObj: CardEntity, intensity: number): Promise<void>;
//# sourceMappingURL=light-service.d.ts.map