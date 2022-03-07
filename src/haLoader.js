const haLoader = name => ({
  name,
  promise: customElements.whenDefined(name).then(() => customElements.get(name)),
});

export default haLoader;
