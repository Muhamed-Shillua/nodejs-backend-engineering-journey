import { updateTask } from "../services/updateTask.js";

/**
 * CLI Command: Update task title
 *
 * Usage:
 * task-cli update 3 "New title"
 */
export function updateCommand(args) {

    const id = args[0];
    const newTitle = args.slice(1).join(" ");

    try {

        const task = updateTask(id, newTitle);

        console.log("Task updated successfully.✔");
        console.log(`ID: ${task.id}`);
        console.log(`New Title: ${task.title}`);

    } catch (error) {

        console.error("Failed to update task.❌");
        console.error(error.message);

    }
}