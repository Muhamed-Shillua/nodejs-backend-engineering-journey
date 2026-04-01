import { logger } from "./logger.js";

/**
 * Error Handler
 * -------------
 * @param {Error} error 
 */
export function handleError(error) {

    logger.error(error.message);

    process.exit(1);
}