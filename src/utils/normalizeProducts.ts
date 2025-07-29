import type { NormalizedProduct, Product, Property } from "../types";

const normalizedProducts = (
  products: Product[],
  properties: Property[]
): NormalizedProduct[] => {
  return products.map((product) => {
    const normalizedProduct: NormalizedProduct = {
      id: product.id,
    };

    properties.forEach((property) => {
      const propertyValue = product.property_values.find(
        (pv) => pv.property_id === property.id
      );
      normalizedProduct[property.name] = propertyValue
        ? propertyValue.value
        : null;
    });

    return normalizedProduct;
  });
};

export default normalizedProducts;
