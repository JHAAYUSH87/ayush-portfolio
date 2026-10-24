
"use client";

import { useEffect, useState } from "react";
import GitHubProjects from "./components/GitHubProjects";

const projects = [
  {
    number: "01",
    category: "APPLIED AI",
    title: "AI Resume Analyzer",
    description:
      "Understand your resume, compare job requirements, and discover the skills you need to improve.",
    stack: ["Python", "Streamlit", "scikit-learn", "Gemini API"],
    symbol: "CV",
    tone: "lime",
  },
  {
    number: "02",
    category: "BACKEND ENGINEERING",
    title: "Expense Tracker",
    description:
      "A full-stack expense management application with authentication, budgets, analytics, and persistent storage.",
    stack: ["FastAPI", "Python", "SQLite", "JWT", "Flet"],
    symbol: "₹",
    tone: "blue",
  },
  {
    number: "03",
    category: "GENERATIVE AI · RAG",
    title: "PDF Buddy",
    description:
      "Explore documents through conversational AI, retrieval-augmented generation, and semantic search.",
    stack: ["Python", "LangChain", "FAISS", "Streamlit"],
    symbol: "Aa",
    tone: "violet",
  },
  {
    number: "04",
    category: "PYTHON DEVELOPMENT",
    title: "Python Calculator",
    description:
      "A lightweight desktop calculator built with Python and Tkinter, focused on simple interaction.",
    stack: ["Python", "Tkinter", "GUI"],
    symbol: "±",
    tone: "lime",
  },
];

const skills = [
  ["01", "Python", "LANGUAGE"],
  ["02", "FastAPI", "BACKEND"],
  ["03", "REST APIs", "BACKEND"],
  ["04", "SQL / SQLite", "DATABASE"],
  ["05", "Streamlit", "AI APPLICATIONS"],
  ["06", "scikit-learn", "MACHINE LEARNING"],
  ["07", "Git & GitHub", "DEVELOPER TOOLS"],
  ["08", "TypeScript", "LEARNING"],
];

type SkillDetail = {
  description: string;
  usage: string;
  project: string;
  level: string;
};

const skillDetails: Record<string, SkillDetail> = {
  Python: {
    description:
      "A versatile programming language used to build applications, automate tasks, and work with data.",
    usage:
      "Writing application logic, handling data, and developing Python-based tools.",
    project:
      "AI Resume Analyzer, Expense Tracker, Python Calculator",
    level: "PRACTICAL PROJECT EXPERIENCE",
  },
  FastAPI: {
    description:
      "A Python framework for building modern APIs with automatic interactive documentation.",
    usage:
      "Creating backend endpoints, validating requests, and connecting application logic to a database.",
    project: "Expense Tracker Full Stack",
    level: "PRACTICAL PROJECT EXPERIENCE",
  },
  "REST APIs": {
    description:
      "A common way for applications to communicate through HTTP requests and responses.",
    usage:
      "Building endpoints for creating, reading, updating, and deleting application data.",
    project: "Expense Tracker Full Stack",
    level: "PRACTICAL PROJECT EXPERIENCE",
  },
  "SQL / SQLite": {
    description:
      "SQL manages relational data, while SQLite provides a lightweight database stored in a file.",
    usage:
      "Storing expenses, querying records, and managing persistent application data.",
    project: "Expense Tracker Full Stack",
    level: "PRACTICAL PROJECT EXPERIENCE",
  },
  Streamlit: {
    description:
      "A Python framework for creating interactive data and AI web applications.",
    usage:
      "Building an interface for uploading resumes and exploring job-match results.",
    project: "AI Resume Analyzer",
    level: "PROJECT DEVELOPMENT",
  },
  "scikit-learn": {
    description:
      "A Python machine-learning library that includes tools for feature extraction and similarity calculations.",
    usage:
      "Using TF-IDF and cosine similarity to compare resume content with job requirements.",
    project: "AI Resume Analyzer",
    level: "PROJECT DEVELOPMENT",
  },
  "Git & GitHub": {
    description:
      "Tools for tracking code changes, managing repositories, and sharing software projects.",
    usage:
      "Tracking changes, maintaining repositories, and sharing code.",
    project: "Portfolio, Expense Tracker, AI Resume Analyzer",
    level: "DEVELOPMENT WORKFLOW",
  },
  TypeScript: {
    description:
      "A JavaScript-based language that adds static type checking to help catch errors during development.",
    usage:
      "Learning type-safe component development and working with typed application data.",
    project: "Personal Developer Portfolio",
    level: "CURRENTLY LEARNING",
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↓"}</span>;
}

function OrbitalVisual() {
  return (
    <div className="orbit-scene" aria-label="Abstract orbital illustration">
      <div className="orbit-label orbit-label-top">BUILD / 001</div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbit orbit-four" />
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
      <span className="orbit-dot dot-three" />
      <div className="orbit-core">
        <div className="core-card">
          <span>✳</span>
        </div>
      </div>
      <div className="orbit-label orbit-label-bottom">
        THINK · MAKE · REPEAT
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const activeSkill = selectedSkill
    ? skillDetails[selectedSkill]
    : undefined;

  useEffect(() => {
    if (!selectedSkill) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedSkill(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedSkill]);

  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#home" aria-label="Ayush Jha home">
          ayush.jha <span>✳</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow availability">
            <span className="status-dot" />
            BCA STUDENT · BENGALURU, INDIA
          </div>

          <p className="eyebrow hero-kicker">
            INDEPENDENTLY CURIOUS. PURPOSEFULLY BUILDING.
          </p>

          <h1>
            Turning
            <br />
            ideas into
            <br />
            <span>useful things.</span>
          </h1>

          <p className="hero-description">
            Hey, I&apos;m Ayush — a developer exploring Python, backend
            engineering, and AI-powered applications. I build to learn, solve
            real problems, and get a little better with every project.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Arrow />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/JHAAYUSH87"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
          </div>

          <div className="hero-tags">
            <span>PYTHON</span>
            <i />
            <span>BACKEND</span>
            <i />
            <span>APPLIED AI</span>
          </div>
        </div>

        <div className="hero-art">
          <OrbitalVisual />
        </div>

        <div className="hero-footer">
          <span>PORTFOLIO / 2026</span>
          <a href="#work">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="work-section shell section" id="work">
        <div className="section-ribbon">
          <span>
            LESS TALK. <b>MORE BUILD.</b>
          </span>
          <p>A collection of things I&apos;ve made and things I&apos;m learning.</p>
          <span className="ribbon-star">✳</span>
        </div>

        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Small steps.
              <br />
              <span>Real projects.</span>
            </h2>
          </div>
          <p className="section-note">
            Every build teaches me something new. Here&apos;s what I&apos;ve
            been working on.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-meta">
                <span>{project.number} / 04</span>
                <span>{project.category}</span>
              </div>

              <div className={`project-art tone-${project.tone}`}>
                <div className="art-grid" />
                <div className="art-symbol">{project.symbol}</div>
                <span className="art-caption">SELECTED BUILD</span>
                <span className="art-index">{project.number}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href="https://github.com/JHAAYUSH87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore on GitHub <Arrow diagonal />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a
          className="text-link"
          href="https://github.com/JHAAYUSH87"
          target="_blank"
          rel="noopener noreferrer"
        >
          MORE ON GITHUB <Arrow diagonal />
        </a>
      </section>

      <GitHubProjects />

      <section className="about-section shell section" id="about">
        <div className="about-mark">
          <span>AJ</span>
          <span>✳</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2>
            Curious by nature.
            <br />
            <span>Developer by practice.</span>
          </h2>
          <p className="about-lead">
            I&apos;m a BCA student based in Bengaluru, learning how to turn
            code into products that people can actually use.
          </p>
          <p>
            My current focus is Python development, APIs, databases, and
            AI-powered tools. I enjoy understanding how things work behind
            the scenes, experimenting with new ideas, and improving my
            engineering fundamentals one project at a time.
          </p>
          <p>
            I&apos;m looking to grow through real-world development
            opportunities, collaborative teams, and challenging problems.
          </p>
          <a className="text-link" href="#contact">
            Connect with me <Arrow diagonal />
          </a>
        </div>
      </section>

      <section className="skills-section shell section" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / MY TOOLKIT</p>
            <h2>
              Tools I use.
              <br />
              <span>Skills I&apos;m growing.</span>
            </h2>
          </div>
          <p className="section-note">
            A growing toolkit built through practice, projects, and consistent
            learning.
          </p>
        </div>

        <div className="skills-list">
          {skills.map(([number, name, category]) => (
            <button
              className="skill-row"
              key={number}
              type="button"
              onClick={() => setSelectedSkill(name)}
              aria-haspopup="dialog"
              aria-label={`View details about ${name}`}
            >
              <span className="skill-number">{number}</span>
              <span className="skill-name">{name}</span>
              <span className="skill-category">{category}</span>
              <span className="skill-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>

        <p className="skills-note">
          This toolkit is evolving. I&apos;m focused on strengthening the
          fundamentals behind every technology I use.
        </p>
      </section>

      {selectedSkill && activeSkill && (
        <div
          className="skill-modal-backdrop"
          onClick={() => setSelectedSkill(null)}
        >
          <section
            className="skill-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="skill-modal-top">
              <span className="eyebrow">TECHNOLOGY / DETAILS</span>

              <button
                className="skill-modal-close"
                type="button"
                aria-label="Close skill details"
                onClick={() => setSelectedSkill(null)}
              >
                ×
              </button>
            </div>

            <div className="skill-modal-icon">✳</div>

            <h2 id="skill-modal-title">{selectedSkill}</h2>

            <p className="skill-modal-description">
              {activeSkill.description}
            </p>

            <div className="skill-detail-item">
              <span>HOW I USE IT</span>
              <p>{activeSkill.usage}</p>
            </div>

            <div className="skill-detail-item">
              <span>RELATED PROJECTS</span>
              <p>{activeSkill.project}</p>
            </div>

            <div className="skill-modal-footer">
              <span>{activeSkill.level}</span>

              <button
                className="button button-primary"
                type="button"
                onClick={() => setSelectedSkill(null)}
              >
                Got it <Arrow diagonal />
              </button>
            </div>
          </section>
        </div>
      )}

      <section className="contact-section shell section" id="contact">
        <p className="eyebrow">04 / YOUR MOVE</p>

        <div className="contact-layout">
          <h2>
            Got a good
            <br />
            <span>problem to solve?</span>
          </h2>

          <div className="contact-copy">
            <p>
              Open to internships, learning opportunities, and conversations
              about software, backend systems, and applied AI.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/jhaayush28/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say hello on LinkedIn <Arrow diagonal />
              </a>

              <a
                className="button button-secondary"
                href="mailto:ayushjha0208@gmail.com"
              >
                Email Me <Arrow diagonal />
              </a>

              <a
                className="button button-secondary"
                href="https://github.com/JHAAYUSH87"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span>LET&apos;S MAKE SOMETHING THAT MATTERS.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="wordmark" href="#home">
          ayush.jha <span>✳</span>
        </a>
        <p>DESIGNED WITH INTENT. BUILT ONE STEP AT A TIME.</p>
        <span>© 2026 AYUSH JHA</span>
      </footer>
    </main>
  );
}
