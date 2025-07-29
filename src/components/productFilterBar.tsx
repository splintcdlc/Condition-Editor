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
    <div className="flex w-full gap-4 p-4 justify-start">
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
          className="ml-auto bg-blue-600 text-white px-3 py-1 rounded shadow text-sm transition-colors disabled:bg-blue-200 disabled:text-blue-800"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default ProductFilterBar;
