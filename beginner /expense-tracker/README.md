# Expense Tracker CLI

**Tier:** Beginner
**Type:** CLI
**Status:** Completed

---

## 1. Executive Overview

**Expense Tracker CLI** is a professional command-line tool to manage personal finances.
It allows users to **add, update, delete, list, and summarize expenses**, optionally filtering by month or category.

This project demonstrates core **Node.js backend engineering principles**, including:

- Modular project structure
- CLI argument parsing with Commander.js
- File-based persistent storage (JSON)
- Error handling and validation
- Professional CLI UX design

The purpose of this project is to provide a **foundation for building finance-related CLI tools** with clean architecture and maintainable code.

---

## 2. Project Structure

A well-organized project structure ensures maintainability and scalability:

```
expense-tracker/
│
├── src/
│   ├── cli/                   # CLI entry point and routing
│   │   └── index.js
│   │
│   ├── commands/              # CLI commands
│   │   ├── addCommand.js
│   │   ├── updateCommand.js
│   │   ├── deleteCommand.js
│   │   ├── listCommand.js
│   │   └── reportCommand.js
│   │
│   ├── services/              # Business logic
│   │   └── ExpenseService.js
│   │
│   ├── models/                # Domain entities and validation
│   │   └── Expense.js
│   │
│   ├── repository/            # Data access layer (JSON storage)
│   │   └── ExpenseRepository.js
│   │
│   ├── utils/                 # Utilities (formatters, validators)
│   │   └── formatters.js
│   │
│   └── constants/             # App-wide constants
│       └── paths.js
│
├── data/
│   └── expenses.json          # JSON file storing expenses
│
├── tests/                     # Unit tests
│
├── package.json
├── .gitignore
└── README.md
```

---

## 3. Features

- **Add a new expense** (description, amount, optional category)
- **Update an expense by ID**
- **Delete an expense by ID**
- **List all expenses in a formatted table**
- **View total expenses summary**
- **View monthly expenses summary**
- **Optional:** Filter by category, set monthly budget warnings

---

## 4. Tech Stack

- **Runtime:** Node.js
- **Data Storage:** JSON file
- **CLI Parsing:** Commander.js
- **Other Tools:** chalk (colors), npm scripts, VS Code

---

## 5. Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Muhamed-Shillua/nodejs-backend-engineering-journey.git
cd nodejs-backend-engineering-journey/beginner/expense-tracker

# Install dependencies
npm install

# Link the CLI globally (makes 'expense-tracker' command available anywhere)
npm link

# Run the CLI
expense-tracker --help
```

---

## 6. Usage Examples

**CLI Commands:**

```bash
# Add a new expense
expense-tracker add --description "Lunch" --amount 20 --category food

# Update an existing expense
expense-tracker update --id 1 --amount 25

# Delete an expense
expense-tracker delete --id 2

# List all expenses
expense-tracker list

# Generate total expense report
expense-tracker report

# Generate report for a specific month
expense-tracker report --month 4
```

---

## 7. Architecture Overview

- **src/cli/index.js** – CLI entry point and command routing
- **src/commands/** – Maps CLI commands to service functions
- **src/services/ExpenseService.js** – Core business logic for expenses
- **src/models/Expense.js** – Domain entity with validation
- **src/repository/ExpenseRepository.js** – Handles reading/writing JSON storage
- **src/utils/formatters.js** – Formatting helpers (currency, date)
- **data/expenses.json** – Persistent storage
- **tests/** – Unit and integration tests covering all functionality

---

## 8. Testing

**Run tests:**

```bash
npm test
```

- Unit tests cover each service function
- Integration tests ensure CLI commands perform correctly

---

## 9. Project Reference

- Roadmap / Learning Resource: [https://roadmap.sh/projects/expense-tracker](https://roadmap.sh/projects/expense-tracker)
