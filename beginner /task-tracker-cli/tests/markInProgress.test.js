import { markInProgress } from "../src/services/markInProgress.js";
import { createTestFile, removeTestFile } from "./helpers/testFile.js";

describe("markInProgress Service", () => {

    let testFile;

    beforeEach(() => {
        testFile = createTestFile();
    });

    test("should mark task as in-progress", () => {

        const task = markInProgress(1, testFile);

        expect(task.status).toBe("in-progress");

    });

    afterEach(() => {
        removeTestFile(testFile);
    });
});