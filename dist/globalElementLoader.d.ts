interface ElementLoader {
    name: string;
    promise: Promise<CustomElementConstructor>;
}
declare const globalElementLoader: (name: string) => ElementLoader;
export default globalElementLoader;
//# sourceMappingURL=globalElementLoader.d.ts.map