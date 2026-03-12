import { addTask } from "../services/addTask.js";

/**
 * CLI Command: Add a new task
 *
 * Usage:
 * task-cli add "Task title"
 */
export function addCommand(args) {

    const title = args.join(" ");

    try {

        const task = addTask(title);

        console.log("Task added successfully.✔");
        console.log(`ID: ${task.id}`);
        console.log(`Title: ${task.title}`);

    } catch (error) {

        console.error("Failed to add task.❌");
        console.error(error.message);

    }
}