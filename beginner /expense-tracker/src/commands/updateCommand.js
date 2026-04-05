/**
 * @fileoverview Handler for partial updates of records.
 */

import chalk from 'chalk';
import { ExpenseService } from '../services/ExpenseService.js';
import { printExpense } from "../utils/formatters.js";

const service = new ExpenseService();

export function updateCommandHandler(id, options) {
  try {
    const updated = service.updateExpense(id, options);
    printExpense(updated, `Record #${id} has been modified`)
  } catch (error) {
    console.error(chalk.red(`\n✗ Update Failed: ${error.message}`));
  }
}
