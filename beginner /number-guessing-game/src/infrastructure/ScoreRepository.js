/**
 * ScoreRepository (Infrastructure Layer)
 * --------------------------------------
 * Handles persistence of high scores using the file system.
 *
 * This is an infrastructure concern because:
 * - It deals with I/O
 * - It is replaceable (can be swapped with DB later)
 */

import fs from "fs";
import path from "path";

export default class ScoreRepository {
  constructor() {
    this.filePath = path.resolve("data/scores.json");
  }

  /**
   * Reads all stored scores
   * @returns {Array}
   */
  getAllScores() {
    try {
      const data = fs.readFileSync(this.filePath, "utf-8");
      return JSON.parse(data || "[]");
    } catch {
      return [];
    }
  }

  /**
   * Saves a new score entry
   *
   * @param {object} score
   * @param {string} score.difficulty
   * @param {number} score.attemptsUsed
   * @param {number} score.timeTaken
   */
  saveScore(score) {
    const scores = this.getAllScores();

    scores.push({
      ...score,
      date: new Date().toISOString(),
    });

    fs.writeFileSync(this.filePath, JSON.stringify(scores, null, 2));
  }

  /**
   * Returns best score per difficulty
   */
  getBestScore(difficulty) {
    const scores = this.getAllScores().filter(
      (s) => s.difficulty === difficulty
    );

    if (scores.length === 0) return null;

    return scores.reduce((best, current) =>
      current.attemptsUsed < best.attemptsUsed ? current : best
    );
  }
}
