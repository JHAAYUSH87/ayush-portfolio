
"use client";

import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  pushedAt: string | null;
  topics: string[];
};

type ApiResponse = {
  username: string;
  projects: Repository[];
  error?: string;
};

export default function GitHubProjects() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        const response = await fetch("/api/github", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Repositories could not be loaded.");
        }

        const data: ApiResponse = await response.json();

        setProjects(data.projects ?? []);
        setError("");
      } catch (err) {
        if (controller.signal.aborted) return;

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRepositories();

    return () => controller.abort();
  }, []);

  return (
    <section className="section github-section" id="github-projects">
      <div className="section-topline">
        <span className="eyebrow">05 / MORE FROM GITHUB</span>
        <a
          className="text-link"
          href="https://github.com/JHAAYUSH87"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub profile ↗
        </a>
      </div>

      <div className="github-heading">
        <h2>
          More things.
          <br />
          <span className="accent">Still building.</span>
        </h2>

        <p>
          Other public repositories, experiments and projects
          discovered directly from GitHub.
        </p>
      </div>

      {loading && (
        <div className="repository-state" role="status">
          Loading public repositories…
        </div>
      )}

      {!loading && error && (
        <div className="repository-state" role="status">
          <p>{error}</p>
          <a
            className="text-link"
            href="https://github.com/JHAAYUSH87"
            target="_blank"
            rel="noreferrer"
          >
            Browse repositories on GitHub ↗
          </a>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="repository-state">
          No additional public repositories found yet.
        </div>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="repository-grid">
          {projects.map((project, index) => (
            <article className="repository-card" key={project.id}>
              <div className="repository-meta">
                <span>
                  REPO / {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  {project.language ?? "EXPERIMENT"}
                </span>
              </div>

              <div className="repository-icon" aria-hidden="true">
                {project.name.slice(0, 2).toUpperCase()}
              </div>

              <h3>{project.name.replaceAll("-", " ")}</h3>

              <p className="repository-description">
                {project.description ||
                  "An experiment or project from my development journey."}
              </p>

              {project.topics.length > 0 && (
                <div className="repository-topics">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              )}

              <div className="repository-stats">
                <span>★ {project.stars}</span>
                <span>⑂ {project.forks}</span>
                <span>
                  Updated{" "}
                  {new Date(project.updatedAt).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      timeZone: "UTC",
                    }
                  )}
                </span>
              </div>

              <a
                className="repository-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} repository on GitHub`}
              >
                View repository <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
