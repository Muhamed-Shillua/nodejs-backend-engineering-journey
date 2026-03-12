import { listTasks } from "../src/services/listTasks.js";
import { createTestFile, removeTestFile } from "./helpers/testFile.js";

describe("listTasks Service", () => {

    let testFile;

    beforeEach(() => {
        testFile = createTestFile();
    });

    test("should return all tasks if no filter", () => {

        const tasks = listTasks(undefined, testFile);

        expect(tasks.length).toBe(2);

    });

    test("should filter tasks by status", () => {

        const doneTasks = listTasks("done", testFile);

        expect(doneTasks.length).toBe(1);
        expect(doneTasks[0].status).toBe("done");

    });

    afterEach(() => {
        removeTestFile(testFile);
    });
});