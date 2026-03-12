import { updateTask } from "../src/services/updateTask.js";
import { createTestFile, removeTestFile } from "./helpers/testFile.js";

describe("updateTask Service", () => {

    let testFile;

    beforeEach(() => {
        testFile = createTestFile();
    });

    test("should update title and updatedAt", () => {

        const task = updateTask(1, "Learn Advanced Node.js", testFile);

        expect(task.title).toBe("Learn Advanced Node.js");
        expect(task.updatedAt).not.toBe("Not updated yet");

    });

    afterEach(() => {
        removeTestFile(testFile);
    });
});