# Task Tracker CLI

**Tier:** Beginner
**Type:** CLI
**Status:** Completed

---

## 1. Executive Overview

**Task Tracker CLI** is a simple yet professional command-line tool to manage tasks.
It allows users to **add, update, delete, mark tasks as in-progress or done, and list tasks by status**.

This project demonstrates core **Node.js backend engineering principles**, including:

- Modular project structure
- CLI argument parsing
- File-based persistent storage (JSON)
- Unit testing with Jest
- Error handling and validation

The purpose of this project is to provide a **foundation for building backend CLI tools** with clean architecture and maintainable code.

---

## 2. Project Structure

A well-organized project structure ensures maintainability and scalability:

```
task-tracker-cli/
│
├── bin/
│   └── task-cli.js            # CLI entry point
│
├── src/
│   ├── cli/                   # CLI layer (argument parsing)
│   │   └── parser.js
│   │
│   ├── commands/              # CLI commands
│   │   ├── add.js
│   │   ├── update.js
│   │   ├── delete.js
│   │   ├── markDone.js
│   │   ├── markInProgress.js
│   │   └── list.js
│   │
│   ├── services/              # Business logic
│   │   ├── addTask.js
│   │   ├── updateTask.js
│   │   ├── deleteTask.js
│   │   ├── markDone.js
│   │   ├── markInProgress.js
│   │   └── listTasks.js
│   │
│   └── utils/                 # Utilities
│       ├── file.js
│       ├── id.js
│       └── table.js
│
├── data/
│   └── tasks.json             # JSON file storing tasks
│
├── tests/                     # Unit tests for all services
│
├── package.json
├── .gitignore
└── README.md
```

---

## 3. Features

- **Add a new task**
- **Update a task by ID**
- **Delete a task by ID**
- **Mark a task as in-progress or done**
- **List tasks with optional status filtering**

---

## 4. Tech Stack

- **Runtime:** Node.js
- **Data Storage:** JSON file
- **Testing:** Jest
- **Other Tools:** npm scripts, VS Code

---

## 5. Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Muhamed-Shillua/nodejs-backend-engineering-journey.git
cd nodejs-backend-engineering-journey/beginner/task-tracker-cli

# Install dependencies
npm install

# Run the CLI
npm start
```

---

## 6. Usage Examples

**CLI Commands:**

```bash
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating a task
task-cli update 1 "Buy groceries and cook dinner"

# Deleting a task
task-cli delete 1

# Marking a task as in progress
task-cli mark-in-progress 1

# Marking a task as done
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

---

## 7. Architecture Overview

- **bin/task-cli.js** – CLI entry point that parses arguments
- **src/cli/parser.js** – Handles CLI input parsing
- **src/commands/** – Maps CLI commands to service functions
- **src/services/** – Core business logic for tasks
- **src/utils/** – Utility modules (file handling, IDs, table formatting)
- **data/tasks.json** – Persistent JSON storage for tasks
- **tests/** – Unit tests covering all functionality

---

## 8. Testing

**Run tests:**

```bash
npm test
```

- Unit tests cover each service function
- Integration tests ensure CLI commands perform correctly
