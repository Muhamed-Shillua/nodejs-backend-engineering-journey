/**
 * @fileoverview Data Access Layer (Repository)
 * Handles physical I/O operations and JSON serialization.
 * Implements a Singleton-like pattern for consistent file access.
 */

import fs from "fs";
import path from 'path';
import { STORAGE_PATH } from "../constants/paths.js";


export class ExpenseRepository {
  constructor() {
    this.#_ensureFileExists();
  }

  /**
   * Private-like helper to ensure the /data folder exists.
   */
  #_ensureFileExists(filePath = STORAGE_PATH) {
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify([]), "utf-8");
    }
  }

  /**
   * Loads all expenses from the JSON file.
   * @returns {Array} Array of raw expense objects.
   */
  loadExpenses(filePath = STORAGE_PATH) {
    try {
      this.#_ensureFileExists(filePath);
      const rawData = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(rawData);
    } catch (error) {
      return [];
    }
  }

  /**
   * Overwrites the JSON file with a new collection.
   * @param {Array} expenses - The complete list of expenses to persist.
   */
  saveExpenses(expenses, filePath = STORAGE_PATH) {
    try {
      this.#_ensureFileExists(filePath);
      const data = JSON.stringify(expenses, null, 2);
      fs.writeFileSync(filePath, data, "utf-8");
    } catch (error) {
      throw new Error(
        `Infrastructure Error: Failed to write to database.${error.message}.`,
      );
    }
  }

  /**
   * Generates the next available ID by checking existing records.
   */
  getNextId(filePath = STORAGE_PATH) {
    const expenses = this.loadExpenses(filePath);
    if (expenses.length === 0) return 1;
    const ids = expenses.map((e) => e.id);
    return Math.max(...ids) + 1;
  }
}
