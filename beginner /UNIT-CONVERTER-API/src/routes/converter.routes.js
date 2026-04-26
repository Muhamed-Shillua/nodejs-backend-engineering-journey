/**
 * @file converter.routes.js
 * @description Routing layer that maps incoming HTTP requests to specific controller actions.
 */

import {
  getConverters,
  convertIt,
} from "../controllers/converter.controller.js";
import { errorResponse } from "../utils/response.utils.js";

/**
 * Dispatches the request based on the URL pathname and HTTP method.
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export const converterRoutes = (req, res) => {
  const host = req.headers.host || "localhost";
  const url = new URL(req.url, `http://${host}`);
  const pathname = url.pathname;
  const method = req.method;

  if (pathname === "/api/converters") {
    if (method === "GET") {
      return getConverters(req, res);
    }

    return errorResponse(res, "Method not allowed", 405);
  }

  if (pathname === "/api/convertit") {
    if (method === "POST") {
      return convertIt(req, res);
    }

    return errorResponse(res, "Method not allowed", 405);
  }

  return errorResponse(res, "Route not found", 404);
};
