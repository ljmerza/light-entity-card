/**
 * Tests for validation utilities
 */
import { expect } from '@open-wc/testing';
import {
  validateHsColor,
  validateRgbColor,
  validateBrightness,
  validateColorTemp,
  validateEntityId,
  sanitizeDisplayName,
} from '../../src/utils/validation';

describe('validation utilities', () => {
  describe('validateHsColor', () => {
    it('should return true for valid HS color', () => {
      expect(validateHsColor([180, 50])).to.be.true;
      expect(validateHsColor([0, 0])).to.be.true;
      expect(validateHsColor([360, 100])).to.be.true;
    });

    it('should return false for invalid HS color', () => {
      expect(validateHsColor([361, 50])).to.be.false; // hue out of range
      expect(validateHsColor([180, 101])).to.be.false; // saturation out of range
      expect(validateHsColor([-1, 50])).to.be.false; // negative hue
      expect(validateHsColor([180])).to.be.false; // missing saturation
      expect(validateHsColor([180, 50, 100])).to.be.false; // too many values
      expect(validateHsColor(null)).to.be.false;
      expect(validateHsColor(undefined)).to.be.false;
      expect(validateHsColor('invalid')).to.be.false;
    });

    it('should handle edge cases', () => {
      expect(validateHsColor([NaN, 50])).to.be.false;
      expect(validateHsColor([180, NaN])).to.be.false;
      expect(validateHsColor([Infinity, 50])).to.be.false;
    });
  });

  describe('validateRgbColor', () => {
    it('should return true for valid RGB color', () => {
      expect(validateRgbColor([255, 128, 0])).to.be.true;
      expect(validateRgbColor([0, 0, 0])).to.be.true;
      expect(validateRgbColor([255, 255, 255])).to.be.true;
    });

    it('should return false for invalid RGB color', () => {
      expect(validateRgbColor([256, 128, 0])).to.be.false; // r out of range
      expect(validateRgbColor([255, -1, 0])).to.be.false; // negative g
      expect(validateRgbColor([255, 128])).to.be.false; // missing b
      expect(validateRgbColor(null)).to.be.false;
      expect(validateRgbColor(undefined)).to.be.false;
    });

    it('should handle edge cases', () => {
      expect(validateRgbColor([NaN, 128, 0])).to.be.false;
      expect(validateRgbColor([255, Infinity, 0])).to.be.false;
    });
  });

  describe('validateBrightness', () => {
    it('should return true for valid brightness', () => {
      expect(validateBrightness(0)).to.be.true;
      expect(validateBrightness(128)).to.be.true;
      expect(validateBrightness(255)).to.be.true;
    });

    it('should return false for invalid brightness', () => {
      expect(validateBrightness(-1)).to.be.false;
      expect(validateBrightness(256)).to.be.false;
      expect(validateBrightness(NaN)).to.be.false;
      expect(validateBrightness(null)).to.be.false;
      expect(validateBrightness(undefined)).to.be.false;
      expect(validateBrightness('128')).to.be.false;
    });
  });

  describe('validateColorTemp', () => {
    it('should return true for valid color temperature', () => {
      expect(validateColorTemp(153)).to.be.true; // 6500K
      expect(validateColorTemp(500)).to.be.true; // 2000K
      expect(validateColorTemp(200)).to.be.true;
    });

    it('should return false for invalid color temperature', () => {
      expect(validateColorTemp(152)).to.be.false; // below min
      expect(validateColorTemp(501)).to.be.false; // above max
      expect(validateColorTemp(-1)).to.be.false;
      expect(validateColorTemp(NaN)).to.be.false;
      expect(validateColorTemp(null)).to.be.false;
    });
  });

  describe('validateEntityId', () => {
    it('should return true for valid entity IDs', () => {
      expect(validateEntityId('light.living_room')).to.be.true;
      expect(validateEntityId('switch.bedroom')).to.be.true;
      expect(validateEntityId('group.all_lights')).to.be.true;
      expect(validateEntityId('input_select.scene')).to.be.true;
    });

    it('should return false for invalid entity IDs', () => {
      expect(validateEntityId('')).to.be.false;
      expect(validateEntityId('light')).to.be.false; // no dot
      expect(validateEntityId('.living_room')).to.be.false; // no domain
      expect(validateEntityId('light.')).to.be.false; // no entity
      expect(validateEntityId('light..living_room')).to.be.false; // double dot
      expect(validateEntityId(null)).to.be.false;
      expect(validateEntityId(undefined)).to.be.false;
    });
  });

  describe('sanitizeDisplayName', () => {
    it('should return sanitized display name', () => {
      expect(sanitizeDisplayName('Living Room')).to.equal('Living Room');
      expect(sanitizeDisplayName('  Bedroom  ')).to.equal('Bedroom');
      expect(sanitizeDisplayName('<script>alert()</script>')).to.equal('alert()');
    });

    it('should handle empty or invalid input', () => {
      expect(sanitizeDisplayName('')).to.equal('');
      expect(sanitizeDisplayName('   ')).to.equal('');
      expect(sanitizeDisplayName(null as any)).to.equal('');
      expect(sanitizeDisplayName(undefined as any)).to.equal('');
    });

    it('should remove special HTML characters', () => {
      expect(sanitizeDisplayName('Test & Name')).to.equal('Test & Name');
      expect(sanitizeDisplayName('Price: $100')).to.equal('Price: $100');
    });
  });
});
