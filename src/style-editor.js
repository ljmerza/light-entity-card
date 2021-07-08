import { css } from 'lit-element';

const style = css`
  .entities {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }

  .entities paper-checkbox {
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  .checkbox-options {
    display: flex;
  }

  .checkbox-options paper-checkbox,
  .entities paper-dropdown-menu,
  .entities paper-input {
    padding-right: 2%;
    width: 48%;
  }

  .checkbox-options paper-checkbox {
    margin-top: 10px;
  }

  .overall-config {
    margin-bottom: 20px;
  }
`;

export default style;
