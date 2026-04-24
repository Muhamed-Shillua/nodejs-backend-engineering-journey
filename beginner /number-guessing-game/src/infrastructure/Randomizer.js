/**
 * Randomizer
 * ----------
 * Utility responsible for generating random numbers.
 *
 * This belongs to infrastructure because randomness
 *        is an external concern.
 */

export default class Randomizer{
  /**
   * Generates a random integer between min and max (inclusive)
   *
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  static between(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
