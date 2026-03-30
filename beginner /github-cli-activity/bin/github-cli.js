#!/usr/bin/env node

/**
 * Entry point for GitHub CLI Activity
 * This script parses CLI arguments and delegates to the handler
 */

import { handleCLI } from "../src/cli/cliHandler.js";

// Pass all arguments except "node" and script path
handleCLI(process.argv.slice(2));