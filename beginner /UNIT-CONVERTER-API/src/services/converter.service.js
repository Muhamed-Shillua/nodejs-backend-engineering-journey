/**
 * @file converter.service.js
 * @description Orchestrator service that delegates conversion logic.
 */

import { convertLength } from "./length.service.js";
// import { convertWeight } from "./weight.service.js";
// import { convertTemperature } from "./temperature.service.js";
// import { convertTime } from "./time.service.js";

/**
 * Routes the conversion request to the appropriate sub-service.
 * @param {Object} params
 * @param {string} params.type - Category of conversion.
 * @param {number} params.value - Value to be converted.
 * @param {string} params.from - Source unit.
 * @param {string} params.to - Target unit.
 * @returns {number} The converted value.
 */
export const convert = ({ type, value, from, to }) => {
  switch (type) {
    case "length":
      return convertLength(value, from, to);
    default:
      throw new Error(`Unsupported conversion type: ${type}`);
  }
};
