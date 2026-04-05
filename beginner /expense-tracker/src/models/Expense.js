/**
 * @fileoverview Expense Entity Model
 * Defines the schema and validation logic for financial transactions.
 * Uses a Factory Pattern to ensure every Expense object is valid upon creation.
 */

export class Expense {
  /**
   * @param {Object} data - Raw expense data
   * @param {number} data.id - Unique identifier
   * @param {string} data.description - Purpose of the expense
   * @param {number} data.amount - Monetary value
   * @param {string} [data.category] - Optional classification (e.g., Food, Tech)
   */
  constructor({ id, description, amount, category = "General" }) {
    this.id = this.validateId(id);
    this.description = this.validateDescription(description);
    this.amount = this.validateAmount(amount);
    this.category = category.toLowerCase().trim();
    this.createdAt = new Date().toISOString();
    this.updatedAt = "no updates yet";
  }

  /**
   * Ensures the ID is a positive integer
   */
  validateId(id) {
    if (typeof id !== "number" || id <= 0) {
      throw new Error("Domain Error: ID must be a positive number.");
    }
    return id;
  }

  /**
   * Ensures the description is not empty and is properly formatted.
   */
  validateDescription(desc) {
    const cleanDesc = desc?.trim();
    if (!cleanDesc || cleanDesc.length < 3) {
      throw new Error(
        "Domain Error: Description must be at least 3 characters long.",
      );
    }
    return cleanDesc;
  }

  /**
   * Enforces financial integrity (no negative spending).
   */
  validateAmount(amt) {
    const parsedAmt = Number(amt);
    if (isNaN(parsedAmt) || parsedAmt <= 0) {
      throw new Error("Domain Error: Amount must be a positive numeric value.");
    }
    return parsedAmt;
  }

  /**
   * Converts the entity to a plain JavaScript object for JSON persistence.
   */
  toJSON() {
    return {
      id: this.id,
      description: this.description,
      amount: this.amount,
      category: this.category,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
