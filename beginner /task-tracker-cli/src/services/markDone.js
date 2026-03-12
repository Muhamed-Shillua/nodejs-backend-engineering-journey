import { readTasks, writeTasks } from "../utils/file.js";

/**
 * Mark a task as done.
 *
 * @param {number} id
 * @param {string} filePath
 * @returns {object}
 */
export function markDone(id, filePath) {

    const tasks = readTasks(filePath);

    const task = tasks.find(t => t.id === Number(id));

    if (!task) {
        throw new Error("Task not found.");
    }

    task.status = "done";
    task.updatedAt = new Date().toISOString();

    writeTasks(tasks, filePath);

    return task;
}