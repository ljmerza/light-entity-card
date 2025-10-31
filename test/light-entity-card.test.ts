/**
 * Tests for LightEntityCard component
 */
import { expect, fixture, html } from '@open-wc/testing';
import { isValidConfig, isLightEntity, isSwitchEntity, isGroupEntity } from '../src/types/index';
import type { LightEntityCardConfig, HomeAssistant, LightEntity } from '../src/types/index';

describe('LightEntityCard', () => {
  describe('Type Guards', () => {
    describe('isValidConfig', () => {
      it('should return true for valid config', () => {
        const config: LightEntityCardConfig = {
          type: 'custom:light-entity-card',
          entity: 'light.living_room',
        };
        expect(isValidConfig(config)).to.be.true;
      });

      it('should return false for invalid config', () => {
        expect(isValidConfig(null)).to.be.false;
        expect(isValidConfig(undefined)).to.be.false;
        expect(isValidConfig({})).to.be.false;
        expect(isValidConfig({ type: 'custom:light-entity-card' })).to.be.false;
        expect(isValidConfig({ entity: 'light.test' })).to.be.false; // missing type
      });

      it('should validate entity is a string', () => {
        const config = {
          type: 'custom:light-entity-card',
          entity: 123,
        };
        expect(isValidConfig(config)).to.be.false;
      });
    });

    describe('isLightEntity', () => {
      it('should return true for light entities', () => {
        expect(isLightEntity('light.living_room')).to.be.true;
        expect(isLightEntity('light.bedroom')).to.be.true;
      });

      it('should return false for non-light entities', () => {
        expect(isLightEntity('switch.living_room')).to.be.false;
        expect(isLightEntity('group.all_lights')).to.be.false;
        expect(isLightEntity('sensor.temperature')).to.be.false;
      });
    });

    describe('isSwitchEntity', () => {
      it('should return true for switch entities', () => {
        expect(isSwitchEntity('switch.living_room')).to.be.true;
        expect(isSwitchEntity('switch.bedroom')).to.be.true;
      });

      it('should return false for non-switch entities', () => {
        expect(isSwitchEntity('light.living_room')).to.be.false;
        expect(isSwitchEntity('group.all_lights')).to.be.false;
      });
    });

    describe('isGroupEntity', () => {
      it('should return true for group entities', () => {
        expect(isGroupEntity('group.all_lights')).to.be.true;
        expect(isGroupEntity('group.living_room')).to.be.true;
      });

      it('should return false for non-group entities', () => {
        expect(isGroupEntity('light.living_room')).to.be.false;
        expect(isGroupEntity('switch.bedroom')).to.be.false;
      });
    });
  });

  describe('Configuration', () => {
    it('should accept minimal config', () => {
      const config: LightEntityCardConfig = {
        type: 'custom:light-entity-card',
        entity: 'light.test',
      };
      expect(isValidConfig(config)).to.be.true;
    });

    it('should accept full config with all options', () => {
      const config: LightEntityCardConfig = {
        type: 'custom:light-entity-card',
        entity: 'light.test',
        header: 'Living Room',
        brightness: true,
        color_temp: true,
        white_value: true,
        color_picker: true,
        speed: true,
        intensity: true,
        effects_list: true,
        persist_features: true,
        force_features: false,
        show_slider_percent: true,
        full_width_sliders: false,
        shorten_cards: false,
        consolidate_entities: false,
        child_card: false,
        hide_header: false,
        show_header_icon: true,
      };
      expect(isValidConfig(config)).to.be.true;
    });

    it('should handle effects_list as string', () => {
      const config: LightEntityCardConfig = {
        type: 'custom:light-entity-card',
        entity: 'light.test',
        effects_list: 'input_select.light_effects',
      };
      expect(isValidConfig(config)).to.be.true;
    });

    it('should handle effects_list as array', () => {
      const config: LightEntityCardConfig = {
        type: 'custom:light-entity-card',
        entity: 'light.test',
        effects_list: ['Rainbow', 'Colorloop'],
      };
      expect(isValidConfig(config)).to.be.true;
    });
  });

  describe('Mock Data Creation', () => {
    function createMockHass(entityId: string, state: 'on' | 'off' = 'on'): HomeAssistant {
      const lightEntity: LightEntity = {
        entity_id: entityId,
        state: state,
        attributes: {
          friendly_name: 'Test Light',
          supported_features: 17, // BRIGHTNESS (1) + COLOR (16)
          supported_color_modes: ['hs'],
          color_mode: 'hs',
          brightness: 128,
          hs_color: [180, 50],
        },
        context: { id: 'test', parent_id: null, user_id: null },
        last_changed: new Date().toISOString(),
        last_updated: new Date().toISOString(),
      };

      return {
        states: {
          [entityId]: lightEntity,
        },
        callService: async () => {},
        language: 'en',
        resources: {},
      } as any as HomeAssistant;
    }

    it('should create mock hass object', () => {
      const hass = createMockHass('light.test');
      expect(hass.states['light.test']).to.exist;
      expect(hass.states['light.test'].state).to.equal('on');
    });

    it('should create entity with custom state', () => {
      const hass = createMockHass('light.test', 'off');
      expect(hass.states['light.test'].state).to.equal('off');
    });

    it('should have light attributes', () => {
      const hass = createMockHass('light.test');
      const entity = hass.states['light.test'] as LightEntity;
      expect(entity.attributes.brightness).to.equal(128);
      expect(entity.attributes.hs_color).to.deep.equal([180, 50]);
      expect(entity.attributes.supported_color_modes).to.include('hs');
    });
  });
});
