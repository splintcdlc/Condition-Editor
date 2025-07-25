import type { NormalizedProduct, Product, Property } from "../types";

const normalizedProducts = (
  products: Product[],
  properties: Property[]
): NormalizedProduct[] => {
  return products.map((product) => {
    const normalizedProduct: NormalizedProduct = {
      id: product.id,
    };

    product.property_values.forEach((propertyValue) => {
      const property = properties.find(
        (prop) => prop.id === propertyValue.property_id
      );
      if (property) {
        const propertyName = property.name;
        normalizedProduct[propertyName] = propertyValue.value;
      }
    });

    return normalizedProduct;
  });
};

export default normalizedProducts;
