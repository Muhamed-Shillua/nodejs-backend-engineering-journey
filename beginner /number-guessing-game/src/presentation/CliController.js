import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import Messages from "./Messages.js";
import Timer from "../infrastructure/Timer.js";

/**
 * CliController
 * ------------
 * Handles CLI interaction and orchestrates game flow.
 */
export default class CliController {
  constructor(gameService) {
    this.gameService = gameService;

    this.rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });
  }

  async start() {
    Messages.welcome();

    let playAgain = true;

    while (playAgain) {
      await this.runGame();
      playAgain = await this.askReplay();
    }

    this.rl.close();
    console.log("Goodbye!");
  }

  /**
   * Runs a single game session
   */
  async runGame() {
    const difficulty = await this.askDifficulty();
    const game = this.gameService.createGame(difficulty);

    // Timer starts WITH the game session
    const timer = new Timer();
    timer.start();

    while (true) {
      const guess = await this.askGuess();
      const result = game.guess(guess);

      if (result.status === "error") {
        Messages.error(result.message);
        continue;
      }

      if (result.status === "win") {
        const duration = timer.stop();

        Messages.win(result.attemptsUsed);
        console.log(`⏱ Time: ${timer.getFormattedTime()}`);

        // Save score with time
        this.gameService.saveScore({
          difficulty,
          attemptsUsed: result.attemptsUsed,
          timeTaken: duration,
        });

        this.showBestScore(difficulty);
        break;
      }

      if (result.status === "lose") {
        timer.stop();

        Messages.lose(result.secret);
        this.showBestScore(difficulty);
        break;
      }

      Messages.hint(result.hint, result.attemptsLeft);
    }
  }

  async askDifficulty() {
    const menu = `Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
Enter choice (1-3): `;

    while (true) {
      const input = (await this.rl.question(menu)).trim();

      const map = {
        "1": "easy",
        "2": "medium",
        "3": "hard",
      };

      if (map[input]) {
        console.log(`\nYou selected: ${map[input].toUpperCase()}\n`);
        return map[input];
      }

      console.log("Invalid choice. Please enter 1, 2, or 3.\n");
    }
  }

  async askGuess() {
    const input = await this.rl.question("Enter your guess: ");
    return input.trim();
  }

  async askReplay() {
    const input = await this.rl.question(
      "\nDo you want to play again? (y/n): "
    );

    return input.trim().toLowerCase() === "y";
  }

  /**
   * Display best score
   */
  showBestScore(difficulty) {
    const best = this.gameService.getBestScore(difficulty);

    if (!best) return;

    console.log(
      `🏆 Best Score (${difficulty}): ${best.attemptsUsed} attempts in ${
        (best.timeTaken / 1000).toFixed(2)
      }s`
    );
  }
}
