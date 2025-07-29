import { describe, expect, it } from "vitest";
import type { Filter, NormalizedProduct } from "../types";
import filterProducts from "./filterProducts";

describe("filterProducts", () => {
  const products: NormalizedProduct[] = [
    { id: 1, category: "tools" },
    { id: 2, category: "electronics" },
    { id: 3, category: "other" },
  ];

  it('filter by "equals"', () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "equals", text: "is equal to" },
      value: "tools",
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([1]);
  });

  it('return [] when filter by "equals" has no corresponding value', () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "equals", text: "is equal to" },
      value: "kitchenware",
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([]);
  });

  it('filter by "in" with more than one value', () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "in", text: "is in" },
      value: "electronics, other",
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([2, 3]);
  });
});
