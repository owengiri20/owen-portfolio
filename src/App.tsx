import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import "./Animation.css"
import "./App.css"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { ContactForm } from "./components/contact/ContactForm"
import { ExperienceTimeline } from "./components/experience/WorkExperience"
import { Nav } from "./components/nav/Nav"
import { getTheme } from "./components/nav/ThemeMenu"
import { ProjectPage } from "./components/projects/ProjectPage"
import { ProjectCarousel } from "./components/projects/Projects"
import { CursorPage } from "./cursorTest/cursor"

function App() {
	// set the theme
	useEffect(() => {
		// get theme
		const r = document.documentElement
		if (r) {
			const name = localStorage.getItem("theme") || "dark"
			const theme = getTheme(name)

			const { backgroundColor, cardBackgroundColor, textColor, footerBackgroundColor } = theme
			r.style.setProperty("--background-color", backgroundColor)
			r.style.setProperty("--card-background-color", cardBackgroundColor)
			r.style.setProperty("--text-color", textColor)
			r.style.setProperty("--footer-background-color", footerBackgroundColor)
			localStorage.setItem("theme", name)
		}
	}, [])
	return (
		<div className="app-wrapper">
			<RoutesX />
			<Nav />
			<Footer />
		</div>
	)
}

const Landing = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<ProjectCarousel title="PERSONAL PROJECTS" personalOnly />
			<ProjectCarousel title="WORK" />
			<ExperienceTimeline />
		</>
	)
}

const RoutesX = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/projects/:id" element={<ProjectPage />} />
			<Route path="/cursor" element={<CursorPage />} />
			<Route path="/contact" element={<ContactForm />} />
		</Routes>
	)
}

export default App
