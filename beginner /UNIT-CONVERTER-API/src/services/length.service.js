/**
 * @file length.service.js
 * @description Logic for converting length units using Meter as the base unit.
 */

const toMeter = {
  mm: (v) => v / 1000,
  cm: (v) => v / 100,
  m: (v) => v,
  km: (v) => v * 1000,
  inch: (v) => v * 0.0254,
  ft: (v) => v * 0.3048,
  yard: (v) => v * 0.9144,
  mile: (v) => v * 1609.34,
};

const fromMeter = {
  mm: (v) => v * 1000,
  cm: (v) => v * 100,
  m: (v) => v,
  km: (v) => v / 1000,
  inch: (v) => v / 0.0254,
  ft: (v) => v / 0.3048,
  yard: (v) => v / 0.9144,
  mile: (v) => v / 1609.34,
};

/**
 * Converts length between supported units via a two-step base conversion.
 * @param {number} value - Numerical value to convert.
 * @param {string} from - Source unit key.
 * @param {string} to - Target unit key.
 * @returns {number} Converted value.
 * @throws {Error} If unit keys are not found in mapping.
 */
export const convertLength = (value, from, to) => {
  if (!toMeter[from] || !fromMeter[to]) {
    throw new Error("Invalid length unit");
  }

  const inMeters = toMeter[from](value);
  return fromMeter[to](inMeters);
};
