import React, { useState } from "react"
import "./theme.css"

// Define your styles here

export const SplashScreen: React.FC = () => {
	const [animate, setAnimate] = useState(false)

	const handleClick = () => {
		setAnimate(!animate)
	}

	return (
		<div className={`splash ${animate ? "animate" : ""}`}>
			<div className="splash_logo">OG</div>
			<div className="splash_svg">
				<svg width="100%" height="100%">
					<rect width="100%" height="100%" />
				</svg>
			</div>
			<div className="splash_minimize">
				<svg width="100%" height="100%">
					<rect width="100%" height="100%" />
				</svg>
			</div>
		</div>
	)
}
