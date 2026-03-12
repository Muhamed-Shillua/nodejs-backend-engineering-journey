import { markDone } from "../src/services/markDone.js";
import { createTestFile, removeTestFile } from "./helpers/testFile.js";

describe("markDone Service", () => {

    let testFile;

    beforeEach(() => {
        testFile = createTestFile();
    });

    test("should mark task as done", () => {

        const task = markDone(1, testFile);

        expect(task.status).toBe("done");
        expect(task.updatedAt).not.toBe("Not updated yet");

    });

    afterEach(() => {
        removeTestFile(testFile);
    });
});