interface ElementLoader {
  name: string;
  promise: Promise<CustomElementConstructor>;
}

const globalElementLoader = (name: string): ElementLoader => ({
  name,
  promise: customElements.whenDefined(name).then(() => customElements.get(name)!),
});

export default globalElementLoader;
