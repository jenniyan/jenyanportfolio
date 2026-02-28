import githubIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import mailIcon from "../../assets/mail-icon.png";

export default function Contact() {
    return (
        <div className="contact-info">
        <p className="contact-link">
          <img className="icon" src={mailIcon} alt="Mail Icon" />
          <a
            href="mailto:jenniy16@uci.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            MAIL ME
          </a>
        </p>
        <p className="email">JENNIY16@UCI.EDU</p>
        <p className="contact-link">
          <img className="icon" src={githubIcon} alt="Github Icon" />
          <a
            href="https://github.com/jenniyan"
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
            href="https://www.linkedin.com/in/jenniyan/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LINKEDIN
          </a>
        </p>
      </div>
    )
}