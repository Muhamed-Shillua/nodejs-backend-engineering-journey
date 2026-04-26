/**
 * @file response.utils.js
 * @description Standardized API response utilities.
 */

/**
 * @param {import('http').ServerResponse} res
 * @param {number} statusCode
 * @param {Object} payload
 */
export const sendResponse = (res, statusCode, payload) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
};

/**
 * @param {import('http').ServerResponse} res
 * @param {any} data
 * @param {number} [statusCode=200]
 */
export const successResponse = (res, data, statusCode = 200) => {
  sendResponse(res, statusCode, { success: true, data });
};

/**
 * @param {import('http').ServerResponse} res
 * @param {string} message
 * @param {number} [statusCode=400]
 */
export const errorResponse = (res, message, statusCode = 400) => {
  sendResponse(res, statusCode, { success: false, message });
};
