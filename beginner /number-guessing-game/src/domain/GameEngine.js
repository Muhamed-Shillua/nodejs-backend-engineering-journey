/**
 * GameEngine
 * ----------
 * Core domain entity responsible for implementing
 * the business rules of the Number Guessing Game.
 */
export default class GameEngine{
  #secretNumber;
  #attemptsLeft;
  #initialAttempts;

  /**
   * Creates a new game instance
   *
   * @param {number} secretNumber - The target number to guess
   * @param {number} attempts - Maximum number of allowed attempts
   */
  constructor(secretNumber, attempts){
    this.#secretNumber = secretNumber;
    this.#attemptsLeft = attempts;
    this.#initialAttempts = attempts;
  }

  /**
   * Returns remaining attempts
   * @returns {number}
   */
  get attemptsLeft(){
    return this.#attemptsLeft;
  }

  /**
   * Evaluates the user's guess and returns game state result
   *
   * @param {number|string} value - User input guess
   * @returns {object} Result object containing game status and hints
   */
  guess(value){
    const guess = Number(value);

    if (isNaN(guess)){
      return {
        status: "error",
        message: "Invalid input. Please enter a valid number.",
      };
    }

    this.#attemptsLeft--;

    // WIN CONDITION
    if (guess === this.#secretNumber){
      return {
        status: "win",
        attemptsUsed: this.#initialAttempts - this.#attemptsLeft,
      };
    }

    // LOSS CONDITION
    if (this.#attemptsLeft <= 0){
      return {
        status: "lose",
        secret: this.#secretNumber,
      };
    }

    // CONTINUE GAME
    return {
      status: "continue",
      hint: guess < this.#secretNumber ? "higher" : "lower",
      attemptsLeft: this.#attemptsLeft,
    };
  }
}
