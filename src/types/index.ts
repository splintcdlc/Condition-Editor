export interface Product {
  id: number;
  property_values: {
    property_id: number;
    value: string | number | null;
  }[];
}

export interface BaseProperty {
  id: number;
  name: string;
}

export type Property =
  | (BaseProperty & {
      type: "string" | "number";
    })
  | (BaseProperty & {
      type: "enumerated";
      values: string[];
    });

export interface Operator {
  id: string;
  text: string;
}

export type NormalizedProduct = {
  id: number;
  [propertyName: string]: string | number | null;
};

export type Filter = {
  property: Property;
  operator: Operator;
  value?: string | number;
};
