# GitHub CLI Activity

**Tier:** Beginner
**Type:** CLI
**Status:** Completed

---

## 1. Executive Overview

**GitHub CLI Activity** is a lightweight command-line tool that fetches and displays a GitHub user's recent public activity directly in the terminal.

The tool uses the **GitHub public API** to retrieve user events and formats them into a readable terminal output, allowing developers to quickly inspect recent activity without opening a browser.

This project demonstrates core **Node.js backend engineering concepts**, including:

- Modular project architecture
- CLI argument parsing
- API communication using Node.js built-in modules
- Data formatting for terminal output
- Structured error handling
- Separation of concerns

The goal of this project is to provide a **clean and scalable foundation for building API-driven CLI tools** in Node.js.

---

## 2. Project Structure

A modular project structure helps maintain readability and allows easy extension of features.

```
github-cli-activity/
│
├── bin/
│   └── github-cli             # CLI entry point (executable script)
│
├── src/
│   ├── api/                   # API communication layer
│   │   └── githubClient.js
│   │
│   ├── cli/                   # CLI parsing and command handling
│   │   └── cliHandler.js
│   │
│   ├── services/              # Business logic layer
│   │   └── activityService.js
│   │
│   ├── utils/                 # Utility modules
│   │   ├── formatter.js
│   │   ├── errorHandler.js
│   │   └── logger.js
│   │
│   └── config/                # Project configuration
│       └── constants.js
│
├── tests/                     # Unit tests
│
├── package.json
├── .gitignore
└── README.md
```

---

## 3. Features

- **Fetch recent GitHub user activity**
- **Display activity in a clean terminal format**
- **Accept GitHub username as a CLI argument**
- **Graceful error handling for invalid users or API failures**
- **Modular architecture designed for scalability**

---

## 4. Tech Stack

- **Runtime:** Node.js
- **API:** GitHub REST API
- **Networking:** Native Node.js `https` module (no external dependencies)
- **CLI Execution:** Node.js command-line environment
- **Testing:** Jest (optional for future development)

---

## 5. Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Muhamed-Shillua/github-cli-activity.git

# Navigate to the project directory
cd github-cli-activity

# Install dependencies (optional if tests or scripts are added later)
npm install

# Make CLI executable (Linux/macOS)
chmod +x bin/github-cli

# Run the CLI
./bin/github-cli <github-username>
```

---

## 6. Usage Examples

**Basic CLI Usage:**

```bash
# Fetch recent activity for a user
./bin/github-cli octocat
```

Example Output:

```
PushEvent at octocat/Hello-World on 3/24/2026, 8:12:45 PM
CreateEvent at octocat/test-repo on 3/23/2026, 5:02:10 PM
IssueCommentEvent at octocat/docs on 3/22/2026, 9:45:31 AM
```

If the username does not exist:

```
Error: User not found
```

If the user has no public activity:

```
No recent activity found.
```

---

## 7. Architecture Overview

The project follows a **layered architecture** to ensure separation of concerns.

**bin/github-cli**

- CLI entry point
- Reads command-line arguments
- Passes arguments to the CLI handler

**src/cli/cliHandler.js**

- Handles CLI input parsing
- Validates arguments
- Calls service layer functions

**src/services/activityService.js**

- Core business logic
- Coordinates API requests and data processing

**src/api/githubClient.js**

- Responsible for communicating with the GitHub API
- Handles HTTP requests and response parsing

**src/utils/formatter.js**

- Formats API response data for terminal display

**src/utils/errorHandler.js**

- Centralized error handling for consistent CLI error messages

**src/config/constants.js**

- Stores project-wide constants such as API URLs

---

## 8. Testing

Run tests using:

```bash
npm test
```

Testing strategy includes:

- **Unit tests** for API client and service logic
- **Formatter tests** to ensure correct terminal output
- **CLI tests** to validate argument parsing and command execution

---

## 9. Possible Future Enhancements

This project is intentionally designed to support future expansion.

Potential improvements include:

- **Activity filtering** by event type (Push, Issue, PR, etc.)
- **Pagination support** for viewing more events
- **Colorized terminal output**
- **JSON output mode for scripting**
- **Local caching to reduce API calls**
- **Authentication using GitHub tokens**
- **Support for additional GitHub endpoints**

---

## 10. Learning Outcomes

By building this project, developers gain hands-on experience with:

- Designing scalable CLI applications
- Consuming external APIs in Node.js
- Structuring backend projects professionally
- Writing modular and maintainable code
- Implementing proper error handling

This project serves as a **practical introduction to building API-driven CLI tools with Node.js**.