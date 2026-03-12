import fs from "fs";
import path from "path";

/**
 * Default tasks file path.
 * This path is used when no custom path is provided.
 */
const DEFAULT_PATH = path.join(process.cwd(), "data", "tasks.json");


/**
 * Ensure that the tasks file and its directory exist.
 * If they don't exist, they will be created automatically.
 *
 * @param {string} filePath - Path to tasks JSON file
 */
export function ensureFile(filePath = DEFAULT_PATH) {

    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }
}


/**
 * Read tasks from JSON file.
 *
 * @param {string} filePath - Path to tasks JSON file
 * @returns {Array} list of tasks
 */
export function readTasks(filePath = DEFAULT_PATH) {

    ensureFile(filePath);

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
}


/**
 * Write tasks to JSON file.
 *
 * @param {Array} tasks - list of tasks
 * @param {string} filePath - Path to tasks JSON file
 */
export function writeTasks(tasks, filePath = DEFAULT_PATH) {

    ensureFile(filePath);

    /**
     * Sort tasks by id to maintain consistent order
     */
    tasks.sort((a, b) => a.id - b.id);

    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}