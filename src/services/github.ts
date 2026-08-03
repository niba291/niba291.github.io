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
        if (!res.ok) return emptyResponse();

        const data = (await res.json()) as { total: number; contributions: GitHubContribution[] };
        const contributions = Array.isArray(data.contributions) ? data.contributions : [];
        const total = contributions.reduce((sum, c) => sum + c.count, 0);

        return {
            total,
            days: contributions.length,
            contributions,
        };
    } catch {
        return emptyResponse();
    }
}

function emptyResponse(): ContributionsResponse {
    return {
        total: 0,
        days: 0,
        contributions: [],
    };
}