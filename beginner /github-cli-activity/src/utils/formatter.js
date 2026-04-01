/**
 * Formatter
 * ---------
 * Formats events into human-readable text
 */
export function formatEvents(events) {
  if (!Array.isArray(events) || events.length === 0) return "No events found.";

  return events
    .map((event) => {
      const type = event.type;
      const repo = event.repo?.name || "Unknown Repo";
      const created = new Date(event.created_at).toLocaleString();
      return `${type} at ${repo} on ${created}`;
    })
    .join("\n");
}

/**
 * Formats streak messages
 */
export function formatStreak(messages) {
  if (!Array.isArray(messages) || messages.length === 0)
    return "No streak found.";
  return messages.join("\n");
}
