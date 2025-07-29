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
        { property_id: 0, value: "Headphones" },
        { property_id: 1, value: "black" },
        { property_id: 2, value: 5 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 1,
      property_values: [
        { property_id: 0, value: "Cell Phone" },
        { property_id: 1, value: "black" },
        { property_id: 2, value: 3 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "true" },
      ],
    },
    {
      id: 2,
      property_values: [
        { property_id: 0, value: "Keyboard" },
        { property_id: 1, value: "grey" },
        { property_id: 2, value: 5 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 3,
      property_values: [
        { property_id: 0, value: "Cup" },
        { property_id: 1, value: "white" },
        { property_id: 2, value: 3 },
        { property_id: 3, value: "kitchenware" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 4,
      property_values: [
        { property_id: 0, value: "Key" },
        { property_id: 1, value: "silver" },
        { property_id: 2, value: 1 },
        { property_id: 3, value: "tools" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 5,
      property_values: [
        { property_id: 0, value: "Hammer" },
        { property_id: 1, value: "brown" },
        { property_id: 2, value: 19 },
        { property_id: 3, value: "tools" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 6,
      property_values: [
        { property_id: 0, value: "Laptop" },
        { property_id: 1, value: "silver" },
        { property_id: 2, value: 48 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "true" },
      ],
    },
    {
      id: 7,
      property_values: [
        { property_id: 0, value: "Screwdriver" },
        { property_id: 1, value: "yellow" },
        { property_id: 2, value: 4 },
        { property_id: 3, value: "tools" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 8,
      property_values: [
        { property_id: 0, value: "Blender" },
        { property_id: 1, value: "white" },
        { property_id: 2, value: 32 },
        { property_id: 3, value: "kitchenware" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 9,
      property_values: [
        { property_id: 0, value: "Wireless Mouse" },
        { property_id: 1, value: "black" },
        { property_id: 2, value: 2 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "true" },
      ],
    },
    {
      id: 10,
      property_values: [
        { property_id: 0, value: "Mixer" },
        { property_id: 1, value: "red" },
        { property_id: 2, value: 15 },
        { property_id: 3, value: "kitchenware" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 11,
      property_values: [
        { property_id: 0, value: "Tablet" },
        { property_id: 1, value: "white" },
        { property_id: 2, value: 10 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "true" },
      ],
    },
    {
      id: 12,
      property_values: [
        { property_id: 0, value: "Toaster" },
        { property_id: 1, value: "silver" },
        { property_id: 2, value: 8 },
        { property_id: 3, value: "kitchenware" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 13,
      property_values: [
        { property_id: 0, value: "Drill" },
        { property_id: 1, value: "blue" },
        { property_id: 2, value: 22 },
        { property_id: 3, value: "tools" },
        { property_id: 4, value: "false" },
      ],
    },
    {
      id: 14,
      property_values: [
        { property_id: 0, value: "Smart Watch" },
        { property_id: 1, value: "black" },
        { property_id: 2, value: 1 },
        { property_id: 3, value: "electronics" },
        { property_id: 4, value: "true" },
      ],
    },
    {
      id: 15,
      property_values: [
        { property_id: 0, value: "Spatula" },
        { property_id: 1, value: "green" },
        { property_id: 2, value: 2 },
        { property_id: 3, value: "kitchenware" },
        { property_id: 4, value: "false" },
      ],
    },
  ],

  properties: [
    {
      id: 0,
      name: "Product Name",
      type: "string",
    },
    {
      id: 1,
      name: "color",
      type: "string",
    },
    {
      id: 2,
      name: "weight (oz)",
      type: "number",
    },
    {
      id: 3,
      name: "category",
      type: "enumerated",
      values: ["tools", "electronics", "kitchenware"],
    },
    {
      id: 4,
      name: "wireless",
      type: "enumerated",
      values: ["true", "false"],
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
