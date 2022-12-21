import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OwenJPG from "../assets/owen.jpg";

export const Hero = () => {
  return (
    <div className="hero">
      {/* column 1 */}
      <div className="column-1">
        <h1>OWEN GIRI</h1>
        <h2>FULL STACK DEVELOPER</h2>
        <div className="hero-socials">
          <a href="https://github.com/owengiri20">
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/owen-giri-0635b3178/">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </a>
          <a>
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
          </a>
        </div>
      </div>

      {/* column 2 */}
      <div>
        <img src={OwenJPG} className="owen" alt="image of me (:" />
      </div>
    </div>
  );
};
