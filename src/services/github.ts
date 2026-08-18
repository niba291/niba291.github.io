export interface GitHubContribution {
    date: string;
    count: number;
    level: number;
}

export interface ContributionsResponse {
    total: number;
    days: number;
    contributions: GitHubContribution[];
}

const ENDPOINT = "https://github-contributions-api.jogruber.de/v4";

export async function getContributions(
    username: string,
    opts: { signal?: AbortSignal } = {}
): Promise<ContributionsResponse> {
    const url = `${ENDPOINT}/${username}?y=last`;

    try {
        const res = await fetch(url, { signal: opts.signal });
        if (!res.ok) {
            console.warn(`[github] ${res.status} ${res.statusText} for ${username}`);
            return emptyResponse();
        }

        const data = (await res.json()) as { contributions?: unknown };
        const contributions = sanitizeContributions(data.contributions);

        return {
            total: contributions.reduce((sum, c) => sum + c.count, 0),
            days: contributions.length,
            contributions,
        };
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") throw error;
        console.warn(`[github] failed to fetch contributions for ${username}:`, error);
        return emptyResponse();
    }
}

function sanitizeContributions(raw: unknown): GitHubContribution[] {
    if (!Array.isArray(raw)) return [];
    return raw.flatMap((entry) => {
        if (entry === null || typeof entry !== "object") return [];
        const item = entry as Record<string, unknown>;
        const count = Number(item.count);
        const level = Number(item.level);
        return {
            date: typeof item.date === "string" ? item.date : "",
            count: Number.isFinite(count) && count > 0 ? count : 0,
            level: Number.isFinite(level) ? Math.min(Math.max(level, 0), 4) : 0,
        };
    });
}

function emptyResponse(): ContributionsResponse {
    return {
        total: 0,
        days: 0,
        contributions: [],
    };
}