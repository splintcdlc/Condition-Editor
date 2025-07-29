import { describe, expect, it } from "vitest";
import type { Filter, NormalizedProduct } from "../types";
import filterProducts from "./filterProducts";

describe("filterProducts", () => {
  const products: NormalizedProduct[] = [
    { id: 1, category: "tools", price: 10, description: "A tool" },
    { id: 2, category: "electronics", price: 100, description: "A gadget" },
    { id: 3, category: "other", price: null, description: "" },
    { id: 4, category: null, price: 5 },
  ];

  it("returns [] when products is empty", () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "equals", text: "is equal to" },
      value: "tools",
    };
    expect(filterProducts([], filter)).toEqual([]);
  });

  it('filters products where property is not present ("any" operator)', () => {
    const filter: Filter = {
      property: { id: 0, name: "description", type: "string" },
      operator: { id: "any", text: "has any value" },
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([1, 2]);
  });

  it('filters products where property is missing or empty ("none" operator)', () => {
    const filter: Filter = {
      property: { id: 0, name: "description", type: "string" },
      operator: { id: "none", text: "has no value" },
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([3, 4]);
  });

  it('filters by "contains" operator', () => {
    const filter: Filter = {
      property: { id: 0, name: "description", type: "string" },
      operator: { id: "contains", text: "contains" },
      value: "tool",
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([1]);
  });

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

  it('filters by "in" with extra spaces and empty values', () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "in", text: "is in" },
      value: "tools, , electronics,  ,other",
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([1, 2, 3]);
  });

  it('filters by "greater_than" with non-number values', () => {
    const filter: Filter = {
      property: { id: 0, name: "price", type: "number" },
      operator: { id: "greater_than", text: "greater than" },
      value: 10,
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([2]);
  });

  it('filters by "less_than" with non-number values', () => {
    const filter: Filter = {
      property: { id: 0, name: "price", type: "number" },
      operator: { id: "less_than", text: "less than" },
      value: 10,
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([4]);
  });

  it("is case sensitive by default", () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "equals", text: "is equal to" },
      value: "Tools",
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([]);
  });

  it("filters out all products if no match", () => {
    const filter: Filter = {
      property: { id: 0, name: "category", type: "enumerated", values: [] },
      operator: { id: "equals", text: "is equal to" },
      value: "notfound",
    };
    const result = filterProducts(products, filter);
    expect(result).toEqual([]);
  });

  it("handles property value as null or undefined", () => {
    const filter: Filter = {
      property: { id: 0, name: "price", type: "number" },
      operator: { id: "none", text: "has no value" },
    };
    const result = filterProducts(products, filter);
    expect(result.map((p) => p.id)).toEqual([3]);
  });
});
