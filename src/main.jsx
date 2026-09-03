import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Menu, X, Code2, Database, Cloud, Boxes, ShieldCheck, Server,
  ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = {
  "Backend": ["Java", "Spring Boot", "Spring Security", "REST APIs", "Microservices", "JPA / Hibernate"],
  "Database": ["MySQL", "PostgreSQL", "SQL", "H2", "Query Optimization"],
  "Cloud & DevOps": ["Azure", "AWS ", "Docker", "Kubernetes", "Git", "CI/CD", "Linux"],
  "Messaging & Architecture": ["Apache Kafka", "Eureka", "API Gateway", "Feign", "JWT", "Distributed Systems"],
  "Frontend": ["React", "JavaScript", "HTML", "CSS", "Axios"],
  "Tools": ["IntelliJ IDEA", "Maven", "GitHub", "MySQL Workbench", "Postman", "Visual Studio Code",]
};

const projects = [
  {
    title: "InsureFlow",
    tag: "Microservices • Commercial Insurance",
    githubLink: "https://github.com/Prajjavaltiwari/InsureFlow_app",
    description:
      "A commercial insurance workflow platform designed around independent services for customers, commercial packages, tasks and notifications.",
    tech: ["Java", "Spring Boot", "Microservices", "Kafka", "JWT", "MySQL", "Docker"],
    icon: ShieldCheck
  },
  {
    title: "Task Management System",
    tag: "Jira-like • Full Stack",
    githubLink: "https://github.com/prajjavaltiwari/task-management-system",
    description:
      "A role-based task management system built from idea to implementation. Includes authentication, authorization, task workflows and a React frontend.",
    tech: ["Java", "Spring Boot", "React", "JWT", "MySQL", "Docker"],
    icon: Boxes
  },
  {
    title: "Authentication Management System",
    tag: "Backend • Secure REST APIs",
    githubLink: "https://github.com/Prajjavaltiwari/Jwt_authWings",
    description:
      "A secure REST-based application with JWT authentication, role-based access and persistent MySQL data.",
    tech: ["Java", "Spring Boot", "JWT", "JPA", "MySQL"],
    icon: Database
  }
];

function App() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"]
  ];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-inner">
          <button className="brand" onClick={() => go("home")}>
            <span className="brand-mark">PT</span>
            <span>Prajjaval Tiwari</span>
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
            <a className="nav-cta" href="mailto:pprajjavaltiwari@gmail.com">Let's talk</a>
          </nav>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Java • Spring Boot • Cloud</div>
            <h1>Building reliable backend systems with <em>Java & Spring Boot.</em></h1>
            <p>
              Application Maintenance Engineer and backend developer focused on
              REST APIs, microservices, security, databases and cloud deployment.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go("projects")}>
                View my work <ArrowUpRight size={18} />
              </button>
              <a id="email-button" className="secondary-btn" href="mailto:pprajjavaltiwari@gmail.com">
                <Mail size={17} /> Contact me
              </a>
            </div>

            <div className="quick-info">
              <span><MapPin size={16} /> India</span>
              <span><Code2 size={16} /> Backend Developer</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-bar"><i></i><i></i><i></i><span>developer.java</span></div>
              <pre>{`public class Prajjaval {

  String role = "Java Developer";

  String[] focus = {
    "Spring Boot",
    "Microservices",
    "Cloud",
    "System Design"
  };

  void build() {
    learn();
    create();
    deploy();
  }
}`}</pre>
            </div>
            <div className="floating-card">
              <Cloud size={20} />
              <div><strong>Building for cloud</strong><small>Docker • CI/CD • Azure</small></div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <div className="section-label">01 — About me</div>
              <h2>Developer who likes understanding how things work.</h2>
            </div>
            <div className="about-text">
              <p>
                I am a B.Tech Electronics & Communication Engineering graduate working at 
                Tata Consultancy Services as an Application Developer and Backend Engineer.
              </p>
              <p>
                My experience includes working on enterprise applications,
                migrating legacy VB.NET functionality to Java Spring Boot,
                building REST APIs, integrating databases, optimizing Stored Procedures and supporting
                deployment pipelines.
              </p>
              <p>
                I am currently strengthening my skills in microservices,
                Docker, cloud, CI/CD, Kafka and system design with the goal of
                building production-ready systems.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <div className="section-label">02 — Experience</div>
            <div className="experience-grid">
              <div>
                <h2>Application Development <br />& Maintenance </h2>
                <p className="muted">TATA Cunsultancy Services  / BFSI domain</p>
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="dot"></span>
                  <div>
                    <h3>Backend Development Engineer</h3>
                    <p>
                      Worked on an insurance-domain application, handling
                      production issues, application changes, debugging and
                      backend development.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="dot"></span>
                  <div>
                    <h3>VB.NET → Java Spring Boot</h3>
                    <p>
                      Contributed to migration of legacy functionality into
                      modern Java and Spring Boot services with MySQL persistence.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <span className="dot"></span>
                  <div>
                    <h3>Deployment Pipeline</h3>
                    <p>
                      Worked with environment promotion flow such as LD → UT →
                      Staging → Production and supported cloud-based deployment practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-label">03 — Projects</div>
            <div className="section-heading">
              <h2>Things I have built.</h2>
              <p>From a simple idea to APIs, security, services, containers and deployment.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="project-card" key={project.title}>
                    <div className="project-top">
                      <div className="project-icon"><Icon size={23} /></div>
                      <div>
                         <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub"><ExternalLink size={16} /></a>
                      </div>
                    </div>
                    <span className="project-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">
                      {project.tech.map(t => <span key={t}>{t}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="architecture">
              <div>
                <span className="project-tag">Current direction</span>
                <h3>Idea → Development → Container → Cloud</h3>
                <p>
                  I am taking my projects beyond local development by
                  containerizing services with Docker and preparing them for
                  cloud deployment with CI/CD practices.
                </p>
              </div>
              <div className="flow">
                <span>Code</span><b>→</b><span>Docker</span><b>→</b><span>CI/CD</span><b>→</b><span>Cloud</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-label">04 — Skills</div>
            <div className="section-heading">
              <h2>My technical toolkit.</h2>
              <p>Focused on backend development, distributed systems and cloud fundamentals.</p>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([category, list]) => (
                <div className="skill-card" key={category}>
                  <div className="skill-title">
                    {category === "Backend" && <Server size={20} />}
                    {category === "Database" && <Database size={20} />}
                    {category === "Cloud & DevOps" && <Cloud size={20} />}
                    {category === "Messaging & Architecture" && <Boxes size={20} />}
                    {category === "Frontend" && <Code2 size={20} />}
                    {category === "Tools" && <ShieldCheck size={20} />}
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-pills">
                    {list.map(skill => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-box">
            <div>
              <div className="section-label">05 — Contact</div>
              <h2>Let's build something useful.</h2>
              <p>Open to Java, Spring Boot, backend and cloud-focused opportunities.</p>
            </div>
            <div className="contact-actions">
              <a id="email-button" className="primary-btn" href="mailto:pprajjavaltiwari@gmail.com"><Mail size={18} /> Email me</a>
              <div className="socials">
                <a href="https://github.com/prajjavaltiwari" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
                <a href="https://linkedin.com/in/prajjaval-tiwari/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Prajjaval Tiwari</span>
          <span>Built with React • Java mindset ☕</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
