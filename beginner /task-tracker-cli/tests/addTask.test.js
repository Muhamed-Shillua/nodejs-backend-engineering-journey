import fs from "fs";
import { addTask } from "../src/services/addTask.js";
import { createTestFile, removeTestFile } from "./helpers/testFile.js";

describe("addTask Service", () => {

    let testFile;

    beforeEach(() => {
        testFile = createTestFile();
    });

    test("should add a new task with correct structure", () => {

        const task = addTask("Learn unit testing", testFile);

        expect(task.title).toBe("Learn unit testing");
        expect(task.status).toBe("todo");
        expect(task.createdAt).toBeDefined();
        expect(task.updatedAt).toBe("Not updated yet");

        const tasks = JSON.parse(fs.readFileSync(testFile));

        expect(tasks.length).toBe(3);

    });

    test("should throw error if title is empty", () => {

        expect(() => {
            addTask("", testFile);
        }).toThrow("Task title is required");

    });

    afterEach(() => {
        removeTestFile(testFile);
    });
});