export interface ElementLoader {
    name: string;
    promise: Promise<CustomElementConstructor>;
    defineId?: string;
}
export interface ElementConstructor {
    registry: {
        get(name: string): CustomElementConstructor | undefined;
        define(name: string, constructor: CustomElementConstructor): void;
    };
}
declare const buildElementDefinitions: (elements: ElementLoader[], constructor: any) => Record<string, ElementLoader>;
export default buildElementDefinitions;
//# sourceMappingURL=buildElementDefinitions.d.ts.map