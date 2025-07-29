# Salsify Condition Editor – Take-Home Test

This project is a user interface for filtering a set of products using dynamic conditions based on property types and valid operations.

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

## How to Run Tests

```bash
npm run test
```

This runs all unit tests using Vitest.

The unit test coverage is limited; I focused on testing key functional files and one component to best demonstrate my approach to unit testing. As my development time was increasing and I had some time constraints, I prioritized core functionality and representative tests.

## Assumptions

- Only one filter is allowed at a time (per spec).
- Operators and property types are static but data content is dynamic.
- Each property has a unique name and ID.
- The app should work with any valid datastore.js loaded at runtime.
- Empty values are treated as null.

## Notes on Development Process

- Focused on small, testable components and pure utility functions.
- Prioritized readability and adaptability for changing data.
- Avoided unnecessary state management libraries to keep it simple.
- Tests were written to validate both logic and edge behavior.

## Time spent

The total development time for this project was approximately 16 hours.

## Thanks for the opportunity!

##

## David Clemente
