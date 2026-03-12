import { listTasks } from "../services/listTasks.js";
import { printTable } from "../utils/table.js";

/**
 * CLI Command: List tasks
 *
 * Usage:
 * task-cli list
 * task-cli list done
 * task-cli list todo
 */
export function listCommand(args) {

    const status = args[0];

    try {

        const tasks = listTasks(status);

        printTable(tasks);

    } catch (error) {

        console.error("Failed to list tasks.❌");
        console.error(error.message);

    }
}