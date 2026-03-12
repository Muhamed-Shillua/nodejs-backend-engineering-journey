/**
 * Display tasks in a table format in the terminal.
 *
 * @param {Array} tasks
 */
export function printTable(tasks) {

    if (!tasks.length) {
        console.log("No tasks found.");
        return;
    }

    console.table(tasks.map(task => ({
        ID: task.id,
        Title: task.title,
        Status: task.status,
        Created: task.createdAt,
        Updated: task.updatedAt
    })));
}