import { useState } from "react";
import "../../styles/recruiterview.css";
import { experiences, projects, skillCategories } from "../common/portfolioData";

export default function RecruiterView({ onClose }) {
  const [activeSection, setActiveSection] = useState("about");
  const sections = ["about", "experience", "projects", "skills"];

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(`rv-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="rv-overlay">
      <div className="rv-panel">

        <div className="rv-header">
          <span className="rv-header-title">jennifer yan · whole view</span>
          <div className="rv-nav">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => scrollTo(sec)}
                className={`rv-nav-btn${activeSection === sec ? " active" : ""}`}
              >
                {sec}
              </button>
            ))}
          </div>
          <button className="rv-close-btn" onClick={onClose}>✕ close</button>
        </div>

        <div className="rv-body">

          <section id="rv-about" className="rv-section">
            <p className="rv-label">— about</p>
            <div className="rv-about-card">
              <p className="rv-about-name">Jennifer Yan</p>
              <p className="rv-about-role">Computer Science · UC Irvine</p>
              <p className="rv-bio">
                Full stack developer passionate about tech that makes a difference.
                Most interested in AI/ML in automotive &amp; healthcare, and cybersecurity.
                Outside of tech: painting, scrapbooking, crocheting.
              </p>
              <div className="rv-row">
                <a href="mailto:jenniy16@uci.edu" className="rv-pink-link">✉ mail me ↗</a>
                <a href="https://github.com/jenniyan" target="_blank" rel="noopener noreferrer" className="rv-pink-link">github ↗</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rv-pink-link">linkedin ↗</a>
              </div>
            </div>
          </section>

          <section id="rv-experience" className="rv-section">
            <p className="rv-label">— experience</p>
            <div className="rv-stack">
              {experiences.map((exp) => (
                <div key={exp.title} className="rv-card">
                  <div className="rv-card-top">
                    <div>
                      <p className="rv-card-title">{exp.title}</p>
                      <p className="rv-card-sub">{exp.company} · {exp.date}</p>
                    </div>
                    <a href={exp.repo} target="_blank" rel="noopener noreferrer" className="rv-muted-link">repo ↗</a>
                  </div>
                  <p className="rv-card-body">{exp.description}</p>
                  <div className="rv-chips">
                    {exp.tech.map((t) => <span key={t} className="rv-chip">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="rv-projects" className="rv-section">
            <p className="rv-label">— projects</p>
            <div className="rv-grid-2">
              {projects.map((proj) => (
                <div key={proj.title} className="rv-card">
                  <p className="rv-card-title">{proj.title}</p>
                  <p className="rv-card-sub">{proj.time}</p>
                  <p className="rv-card-body">{proj.description}</p>
                  <div className="rv-chips">
                    {proj.tech.map((t) => <span key={t} className="rv-chip">{t}</span>)}
                  </div>
                  <div className="rv-link-row">
                    {proj.demo    && <a href={proj.demo}    target="_blank" rel="noopener noreferrer" className="rv-muted-link">demo ↗</a>}
                    {proj.repo    && <a href={proj.repo}    target="_blank" rel="noopener noreferrer" className="rv-muted-link">repo ↗</a>}
                    {proj.devpost && <a href={proj.devpost} target="_blank" rel="noopener noreferrer" className="rv-muted-link">devpost ↗</a>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="rv-skills" className="rv-section">
            <p className="rv-label">— skills</p>
            <div className="rv-grid-4">
              {skillCategories.map((cat) => (
                <div key={cat.label} className="rv-card">
                  <p className="rv-skill-cat-label">{cat.label}</p>
                  <div className="rv-chips">
                    {cat.items.map((item) => <span key={item} className="rv-chip">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={{ height: "2rem" }} />
        </div>
      </div>
    </div>
  );
}