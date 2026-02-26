import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";
import saucynatorCover from "../../assets/saucynator-cover.png";
import portfolioCover from "../../assets/portfolio-cover.png";

const projects = [
  {
    title: "Saucynator",
    description:
      "Simple, fun chatbot built with OpenAI’s GPT-3.5 that suggests recipes based on ingredients users already have. Created as an exploratory project to learn prompt design, long-term memory, and experimenting with how we can make cooking feel more approachable for beginners.",
    tech: "Python, Flask, Google Colab, OpenAI API, HTML/CSS/JS front-end",
    demo: "https://www.loom.com/share/1c8b9a0e7c5b4d9f8e1c3a2b6f4e5a6",
    repo: "https://github.com/jjen-yan/saucynator",
    cover: saucynatorCover,
  },
  {
    title: "This Portfolio!",
    description: "A simple web app with front-end features",
    tech: "React, HTML/CSS",
    demo: "https://www.google.com",
    repo: "https://github.com/jjen-yan/jenyanportfolio",
    cover: portfolioCover,
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
      <img src={book} className="book" alt="Book background" />
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <div className="page left">
        <p className="header">{project.title}</p>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          {" "}
          demo
        </a>{" "}
        |{" "}
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          repo
        </a>
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          className="cover"
        />
      </div>
      <div className="page right">
        <p>{project.description}</p>
        <p> --- </p>
        <p>
          <strong>Tech Used:</strong> <p>{project.tech}</p>
        </p>
        <div className="controls">
          <button
            className="prevButton"
            onClick={prevPage}
            disabled={page === 0}
          >
            Prev
          </button>
          <button
            className="nextButton"
            onClick={nextPage}
            disabled={page === projects.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div className="pageBottom">
        <p>
          {page + 1} / {projects.length}
        </p>
      </div>
    </div>
  );
}
