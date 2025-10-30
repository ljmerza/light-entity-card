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

const buildElementDefinitions = (elements: ElementLoader[], constructor: any): Record<string, ElementLoader> =>
  elements.reduce((aggregate: Record<string, ElementLoader>, element) => {
    if (element.defineId) {
      aggregate[element.defineId] = element;
    } else {
      element.promise.then((clazz) => {
        if (constructor.registry.get(element.name) === undefined) {
          constructor.registry.define(element.name, clazz);
        }
      });
    }
    return aggregate;
  }, {});

export default buildElementDefinitions;
