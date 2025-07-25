import type { Property, NormalizedProduct } from "../types";

interface ProductsTableProps {
  products: NormalizedProduct[];
  properties: Property[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  properties,
}) => {
  if (!products.length || !properties.length)
    return <p>No products to display.</p>;

  return (
    <table>
      <thead>
        <tr>
          {properties.map((prop) => (
            <th key={prop.name}>{prop.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            {properties.map((prop) => (
              <td key={prop.name}>{product[prop.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
