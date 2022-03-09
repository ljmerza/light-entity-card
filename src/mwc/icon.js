import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { styles as iconStyles } from '@material/mwc-icon/mwc-icon-host.css';
import { html, LitElement } from 'lit';
import buildElementDefinitions from '../buildElementDefinitions';

export default class MwcIcon extends ScopedRegistryHost(LitElement) {
  static get defineId() { return 'mwc-icon'; }

  static get elementDefinitions() {
    return buildElementDefinitions([], MwcIcon);
  }

  render() {
    return html`<span><slot></slot></span>`;
  }

  static get styles() {
    return iconStyles;
  }
}
