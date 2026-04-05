import chalk from 'chalk';
import { ExpenseService } from '../services/ExpenseService.js';
import { formatCurrency } from '../utils/formatters.js';

const service = new ExpenseService();

/**
 * Handles financial reporting for all time or specific months.
 * @param {Object} options - CLI flags (e.g., --month).
 */
export function reportCommandHandler(options) {
  try {
    const total = service.getReport(options.month);

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const period = options.month ? monthNames[options.month - 1] : 'All Time';

    console.log(`\n${chalk.bold('--- Financial Summary ---')}`);
    console.log(`${chalk.gray('Period :')} ${period}`);
    console.log(`${chalk.gray('Total  :')} ${chalk.green.bold(formatCurrency(total))}\n`);
  } catch (error) {
    console.error(chalk.red(`\n✗ Summary Error: ${error.message}`));
  }
}
