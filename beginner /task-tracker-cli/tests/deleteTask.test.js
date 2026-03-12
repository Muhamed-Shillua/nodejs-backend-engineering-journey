import fs from "fs";
import { deleteTask } from "../src/services/deleteTask.js";
import { createTestFile, removeTestFile } from "./helpers/testFile.js";

describe("deleteTask Service", () => {

    let testFile;

    beforeEach(() => {
        testFile = createTestFile();
    });

    test("should delete task by id", () => {

        deleteTask(1, testFile);

        const tasks = JSON.parse(fs.readFileSync(testFile));

        expect(tasks.length).toBe(1);
        expect(tasks[0].id).toBe(2);

    });

    afterEach(() => {
        removeTestFile(testFile);
    });
});