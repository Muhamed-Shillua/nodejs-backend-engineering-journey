/**
 * @fileoverview Handler for adding new expenses.
 * Bridges the CLI input to the ExpenseService.
 */

import chalk from "chalk";
import { ExpenseService } from "../services/ExpenseService.js";
import { printExpense } from "../utils/formatters.js";

const service = new ExpenseService();

/**
 * Handles the "add" CLI command.
 *-------------------------------
 * Parses user input and delegates expense creation to ExpenseService,
 * then prints the created expense to the terminal.
 *
 * @param {Object} options - Parsed CLI command options.
 * @param {string} options.description - Description of the expense.
 * @param {number|string} options.amount - Monetary value of the expense.
 * @param {string} [options.category] - Optional category label.
 */
export function addCommandHandler(options) {
  try {
    const { description, amount, category } = options;
    const expense = service.addExpense(description, amount, category);

    printExpense(expense, "Expense recorded successfully");
  } catch (error) {
    console.error(chalk.red(`\n✗ Entry Refused: ${error.message}`));
  }
}
