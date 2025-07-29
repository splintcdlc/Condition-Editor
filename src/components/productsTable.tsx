import type { Property, NormalizedProduct } from "../types";

type Props = {
  products: NormalizedProduct[];
  properties: Property[];
};

const ProductsTable = ({ products, properties }: Props) => {
  return (
    <table className="w-full table-fixed mt-4 border-white border-1 overflow-scroll">
      <thead>
        <tr className="bg-gray-600">
          {properties.map((prop) => (
            <th
              key={prop.name}
              className="text-white font-semibold px-4 h-12 border-r-1 align-middle"
            >
              {prop.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            {properties.map((prop, idx) =>
              idx === 0 ? (
                <td
                  key={prop.name}
                  colSpan={properties.length}
                  className="text-center py-4 text-gray-400"
                >
                  No products to display.
                </td>
              ) : (
                <td key={prop.name} style={{ display: "none" }} />
              )
            )}
          </tr>
        ) : (
          products.map((product, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-transparent" : "bg-gray-900"}
              style={{ height: "3rem" }}
            >
              {properties.map((prop) => (
                <td
                  key={prop.name}
                  className="px-4 h-12 text-white border-r-1 align-middle"
                >
                  {product[prop.name]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ProductsTable;
