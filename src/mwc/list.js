import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { ListBase } from '@material/mwc-list/mwc-list-base';
import { styles as listStyles } from '@material/mwc-list/mwc-list.css';
import buildElementDefinitions from '../buildElementDefinitions';
import MwcListItem from './list-item';

export default class MwcList extends ScopedRegistryHost(ListBase) {
  static get defineId() { return 'mwc-list'; }

  static get elementDefinitions() {
    return buildElementDefinitions([MwcListItem], MwcList);
  }

  static get styles() {
    return listStyles;
  }
}
