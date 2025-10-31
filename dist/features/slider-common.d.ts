/**
 * Common utilities for slider components
 */
import { TemplateResult } from 'lit';
/**
 * Calculates and displays percentage for a slider value
 *
 * @param value - Current slider value
 * @param min - Minimum slider value
 * @param max - Maximum slider value
 * @param showPercent - Whether to show the percentage
 * @returns Template result with percentage display or empty
 */
export declare function renderSliderPercent(value: number | undefined, min: number, max: number, showPercent: boolean): TemplateResult;
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
export declare function renderSlider(icon: string, value: number, min: number, max: number, onChange: (event: Event) => void, showPercent: boolean, cssClass?: string): TemplateResult;
//# sourceMappingURL=slider-common.d.ts.map