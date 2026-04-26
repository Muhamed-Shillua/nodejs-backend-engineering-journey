/**
 * @file request.utils.js
 * @description Utility to parse incoming request streams into JSON.
 */

/**
 * Asynchronously parses the HTTP request body.
 * @param {import('http').IncomingMessage} req
 * @returns {Promise<Object>}
 */
export const parseRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = body ? JSON.parse(body) : {};
        resolve(parsed);
      } catch (error) {
        reject(new Error("Invalid JSON body"));
      }
    });

    req.on("error", (err) => reject(err));
  });
};
