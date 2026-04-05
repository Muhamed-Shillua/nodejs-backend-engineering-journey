/**
 * @fileoverview Delete Command Handler
 * Manages the removal of expense records from the persistence layer.
 */

import chalk from 'chalk';
import { ExpenseService } from '../services/ExpenseService.js';

const service = new ExpenseService();

/**
 * Orchestrates the deletion of a specific expense record.
 * @param {Object} options - The parsed commander options.
 * @param {string|number} options.id - The unique identifier of the record.
 */
export function deleteCommandHandler(options) {
  try {
    // 1. Input Sanitization: Ensure we have a valid numeric ID
    const targetId = Number(options.id);

    if (isNaN(targetId)) {
      throw new Error("Invalid Input: The provided ID must be a number.");
    }

    // 2. Execution: Delegate to the Service Layer
    service.deleteExpense(targetId);

    // 3. UI Feedback: Professional success confirmation
    console.log(`\n${chalk.bgRed.white.bold(' DELETED ')} ${chalk.green(`✓ Record #${targetId} has been purged from the ledger.`)}`);

  } catch (error) {
    // 4. Error Handling: Differentiate between "Not Found" and "System Errors"
    console.error(`\n${chalk.red.bold('✗ Delete Failed:')} ${error.message}`);

    if (error.message.includes('not found')) {
      console.error(chalk.yellow('Tip: Use "expense-tracker list" to verify existing IDs.\n'));
    }
  }
}
