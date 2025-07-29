import { render, screen } from "@testing-library/react";
import ProductsTable from "./productsTable";
import type { NormalizedProduct, Property } from "../types";
import { describe, expect, it } from "vitest";

describe("ProductsTable", () => {
  const properties: Property[] = [
    { id: 0, name: "Product Name", type: "string" },
    { id: 1, name: "color", type: "string" },
    { id: 2, name: "price", type: "number" },
  ];

  const products: NormalizedProduct[] = [
    { id: 1, "Product Name": "Phone", color: "Black", price: 100 },
    { id: 2, "Product Name": "Tablet", color: "White", price: 200 },
  ];

  it("renders table headers", () => {
    render(<ProductsTable products={products} properties={properties} />);
    expect(screen.getByText("Product Name")).toBeInTheDocument();
    expect(screen.getByText("color")).toBeInTheDocument();
    expect(screen.getByText("price")).toBeInTheDocument();
  });

  it("renders product rows", () => {
    render(<ProductsTable products={products} properties={properties} />);
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Black")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Tablet")).toBeInTheDocument();
    expect(screen.getByText("White")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
  });

  it("renders 'No products to display.' when products is empty", () => {
    render(<ProductsTable products={[]} properties={properties} />);
    expect(screen.getByText(/No products to display./i)).toBeInTheDocument();
  });

  it("renders empty cell for missing property value", () => {
    const incompleteProducts = [
      { id: 3, "Product Name": "Laptop", color: null, price: null },
    ];
    render(
      <ProductsTable products={incompleteProducts} properties={properties} />
    );
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    // Should render empty cells for color and price
    const cells = screen.getAllByRole("cell");
    // "Laptop", "", ""
    expect(cells[1].textContent).toBe(""); // color
    expect(cells[2].textContent).toBe(""); // price
  });

  it("renders only columns defined in properties", () => {
    const extraProducts = [
      {
        id: 4,
        "Product Name": "Camera",
        color: "Red",
        price: 300,
        extra: "should not show",
      },
    ];
    render(<ProductsTable products={extraProducts} properties={properties} />);
    expect(screen.getByText("Camera")).toBeInTheDocument();
    expect(screen.queryByText("should not show")).not.toBeInTheDocument();
  });

  it("renders row even if product is missing id", () => {
    const noIdProducts = [
      { "Product Name": "Unknown", color: "Gray", price: 0 },
    ];
    // @ts-expect-error Product is missing 'id' property for this test case
    render(<ProductsTable products={noIdProducts} properties={properties} />);
    expect(screen.getByText("Unknown")).toBeInTheDocument();
    expect(screen.getByText("Gray")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
