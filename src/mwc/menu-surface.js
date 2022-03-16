import { MenuSurfaceBase } from '@material/mwc-menu/mwc-menu-surface-base';
import { styles as menuSurfaceStyles } from '@material/mwc-menu/mwc-menu-surface.css';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import buildElementDefinitions from '../buildElementDefinitions';

export default class MwcMenuSurface extends ScopedRegistryHost(MenuSurfaceBase) {
  static get defineId() { return 'mwc-menu-surface'; }

  static get elementDefinitions() {
    return buildElementDefinitions([], MwcMenuSurface);
  }

  static get styles() {
    return menuSurfaceStyles;
  }
}
