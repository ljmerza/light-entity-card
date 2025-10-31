# Light Entity Card - Quick TODO Checklist

Quick reference for actionable improvements. See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for detailed explanations.

## 🔴 Critical Fixes (Do First)

- [x] **Fix color picker event handling** - `src/index.ts:575-628` ✅
  - ✅ Research actual `ha-color-picker` event structure
  - ✅ Add debouncing to prevent excessive API calls
  - ✅ Add proper null checks and validation
  - ✅ Multiple event format support for compatibility

- [x] **Fix effects_list type safety** - `src/index.ts:467-484` ✅
  - ✅ Add type guard: `typeof this.config.effects_list === 'string'`
  - ✅ Only access `hass.states[]` with string type
  - ✅ Added debug logging

- [x] **Fix feature support type mismatch** - `src/index.ts:529-618` ✅
  - ✅ Convert to boolean type immediately
  - ✅ Use `.some()` and `.includes()` for cleaner code
  - ✅ Added comprehensive documentation
  - ✅ Added debug logging

- [x] **Add error handling** ✅
  - ✅ Wrapped `callEntityService` in try-catch
  - ✅ Created logger utility for consistent logging
  - ✅ Dispatches error events for UI handling

- [x] **Add input validation** ✅
  - ✅ Created validation utility with type guards
  - ✅ Validate HS colors before sending
  - ✅ Validate brightness/color_temp ranges
  - ✅ Entity ID validation available

## 🟡 Important (Do Soon)

- [ ] **Improve TypeScript types**
  - Create `src/types/homeassistant.ts` with proper types
  - Create `src/types/card.ts` for card-specific types
  - Replace all `any` types with proper interfaces
  - Export `ElementLoader` interface from `buildElementDefinitions.ts`

- [ ] **Extract constants** - Create `src/constants.ts`
  - Light features bitmask values
  - Entity domains
  - Service names
  - Color modes
  - Default sizes

- [ ] **Add unit tests**
  - Install `@web/test-runner` and `@open-wc/testing`
  - Test basic rendering
  - Test config validation
  - Test feature visibility logic
  - Target 80% coverage

- [ ] **Split large class into modules**
  - Extract brightness slider to `src/features/brightness.ts`
  - Extract color temperature to `src/features/color-temperature.ts`
  - Extract effects to `src/features/effects.ts`
  - Create service layer `src/services/light-service.ts`

- [ ] **Add JSDoc comments**
  - Document all public methods
  - Add examples in comments
  - Document CSS custom properties
  - Add `@element` tag for custom element

## 🟢 Nice to Have (When Time Permits)

- [ ] **Performance optimizations**
  - Add memoization for expensive calculations
  - Implement debouncing for all user inputs
  - Lazy load editor component
  - Use CSS variables instead of inline styles

- [ ] **Accessibility improvements**
  - Add ARIA labels to all controls
  - Add keyboard navigation support
  - Improve focus management
  - Test with screen readers

- [ ] **Feature enhancements**
  - Add animation/transition support
  - Add preset colors feature
  - Add transition duration control
  - Add group status aggregation
  - Add custom slider ranges

- [ ] **Documentation**
  - Create `docs/README.md` for users
  - Create `docs/DEVELOPMENT.md` for developers
  - Add configuration examples
  - Create troubleshooting guide

- [ ] **Tooling improvements**
  - Add Prettier for code formatting
  - Add pre-commit hooks with Husky
  - Add bundle size analysis
  - Set up CI/CD pipeline
  - Add semantic-release

## 📦 Dependencies to Update

```bash
# Security fixes
npm update cross-spawn  # HIGH: ReDoS vulnerability
npm install eslint@latest --save-dev  # Update from v6 to v9

# Optional additions for improvements
npm install --save-dev prettier husky lint-staged
npm install --save-dev @web/test-runner @open-wc/testing
npm install --save-dev rollup-plugin-visualizer
```

## 🔍 Quick Audit

Run these commands to check current state:

```bash
# Check for security vulnerabilities
npm audit

# Check bundle size
npm run build && ls -lh dist/light-entity-card.js

# Count lines of code
find src -name "*.ts" | xargs wc -l

# Count any types (should be minimal)
grep -r "any" src/*.ts | wc -l
```

## 📊 Current Stats

- **Bundle Size**: 39KB (minified)
- **TypeScript Files**: 8
- **Test Coverage**: 0% (no tests yet)
- **Dependencies**: 7 production, 10 dev
- **Known Vulnerabilities**: 8 (5 low, 1 moderate, 2 high)

## 🎯 Success Metrics

Define what "done" looks like:

- ✅ Zero TypeScript errors in build
- ✅ Zero high/moderate security vulnerabilities
- ✅ 80%+ test coverage
- ✅ All public APIs documented
- ✅ Bundle size < 50KB
- ✅ Lighthouse accessibility score > 90

---

**Next Steps**: Start with Critical Fixes, then move through Important items. See [IMPROVEMENTS.md](./IMPROVEMENTS.md) for implementation details.
