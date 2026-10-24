
const projects = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Resume Analyzer",
    description:
      "A smarter way to understand your resume, match job requirements, and uncover the skills you need to grow.",
    stack: ["Python", "Streamlit", "scikit-learn", "Gemini API"],
    repo: "https://github.com/JHAAYUSH87/AI-Resume-Analyzer-Job-Matcher",
    mark: "CV",
    style: "resume",
  },
  {
    number: "02",
    category: "BACKEND ENGINEERING",
    title: "Expense Tracker",
    description:
      "A full-stack expense management application with authentication, budgets, analytics, and persistent storage.",
    stack: ["FastAPI", "Python", "SQLite", "JWT", "Flet"],
    repo: "https://github.com/JHAAYUSH87/Expense-Tracker-FullStack",
    mark: "₹",
    style: "expense",
  },
  {
    number: "03",
    category: "GENERATIVE AI · RAG",
    title: "PDF Buddy",
    description:
      "Explore documents through conversational AI using retrieval-augmented generation and semantic search.",
    stack: ["Python", "LangChain", "FAISS", "Streamlit"],
    repo: "https://github.com/JHAAYUSH87/PDF_Chatbot_RAG",
    mark: "Aa",
    style: "pdf",
  },
  {
    number: "04",
    category: "PYTHON DEVELOPMENT",
    title: "Python Calculator",
    description:
      "A lightweight desktop calculator built with Python and Tkinter, focused on simple and intuitive interaction.",
    stack: ["Python", "Tkinter", "GUI"],
    repo: "https://github.com/JHAAYUSH87/python-calculator",
    mark: "±",
    style: "calculator",
  },
];

const skills = [
  { name: "Python", type: "LANGUAGE" },
  { name: "FastAPI", type: "BACKEND" },
  { name: "REST APIs", type: "BACKEND" },
  { name: "SQL / SQLite", type: "DATABASE" },
  { name: "Streamlit", type: "AI APPS" },
  { name: "scikit-learn", type: "MACHINE LEARNING" },
  { name: "Git & GitHub", type: "TOOLS" },
  { name: "TypeScript", type: "LEARNING" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="topbar">
          <a className="wordmark" href="#home" aria-label="Ayush Jha home">
            ayush<span>.</span>jha<span className="wordmark-star">✳</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
          </nav>

          <a
            className="nav-contact"
            href="https://linkedin.com/in/jhaayush28"
            target="_blank"
            rel="noreferrer"
          >
            Let&apos;s talk <ArrowIcon />
          </a>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              BCA STUDENT · BENGALURU, INDIA
            </div>

            <p className="eyebrow hero-eyebrow">
              INDEPENDENTLY CURIOUS. PURPOSEFULLY BUILDING.
            </p>

            <h1>
              Turning
              <br />
              ideas into
              <br />
              <span className="headline-accent">useful things.</span>
            </h1>

            <p className="hero-description">
              Hey, I&apos;m Ayush — a developer exploring the intersection
              of Python, backend engineering, and AI-powered applications.
              I build to learn, solve real problems, and get a little better
              with every project.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button-secondary"
                href="https://github.com/JHAAYUSH87"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowIcon />
              </a>
            </div>

            <div className="hero-footnote">
              <span>PYTHON</span>
              <span className="footnote-divider" />
              <span>BACKEND</span>
              <span className="footnote-divider" />
              <span>APPLIED AI</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract animated lime-green 3D-inspired artwork">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-cross cross-one" />
            <div className="art-cross cross-two" />
            <div className="art-glow" />
            <div className="art-core">
              <span className="core-symbol">✳</span>
            </div>
            <span className="art-coordinate coordinate-one">12° 58&apos; N</span>
            <span className="art-coordinate coordinate-two">BUILD / 001</span>
            <span className="art-coordinate coordinate-three">THINK · MAKE · REPEAT</span>
            <span className="art-spark spark-one" />
            <span className="art-spark spark-two" />
            <span className="art-spark spark-three" />
            <span className="art-spark spark-four" />
          </div>

          <div className="hero-index">
            <span>PORTFOLIO / 2026</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="Introduction">
          <p>
            LESS TALK.
            <span> MORE BUILD.</span>
          </p>
          <p className="strip-note">
            A collection of things I&apos;ve made and things I&apos;m learning.
          </p>
          <span className="strip-symbol">✳</span>
        </section>

        <section className="work-section section-block" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Small steps.
                <br />
                <span>Real projects.</span>
              </h2>
            </div>
            <p className="section-aside">
              Every build teaches me something new. Here&apos;s what
              I&apos;ve been working on.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.style}`}
                key={project.number}
              >
                <div className="project-topline">
                  <span>{project.number} / 04</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-art">
                  <span className="project-art-grid" />
                  <span className="project-art-mark">{project.mark}</span>
                  <span className="project-art-caption">
                    SELECTED BUILD
                  </span>
                  <span className="project-art-index">
                    {project.number}
                  </span>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View repository <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <a
            className="all-work-link"
            href="https://github.com/JHAAYUSH87"
            target="_blank"
            rel="noreferrer"
          >
            MORE ON GITHUB <ArrowIcon />
          </a>
        </section>

        <section className="about-section section-block" id="about">
          <div className="about-label">
            <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
            <span className="about-stamp">AJ ✳</span>
          </div>

          <div className="about-content">
            <h2>
              Curious by nature.
              <br />
              <span>Developer by practice.</span>
            </h2>
            <p className="about-lead">
              I&apos;m a BCA student based in Bengaluru, learning how to
              turn code into products that people can actually use.
            </p>
            <p className="about-body">
              My current focus is Python development, APIs, databases, and
              AI-powered tools. I enjoy understanding how things work behind
              the scenes, experimenting with new ideas, and improving my
              engineering fundamentals one project at a time.
            </p>
            <p className="about-body">
              I&apos;m looking to grow through real-world development
              opportunities, collaborative teams, and challenging problems.
            </p>
            <a
              className="text-link"
              href="https://linkedin.com/in/jhaayush28"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="skills-section section-block" id="skills">
          <div className="section-heading skills-heading">
            <div>
              <p className="eyebrow">03 / MY TOOLKIT</p>
              <h2>
                Tools I use.
                <br />
                <span>Skills I&apos;m growing.</span>
              </h2>
            </div>
            <p className="section-aside">
              A growing toolkit built through practice, projects, and
              consistent learning.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.name}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-type">{skill.type}</span>
                <span className="skill-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
          <p className="skills-note">
            This toolkit is evolving. I&apos;m focused on strengthening the
            fundamentals behind every technology I use.
          </p>
        </section>

        <section className="contact-section section-block" id="contact">
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
              <a
                className="button-primary contact-button"
                href="https://linkedin.com/in/jhaayush28"
                target="_blank"
                rel="noreferrer"
              >
                Say hello on LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="contact-decoration" aria-hidden="true">
            LET&apos;S MAKE SOMETHING THAT MATTERS.
          </div>
        </section>

        <footer className="footer">
          <a className="wordmark footer-wordmark" href="#home">
            ayush<span>.</span>jha<span className="wordmark-star">✳</span>
          </a>
          <p>DESIGNED WITH INTENTION. BUILT WITH CODE.</p>
          <div className="footer-links">
            <a
              href="https://github.com/JHAAYUSH87"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              href="https://linkedin.com/in/jhaayush28"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            ↑
          </a>
        </footer>
      </div>
    </main>
  );
}
