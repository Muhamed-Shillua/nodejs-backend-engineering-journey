import { readTasks } from "../utils/file.js";

/**
 * Retrieve tasks from the system.
 *
 * @param {string} status - optional filter (todo | in-progress | done)
 * @param {string} filePath - optional path for testing
 * @returns {Array} list of tasks
 */
export function listTasks(status, filePath) {

    const tasks = readTasks(filePath);

    if (!status) {
        return tasks;
    }

    return tasks.filter(task => task.status === status);
}