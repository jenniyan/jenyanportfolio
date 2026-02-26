import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import pageBg from "../../assets/page.png";
import resumePDF from "../../assets/resume.pdf"

// const pdfUrl = "https://drive.google.com/file/d/1FdHV_cK4LnuSJB7qKW2FUEzMywO0BAq0/preview" 

export default function ResumeModal() {
  const { activeModal, closeModal } = usePortfolioUI();

  if (activeModal !== "resume") return null;

  return (
    <div className="modal resumeModal">
      <img src={pageBg} className="pageBg" alt="Page background" />
      <a
    href={resumePDF}
    download="JenniferYan_Resume.pdf"
    className="downloadButton"
  >
    Download Resume
  </a>
      <button className="closePageButton" onClick={closeModal}>
        X
      </button>
      <div className="resumePage">
        <iframe className="resumeFrame" src={`${resumePDF}#toolbar=0`} width="640" height="480" title="Resume"></iframe>
      </div>
    </div>
  );
}
