/**
 * Common utilities for slider components
 */
import { html, TemplateResult } from 'lit';

/**
 * Calculates and displays percentage for a slider value
 *
 * @param value - Current slider value
 * @param min - Minimum slider value
 * @param max - Maximum slider value
 * @param showPercent - Whether to show the percentage
 * @returns Template result with percentage display or empty
 */
export function renderSliderPercent(
  value: number | undefined,
  min: number,
  max: number,
  showPercent: boolean
): TemplateResult {
  if (!showPercent) return html``;

  let percent = 0;
  if (value !== undefined && !isNaN(value)) {
    percent = Math.floor(((value - min) * 100) / (max - min));
    if (isNaN(percent)) percent = 0;
  }

  return html` <div class="percent-slider">${percent}%</div> `;
}

/**
 * Generic slider renderer
 *
 * @param icon - Icon to display
 * @param value - Current slider value
 * @param min - Minimum slider value
 * @param max - Maximum slider value
 * @param onChange - Change handler
 * @param showPercent - Whether to show percentage
 * @param cssClass - Optional CSS class for the slider
 * @returns Template result with slider HTML
 */
export function renderSlider(
  icon: string,
  value: number,
  min: number,
  max: number,
  onChange: (event: Event) => void,
  showPercent: boolean,
  cssClass?: string
): TemplateResult {
  return html`
    <div class="control light-entity-card-center">
      <div class="icon-container">
        <ha-icon icon="hass:${icon}"></ha-icon>
      </div>
      <ha-slider
        class="${cssClass || ''}"
        .value="${value || 0}"
        @change="${onChange}"
        min="${min}"
        max="${max}"
      ></ha-slider>
      ${renderSliderPercent(value, min, max, showPercent)}
    </div>
  `;
}
