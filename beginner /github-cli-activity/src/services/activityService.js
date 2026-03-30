import { GITHUB_API_BASE } from "../config/constants.js";

/**
 * Fetches GitHub user activity
 * ----------------------------
 * @param {string} username
 * @returns {Array} events
 */
export async function fetchUserActivity(username) {
    if (!username) throw new Error("GitHub username is required.");

    const response = await fetch(`${GITHUB_API_BASE}/${username}/events`);

    if (!response.ok) {
        if (response.status === 404) throw new Error("GitHub user not found.");
        throw new Error(`GitHub API error: ${response.status}`);
    }

    const events = await response.json();
    return Array.isArray(events) ? events : [];
}