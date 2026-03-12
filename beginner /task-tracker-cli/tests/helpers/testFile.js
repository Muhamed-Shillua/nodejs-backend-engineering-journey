import fs from "fs";
import path from "path";

/**
 * Create temporary JSON file for tests
 * so real data/tasks.json is not affected.
 */
export function createTestFile() {

    const filePath = path.join(process.cwd(), "tests", "tempTasks.json");

    const initialData = [
        {
            id: 1,
            title: "Learn Node.js basics",
            status: "todo",
            createdAt: "2025-01-01T10:00:00.000Z",
            updatedAt: "Not updated yet"
        },
        {
            id: 2,
            title: "Build REST API with Express",
            status: "done",
            createdAt: "2025-01-02T10:00:00.000Z",
            updatedAt: "2025-01-03T10:00:00.000Z"
        }
    ];

    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));

    return filePath;
}

/**
 * Remove temporary test file after tests.
 */
export function removeTestFile(filePath) {

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

}