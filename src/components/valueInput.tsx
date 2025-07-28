import type { Property } from "../types";

type Props = {
  selectedPropObj: Property | undefined;
  inputValue: string;
  setInputValue: (value: string) => void;
  selectedOperator: string;
};

const ValueInput = ({
  selectedPropObj,
  inputValue,
  setInputValue,
  selectedOperator,
}: Props) => {
  const isDisabled =
    selectedOperator === "any" ||
    selectedOperator === "none" ||
    selectedOperator === "";
  const isAnyOfOperator = selectedOperator === "in";

  if (isAnyOfOperator) {
    // Always show a text input for "is any of" operator
    // to allow entering multiple values
    // separated by commas
    return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        hidden={!selectedOperator || isDisabled}
        placeholder="Enter values separated by commas"
      />
    );
  }
  return selectedPropObj?.type === "enumerated" ? (
    <select
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      hidden={!selectedPropObj.values.length || isDisabled}
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
      hidden={!selectedOperator || isDisabled}
      placeholder="Enter value"
    />
  );
};

export default ValueInput;
