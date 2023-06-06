import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFillDrip, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { ThemeChanger, ThemeMenu } from "./ThemeMenu"

export const Nav = () => {
	// show nav menu
	const [navMenuOpen, setNavMenuOpen] = useState(false)

	return (
		<div className="nav">
			<div id="nav-icon">
				<div
					onClick={() => {
						setNavMenuOpen((prev) => !prev)
					}}
				>
					MENU
				</div>

				<div
					onClick={() => {
						setNavMenuOpen(false)
					}}
				>
					<ThemeChanger />
				</div>
			</div>

			{navMenuOpen && <NavMenu isOpen={navMenuOpen} />}
		</div>
	)
}

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
				<a href="https://www.linkedin.com/in/owen-giri">
					<FontAwesomeIcon size="lg" icon={faLinkedin} />
				</a>
				<a href="mailto:owengiri20@gmail.com">
					<FontAwesomeIcon size="lg" icon={faEnvelope} />
				</a>
			</div>
		</div>
	)
}
