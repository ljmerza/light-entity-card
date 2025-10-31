/**
 * Tests for debounce utilities
 */
import { expect } from '@open-wc/testing';
import { debounce, debouncedWithCancel } from '../../src/utils/debounce';

describe('debounce utilities', () => {
  describe('debounce', () => {
    it('should debounce function calls', async () => {
      let callCount = 0;
      const fn = () => callCount++;
      const debouncedFn = debounce(fn, 50);

      // Call multiple times rapidly
      debouncedFn();
      debouncedFn();
      debouncedFn();

      // Should not have been called yet
      expect(callCount).to.equal(0);

      // Wait for debounce period
      await new Promise(resolve => setTimeout(resolve, 60));

      // Should have been called exactly once
      expect(callCount).to.equal(1);
    });

    it('should pass arguments correctly', async () => {
      let lastArgs: any[] = [];
      const fn = (...args: any[]) => {
        lastArgs = args;
      };
      const debouncedFn = debounce(fn, 50);

      debouncedFn(1, 2, 3);
      await new Promise(resolve => setTimeout(resolve, 60));

      expect(lastArgs).to.deep.equal([1, 2, 3]);
    });

    it('should reset timer on each call', async () => {
      let callCount = 0;
      const fn = () => callCount++;
      const debouncedFn = debounce(fn, 50);

      debouncedFn();
      await new Promise(resolve => setTimeout(resolve, 30));
      debouncedFn(); // Reset timer
      await new Promise(resolve => setTimeout(resolve, 30));

      // Should still be 0 because timer was reset
      expect(callCount).to.equal(0);

      await new Promise(resolve => setTimeout(resolve, 30));
      expect(callCount).to.equal(1);
    });
  });

  describe('debouncedWithCancel', () => {
    it('should debounce function calls and allow cancellation', async () => {
      let callCount = 0;
      const fn = () => callCount++;
      const { debounced, cancel } = debouncedWithCancel(fn, 50);

      debounced();
      debounced();
      cancel(); // Cancel before execution

      await new Promise(resolve => setTimeout(resolve, 60));

      // Should not have been called because it was cancelled
      expect(callCount).to.equal(0);
    });

    it('should allow execution after cancellation', async () => {
      let callCount = 0;
      const fn = () => callCount++;
      const { debounced, cancel } = debouncedWithCancel(fn, 50);

      debounced();
      cancel();

      // Call again after cancellation
      debounced();
      await new Promise(resolve => setTimeout(resolve, 60));

      expect(callCount).to.equal(1);
    });

    it('should preserve context (this)', async () => {
      const obj = {
        value: 42,
        getValue: function() {
          return this.value;
        },
      };

      let result: any;
      const { debounced } = debouncedWithCancel(function(this: any) {
        result = obj.getValue.call(this);
      }, 50);

      debounced.call(obj);
      await new Promise(resolve => setTimeout(resolve, 60));

      expect(result).to.equal(42);
    });
  });
});
