import type { Filter, NormalizedProduct } from "../types";

const filterProducts = (
  products: NormalizedProduct[],
  filter: Filter
): NormalizedProduct[] =>
  products.filter((product) => {
    const { property, operator, value } = filter;
    const propValue = product[property.name];

    switch (operator.id) {
      case "equals":
        return propValue === value;
      case "contains":
        return (
          typeof propValue === "string" &&
          typeof value === "string" &&
          propValue.includes(value)
        );
      case "greater_than":
        return typeof propValue === "number" && propValue > Number(value);
      case "less_than":
        return typeof propValue === "number" && propValue < Number(value);
      case "in":
        return Array.isArray(value)
          ? value.includes(propValue)
          : propValue === value;
      case "any":
        return (
          propValue !== undefined && propValue !== null && propValue !== ""
        );
      case "none":
        return (
          propValue === undefined || propValue === null || propValue === ""
        );
      default:
        return true;
    }
  });

export default filterProducts;
