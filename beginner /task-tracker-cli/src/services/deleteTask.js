import { readTasks, writeTasks } from "../utils/file.js";

/**
 * Delete a task by ID.
 *
 * @param {number} id
 * @param {string} filePath
 * @returns {boolean}
 */
export function deleteTask(id, filePath) {

    const tasks = readTasks(filePath);

    const index = tasks.findIndex(t => t.id === Number(id));

    if (index === -1) {
        throw new Error("Task not found.");
    }

    tasks.splice(index, 1);

    writeTasks(tasks, filePath);

    return true;
}