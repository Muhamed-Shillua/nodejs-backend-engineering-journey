export const unitsConfig = {
  length: {
    base: "m", // base unit (meter)
    units: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      inch: 0.0254,
      ft: 0.3048,
      yard: 0.9144,
      mile: 1609.344,
    },
  },

  weight: {
    base: "kg",
    units: {
      mg: 0.000001,
      g: 0.001,
      kg: 1,
      lb: 0.453592,
      oz: 0.0283495,
    },
  },

  temperature: {
    base: "celsius",
    units: {
      celsius: "celsius",
      fahrenheit: "fahrenheit",
      kelvin: "kelvin",
    },
  },

  time: {
    base: "sec",
    units: {
      ms: 0.001,
      sec: 1,
      min: 60,
      hour: 3600,
      day: 86400,
    },
  },
};
