import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { MenuBase } from '@material/mwc-menu/mwc-menu-base';
import { styles as menuStyles } from '@material/mwc-menu/mwc-menu.css';
import buildElementDefinitions from '../buildElementDefinitions';
import MwcMenuSurface from './menu-surface';
import MwcList from './list';

export default class MwcMenu extends ScopedRegistryHost(MenuBase) {
  static get defineId() { return 'mwc-menu'; }

  static get elementDefinitions() {
    return buildElementDefinitions([MwcMenuSurface, MwcList], MwcMenu);
  }

  static get styles() {
    return menuStyles;
  }
}
