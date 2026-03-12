import { readTasks, writeTasks } from "../utils/file.js";

/**
 * Mark task as in-progress.
 *
 * @param {number} id
 * @param {string} filePath
 * @returns {object}
 */
export function markInProgress(id, filePath) {

    const tasks = readTasks(filePath);

    const task = tasks.find(t => t.id === Number(id));

    if (!task) {
        throw new Error("Task not found.");
    }

    task.status = "in-progress";
    task.updatedAt = new Date().toISOString();

    writeTasks(tasks, filePath);

    return task;
}