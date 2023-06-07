import { useEffect, useState } from "react"

const themes = [
	{
		name: "dark",
		textColor: "white",
		backgroundColor: "#1A1A1A",
		footerBackgroundColor: "#1A1A1A",
		cardBackgroundColor: "1A1A1A",
	},
	{
		name: "light",
		textColor: "black",
		backgroundColor: "#f5f5f5",
		footerBackgroundColor: "#f5f5f5",
		cardBackgroundColor: "#f5f5f5",
	},
]

export const getTheme = (name: string) => {
	const filtered = themes.filter((t) => t.name === name)
	if (!filtered || filtered.length === 0 || !filtered[0]) {
		return themes[0]
	}

	return filtered[0]
}
export const ThemeMenu = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<div
			style={{
				opacity: isOpen ? "1" : "0",
				transition: "all .1s ease-in",
			}}
			id="nav-items"
			className="theme-picker"
		>
			{themes.map((t) => {
				return <ColorItem key={t.name} theme={t} />
			})}
		</div>
	)
}

interface ThemeObj {
	name: string
	backgroundColor: string
	footerBackgroundColor: string
	textColor: string
	cardBackgroundColor: string
}
const ColorItem = ({ theme }: { theme: ThemeObj }) => {
	const { backgroundColor, textColor, cardBackgroundColor, footerBackgroundColor, name } = theme
	const onChangeTheme = () => {
		const r = document.documentElement
		if (r) {
			r.style.setProperty("--background-color", backgroundColor)
			r.style.setProperty("--card-background-color", cardBackgroundColor)
			r.style.setProperty("--text-color", textColor)
			r.style.setProperty("--footer-background-color", footerBackgroundColor)
			localStorage.setItem("theme", name)
		}
	}
	return <div onClick={onChangeTheme} className="theme-circle" style={{ background: backgroundColor }} />
}

export const ThemeChanger = () => {
	const [themeState, setThemeState] = useState(() => {
		try {
			// Get theme from local storage or default to user's preferred color scheme
			const storedTheme = localStorage.getItem("theme")
			if (storedTheme) {
				return storedTheme
			}

			// Check for user's preferred color scheme
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
			return prefersDark ? "dark" : "light"
		} catch (e) {
			// If localStorage access fails, fall back to 'light' theme
			return "light"
		}
	})

	useEffect(() => {
		const { backgroundColor, cardBackgroundColor, footerBackgroundColor, textColor } = getTheme(themeState)
		const rootElement = document.documentElement

		if (rootElement) {
			rootElement.style.setProperty("--background-color", backgroundColor)
			rootElement.style.setProperty("--card-background-color", cardBackgroundColor)
			rootElement.style.setProperty("--text-color", textColor)
			rootElement.style.setProperty("--footer-background-color", footerBackgroundColor)
		}

		try {
			localStorage.setItem("theme", themeState)
		} catch (e) {
			// Handle localStorage failure
			console.warn("Unable to access local storage")
		}
	}, [themeState])

	const onChangeTheme = () => {
		setThemeState((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
	}

	return (
		<div style={{ textTransform: "uppercase" }} onClick={onChangeTheme}>
			Theme: <span style={{ fontWeight: "bold" }}>{themeState}</span>
		</div>
	)
}
