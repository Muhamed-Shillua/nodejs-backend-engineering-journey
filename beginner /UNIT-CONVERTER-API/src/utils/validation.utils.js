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
  if(!data || typeof data !== "object"){
    return { valid: false, error: "Invalid input: expected an object" };
  }

  const { type, value, from, to } = data;

  if (!type || value === undefined || !from || !to) {
    return { valid: false, error: "Missing required fields: type, value, from, to" };
  }

  if (!unitsConfig[type.trim().toLowerCase()]) {
    return { valid: false, error: `Invalid type: ${type}` };
  }

  const numericValue = Number(value);
  if (typeof numericValue !== "number" || isNaN(numericValue)) {
    return { valid: false, error: "Value must be a valid number" };
  }

  if (!unitsConfig[type].units[from.trim().toLowerCase()]) {
    return { valid: false, error: `Invalid 'from' unit: ${from}` };
  }

  if (!unitsConfig[type].units[to.trim().toLowerCase()]) {
    return { valid: false, error: `Invalid 'to' unit: ${to}` };
  }

  return { valid: true, payload: { type, value: numericValue, from, to } };
};
