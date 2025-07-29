import { describe, expect, it } from "vitest";
import type { Product, Property } from "../types";
import normalizeProducts from "./normalizeProducts";

describe("normalizeProducts", () => {
  const properties: Property[] = [
    { id: 0, name: "Product Name", type: "string" },
    { id: 1, name: "color", type: "string" },
    { id: 2, name: "price", type: "number" },
    {
      id: 3,
      name: "size",
      type: "enumerated",
      values: ["S", "M", "L"],
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      property_values: [
        { property_id: 0, value: "Phone" },
        { property_id: 1, value: "Black" },
        { property_id: 2, value: 699 },
        { property_id: 3, value: "M" },
      ],
    },
  ];

  it("check if product is normalized correctly", () => {
    const result = normalizeProducts(products, properties);
    expect(result).toEqual([
      {
        id: 1,
        "Product Name": "Phone",
        color: "Black",
        price: 699,
        size: "M",
      },
    ]);
  });

  it("check if product is normalized correctly when there is one property not present", () => {
    const products: Product[] = [
      {
        id: 2,
        property_values: [
          { property_id: 0, value: "Laptop" },
          { property_id: 2, value: 999 },
          { property_id: 3, value: "L" },
        ],
      },
    ];
    const result = normalizeProducts(products, properties);
    expect(result).toEqual([
      {
        id: 2,
        "Product Name": "Laptop",
        price: 999,
        color: null,
        size: "L",
      },
    ]);
  });

  it("ignores unknown property_ids", () => {
    const products: Product[] = [
      {
        id: 3,
        property_values: [
          { property_id: 0, value: "Phone" },
          { property_id: 99, value: "Foo" },
        ],
      },
    ];

    const result = normalizeProducts(products, properties);
    expect(result[0]).toEqual({
      id: 3,
      "Product Name": "Phone",
      color: null,
      price: null,
      size: null,
    });
  });
});
