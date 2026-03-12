/**
 * CLI Argument Parser
 *
 * This module reads command line arguments and determines
 * which command should be executed.
 */

import { addCommand } from "../commands/add.js";
import { updateCommand } from "../commands/update.js";
import { deleteCommand } from "../commands/delete.js";
import { markDoneCommand } from "../commands/markDone.js";
import { markInProgressCommand } from "../commands/markInProgress.js";
import { listCommand } from "../commands/list.js";

export function parseCommand(argv) {

    const [, , command, ...args] = argv;

    switch (command) {

        case "add":
            addCommand(args);
            break;

        case "update":
            updateCommand(args);
            break;

        case "delete":
            deleteCommand(args);
            break;

        case "mark-done":
            markDoneCommand(args);
            break;

        case "mark-in-progress":
            markInProgressCommand(args);
            break;

        case "list":
            listCommand(args);
            break;

        default:
            console.log("Unknown command.");
    }
}