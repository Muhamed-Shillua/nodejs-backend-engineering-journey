import { handleCLI } from "./cliHandler.js";

/**
 * CLI Parser
 * ----------
 * Extracts relevant CLI arguments and forwards them to the handler.
 * 
 * @param {Array} argv - process.argv
 */
export function parseCommand(argv) {
    // Remove node path and script path
    const args = argv.slice(2);
    handleCLI(args);
}