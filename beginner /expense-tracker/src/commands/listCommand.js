/**
 * @fileoverview Handler for displaying the expense table.
 */

import chalk from 'chalk';
import { ExpenseService } from '../services/ExpenseService.js';
import { printExpenses } from '../utils/formatters.js';

const service = new ExpenseService();

export function listCommandHandler() {
  try {
    const expenses = service.getAll();

    if (expenses.length === 0) {
      console.log(chalk.yellow('\nℹ Your ledger is currently empty.'));
      return;
    }

    printExpenses(expenses);
  } catch (error) {
    console.error(chalk.red(`\n✗ Display Error: ${error.message}`));
  }
}
