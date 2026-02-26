import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";

const skills = [
    {
    tech: "Languages",
    list: "Python, Java, SQL, HTML/CSS, JavaScript"
  },
  {
    tech: "Python Libraries",
    list: "NumPy, Pandas, Matplotlib, plot.ly, Flask, PyTorch, pytest"
  },
  {
    tech: "Web Development",
    list: "Frontend: HTML/CSS, JavaScript, React, CSS | Backend: PostgreSQL, Node.js, Express | User Authentication: Firebase"
  },
  {
    tech: "Developer Tools",
    list: "Git, VS Code, GitHub, Docker, Postman"
  },
  {
    tech: "AI/ML",
    list: "sci-kit learn, PyTorch, OpenAI API, Hugging Face Transformers"
  },
];

export default function SkillsModal() {
  const { activeModal, closeModal } = usePortfolioUI();
  const [page, setPage] = useState(0);

  if (activeModal !== "skills") return null;

  const nextPage = () =>
    setPage((prev) => Math.min(prev + 1, skills.length - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const skill = skills[page];

  return (
    <div className="modal">
      <img src={book} className="book" alt="Book background" />
      <button className="closeBookButton" onClick={closeModal}>
        X
      </button>
      <div className="page left">
        <p className="header">{skill.tech}</p>
      </div>
      <div className="page right">
        <p>{skill.list}</p>
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
            disabled={page === skills.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div className="pageBottom">
        <p>
          {page + 1} / {skills.length}
        </p>
      </div>
    </div>
  );
}
