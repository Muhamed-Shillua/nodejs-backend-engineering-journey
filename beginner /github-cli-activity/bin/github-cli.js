#!/usr/bin/env node

/**
 * CLI entry point
 * Bootstraps the application and forwards arguments to the parser.
 */

import { parseCommand } from "../src/cli/parser.js";
import { handleError } from "../src/utils/errorHandler.js";

try {
    parseCommand(process.argv);
} catch (err) {
    handleError(`Unexpected error: ${err.message}`);
}