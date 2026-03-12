/**
 * Generate the next task ID based on existing tasks.
 *
 * @param {Array} tasks - list of existing tasks
 * @returns {number} next ID
 */
export function generateId(tasks) {

    if (!tasks.length) {
        return 1;
    }

    const maxId = Math.max(...tasks.map(task => task.id));

    return maxId + 1;
}