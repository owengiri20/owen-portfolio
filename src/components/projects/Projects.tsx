import { SimpleMotion } from "../SimpleMotion"
import { useState } from "react"
import { useNavigate } from "react-router"

// images

// wevolt
import WevoltPreview from "./assets/wevolt-preview.png"
import WevoltPreview2 from "./assets/wevolt-preview2.png"
import Wev1 from "./assets/wev1.png"
import Wev2 from "./assets/wev2.png"
import Wev3 from "./assets/wev3.png"
import Wev4 from "./assets/wev4.png"

// supremacy
import SupremacyPreview from "./assets/SupremacyPreview.png"
import Sup1 from "./assets/sup1.png"
import Sup2 from "./assets/sup2.png"
import Sup3 from "./assets/sup3.png"

// zen
import ZenPng from "./assets/zen.png"
import Zen1 from "./assets/zen1.png"
import Zen2 from "./assets/zen2.png"
import Zen3 from "./assets/zen3.png"
import { useMediaQuery } from "react-responsive"

// TrekTyper
import TTPng from "./assets/tt.png"
import TT2 from "./assets/tt2.png"
import TT3 from "./assets/tt3.png"

interface Project {
	slug: string
	url: string
	name: string
	description: string
	imageURL: string
	altImageURL?: string
	images: string[]
	tasks: string[]
	techs: string[]
	personal?: boolean

	// style
	backgroundPos?: string
}
const projs: Project[] = [
	{
		slug: "wevolt",
		url: "https://wevolt.com.au/",
		name: "Wevolt",
		description:
			"A platform designed to make EV charging easy. With its Charge Point Management System, those who operate charging points can efficiently manage their chargers and locations. In this project, my job was pretty interesting. I built a tool to gather data from Plugshare's API, focusing on information about charging stations and their locations. Also, I created easy-to-use sorting and filtering options to show that data on a map, making it more user-friendly.",

		imageURL: WevoltPreview,
		altImageURL: WevoltPreview2,
		images: [Wev1, Wev2, Wev3, Wev4],
		tasks: [],
		techs: ["React", "React Native", "Typescript", "Chakra UI", "Golang", "Postgresql", "Plugshare API"],
		backgroundPos: "left",
	},
	{
		slug: "supremacy",
		url: "https://supremacy.game/",
		name: "Supremacy: Battle Arena",
		description:
			"An epic mech battle arena game where players can watch nonstop action as giant AI-controlled war machines (mechs) engage in intense battles. As a spectator, you have the opportunity to get even more involved by supporting your faction with special abilities like airstrikes and nukes. ",

		imageURL: SupremacyPreview,
		images: [Sup1, Sup2, Sup3],
		tasks: [
			"Custom user avatar creation",
			"Built and designed user's public profile page",
			"Built React front end to show live stream feed using Ovenmedia engine",
			"Voice chat feature for mech commanders, using Oven Live Kit",
			"Telegram notifications bot: to deliver notifications to players when their war machines are coming up to battle",
		],
		techs: [
			"Golang",
			"React",
			"Typescript",
			"Material UI",
			"PostgresqL",
			"Websockets",
			"RESTful APIs",
			"Oven Media Engine",
			"Discord Bot API",
			"Docker",
		],
	},
	{
		slug: "zen",
		url: "",
		name: "Zen - Helping Minds",
		description:
			"Zen, a comprehensive admin platform for the Helping Minds company. The platform was designed to streamline the management of client data, including calendar appointments, travels, timesheets, and mileage claims. This project was one of the first major projects I worked on and it helped me to gain valuable experience in software development.",
		imageURL: ZenPng,
		images: [Zen1, Zen2, Zen3],
		tasks: [
			"Built admin pages to manage and view users, clients data",
			"Built timesheets generator",
			"Built timesheets/mileage claims PDF exporter",
		],
		techs: ["Golang", "Typescript", "React", "RESTful APIs", "Base Web UI", "Google Maps API"],
	},
	{
		slug: "tt",
		url: "https://typinggame.owengiri.dev/",
		name: "TT - TrekTyper",
		personal: true,
		description: `TrekTyper - a side project I've been working on and off in my spare time, typing game/test built with react and typescript. Some features include: profile page, avatars, leaderboards, player stats. Any and all feedback are wellcome (:`,

		imageURL: TTPng,
		images: [TT3, TTPng, TT2],
		tasks: [],
		techs: ["React", "Typescript", "Material UI", "Golang", "Postgres", "AWS SES", "AWS S3", "Netlify", "Digital Ocean"],
	},
]

export const GetProject = (slug: string) => {
	const filtered = projs.filter((p) => p.slug === slug)
	if (!filtered || filtered.length === 0 || !filtered[0]) {
		console.log("project does not exist")

		return undefined
	}

	return filtered[0]
}

interface ProjectCarouselProps {
	personalOnly?: boolean
	title: string
}

export const ProjectCarousel = (props: ProjectCarouselProps) => {
	const { personalOnly, title } = props
	const filteredProjects = personalOnly ? projs.filter((p) => p.personal) : projs.filter((p) => !p.personal)
	const [selected, setSelected] = useState(filteredProjects[0].name)

	return (
		<div className="content-container" id="projects">
			<SimpleMotion>
				<h2 className="content-title">{title}</h2>
				<div className="carousel">
					{filteredProjects.map((p) => {
						return (
							<ProjectCarouselCard
								key={p.name}
								project={p}
								isSelected={p.name === selected}
								onClick={() => {
									setSelected(p.name)
								}}
								fullWidth={personalOnly}
							/>
						)
					})}
				</div>
			</SimpleMotion>
		</div>
	)
}

export const ProjectCarouselCard = ({
	fullWidth,
	project,
	onClick,
	isSelected,
}: {
	fullWidth?: boolean
	isSelected: boolean
	project: Project
	onClick: () => void
}) => {
	const nav = useNavigate()
	const { name, imageURL, slug } = project
	const smallerScreens = useMediaQuery({
		query: "(max-width: 920px)",
	})

	return (
		<div
			onClick={isSelected ? () => nav("/projects/" + slug) : () => onClick()}
			className={"carousel-card " + (isSelected ? "selected" : "")}
			style={{
				backgroundImage: `url(${imageURL})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				width: fullWidth ? "100%" : "",
			}}
		>
			{(smallerScreens || isSelected) && (
				<div className="carousel-bottom">
					<h3 className="project-title">{name}</h3>
					<p className="click-to-view">CLICK FOR MORE INFO</p>
				</div>
			)}
		</div>
	)
}
