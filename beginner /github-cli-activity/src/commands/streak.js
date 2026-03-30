/**
 * Streaker
 * -------
 * Converts GitHub events into human-readable streak messages
 * 
 * @param {Array} events
 * @returns {Array<string>} messages
 */
export function streak(events) {
    if (!Array.isArray(events) || events.length === 0) return ["No streak found."];

    const summary = new Map();

    events.forEach(event => {
        const repo = event.repo?.name || "Unknown Repo";

        if (!summary.has(repo)) {
            summary.set(repo, { pushes: 0, issues: 0, stars: 0, prs: 0, branches: 0 });
        }

        const actions = summary.get(repo);

        switch (event.type) {
            case "PushEvent":
                actions.pushes += event.payload?.commits?.length || 1;
                break;
            case "IssuesEvent":
                if (event.payload?.action === "opened") actions.issues += 1;
                break;
            case "WatchEvent":
                if (event.payload?.action === "started") actions.stars += 1;
                break;
            case "PullRequestEvent":
                if (event.payload?.action === "opened") actions.prs += 1;
                break;
            case "CreateEvent":
                actions.branches += 1;
                break;
        }
    });

    const messages = [];
    for (const [repo, actions] of summary.entries()) {
        if (actions.pushes) messages.push(`- Pushed ${actions.pushes} commit${actions.pushes !== 1 ? "s" : ""} to ${repo}`);
        if (actions.issues) messages.push(`- Opened ${actions.issues} issue${actions.issues !== 1 ? "s" : ""} in ${repo}`);
        if (actions.stars) messages.push(`- Starred ${repo}`);
        if (actions.prs) messages.push(`- Opened ${actions.prs} pull request${actions.prs !== 1 ? "s" : ""} in ${repo}`);
        if (actions.branches) messages.push(`- Created ${actions.branches} new branch(es) or repo(s) in ${repo}`);
    }

    return messages.length > 0 ? messages : ["No streak found."];
}