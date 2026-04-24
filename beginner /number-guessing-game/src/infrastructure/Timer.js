/**
 * Timer (Infrastructure Layer)
 * ----------------------------
 * A utility class responsible for measuring elapsed time.
 */

export default class Timer {
  #startTime = null;
  #endTime = null;
  #isRunning = false;

  /**
   * Starts the timer
   *
   * @throws {Error} if timer is already running
   */
  start() {
    if (this.#isRunning) {
      throw new Error("Timer has already been started.");
    }

    this.#startTime = Date.now();
    this.#isRunning = true;
  }

  /**
   * Stops the timer and returns elapsed time in milliseconds
   *
   * @returns {number} elapsed time in ms
   * @throws {Error} if timer was not started
   */
  stop() {
    if (!this.#isRunning) {
      throw new Error("Timer has not been started.");
    }

    this.#endTime = Date.now();
    this.#isRunning = false;

    return this.getDuration();
  }

  /**
   * Returns elapsed time without stopping the timer
   *
   * @returns {number} elapsed time in ms
   */
  getDuration() {
    if (!this.#startTime) return 0;

    const end = this.#isRunning ? Date.now() : this.#endTime;
    return end - this.#startTime;
  }

  /**
   * Resets the timer to initial state
   */
  reset() {
    this.#startTime = null;
    this.#endTime = null;
    this.#isRunning = false;
  }

  /**
   * Returns formatted time (seconds)
   *
   * @returns {string} formatted time in seconds (e.g., "3.25s")
   */
  getFormattedTime() {
    const duration = this.getDuration();
    return `${(duration / 1000).toFixed(2)}s`;
  }
}
