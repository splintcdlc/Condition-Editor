import type { Property, Operator } from "../types";
import { validOperatorsByType } from "../utils/operatorConfig";

type Props = {
  properties: Property[];
  allOperators: Operator[];
  selectedProperty: Property | undefined;
  setSelectedProperty: (property: Property) => void;
  selectedOperator: string;
  setSelectedOperator: (operator: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
};

const ProductFilterBar = ({
  properties,
  allOperators,
  selectedProperty,
  setSelectedProperty,
  selectedOperator,
  setSelectedOperator,
  inputValue,
  setInputValue,
}: Props) => {
  const selectedPropObj = properties.find((p) => p.id === selectedProperty?.id);

  const validOperatorsIds =
    selectedProperty && selectedProperty.type
      ? validOperatorsByType[selectedProperty.type]
      : [];
  const filteredOperators = allOperators.filter((op) =>
    validOperatorsIds.includes(op.id)
  );
  const isInputDisabled =
    selectedOperator === "any" || selectedOperator === "none";

  console.log("Selected property:", selectedProperty);

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
      {/* Properties dropdown */}
      <select
        value={selectedProperty?.id}
        onChange={(e) => {
          const prop = properties.find((p) => p.id === Number(e.target.value));
          if (prop) {
            setSelectedProperty(prop);
            setSelectedOperator(""); // Reset operator when property changes
            setInputValue(""); // Reset input value when property changes
          }
        }}
      >
        <option value="">-- Select property --</option>
        {properties.map((prop) => (
          <option key={prop.id} value={prop.id}>
            {prop.name}
          </option>
        ))}
      </select>

      {/* Operators dropdown */}
      <select
        value={selectedOperator}
        onChange={(e) => {
          console.log("Selected operator:", e.target.value);
          setSelectedOperator(e.target.value);
          setInputValue("");
        }}
        disabled={!selectedProperty}
      >
        <option value="">-- Select operator --</option>
        {filteredOperators.map((op) => (
          <option key={op.id} value={op.id}>
            {op.text}
          </option>
        ))}
      </select>

      {/* Value input */}
      {selectedPropObj?.type === "enumerated" ? (
        <select
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!selectedOperator || isInputDisabled}
        >
          <option value="">-- Select value --</option>
          {selectedPropObj.values.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={selectedPropObj?.type === "number" ? "number" : "text"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!selectedOperator || isInputDisabled}
          placeholder="Enter value"
        />
      )}
    </div>
  );
};

export default ProductFilterBar;
