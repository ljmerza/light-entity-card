/**
 * TypeScript type definitions for Home Assistant entities and services
 *
 * These types provide type safety when working with Home Assistant data structures.
 */
/**
 * Base entity state object
 */
export interface HassEntityBase {
    entity_id: string;
    state: string;
    last_changed: string;
    last_updated: string;
    attributes: Record<string, any>;
    context: {
        id: string;
        parent_id: string | null;
        user_id: string | null;
    };
}
/**
 * Light entity attributes
 */
export interface LightEntityAttributes {
    friendly_name?: string;
    supported_features?: number;
    supported_color_modes?: string[];
    color_mode?: string;
    brightness?: number;
    hs_color?: [number, number];
    rgb_color?: [number, number, number];
    rgbw_color?: [number, number, number, number];
    rgbww_color?: [number, number, number, number, number];
    xy_color?: [number, number];
    color_temp?: number;
    min_mireds?: number;
    max_mireds?: number;
    white_value?: number;
    effect?: string;
    effect_list?: string[];
    speed?: number;
    intensity?: number;
    icon?: string;
    entity_picture?: string;
    assumed_state?: boolean;
    device_class?: string;
    [key: string]: any;
}
/**
 * Group entity attributes
 */
export interface GroupEntityAttributes extends LightEntityAttributes {
    entity_id?: string | string[];
    order?: number;
    auto?: boolean;
    view?: boolean;
    control?: string;
}
/**
 * Light entity state
 */
export interface LightEntity extends HassEntityBase {
    state: 'on' | 'off' | 'unavailable' | 'unknown';
    attributes: LightEntityAttributes;
}
/**
 * Group entity state
 */
export interface GroupEntity extends HassEntityBase {
    state: 'on' | 'off' | 'unavailable' | 'unknown';
    attributes: GroupEntityAttributes;
}
/**
 * Switch entity state
 */
export interface SwitchEntity extends HassEntityBase {
    state: 'on' | 'off' | 'unavailable' | 'unknown';
    attributes: {
        friendly_name?: string;
        icon?: string;
        assumed_state?: boolean;
        [key: string]: any;
    };
}
/**
 * Input select entity state
 */
export interface InputSelectEntity extends HassEntityBase {
    state: string;
    attributes: {
        friendly_name?: string;
        options: string[];
        icon?: string;
        [key: string]: any;
    };
}
/**
 * Union type for entities this card can handle
 */
export type CardEntity = LightEntity | GroupEntity | SwitchEntity;
/**
 * Service call data for light services
 */
export interface LightServiceData {
    entity_id?: string;
    brightness?: number;
    brightness_pct?: number;
    brightness_step?: number;
    brightness_step_pct?: number;
    hs_color?: [number, number];
    rgb_color?: [number, number, number];
    rgbw_color?: [number, number, number, number];
    rgbww_color?: [number, number, number, number, number];
    xy_color?: [number, number];
    color_temp?: number;
    kelvin?: number;
    color_name?: string;
    white_value?: number;
    white?: number;
    profile?: string;
    effect?: string;
    transition?: number;
    flash?: 'short' | 'long';
    speed?: number;
    intensity?: number;
    [key: string]: any;
}
/**
 * User information
 */
export interface HassUser {
    id: string;
    name: string;
    is_owner: boolean;
    is_admin: boolean;
    credentials?: Array<{
        type: string;
    }>;
    mfa_modules?: Array<{
        id: string;
        name: string;
        enabled: boolean;
    }>;
}
/**
 * Panel information
 */
export interface HassPanel {
    component_name: string;
    config: Record<string, any>;
    icon: string | null;
    title: string | null;
    url_path: string;
}
/**
 * Theme information
 */
export interface HassTheme {
    [key: string]: string;
}
/**
 * Translation resources
 */
export interface HassResources {
    [language: string]: {
        [key: string]: string;
    };
}
/**
 * Main Home Assistant instance interface
 */
export interface HomeAssistant {
    auth: {
        data: {
            hassUrl: string;
            access_token: string;
            expires: number;
            refresh_token: string;
            clientId: string | null;
        };
    };
    connection: {
        socket: WebSocket | null;
    };
    connected: boolean;
    states: Record<string, HassEntityBase>;
    services: Record<string, Record<string, any>>;
    config: {
        latitude: number;
        longitude: number;
        elevation: number;
        unit_system: {
            length: string;
            mass: string;
            temperature: string;
            volume: string;
        };
        location_name: string;
        time_zone: string;
        components: string[];
        config_dir: string;
        whitelist_external_dirs: string[];
        allowlist_external_dirs: string[];
        version: string;
        config_source: string;
        safe_mode: boolean;
        state: 'NOT_RUNNING' | 'STARTING' | 'RUNNING' | 'STOPPING' | 'FINAL_WRITE';
        external_url: string | null;
        internal_url: string | null;
    };
    themes: {
        default_theme: string;
        themes: Record<string, HassTheme>;
    };
    selectedTheme: string | null;
    panels: Record<string, HassPanel>;
    panelUrl: string;
    language: string;
    selectedLanguage: string | null;
    resources: HassResources;
    localize: (key: string, ...args: any[]) => string;
    translationMetadata: {
        fragments: string[];
        translations: Record<string, any>;
    };
    suspendWhenHidden: boolean;
    enableShortcuts: boolean;
    vibrate: boolean;
    dockedSidebar: 'docked' | 'always_hidden' | 'auto';
    defaultPanel: string;
    moreInfoEntityId: string | null;
    user?: HassUser;
    /**
     * Calls a Home Assistant service
     */
    callService(domain: string, service: string, serviceData?: LightServiceData | Record<string, any>, target?: {
        entity_id?: string | string[];
        device_id?: string | string[];
        area_id?: string | string[];
    }): Promise<void>;
    /**
     * Calls a Home Assistant WebSocket API
     */
    callWS<T>(msg: Record<string, any>): Promise<T>;
    /**
     * Sends an authentication message
     */
    sendWS(msg: Record<string, any>): void;
}
/**
 * Lovelace card configuration base
 */
export interface LovelaceCardConfig {
    type: string;
    [key: string]: any;
}
/**
 * Lovelace card editor configuration event
 */
export interface LovelaceCardEditor extends HTMLElement {
    hass?: HomeAssistant;
    setConfig(config: LovelaceCardConfig): void;
}
//# sourceMappingURL=homeassistant.d.ts.map