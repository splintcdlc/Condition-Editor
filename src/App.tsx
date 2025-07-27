import { useEffect, useState } from "react";
import loadDatastore from "./utils/loadDatastore";

import "./App.css";
import loadDatastoreScript from "./utils/loadDatastoreScript";
import normalizeProducts from "./utils/normalizeProducts";
import ProductsTable from "./components/productsTable";
import type { NormalizedProduct, Property } from "./types";
import ProductFilterBar from "./components/ProductFilterBar";

function App() {
  const [products, setProducts] = useState<NormalizedProduct[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [operators, setOperators] = useState([]);
  const [datastores, setDatastores] = useState<string[]>([]);
  const [selectedDatastore, setSelectedDatastore] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<Property>();
  const [selectedOperator, setSelectedOperator] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  // Fetch datastore list from /data folder
  useEffect(() => {
    fetch("/datastoresList.json")
      .then((res) => res.json())
      .then((files: string[]) => setDatastores(files))
      .catch(() => setDatastores([]));
  }, []);

  const handleLoadDatastore = async () => {
    if (!selectedDatastore) return;
    try {
      await loadDatastoreScript(`src/data/${selectedDatastore}`);
      // Load the datastore after the script is loaded
      const datastore = loadDatastore();
      setProperties(datastore.properties);
      setOperators(datastore.operators);
      // Normalize products before setting
      setProducts(normalizeProducts(datastore.products, datastore.properties));
      // Reset filters
      setSelectedProperty(undefined);
      setSelectedOperator("");
      setInputValue("");
    } catch {
      alert("Failed to load datastore script.");
    }
  };

  return (
    <>
      <h1>Condition Editor</h1>
      <div className="card">
        <div>
          <label htmlFor="datastore-select">Choose datastore:</label>
          <select
            id="datastore-select"
            value={selectedDatastore}
            onChange={(e) => setSelectedDatastore(e.target.value)}
          >
            <option value="">Select a datastore</option>
            {datastores.map((ds) => (
              <option key={ds} value={ds}>
                {ds}
              </option>
            ))}
          </select>
          <button onClick={handleLoadDatastore} disabled={!selectedDatastore}>
            Load Datastore
          </button>
        </div>
        <div>
          <h2>Products</h2>
          <ProductFilterBar
            properties={properties}
            operators={operators}
            selectedProperty={selectedProperty}
            setSelectedProperty={setSelectedProperty}
            selectedOperator={selectedOperator}
            setSelectedOperator={setSelectedOperator}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <ProductsTable products={products} properties={properties} />
        </div>
      </div>
    </>
  );
}

export default App;
