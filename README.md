# 🧪 Salsify Condition Editor – Take-Home Test

This project is a user interface for filtering a set of products using dynamic conditions based on property types and valid operations.

## 🗺️ Guided Tour

### Features Implemented

- Property-based condition filtering (`[property] [operator] [value]`)
- Operators filtered dynamically based on property type
- Value input adapts to property type and operator
- Dynamic loading of different `datastore.js` files from a dropdown
- Normalization of raw product data for easier filtering
- Product list rendered in a table with dynamic headers
- Complete filter reset functionality

### Technologies Used

- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS** for quick styling
- **Jest + Testing Library (via Vitest)** for unit tests

## ⚙️ How to Run

1.  Check the version of Node installed on your machine; you should have version 22.5.1.
    If you use nvm, simply run `nvm use` (a `.nvmrc` file is included).

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run dev server

```bash
 npm run dev
```

4. Visit: http://localhost:5173

## How to include a new datastore

1. Place your datastore file in the `src/data` directory.

2. Open `public/datastoresList.json` and add the new datastore's name to the array.

3. The new datastore will then appear in the "Select datastore" dropdown and be available for use in the app.
