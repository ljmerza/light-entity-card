import { css } from 'lit';

const style = css`
  .IroSlider {
    display: none !important;
  }

  .light-entity-card {
    padding: 16px;
  }

  .light-entity-child-card {
    box-shadow: none !important;
    padding: 0 !important;
  }

  .light-entity-card.group {
    padding-bottom: 0;
    padding-top: 0;
  }

  .ha-slider-full-width ha-slider {
    width: 100%;
  }

  .percent-slider {
    color: var(--primary-text-color);
    margin-top: 5px;
  }

  .light-entity-card__header {
    display: flex;
    justify-content: space-between;
    @apply --paper-font-headline;
    line-height: 40px;
    color: var(--primary-text-color);
    font-size: 24px;
  }

  .group .light-entity-card__header {
    font-size: 16px;
  }

  .light-entity-card-sliders > div {
    margin-top: 10px;
  }

  .group .light-entity-card-sliders > div {
    margin-top: 0px;
  }

  .light-entity-card__toggle {
    display: flex;
    cursor: pointer;
  }

  .light-entity-card__color-picker {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .group .light-entity-card__color-picker {
    width: 50%;
    margin: 0 auto;
  }
  
  .light-entity-card-color_temp {
    background-image: var(--ha-slider-background);
  }

  .group .light-entity-card-effectlist {
    margin-top: -25px;
  }

  .light-entity-card-center {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .light-entity-card-toggle {
    margin-right: 5px;
  }

  .hidden {
    display: none;
  }

  .icon-container {
    margin-top: 4px;
  }
`;

export default style;
