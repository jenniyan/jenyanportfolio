import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";
import pageFlipSound from "../../assets/sounds/page-flip.ogg";

const skills = [
    {
    tech: "Languages",
    list: [
      { name: "Python", level: "Advanced" },
      { name: "HTML/CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Java", level: "Familiar" },
    ]
  },
  {
    tech: "Python Libraries",
    list: [
      { name: "Numpy", level: "Advanced" },
      { name: "urllib", level: "Intermediate"},
      { name: "Matplotlib", level: "Intermediate" },
      { name: "Pandas", level: "Familiar" },
      { name: "plot.ly", level: "Familiar" },
      { name: "PyTorch", level: "Familiar" },
      { name: "Flask", level: "Familiar" },
      { name: "pytest", level: "Familiar" },
      { name: "sci-kit learn", level: "Familiar" }
    ]
  },
  {
    tech: "Web Development",
    list: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Javascript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "PostgreSQL", level: "Familiar" },
      { name: "Node.js", level: "Familiar" },
      { name: "Express", level: "Familiar" },
      { name: "Firebase", level: "Familiar" },
    ]
  },
  {
    tech: "Developer Tools",
    list: [
      { name: "Git", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Github", level: "Advanced" },
      { name: "Slack", level: "Advanced"},
      { name: "PgAdmin", level: "Intermediate" },
      { name: "npm / yarn", level: "Intermediate"},
      { name: "Docker", level: "Familiar" },
      { name: "Postman", level: "Familiar" }
    ]
  },
];

export default function SkillsModal() {
  const { activeModal, closeModal } = usePortfolioUI();
  const [page, setPage] = useState(0);

  if (activeModal !== "skills") return null;

  const playPageFlip = () => {
  const audio = new Audio(pageFlipSound);
  audio.volume = 0.3;
  audio.play();
};

const nextPage = () => {
    if (page < skills.length - 1) {
      playPageFlip();
      setPage((prev) => Math.min(prev + 1, skills.length - 1));
    }
  };

  const prevPage = () => {
    if (page > 0) {
      playPageFlip();
      setPage((prev) => Math.max(prev - 1, 0));
    }
  };

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
        <ul className="skillList">
  {skill.list.map((item) => (
    <li key={item.name}>
      {item.name} <span className={`tag ${item.level.toLowerCase()}`}>{item.level}</span>
    </li>
  ))}
</ul>
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
