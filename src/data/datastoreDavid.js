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
        {
          property_id: 0,
          value: "BMW",
        },
        {
          property_id: 1,
          value: "Black",
        },
        {
          property_id: 2,
          value: 50000,
        },
        {
          property_id: 3,
          value: "M2",
        },
        {
          property_id: 4,
          value: "Manual",
        },
      ],
    },
    {
      id: 1,
      property_values: [
        {
          property_id: 0,
          value: "Mercedes",
        },
        {
          property_id: 1,
          value: "Blue",
        },
        {
          property_id: 2,
          value: 150000,
        },
        {
          property_id: 3,
          value: "C63 amg",
        },
        {
          property_id: 4,
          value: "Auto",
        },
      ],
    },
    {
      id: 2,
      property_values: [
        {
          property_id: 0,
          value: "BMW",
        },
        {
          property_id: 1,
          value: "Red",
        },
        {
          property_id: 2,
          value: 170000,
        },
        {
          property_id: 3,
          value: "M5",
        },
        {
          property_id: 4,
          value: "Manual",
        },
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
