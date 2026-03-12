import { markDone } from "../services/markDone.js";

/**
 * CLI Command: Mark task as done
 *
 * Usage:
 * task-cli mark-done 3
 */
export function markDoneCommand(args) {

    const id = args[0];

    try {

        const task = markDone(id);

        console.log("Task marked as done.✔");
        console.log(`ID: ${task.id}`);

    } catch (error) {

        console.error("Failed to update task.❌");
        console.error(error.message);

    }
}