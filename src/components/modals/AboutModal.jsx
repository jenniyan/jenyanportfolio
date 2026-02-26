import { usePortfolioUI } from "../hooks/UsePortfolioUI";
import pageBg from "../../assets/page.png";

export default function AboutModal() {
  const { activeModal, closeModal } = usePortfolioUI();

  if (activeModal !== "about") return null;

  return (
    <div className="modal resumeModal">
      <img src={pageBg} className="pageBg" alt="Page background" />
      <button className="closePageButton" onClick={closeModal}>
        X
      </button>
      <div className="textPage">
        <p>Hi! My name is Jennifer Yan.</p>
        <p>I am a full stack developer studying computer science at UC Irvine.</p>
        <p>I am most passionate about creating tech that makes a difference. Currently, I am most interested in AI/ML in automotive/healthcare industries and cybersecurity.</p>
        <p>Outside of tech, I love artsy activities such as painting, scrapbooking, and crocheting.</p>
      </div>
    </div>
  );
}
