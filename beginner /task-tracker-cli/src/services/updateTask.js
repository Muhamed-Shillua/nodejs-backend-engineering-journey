import { readTasks, writeTasks } from "../utils/file.js";

/**
 * Update task title.
 *
 * @param {number} id - task id
 * @param {string} newTitle - new title
 * @param {string} filePath - optional testing path
 * @returns {object} updated task
 */
export function updateTask(id, newTitle, filePath) {

    const tasks = readTasks(filePath);

    const task = tasks.find(t => t.id === Number(id));

    if (!task) {
        throw new Error("Task not found.");
    }

    task.title = newTitle;
    task.updatedAt = new Date().toISOString();

    writeTasks(tasks, filePath);

    return task;
}