import type { Property, Operator } from "../types";
import OperatorSelect from "./operatorSelect";
import PropertySelect from "./propertySelect";
import ValueInput from "./valueInput";

type Props = {
  properties: Property[];
  allOperators: Operator[];
  selectedProperty: Property | undefined;
  setSelectedProperty: (property: Property | undefined) => void;
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

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
      <PropertySelect
        properties={properties}
        selectedProperty={selectedProperty}
        setSelectedProperty={setSelectedProperty}
        resetFilters={() => {
          setSelectedOperator("");
          setInputValue("");
        }}
      />

      <OperatorSelect
        operators={allOperators}
        selectedOperator={selectedOperator}
        selectedProperty={selectedProperty}
        setSelectedOperator={setSelectedOperator}
        resetFilters={() => {
          setInputValue("");
        }}
      />

      <ValueInput
        selectedPropObj={selectedPropObj}
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectedOperator={selectedOperator}
      />

      {selectedProperty && (
        <button
          onClick={() => {
            setSelectedProperty(undefined);
            setSelectedOperator("");
            setInputValue("");
          }}
          style={{ alignSelf: "center" }}
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default ProductFilterBar;
