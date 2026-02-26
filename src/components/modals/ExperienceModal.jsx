import { useState } from "react";
import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import book from "../../assets/book.png";
import clchcCover from "../../assets/clchc-cover.png";

const experiences = [
  {
    title: "Tech Lead Shadow",
    company: "Commit the Change",
    date: "January 2026 - March 2026",
    description:
      "Implemented a data caching solution for Celebrating Life Community Health center, reducing unnecessary backend data fetching using TanStack Query (react-query).",
    tech: "Front-end: React, Tanstack Query (react-query) | Backend: Axios",
    repo: "https://github.com/ctc-uci/clchc",
    cover: clchcCover,
  },
  {
    title: "Full Stack Developer",
    company: "Commit the Change",
    date: "October 2025 - Present",
    description:
      "Building a centralized appointment management platform for non-profit Celebrating Life Community Health Center (CLCHC), which includes daily appointment quota creation, live quota-progress tracking, version logs, and tiered permission portals. CLCHC provides affordable healthcare to 22,000+ patients in Orange County.",
    tech: "Front-end: React, Chakra UI, HTML/CSS | Backend: Node.js, Express, PostgreSQL | User Authentication: Firebase",
    repo: "https://github.com/ctc-uci/clchc",
    cover: clchcCover,
  },
];

export default function ExperienceModal() {
  const { activeModal, closeModal } = usePortfolioUI();
  const [page, setPage] = useState(0);

  if (activeModal !== "experiences") return null;

  const nextPage = () =>
    setPage((prev) => Math.min(prev + 1, experiences.length - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const experience = experiences[page];

  return (
    <div className="modal">
      <img src={book} className="book" alt="Book background" />
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <div className="page left">
        <p className="header">{experience.title}</p>
        <p className="company">{experience.company}</p>
        <p className="date">{experience.date}</p>
        <img
          src={experience.cover}
          alt={`${experience.title} cover`}
          className="cover"
        />
      </div>
      <div className="page right">
        <p>{experience.description}</p>
        <p> --- </p>
        <p>
          <strong>Tech Used:</strong> <p>{experience.tech}</p>
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
            disabled={page === experiences.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <div className="pageBottom">
        <p>
          {page + 1} / {experiences.length}
        </p>
      </div>
    </div>
  );
}
