/**
 * Service layer for calling Home Assistant light services
 */
import { logger } from '../utils/logger';
import { LIGHT_SERVICES } from '../constants';
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
export async function callEntityService(
  hass: HomeAssistant,
  payload: any,
  stateObj: CardEntity,
  service?: string
): Promise<void> {
  try {
    // Determine the correct service domain
    let entityType = stateObj.entity_id.split('.')[0];
    if (entityType === 'group') {
      entityType = 'homeassistant';
    }

    const serviceToCall = service || LIGHT_SERVICES.TURN_ON;
    const serviceData = {
      entity_id: stateObj.entity_id,
      ...payload,
    };

    logger.debug('Calling service', {
      domain: entityType,
      service: serviceToCall,
      data: serviceData,
    });

    await hass.callService(entityType, serviceToCall, serviceData);
  } catch (error) {
    logger.error('Failed to call service', error, {
      entity: stateObj.entity_id,
      payload,
      service,
    });

    throw error;
  }
}

/**
 * Toggles an entity on or off
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param currentlyOn - Whether the entity is currently on
 */
export async function toggleEntity(
  hass: HomeAssistant,
  stateObj: CardEntity,
  currentlyOn: boolean
): Promise<void> {
  const service = currentlyOn ? LIGHT_SERVICES.TURN_OFF : LIGHT_SERVICES.TURN_ON;
  await callEntityService(hass, {}, stateObj, service);
}

/**
 * Sets brightness for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param brightness - Brightness value (0-255)
 */
export async function setBrightness(
  hass: HomeAssistant,
  stateObj: CardEntity,
  brightness: number
): Promise<void> {
  await callEntityService(hass, { brightness }, stateObj);
}

/**
 * Sets color temperature for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param colorTemp - Color temperature in mireds
 */
export async function setColorTemp(
  hass: HomeAssistant,
  stateObj: CardEntity,
  colorTemp: number
): Promise<void> {
  await callEntityService(hass, { color_temp: colorTemp }, stateObj);
}

/**
 * Sets color for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param hsColor - HS color tuple [hue, saturation]
 */
export async function setColor(
  hass: HomeAssistant,
  stateObj: CardEntity,
  hsColor: [number, number]
): Promise<void> {
  await callEntityService(hass, { hs_color: hsColor }, stateObj);
}

/**
 * Sets white value for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param whiteValue - White value (0-255)
 */
export async function setWhiteValue(
  hass: HomeAssistant,
  stateObj: CardEntity,
  whiteValue: number
): Promise<void> {
  await callEntityService(hass, { white_value: whiteValue }, stateObj);
}

/**
 * Sets effect for a light entity
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param effect - Effect name
 */
export async function setEffect(
  hass: HomeAssistant,
  stateObj: CardEntity,
  effect: string
): Promise<void> {
  await callEntityService(hass, { effect }, stateObj);
}

/**
 * Sets speed for a WLED light
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param speed - Speed value
 */
export async function setSpeed(
  hass: HomeAssistant,
  stateObj: CardEntity,
  speed: number
): Promise<void> {
  await callEntityService(hass, { speed }, stateObj);
}

/**
 * Sets intensity for a WLED light
 *
 * @param hass - Home Assistant object
 * @param stateObj - The entity state object
 * @param intensity - Intensity value
 */
export async function setIntensity(
  hass: HomeAssistant,
  stateObj: CardEntity,
  intensity: number
): Promise<void> {
  await callEntityService(hass, { intensity }, stateObj);
}
