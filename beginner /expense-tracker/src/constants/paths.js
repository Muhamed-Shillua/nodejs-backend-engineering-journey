/**
 * @fileoverview Application Path Constants
 * Ensures consistent file resolution across different Operating Systems.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve the root directory of the project
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Absolute path to the project root
 */
export const ROOT_DIR = path.resolve(__dirname, '../../');

/**
 * Absolute path to the local JSON database file
 */
export const FILE_PATH = path.join(ROOT_DIR, 'data', 'expenses.json');

/**
 * Directory for data persistence
 */
export const DATA_DIR = path.join(ROOT_DIR, 'data');
