/**
 * @file server.js
 * @description Entry point for the HTTP server.
 */

import http from "http";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: '../.env' });

const server = http.createServer(app);

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`=========================================`);
});
