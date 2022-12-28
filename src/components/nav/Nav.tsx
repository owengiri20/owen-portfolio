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
      <a href="/#about-me">ABOUT ME</a>
      <a href="/#experience">EXPERIENCE</a>
      <a href="/#projects">PROJECTS</a>
      <a href="/contact">CONTACT ME</a>

      <div className="nav-socials">
        <a target="_blank" href="https://github.com/owengiri20">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/owen-giri-0635b3178/">
          <FontAwesomeIcon size="lg" icon={faLinkedin} />
        </a>
        <a href="mailto:owengiri20@gmail.com">
          <FontAwesomeIcon size="lg" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};
