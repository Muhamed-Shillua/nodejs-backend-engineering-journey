# GitHub Activity CLI

**Tier:** Beginner
**Type:** CLI
**Status:** In-Progress

---

## 1. Executive Overview

**GitHub Activity CLI** is a Node.js command-line tool that fetches a GitHub user's recent public activity and converts it into a human-readable format.

The tool uses the **GitHub public API** to retrieve user events and provides:

* Listing of recent events
* Filtering by event type
* Streak summaries with counts of commits, issues, pull requests, stars, and branches/repos created

This project demonstrates core **Node.js backend engineering concepts**, including:

* Modular project architecture
* CLI argument parsing
* API communication using Node.js built-in modules
* Data formatting and aggregation
* Structured error handling
* Separation of concerns

The goal is to provide a **clean, scalable foundation for building CLI tools that interact with APIs**.

---

## 2. Project Structure

```
github-activity-cli/
│
├── bin/
│   └── github-cli.js           # CLI entry point (executable script)
│
├── src/
│   ├── cli/
│   │   ├── parser.js           # CLI argument parser
│   │   └── cliHandler.js       # Handles commands and input validation
│   │
│   ├── commands/
│   │   ├── ls.js               # Lists recent events
│   │   ├── filter.js           # Filters events by type
│   │   └── streak.js           # Generates streak summary messages
│   │
│   ├── services/
│   │   └── activityService.js  # Core logic for fetching and processing GitHub events
│   │
│   ├── utils/
│   │   ├── formatter.js        # Formats output for terminal
│   │   ├── logger.js           # Console logging utility
│   │   └── errorHandler.js     # Centralized error handling
│   │
│   └── config/
│       └── constants.js        # Project constants (API URLs, etc.)
│
├── tests/
│   ├── commands/
│   ├── services/
│   └── utils/
│
├── package.json
├── .gitignore
└── README.md
```

---

## 3. Features

* **Fetch recent GitHub user activity**
* **Filter events by type** (`PushEvent`, `IssuesEvent`, `PullRequestEvent`, `WatchEvent`, `CreateEvent`)
* **Generate streak summaries** with commit counts, issues, PRs, stars, and creations
* **CLI argument parsing and validation**
* **Graceful error handling**
* **Modular architecture for scalability**

---

## 4. Tech Stack

* **Runtime:** Node.js
* **API:** GitHub REST API
* **Networking:** Native Node.js `https` module
* **CLI Execution:** Node.js command-line environment
* **Testing:** Jest (optional)

---

## 5. Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Muhamed-Shillua/github-activity-cli.git

# Navigate to project
cd github-activity-cli

# Install dependencies (optional if adding tests or scripts)
npm install

# Make CLI executable
chmod +x bin/github-cli.js

# Run the CLI
./bin/github-cli.js <command> <github-username>
```

---

## 6. Usage Examples

**List recent events:**

```bash
./bin/github-cli.js ls Muhamed-Shillua
```

Example Output:

```
PushEvent at Muhamed-Shillua/nodejs-backend-engineering-journey on 3/30/2026, 2:23 PM
CreateEvent at Muhamed-Shillua/portfolio on 3/25/2026, 4:45 PM
```

**Filter events by type:**

```bash
./bin/github-cli.js filter PushEvent Muhamed-Shillua
```

Example Output:

```
PushEvent at Muhamed-Shillua/nodejs-backend-engineering-journey on 3/30/2026, 2:23 PM
PushEvent at Muhamed-Shillua/portfolio on 3/25/2026, 5:32 PM
```

**Generate streak summary:**

```bash
./bin/github-cli.js streak Muhamed-Shillua
```

Example Output:

```
- Pushed 14 commits to Muhamed-Shillua/nodejs-backend-engineering-journey
- Pushed 4 commits to Muhamed-Shillua/portfolio
- Created 1 new branch(es) or repo(s) in Muhamed-Shillua/portfolio
- Pushed 11 commits to Muhamed-Shillua/nodejs-backend-bootcamp
```

---

## 7. Architecture Overview

The project uses a **layered architecture**:

**bin/github-cli.js**

* CLI entry point
* Reads command-line arguments
* Passes control to CLI handler

**src/cli/cliHandler.js**

* Parses and validates CLI input
* Calls relevant command modules

**src/commands/**

* `ls.js` → lists recent events
* `filter.js` → filters events by type
* `streak.js` → computes streak summaries using the `streak` function

**src/services/activityService.js**

* Fetches GitHub events
* Processes and aggregates data for commands

**src/utils/**

* `formatter.js` → formats data for terminal display
* `logger.js` → console output utility
* `errorHandler.js` → centralized error handling

**src/config/constants.js**

* Stores reusable constants (e.g., GitHub API URL)

---

## 8. Testing

Run tests using:

```bash
npm test
```

Testing strategy:

* Unit tests for command modules
* Service logic tests for data processing
* Formatter tests for correct terminal output

---

## 9. Learning Outcomes

Developers gain experience with:

* Building CLI applications in Node.js
* Consuming external APIs
* Structuring modular backend projects
* Implementing structured error handling
* Aggregating and formatting data for readable output