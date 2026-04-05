/**
 * @fileoverview Business Logic Service
 * Orchestrates interaction between the Domain Model and the Repository.
 */

import { Expense } from "../models/Expense.js";
import { ExpenseRepository } from "../repository/ExpenseRepository.js";
import { STORAGE_PATH } from "../constants/paths.js";

export class ExpenseService {
  constructor() {
    this.repo = new ExpenseRepository();
  }

  /**
   * Register a new expense.
   * ----------------------
   * @param {string} description - What the money was spent on.
   * @param {number|string} amount - How much was spent.
   * @param {string} [category] - Optional category tag.
   * @returns {Object} The newly created and saved expense entity.
   */
  addExpense(description, amount, category) {
    const nextId = this.repo.getNextId(STORAGE_PATH);

    // Instantiate the Domain Model (which triggers validation)
    const newExpense = new Expense({
      id: nextId,
      description,
      amount,
      category,
    });

    const expenses = this.repo.loadExpenses(STORAGE_PATH);
    expenses.push(newExpense.toJSON());

    this.repo.saveExpenses(expenses, STORAGE_PATH);
    return newExpense;
  }

  /**
   * Removes a record by ID.
   */
  deleteExpense(id) {
    const expenses = this.repo.loadExpenses(STORAGE_PATH);
    const updated = expenses.filter((e) => e.id !== Number(id));

    if (expenses.length === updated.length) {
      throw new Error(`Business Error: Expense with ID ${id} not found.`);
    }

    this.repo.saveExpenses(updated, STORAGE_PATH);
    return true;
  }

  /**
   * Updates an existing expense record.
   * Implements "Partial Update" logic to merge changes.
   * @param {number} id - The ID of the record to modify.
   * @param {Object} updates - The fields to change { description, amount, category }.
   */
  updateExpense(id, updates) {
    const expenses = this.repo.loadExpenses(STORAGE_PATH);
    const index = expenses.findIndex((e) => e.id === Number(id));

    if (index === -1) {
      throw new Error(`Business Error: Expense with ID ${id} not found.`);
    }

    const original = expenses[index];

    // Create a new validated Expense instance using the merged data
    // This ensures that even updates must pass our Domain Integrity rules
    const updatedEntity = new Expense({
      id: original.id,
      description: updates.description ?? original.description,
      amount: updates.amount ?? original.amount,
      category: updates.category ?? original.category,
      createdAt: original.createdAt, // Preserve original creation date
      updatedAt: new Date().toISOString(),
    });

    // Replace the old record with the new validated version
    expenses[index] = updatedEntity.toJSON();

    this.repo.saveExpenses(expenses, STORAGE_PATH);
    return updatedEntity;
  }

  /**
   * Calculates total expenditure, optionally filtered by month.
   * @param {number} [month] - 1 for Jan, 12 for Dec.
   */
  getReport(month = null) {
    const expenses = this.repo.loadExpenses(STORAGE_PATH);

    const filtered = month
      ? expenses.filter((e) => new Date(e.createdAt).getMonth() + 1 === month)
      : expenses;

    return filtered.reduce((sum, e) => sum + e.amount, 0);
  }

  /**
   * Retrieves all records.
   */
  getAll() {
    return this.repo.loadExpenses(STORAGE_PATH);
  }
}
