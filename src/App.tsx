import "./Animation.css";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/nav/Nav";
import { getTheme } from "./components/nav/ThemeMenu";
import { ProjectCarousel } from "./components/SideProjects";
import { ExperienceTimeline } from "./components/WorkExperience";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { ProjectPage } from "./components/ProjectPage";

function App() {
  // set the theme
  useEffect(() => {
    // get theme
    const r = document.documentElement;
    if (r) {
      const name = localStorage.getItem("theme") || "white";
      const theme = getTheme(name);

      const {
        backgroundColor,
        cardBackgroundColor,
        textColor,
        footerBackgroundColor,
      } = theme;
      r.style.setProperty("--background-color", backgroundColor);
      r.style.setProperty("--card-background-color", cardBackgroundColor);
      r.style.setProperty("--text-color", textColor);
      r.style.setProperty("--footer-background-color", footerBackgroundColor);
      localStorage.setItem("theme", name);
    }
  }, []);
  return (
    <div className="app-wrapper">
      <RoutesX />
      <Nav />
    </div>
  );
}

const Landing = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectCarousel />
      <ExperienceTimeline />
      <Footer />
    </>
  );
};

const RoutesX = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
