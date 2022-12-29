import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import OwenJPG from "../assets/owen.jpg";

export const Hero = () => {
  const nav = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero">
        {/* column 1 */}
        <div className="column-1 drop-in">
          <h1>OWEN GIRI</h1>
          <h2>FULL STACK DEVELOPER</h2>
          <div className="hero-socials">
            <a target="_blank" href="https://github.com/owengiri20">
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/owen-giri">
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
            <a href="mailto:owengiri20@gmail.com">
              <FontAwesomeIcon size="2x" icon={faEnvelope} />
            </a>
          </div>
        </div>

        {/* column 2 */}
        <div className="drop-in">
          <img src={OwenJPG} className="owen" alt="image of me (:" />
        </div>
      </div>

      <button
        className="contact-me-btn"
        onClick={() => {
          nav("/contact");
        }}
      >
        Contact Me
      </button>
    </div>
  );
};
