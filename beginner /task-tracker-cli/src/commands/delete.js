import { deleteTask } from "../services/deleteTask.js";

/**
 * CLI Command: Delete a task
 *
 * Usage:
 * task-cli delete 3
 */
export function deleteCommand(args) {

    const id = args[0];

    try {

        deleteTask(id);

        console.log("Task deleted successfully.🗑");

    } catch (error) {

        console.error("Failed to delete task.❌");
        console.error(error.message);

    }
}