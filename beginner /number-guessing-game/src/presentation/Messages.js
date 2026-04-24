import chalk from "chalk";

/**
 * Messages
 * --------
 * Responsible for all CLI output formatting.
 *
 * This layer isolates UI logic from business logic.
 */

export default class Messages {
  static welcome() {
    console.log(chalk.cyan("\n\t---Welcome to Number Guessing Game---\n"));
    console.log("\nI'm thinking of a number between 1 and 100...\n");
  }

  static win(attemptsUsed) {
    console.log(
      chalk.green(`\nCongratulations! You won in ${attemptsUsed} attempts.`),
    );
  }

  static lose(secret) {
    console.log(chalk.red(`\nGame Over. The correct number was ${secret}.`));
  }

  static hint(hint, attemptsLeft) {
    console.log(chalk.yellow(`Hint: ${hint} | Attempts left: ${attemptsLeft}`));
  }

  static error(message) {
    console.log(chalk.red(message));
  }
}
