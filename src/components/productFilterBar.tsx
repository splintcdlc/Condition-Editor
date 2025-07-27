import React from "react";
import type { Property, Operator } from "../types";

interface ProductFilterBarProps {
  properties: Property[];
  operators: Operator[];
  selectedProperty: Property | undefined;
  setSelectedProperty: (property: Property) => void;
  selectedOperator: string;
  setSelectedOperator: (operator: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const ProductFilterBar: React.FC<ProductFilterBarProps> = ({
  properties,
  operators,
  selectedProperty,
  setSelectedProperty,
  selectedOperator,
  setSelectedOperator,
  inputValue,
  setInputValue,
}) => {
  const selectedPropObj = properties.find((p) => p.id === selectedProperty?.id);

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
      {/* Properties dropdown */}
      <select
        value={selectedProperty?.id || ""}
        onChange={(e) => {
          const prop = properties.find((p) => p.id === Number(e.target.value));
          if (prop) setSelectedProperty(prop);
        }}
      >
        <option value="">Select property</option>
        {properties.map((prop) => (
          <option key={prop.id} value={prop.id}>
            {prop.name}
          </option>
        ))}
      </select>

      {/* Operators dropdown */}
      <select
        value={selectedOperator}
        onChange={(e) => setSelectedOperator(e.target.value)}
        disabled={!selectedProperty}
      >
        <option value="">Select operator</option>
        {operators.map((op) => (
          <option key={op.id} value={op.text}>
            {op.text}
          </option>
        ))}
      </select>

      {/* Value input */}
      {selectedPropObj?.type === "enumerated" ? (
        <select
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!selectedOperator}
        >
          <option value="">Select value</option>
          {properties.map((p: Property) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={selectedPropObj?.type === "number" ? "number" : "text"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!selectedOperator}
          placeholder="Enter value"
        />
      )}
    </div>
  );
};

export default ProductFilterBar;
