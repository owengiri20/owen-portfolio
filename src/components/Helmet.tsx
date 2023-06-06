import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"

export const HelmetTitle = () => {
	const location = useLocation()
	let title
	switch (location.pathname) {
		case "/about":
			title = "About Page"
			break
		case "/contact":
			title = "| Contact Page"
			break
		default:
			title = "| Home Page"
	}

	return (
		<div>
			<Helmet>
				<title>OG {title}</title>
			</Helmet>
		</div>
	)
}
