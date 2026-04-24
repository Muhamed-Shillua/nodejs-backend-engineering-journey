import GameService from "./application/GameService.js";
import CliController from "./presentation/CliController.js";

/**
 * Application Bootstrap
 * ---------------------
 * Entry point of the system.
 */

const gameService = new GameService();
const cli = new CliController(gameService);

cli.start();
