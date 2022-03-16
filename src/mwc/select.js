import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { styles as selectStyles } from '@material/mwc-select/mwc-select.css';
import buildElementDefinitions from '../buildElementDefinitions';
import MwcMenu from './menu';
import MwcNotchedOutline from './notched-outline';
import MwcIcon from './icon';

export default class MwcSelect extends ScopedRegistryHost(SelectBase) {
  static get defineId() { return 'mwc-select'; }

  static get elementDefinitions() {
    return buildElementDefinitions([
      MwcMenu,
      MwcIcon,
      MwcNotchedOutline,
    ], MwcSelect);
  }

  static get styles() {
    return selectStyles;
  }
}
