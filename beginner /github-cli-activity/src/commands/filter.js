/**
 * Filters GitHub events by type
 * ------------------------------
 * @param {Array} events
 * @param {Array} options - first element = type
 * @returns {Array} Filtered events
 */
export function filterEvents(events, options) {
    if (!Array.isArray(events)) return [];

    const type = options[0];
    if (!type) throw new Error("Event type is required for filtering.");

    return events.filter(event => event.type === type);
}