import { markInProgress } from "../services/markInProgress.js";

/**
 * CLI Command: Mark task as in progress
 *
 * Usage:
 * task-cli mark-in-progress 3
 */
export function markInProgressCommand(args) {

    const id = args[0];

    try {

        const task = markInProgress(id);

        console.log("Task marked as in progress.");
        console.log(`ID: ${task.id}`);

    } catch (error) {

        console.error("Failed to update task.❌");
        console.error(error.message);

    }
}