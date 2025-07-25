export interface Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  id: number;
  property_values: {
    property_id: number;
    value: string | number;
  }[];
}

export interface Property {
  id: number;
  name: string;
  type: "string" | "number" | "enumerated";
}

export type NormalizedProduct = {
  id: number;
  [propertyName: string]: string | number | null;
};
