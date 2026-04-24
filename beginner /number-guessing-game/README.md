# Number Guessing Game CLI

**Tier:** Beginner

**Type:** CLI Application

**Status:** Completed

---

## 1. Project Overview

The **Number Guessing Game CLI** is a backend-style command-line application where the system generates a random number between 1 and 100, and the user tries to guess it within a limited number of attempts based on difficulty level.

This project simulates real backend engineering principles such as:

* Clean Architecture layering
* Separation of concerns
* Domain-driven logic design
* Service-based orchestration
* Infrastructure abstraction
* File-based persistence (scores)

The goal is to practice **real backend system design using a CLI environment**.

---

## 2. Project Structure

```
NUMBER-GUESSING-GAME/
│
├── data/
│   └── scores.json              # Persistent storage for high scores
│
├── src/
│   ├── application/
│   │   └── GameService.js       # Game orchestration layer
│   │
│   ├── config/
│   │   └── difficulty.js        # Difficulty mapping configuration
│   │
│   ├── domain/
│   │   └── GameEngine.js        # Core game logic (rules engine)
│   │
│   ├── infrastructure/
│   │   ├── Randomizer.js        # Random number generator
│   │   ├── ScoreRepository.js   # File-based score storage
│   │   └── Timer.js             # Game timing utility
│   │
│   ├── presentation/
│   │   ├── CliController.js     # CLI interaction layer
│   │   ├── Messages.js          # UI messages and text constants
│   │   └── index.js             # Entry point for CLI
│
├── .gitignore
├── package.json
└── README.md
```

---

## 3. Features

### Core Features

* Random number generation (1–100)
* Difficulty levels:

  * Easy (10 attempts)
  * Medium (5 attempts)
  * Hard (3 attempts)
* Higher / Lower hints
* Win / Lose detection
* Attempt tracking system

---

### Extended Features (Implemented / Available)

* Multiple rounds support
* Timer tracking per game session
* High score system (stored in `data/scores.json`)
* Score persistence via repository layer

---

## 4. Architecture Overview

This project follows a **Clean Architecture-inspired layered design**.

### 1. Domain Layer (`domain/`)

* `GameEngine.js`
* Contains pure business logic
* No I/O or external dependencies
* Responsible for:

  * Game rules
  * Win/loss conditions
  * Attempt handling

---

### 2. Application Layer (`application/`)

* `GameService.js`
* Orchestrates game flow
* Connects domain + infrastructure
* Handles use-cases like:

  * Starting game
  * Managing difficulty
  * Game lifecycle

---

### 3. Infrastructure Layer (`infrastructure/`)

* `Randomizer.js` → random number generation
* `Timer.js` → game duration tracking
* `ScoreRepository.js` → file-based persistence

Handles all **external systems & side effects**.

---

### 4. Presentation Layer (`presentation/`)

* `CliController.js` → CLI input/output
* `Messages.js` → UI text management
* `index.js` → application entry point

Responsible for:

* User interaction
* Displaying results
* Handling CLI flow

---

### 5. Config Layer (`config/`)

* `difficulty.js`
* Centralized difficulty configuration

---

## 5. Data Flow

```
User Input (CLI)
    ↓
CliController
    ↓
GameService
    ↓
GameEngine
    ↓
Infrastructure (Randomizer / Timer / ScoreRepo)
    ↓
Response returned
    ↓
CLI Output
```

---

## 6. Score System

High scores are stored in:

```
data/scores.json
```

Used to:

* Track best performance per difficulty
* Persist results across sessions
* Enable future leaderboard features

---

## 7. How to Run

```bash
npm install
```

```bash
node src/presentation/index.js
```

or

```bash
npm start
```

---

## 8. Gameplay Flow

```
Start Game
   ↓
Show Rules
   ↓
Select Difficulty
   ↓
Generate Random Number
   ↓
User Guess Loop
   ↓
Feedback (Higher / Lower)
   ↓
Win / Lose
   ↓
Save Score
   ↓
Play Again Option
```

---

## 9. Technical Highlights

* Modular architecture
* Separation of concerns
* File-based persistence system
* Stateless presentation layer
* Test-ready domain logic
* Scalable service-based design
