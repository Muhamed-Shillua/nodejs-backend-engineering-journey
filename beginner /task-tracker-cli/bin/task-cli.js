#!/usr/bin/env node

/**
 * Entry point for the Task Tracker CLI application.
 * This file is responsible for invoking the CLI parser
 * which determines which command should be executed.
 */

import { parseCommand } from "../src/cli/parser.js";

parseCommand(process.argv);