import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";

const projects = [
  {
    title: "Saucynator",
    description:
      "Simple, fun chatbot built with OpenAI’s GPT-3.5 that suggests recipes based on ingredients users already have. Created as an exploratory project to learn prompt design, long-term memory, and experimenting with how we can make cooking feel more approachable for beginners.",
    tech: "Python, Flask, Google Colab, OpenAI API, HTML/CSS/JS front-end",
    demo: "https://www.loom.com/share/1c8b9a0e7c5b4d9f8e1c3a2b6f4e5a6",
    repo: "https://github.com/jjen-yan/saucynator"
  },
  {
    title: "This Portfolio!",
    description: "A web app with front-end and back-end features.",
    tech: "React, HTML/CSS",
    demo: "right here! :)",
    repo: ""
  },
];

export default function ProjectsModal() {
  const { activeModal, closeModal } = usePortfolioUI();
  const [page, setPage] = useState(0);

  if (activeModal !== "projects") return null;

  const nextPage = () =>
    setPage((prev) => Math.min(prev + 1, projects.length - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const project = projects[page];

  return (
    <div className="modal">
      <button className="close" onClick={closeModal}>
        X
      </button>
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>Tech Used:</strong> {project.tech}</p>
        <p>
          {page + 1} / {projects.length}
        </p>
      </div>
      <div className="controls">
        <button onClick={prevPage} disabled={page === 0}>
          Prev
        </button>
        <button onClick={nextPage} disabled={page === projects.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}