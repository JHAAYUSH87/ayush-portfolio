
import { NextResponse } from "next/server";



const GITHUB_USERNAME = "JHAAYUSH87";

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "GitHub repositories are temporarily unavailable." },
        { status: response.status === 404 ? 404 : 502 }
      );
    }

    const repositories = await response.json();

    const projects = repositories
      .filter(
        (repo: {
          fork: boolean;
          archived: boolean;
          name: string;
        }) => !repo.fork && !repo.archived
      )
      .sort(
        (
          a: { pushed_at: string | null },
          b: { pushed_at: string | null }
        ) =>
          new Date(b.pushed_at ?? 0).getTime() -
          new Date(a.pushed_at ?? 0).getTime()
      )
      .map(
        (repo: {
          id: number;
          name: string;
          full_name: string;
          description: string | null;
          html_url: string;
          homepage: string | null;
          language: string | null;
          stargazers_count: number;
          forks_count: number;
          updated_at: string;
          pushed_at: string | null;
          topics: string[];
        }) => ({
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          description: repo.description,
          url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at,
          pushedAt: repo.pushed_at,
          topics: repo.topics ?? [],
        })
      );

    return NextResponse.json(
      { username: GITHUB_USERNAME, projects },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to connect to GitHub right now." },
      { status: 502 }
    );
  }
}
