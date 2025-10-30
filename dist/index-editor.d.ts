import { LitElement } from 'lit';
interface HomeAssistant {
    states: Record<string, any>;
    callService: (domain: string, service: string, data: any) => void;
    resources: Record<string, any>;
    language: string;
}
interface FireEventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}
export declare const fireEvent: (node: HTMLElement, type: string, detail?: any, options?: FireEventOptions) => Event;
declare const LightEntityCardEditor_base: typeof LitElement;
export default class LightEntityCardEditor extends LightEntityCardEditor_base {
    hass: HomeAssistant;
    _config: any;
    private _firstRendered;
    static get elementDefinitions(): Record<string, import("./buildElementDefinitions").ElementLoader>;
    static get styles(): import("lit").CSSResult;
    setConfig(config: any): void;
    get entityOptions(): string[];
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    configChanged(ev: any): void;
    checkboxConfigChanged(ev: any): void;
}
export {};
//# sourceMappingURL=index-editor.d.ts.map