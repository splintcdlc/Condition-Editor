import type { Operator, Property } from "../types";
import { validOperatorsByType } from "../utils/operatorConfig";

type Props = {
  operators: Operator[];
  selectedOperator: string;
  selectedProperty: Property | undefined;
  setSelectedOperator: (operator: string) => void;
  resetFilters: () => void;
};

const OperatorSelect = ({
  operators,
  selectedOperator,
  selectedProperty,
  setSelectedOperator,
  resetFilters,
}: Props) => {
  const validOperatorsIds =
    selectedProperty && selectedProperty.type
      ? validOperatorsByType[selectedProperty.type]
      : [];
  const filteredOperators = operators.filter((op) =>
    validOperatorsIds.includes(op.id)
  );

  return (
    <select
      value={selectedOperator}
      onChange={(e) => {
        console.log("Selected operator:", e.target.value);
        setSelectedOperator(e.target.value);
        resetFilters();
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
  );
};

export default OperatorSelect;
