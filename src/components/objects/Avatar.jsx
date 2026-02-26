import GameObject from "../common/GameObject";
import avatar from "../../assets/avatar.png";
import githubIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";

export default function Avatar({ onClick, onMouseEnter, onMouseLeave }) {
  return (
    <>
      <GameObject
        img={avatar}
        position={{ left: "-20%", bottom: "25%" }}
        label="avatar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />

      <div className="contact-info">
        <p className="contact-link">
          <img className="icon" src={githubIcon} alt="Github Icon" />
          <a
            href="https://github.com/jjen-yan"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GITHUB
          </a>
        </p>
        <p className="contact-link">
          <img className="icon" src={linkedinIcon} alt="LinkedIn Icon" />
          <a
            href="https://www.linkedin.com/in/jennifer--yan/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LINKEDIN
          </a>
        </p>
      </div>
    </>
  );
}
