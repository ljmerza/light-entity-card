import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { NotchedOutlineBase } from '@material/mwc-notched-outline/mwc-notched-outline-base';
import { styles as notchedOutlineStyles } from '@material/mwc-notched-outline/mwc-notched-outline.css';
import buildElementDefinitions from '../buildElementDefinitions';

export default class MwcNotchedOutline extends ScopedRegistryHost(NotchedOutlineBase) {
  static get defineId() { return 'mwc-notched-outline'; }

  static get elementDefinitions() {
    return buildElementDefinitions([], MwcNotchedOutline);
  }

  static get styles() {
    return notchedOutlineStyles;
  }
}
