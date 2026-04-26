/**
 * @file converter.controller.js
 * @description Controller logic for handling unit conversion API endpoints.
 */

import { convert } from "../services/converter.service.js";
import { successResponse, errorResponse } from "../utils/response.utils.js";
import { parseRequestBody } from "../utils/request.utils.js";
import { handleError } from "../middlewares/error.middleware.js";
import { validateConversionInput } from "../utils/validation.utils.js";
import { unitsConfig } from "../config/units.config.js";

/**
 * Fetches and returns all available conversion units and types.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export const getConverters = (req, res) => {
  return successResponse(res, unitsConfig);
};

/**
 * Orchestrates the conversion process: parses body, validates, and calculates result.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export const convertIt = async (req, res) => {
  try {
    const body = await parseRequestBody(req);

    const validationResult = validateConversionInput(body);
    if (!validationResult.valid) {
      return errorResponse(res, validationResult.error, 400);
    }

    const result = convert(validationResult.payload);

    return successResponse(res, {
      type: validationResult.payload.type,
      from: validationResult.payload.from,
      to: validationResult.payload.to,
      value: validationResult.payload.value,
      result,
    });
  } catch (err) {
    return handleError(res, err);
  }
};
