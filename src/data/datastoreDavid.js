window.datastore = {
  getProducts: function () {
    return this.products;
  },

  getProperties: function () {
    return this.properties;
  },

  getOperators: function () {
    return this.operators;
  },

  products: [
    {
      id: 0,
      property_values: [
        { property_id: 0, value: "BMW" },
        { property_id: 1, value: "Black" },
        { property_id: 2, value: 50000 },
        { property_id: 3, value: "M2" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 1,
      property_values: [
        { property_id: 0, value: "Mercedes" },
        { property_id: 1, value: "Blue" },
        { property_id: 2, value: 150000 },
        { property_id: 3, value: "C63 amg" },
        { property_id: 4, value: "Auto" },
      ],
    },
    {
      id: 2,
      property_values: [
        { property_id: 0, value: "BMW" },
        { property_id: 1, value: "Red" },
        { property_id: 2, value: 170000 },
        { property_id: 3, value: "M5" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 3,
      property_values: [
        { property_id: 0, value: "Audi" },
        { property_id: 1, value: "White" },
        { property_id: 2, value: 80000 },
        { property_id: 3, value: "RS5" },
        { property_id: 4, value: "Auto" },
      ],
    },
    {
      id: 4,
      property_values: [
        { property_id: 0, value: "Porsche" },
        { property_id: 1, value: "Yellow" },
        { property_id: 2, value: 220000 },
        { property_id: 3, value: "911 Turbo" },
        { property_id: 4, value: "Auto" },
      ],
    },
    {
      id: 5,
      property_values: [
        { property_id: 0, value: "Volkswagen" },
        { property_id: 1, value: "Gray" },
        { property_id: 2, value: 35000 },
        { property_id: 3, value: "Golf GTI" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 6,
      property_values: [
        { property_id: 0, value: "Tesla" },
        { property_id: 1, value: "White" },
        { property_id: 2, value: 90000 },
        { property_id: 3, value: "Model S" },
        { property_id: 4, value: "Auto" },
      ],
    },
    {
      id: 7,
      property_values: [
        { property_id: 0, value: "Ferrari" },
        { property_id: 1, value: "Red" },
        { property_id: 2, value: 300000 },
        { property_id: 3, value: "488 GTB" },
        { property_id: 4, value: "Auto" },
      ],
    },
    {
      id: 8,
      property_values: [
        { property_id: 0, value: "Lamborghini" },
        { property_id: 1, value: "Green" },
        { property_id: 2, value: 350000 },
        { property_id: 3, value: "Huracan" },
        { property_id: 4, value: "Auto" },
      ],
    },
    {
      id: 9,
      property_values: [
        { property_id: 0, value: "Ford" },
        { property_id: 1, value: "Blue" },
        { property_id: 2, value: 45000 },
        { property_id: 3, value: "Mustang" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 10,
      property_values: [
        { property_id: 0, value: "Toyota" },
        { property_id: 1, value: "Silver" },
        { property_id: 2, value: 30000 },
        { property_id: 3, value: "Supra" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 11,
      property_values: [
        { property_id: 0, value: "Honda" },
        { property_id: 1, value: "Black" },
        { property_id: 2, value: 27000 },
        { property_id: 3, value: "Civic Type R" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 12,
      property_values: [
        { property_id: 0, value: "Alfa Romeo" },
        { property_id: 1, value: "Red" },
        { property_id: 2, value: 60000 },
        { property_id: 3, value: "Giulia Quadrifoglio" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 13,
      property_values: [
        { property_id: 0, value: "Chevrolet" },
        { property_id: 1, value: "Yellow" },
        { property_id: 2, value: 70000 },
        { property_id: 3, value: "Camaro" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 14,
      property_values: [
        { property_id: 0, value: "Nissan" },
        { property_id: 1, value: "Orange" },
        { property_id: 2, value: 40000 },
        { property_id: 3, value: "370Z" },
        { property_id: 4, value: "Manual" },
      ],
    },
    {
      id: 15,
      property_values: [
        { property_id: 0, value: "Mazda" },
        { property_id: 1, value: "Red" },
        { property_id: 2, value: 32000 },
        { property_id: 3, value: "MX-5" },
        { property_id: 4, value: "Manual" },
      ],
    },
  ],

  properties: [
    {
      id: 0,
      name: "Brand Name",
      type: "string",
    },
    {
      id: 1,
      name: "Color",
      type: "string",
    },
    {
      id: 2,
      name: "Price (€)",
      type: "number",
    },
    {
      id: 3,
      name: "Variant",
      type: "string",
    },
    {
      id: 4,
      name: "Gearbox",
      type: "enumerated",
      values: ["Manual", "Auto"],
    },
  ],

  operators: [
    {
      text: "Equals",
      id: "equals",
    },
    {
      text: "Is greater than",
      id: "greater_than",
    },
    {
      text: "Is less than",
      id: "less_than",
    },
    {
      text: "Has any value",
      id: "any",
    },
    {
      text: "Has no value",
      id: "none",
    },
    {
      text: "Is any of",
      id: "in",
    },
    {
      text: "Contains",
      id: "contains",
    },
  ],
};
