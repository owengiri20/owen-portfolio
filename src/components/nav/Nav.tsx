import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFillDrip, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ThemeMenu } from "./ThemeMenu";

export const Nav = () => {
  // show nav menu
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  // show theme menu
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div id="nav-icon">
        <div
          onClick={() => {
            setThemeMenuOpen(false);
            setNavMenuOpen((prev) => !prev);
          }}
        >
          MENU
        </div>

        <div
          onClick={() => {
            setNavMenuOpen(false);
            setThemeMenuOpen((prev) => !prev);
          }}
        >
          <FontAwesomeIcon size="lg" icon={faFillDrip} />
        </div>
      </div>

      {navMenuOpen && <NavMenu isOpen={navMenuOpen} />}
      {themeMenuOpen && <ThemeMenu isOpen={themeMenuOpen} />}
    </div>
  );
};

const NavMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      style={{
        opacity: isOpen ? "1" : "0",
        transition: "all .1s ease-in",
      }}
      id="nav-items"
    >
      <a href="#about-me">About Me</a>
      <a href="#experience">Experience</a>
      <a href="#side-projects">Side Projects</a>
      <a href="#contact">Contact Me</a>

      <div className="nav-socials">
        <div>
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </div>
        <div>
          <FontAwesomeIcon size="lg" icon={faLinkedin} />
        </div>
        <div>
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
};
