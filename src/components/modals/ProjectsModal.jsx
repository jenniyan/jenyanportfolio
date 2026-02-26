import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";
import saucynatorCover from "../../assets/saucynator-cover.png";
import portfolioCover from "../../assets/portfolio-cover.png";
import mlCover from "../../assets/ml-cover.png";

const projects = [
    {
    title: "Personal Portfolio",
    time: "dec 2025 - present",
    description: "A simple web app with front-end features",
    tech: "React, HTML/CSS",
    demo: "https://www.google.com",
    repo: "https://github.com/jjen-yan/jenyanportfolio",
    cover: portfolioCover,
  },
  {
    title: "Saucynator",
    time: "jun 2024 - aug 2024",
    description:
      "Simple, fun chatbot built with OpenAI’s GPT-3.5 that suggests recipes based on ingredients users already have. Created as an exploratory project to learn prompt design, long-term memory, and experimenting with how we can make cooking feel more approachable for beginners.",
    tech: "Python, Flask, Google Colab, OpenAI API, HTML/CSS/JS front-end",
    demo: "https://www.loom.com/share/1c8b9a0e7c5b4d9f8e1c3a2b6f4e5a6",
    repo: "https://github.com/jjen-yan/saucynator",
    cover: saucynatorCover,
  },
  {
    title: "Machine Learning for Pediatric Pneumonia from X-ray Detection",
    time: "apr 2024 - july 2024",
    description: "Research paper completed with 1-on-1 mentor guidance analyzing multiple machine learning models for classifying lung X-ray images for pneumonia. Using a dataset of healthy and pneumonia-diagnosed lungs, we trained and tested three models: a custom scikit-learn model, an OpenAI zero-shot classification model, and a specialized pretrained pneumonia detection model. The study compares their performance, accuracy, efficiency, and potential improvements.",
    tech: "Python, Numpy, Matplotlib, Scikit-learn, TensorFlow",
    demo: "https://docs.google.com/document/d/1lzkesxp3Uh44X8hECLNe2RMTWxz470mHqzMn6l8UUuo/edit?tab=t.0#heading=h.32d7h9xrbifb",
    repo: "https://github.com/jjen-yan/machine_learning",
    cover: mlCover
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
      <button className="closeBookButton" onClick={closeModal}>
        X
      </button>
      <div className="page left">
        <p className="header">{project.title}</p>
        <p className="time">{project.time}</p>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          {" "}
          demo/report
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
