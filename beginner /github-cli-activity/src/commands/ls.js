/**
 * Lists recent GitHub events
 * --------------------------
 * @param {Array} events - GitHub events
 * @param {Array} options - CLI options, e.g., ["-a"] or ["5"]
 * @returns {Array} Selected events
 */
export function listEvents(events, options) {
    if (!Array.isArray(events) || events.length === 0) return [];

    if (options.includes("-a")) return events; // all events

    const limitOption = options.find(opt => !isNaN(Number(opt)));
    const limit = limitOption ? Math.max(Number(limitOption), 1) : 10; // default 10

    return events.slice(0, limit);
}