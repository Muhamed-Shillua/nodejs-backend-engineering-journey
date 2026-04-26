import { converterRoutes } from "./routes/converter.routes.js";
import { errorResponse } from "./utils/response.utils.js";

/**
 * Main application entry point
 * Acts as a request dispatcher to route handlers
 *
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
const app = (req, res) => {
  try {
    converterRoutes(req, res);
  } catch (error) {
    errorResponse(res, "Internal Server Error", 500);
    console.error("App dispatch error:", error);
  }
};

export default app;
