const loadDatastore = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const datastore = (window as any).datastore;
  if (!datastore) {
    window.alert("Datastore not found in window object.");
    return {
      products: [],
      properties: [],
      operators: [],
    };
  }
  return {
    products:
      typeof datastore.getProducts === "function"
        ? datastore.getProducts()
        : [],
    properties:
      typeof datastore.getProperties === "function"
        ? datastore.getProperties()
        : [],
    operators:
      typeof datastore.getOperators === "function"
        ? datastore.getOperators()
        : [],
  };
};

export default loadDatastore;
