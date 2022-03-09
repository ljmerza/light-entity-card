import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
import { styles as listItemStyles } from '@material/mwc-list/mwc-list-item.css';
import buildElementDefinitions from '../buildElementDefinitions';
import MwcRipple from './ripple';

export default class MwcListItem extends ScopedRegistryHost(ListItemBase) {
  static get defineId() { return 'mwc-list-item'; }

  static get elementDefinitions() {
    return buildElementDefinitions([MwcRipple], MwcListItem);
  }

  static get styles() {
    return listItemStyles;
  }
}
