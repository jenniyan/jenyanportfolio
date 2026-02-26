import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import pageBg from "../../assets/page.png";

const pdfUrl = "https://drive.google.com/file/d/1FdHV_cK4LnuSJB7qKW2FUEzMywO0BAq0/preview" 

export default function ResumeModal() {
  const { activeModal, closeModal } = usePortfolioUI();

  if (activeModal !== "resume") return null;

  return (
    <div className="modal">
      <img src={pageBg} className="book" alt="Book background" />
      <button className="closeButton" onClick={closeModal}>
        X
      </button>
      <div className="page">
        <iframe src={pdfUrl} width="640" height="480" title="Resume"></iframe>
      </div>
    </div>
  );
}
