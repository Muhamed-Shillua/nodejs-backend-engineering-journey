import { readTasks, writeTasks } from "../utils/file.js";
import { generateId } from "../utils/id.js";

/**
 * Add a new task to the system.
 *
 * @param {string} title - Title of the task
 * @param {string} filePath - Optional custom path for tasks file (used for testing)
 * @returns {object} the created task
 */
export function addTask(title, filePath) {

    if (!title || title.trim() === "") {
        throw new Error("Task title is required");
    }

    const tasks = readTasks(filePath);

    const newTask = {
        id: generateId(tasks),
        title: title.trim(),
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: "Not updated yet"
    };

    tasks.push(newTask);

    writeTasks(tasks, filePath);

    return newTask;
}