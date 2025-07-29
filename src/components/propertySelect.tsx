import type { Property } from "../types";

type Props = {
  properties: Property[];
  selectedProperty: Property | undefined;
  setSelectedProperty: (property: Property) => void;
  resetFilters: () => void;
};

const PropertySelect = ({
  properties,
  selectedProperty,
  setSelectedProperty,
  resetFilters,
}: Props) => {
  return (
    <select
      value={selectedProperty?.id ?? ""}
      onChange={(e) => {
        const prop = properties.find((p) => p.id === Number(e.target.value));
        if (prop) {
          setSelectedProperty(prop);
          // Reset filters when property changes
          resetFilters();
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
  );
};

export default PropertySelect;
