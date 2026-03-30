import { fetchUserActivity } from "../services/activityService.js";
import { listEvents } from "../commands/ls.js";
import { streak } from "../commands/streak.js";
import { filterEvents } from "../commands/filter.js";

import { formatEvents, formatStreak } from "../utils/formatter.js";
import { handleError } from "../utils/errorHandler.js";
import { logger } from "../utils/logger.js";

/**
 * CLI Handler
 * -----------
 * Handles commands, options, and orchestrates data fetching, formatting, and output.
 * 
 * Supported Commands: ls, streak, filter
 * Supported Flags: -h/--help, -a, --json, --limit <n>
 * 
 * @param {Array<string>} args - CLI arguments
 */
export async function handleCLI(args) {
    try {
        if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
            printHelp();
            return;
        }

        const command = args[0];
        const options = args.slice(1, -1);
        const username = args[args.length - 1];

        if (!username) {
            throw new Error("GitHub username is required.");
        }

        logger.info(`Fetching activity for "${username}"...`);

        const events = await fetchUserActivity(username);

        if (!events || events.length === 0) {
            console.log("No recent activity found.");
            return;
        }

        switch (command) {
            case "ls": {
                const selected = listEvents(events, options);
                console.log(formatEvents(selected));
                break;
            }
            case "streak": {
                const streaked = streak(events);
                console.log(formatStreak(streaked));
                break;
            }
            case "filter": {
                const filtered = filterEvents(events, options);
                console.log(formatEvents(filtered));
                break;
            }
            default:
                throw new Error(`Unknown command: ${command}`);
        }

    } catch (error) {
        handleError(error);
    }
}

/**
 * Prints CLI help message
 */
function printHelp() {
    console.log(`
GitHub Activity CLI

Usage:
  github-cli <command> [options] <username>

Commands:
  ls [n|-a]        List recent activity events
  streak           Show contribution streak
  filter <type>    Filter activity by event type

Options:
  -h, --help       Show this help message
`);
}