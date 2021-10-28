import { css } from 'lit-element';

const style = css`
  .entities {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }

  .entities ha-formfield {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .checkbox-options {
    display: flex;
  }

  .checkbox-options ha-formfield,
  .entities paper-dropdown-menu,
  .entities paper-input {
    padding-right: 2%;
    width: 48%;
  }

  .overall-config {
    margin-bottom: 20px;
  }
`;

export default style;
