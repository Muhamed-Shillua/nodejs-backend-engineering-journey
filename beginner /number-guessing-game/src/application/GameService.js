import GameEngine from "../domain/GameEngine.js";
import Randomizer from "../infrastructure/Randomizer.js";
import ScoreRepository from "../infrastructure/ScoreRepository.js";
import { difficultyMap } from "../config/difficulty.js";

/**
 * GameService
 * ----------
 * Application layer responsible for:
 * - Creating game instances
 * - Injecting dependencies (secret number, attempts)
 * - Handling score persistance
 */
export default class GameService{
  constructor(){
    this.scoreRepo = new ScoreRepository();
  }

  /**
   * Creates a new game session
   *
   * @param {"easy"|"medium"|"hard"} difficulty
   * @returns {GameEngine}
   */
  createGame(difficulty){
    const attempts = difficultyMap[difficulty] || 5;
    const secret = Randomizer.between(1, 100);

    return new GameEngine(secret, attempts);
  }

  /**
   * Saves result if player wins
   * @param {object} score
   */
  saveScore({ difficulty, attemptsUsed, timeTaken }){
    this.scoreRepo.saveScore({
      difficulty,
      attemptsUsed,
      timeTaken
    });
  }

  getBestScore(difficulty){
    return this.scoreRepo.getBestScore(difficulty);
  }
}
