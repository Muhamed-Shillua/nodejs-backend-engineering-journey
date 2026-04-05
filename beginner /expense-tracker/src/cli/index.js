#!/usr/bin/env node

/**
 * @fileoverview CLI Entry Point
 * Configures the command-line interface and routes commands
 * to their corresponding handlers.
 */

import { Command } from "commander";
import chalk from "chalk";

import { addCommandHandler } from "../commands/addCommand.js";
import { listCommandHandler } from "../commands/listCommand.js";
import { updateCommandHandler } from "../commands/updateCommand.js";
import { deleteCommandHandler } from "../commands/deleteCommand.js";
import { reportCommandHandler } from "../commands/reportCommand.js";

const program = new Command();

/**
 * CLI Banner
 */
console.log(`
${chalk.cyan.bold("Expense Tracker")}
${chalk.gray("Professional Personal Finance Manager")}
`);

/**
 * Global CLI Configuration
 */
program
  .name("expense-tracker")
  .description("A production-grade CLI for managing personal expenses")
  .version("1.0.0");

/**
 * Improve UX
 */
program.showHelpAfterError();
program.showSuggestionAfterError();

/**
 * Global Options
 */
program.option("--json", "Output results in JSON format");
program.option("--verbose", "Enable verbose logging");

/**
 * =========================
 * ADD COMMAND
 * =========================
 */
program
  .command("add")
  .alias("a")
  .description("Register a new expense in the ledger")
  .requiredOption("--description <desc>", "Description of the expense")
  .requiredOption("--amount <amt>", "Numeric amount spent")
  .option("--category <cat>", "Optional category tag")
  .action(addCommandHandler);

/**
 * =========================
 * DELETE COMMAND
 * =========================
 */
program
  .command("delete")
  .alias("d")
  .description("Permanently remove an expense record")
  .requiredOption("--id <id>", "Unique ID of the record", parseInt)
  .action(deleteCommandHandler);

/**
 * =========================
 * HELP EXAMPLES
 * =========================
 */
program.addHelpText(
  "after",
  `
${chalk.bold("Examples:")}

  $ expense-tracker add --description "Lunch" --amount 20
  $ expense-tracker add -d "Coffee" -a 5.5 --category food
  $ expense-tracker list
  $ expense-tracker update --id 2 --amount 25
  $ expense-tracker delete --id 3
  $ expense-tracker report
  $ expense-tracker report --month 8
`,
);

/**
 * Parse CLI arguments
 */
program.parse(process.argv);

/**
 * Show help if no command provided
 */
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
