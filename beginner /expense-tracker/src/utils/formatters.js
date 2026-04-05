/**
 * @fileoverview UI Formatting Utilities
 * Provides standardized methods for displaying data to the user.
 */
import chalk from "chalk";

/**
 * Formats a numeric value as USD currency.
 * @param {number} amount
 * @returns {string} e.g., "$1,250.00"
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

/**
 * Formats an ISO string into a human-readable date.
 * @param {string} isoString
 * @returns {string} e.g., "April 5, 2026"
 */
export const formatDate = (isoString) => {
  return new Date(isoString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Truncates long strings for table displays.
 */
export const truncate = (text, length = 20) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

/**
 * Prints a single expense object to the console with color-coded formatting.
 * @param {Object} expense - The expense entity to display.
 * @param {number} expense.id - Unique identifier for the expense.
 * @param {string} expense.description - Description or purpose of the expense.
 * @param {number} expense.amount - Monetary value of the expense.
 * @param {string} expense.category - Category of the expense (e.g., Food, Transport).
 * @param {string} message - A custom message to display (e.g., "Expense added successfully").
 */
export function printExpense(expense, message) {
  console.log(`\n${chalk.green.bold("Success ✓:")} ${message}.`);
  console.log(`${chalk.gray("ID         :")} ${chalk.white(expense.id)}`);
  console.log(
    `${chalk.gray("Description:")} ${chalk.white(expense.description)}`,
  );
  console.log(
    `${chalk.gray("Amount     :")} ${chalk.yellow(formatCurrency(expense.amount))}`,
  );
  console.log(
    `${chalk.gray("Category   :")} ${chalk.magenta(expense.category)}\n`,
  );
}

/**
 * Prints a list of expenses in a formatted table in the console.
 * @param {Array<Object>} expenses - Array of expense objects
 * @param {string} [title="Expenses Ledger"] - Optional title to display above the table
 */
export function printExpenses(expenses, title = "Expenses Ledger") {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    console.log(`\n${chalk.blue("ℹ Information:")} No expenses to display.`);
    return;
  }

  // Column widths
  const colWidths = {
    id: 4,
    date: 15,
    description: 25,
    amount: 12,
    category: 12,
  };

  // Header
  const header = chalk.bold.cyan(
    `${"ID".padEnd(colWidths.id)} | ${"Date".padEnd(colWidths.date)} | ${"Description".padEnd(colWidths.description)} | ${"Amount".padEnd(colWidths.amount)} | ${"Category".padEnd(colWidths.category)}`,
  );
  console.log(`\n${chalk.bold(title)}`);
  console.log(header);
  console.log(
    chalk.gray(
      "-".repeat(Object.values(colWidths).reduce((a, b) => a + b + 3, -3)),
    ),
  ); // line length matches table width

  // Rows
  expenses.forEach((e) => {
    const id = e.id.toString().padEnd(colWidths.id);
    const date = formatDate(e.createdAt).padEnd(colWidths.date);
    const desc = truncate(e.description, colWidths.description).padEnd(
      colWidths.description,
    );
    const amt = chalk.yellowBright(
      formatCurrency(e.amount).padEnd(colWidths.amount),
    );
    const cat = chalk.magentaBright(e.category.padEnd(colWidths.category));

    console.log(`${id} | ${date} | ${desc} | ${amt} | ${cat}`);
  });

  console.log(
    chalk.gray(
      "-".repeat(Object.values(colWidths).reduce((a, b) => a + b + 3, -3)),
    ),
  );
  console.log(`${chalk.bold("Total Records:")} ${expenses.length}\n`);
}
