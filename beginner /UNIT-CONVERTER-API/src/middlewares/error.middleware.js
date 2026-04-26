/**
 * @file error.middleware.js
 * @description Centralized error handling utility for standardizing error logs and responses.
 */

import { errorResponse } from "../utils/response.utils.js";

/**
 * Processes errors and sends a formatted response to the client.
 * @param {import('http').ServerResponse} res
 * @param {Error|Object} error - Error object, optionally containing a statusCode.
 */
export const handleError = (res, error) => {
  console.error("Error:", error.message);

  return errorResponse(res,
    error?.message || "Internal Server Error",
    error?.statusCode || 500
  );
};
