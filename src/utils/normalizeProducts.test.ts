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

  it("returns empty array when products is empty", () => {
    const result = normalizeProducts([], properties);
    expect(result).toEqual([]);
  });

  it("returns only id when properties is empty", () => {
    const products: Product[] = [
      {
        id: 1,
        property_values: [
          { property_id: 0, value: "Phone" },
          { property_id: 1, value: "Black" },
        ],
      },
    ];
    const result = normalizeProducts(products, []);
    expect(result).toEqual([{ id: 1 }]);
  });

  it("sets all properties to null if product.property_values is empty", () => {
    const products: Product[] = [{ id: 1, property_values: [] }];
    const result = normalizeProducts(products, properties);
    expect(result[0]).toMatchObject({
      id: 1,
      "Product Name": null,
      color: null,
      price: null,
      size: null,
    });
  });

  it("sets property to null if value is null", () => {
    const products: Product[] = [
      {
        id: 1,
        property_values: [{ property_id: 0, value: null }],
      },
    ];
    const result = normalizeProducts(products, properties);
    expect(result[0]["Product Name"]).toBeNull();
  });

  it("handles duplicate property_ids by using the first occurrence", () => {
    const products: Product[] = [
      {
        id: 1,
        property_values: [
          { property_id: 0, value: "First" },
          { property_id: 0, value: "Second" },
        ],
      },
    ];
    const result = normalizeProducts(products, properties);
    expect(result[0]["Product Name"]).toBe("First");
  });

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

  it("ignores extra fields in product", () => {
    const products: Product[] = [
      {
        id: 1,
        property_values: [{ property_id: 0, value: "Phone" }],
        // @ts-expect-error: extra field is intentionally added to test if it is ignored by normalizeProducts
        extra: "should be ignored",
      },
    ];
    const result = normalizeProducts(products, properties);
    expect(result[0]).not.toHaveProperty("extra");
    expect(result[0]["Product Name"]).toBe("Phone");
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
