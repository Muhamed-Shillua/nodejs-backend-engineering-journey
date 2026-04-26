/**
 * @file validation.utils.js
 * @description Validates input data for unit conversion requests.
 */

import { unitsConfig } from "../config/units.config.js";

/**
 * Validates the conversion request payload against supported units.
 * @param {Object} data - The request body.
 * @param {string} data.type - Conversion category.
 * @param {number} data.value - Numerical value to convert.
 * @param {string} data.from - Source unit key.
 * @param {string} data.to - Target unit key.
 * @returns {string|null} Error message or null if valid.
 */
export const validateConversionInput = (data) => {
  const { type, value, from, to } = data;

  if (!type || value === undefined || !from || !to) {
    return "Missing required fields: type, value, from, to";
  }

  if (!unitsConfig[type]) {
    return `Invalid type: ${type}`;
  }

  if (typeof value !== "number" || isNaN(value)) {
    return "Value must be a valid number";
  }

  if (!unitsConfig[type].units[from]) {
    return `Invalid 'from' unit: ${from}`;
  }

  if (!unitsConfig[type].units[to]) {
    return `Invalid 'to' unit: ${to}`;
  }

  return null;
};
