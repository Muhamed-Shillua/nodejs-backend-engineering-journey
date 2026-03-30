/**
 * cliHandler.js
 * 
 * Handles command-line arguments for GitHub CLI Activity.
 * Validates input, calls the service layer, and formats output.
 */

import { fetchUserActivity } from "../services/activityService.js";
import { formatEvents } from "../utils/formatter.js";
import { handleError } from "../utils/errorHandler.js";

export async function handleCLI(args) {
    try {
        // Help message
        if(!args[0] || args.includes('--help') || args.includes('-h')) {
            console.log(`
Usage: github-cli <username>

Fetches recent public activity of a GitHub user and displays it in the terminal.

Options:
  -h, --help       Show this help message
`);
            return;
        }

        const username = args[0].trim();
        if(!username) throw new Error('GitHub username cannot be empty.');

        console.log(`\n=== Fetching recent activity for user: ${username} ===\n`);

        const events = await fetchUserActivity(username);

        if (!Array.isArray(events) || events.length === 0) {
            console.log('No recent activity found.');
            return;
        }

        console.log(formatEvents(events));

    } catch (error) {
        handleError(error);
    }
}