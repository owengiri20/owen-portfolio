import { SimpleMotion } from "../SimpleMotion"

// logos
import Wev from "./assets/wevolt.png"
import Njs from "./assets/njs.png"
import Syn from "./assets/syn.png"
import Tafe from "./assets/tafe.png"
import Gca from "./assets/gca.png"

interface Experience {
	name: string
	span: string
	role: string
	description: string
	techs: string[]
	projects?: Project[]
	logo: string
	imageHeight?: string
}

interface Project {
	name: string
	tasks: string[]
}

const exps: Experience[] = [
	{
		logo: Wev,
		imageHeight: "35px",
		name: "",
		role: "Full Stack Developer",
		span: "2023 - Present",
		description:
			"Kicking off 2023, I joined Wevolt and  contributed to the development of an innovative electric vehicle charging station management solution. I played a key role in creating server-side services, integrating a data scraper for PlugShare, and designing a user-friendly front-end admin panel for efficient charging station management.",
		techs: ["Typscript", "React", "Chakra UI", "Golang", "Postgresql", "REST", "React Native", "Python"],
		projects: [
			{
				name: "",
				tasks: [
					"Built CPMS Location related Functionalities (Create, View, Edit)",
					"Built a Scraper, to hit plugshare's API and sort/filter that data",
					"Built the backend of Map view functionality",
				],
			},
		],
	},
	{
		logo: Syn,
		name: "Ninja Syndicate",
		role: "Full Stack Developer",
		span: "2021 - 2022",
		description:
			"At the start of 2021, the Supremacy project kicked off, and now Ninja Software is transforming from a consultant company to a full fledge gaming studio. Around this time the team grew astronomically about tripled in size. Whilst working in the Supremacy Project, I had the chance to work with many talented individuals from 3D artist, content creators and Game Devs.",
		techs: ["Typscript", "React", "Material UI", "Golang", "Postgresql", "REST", "Websockets", "Many more"],
		projects: [
			{
				name: "Supremacy: Battle Arena",
				tasks: [
					"Built and designed user's public profile page",
					"Built React front end to show live stream feed using Ovenmedia engine",
					"Built Telegram bots",
				],
			},
			{
				name: "Supremacy World",
				tasks: ["Built admin UI to manage sales data", "Collaborated with other devs to create sales database schema"],
			},
		],
	},
	{
		logo: Njs,
		name: "Ninja Software",
		role: "Intern / Full Stack Developer",
		span: "2019 - 2021",
		description:
			"Somewhere in between my TAFE course i stumbled across Ninja Software's website and this where i got my first taste of the industry. \n\nMy time with Ninja software was invaluable, i gained so much experience, worked on a bunch of cool projects, and most importantly meet some of the best work colleagues i can ever ask for.\n\nAfter a 3 month long internship i got the opportunity to transition from an internship role to being a junior full stack developer, during this time I worked in a flurry of projects:\n\n- Zen, a customer/client management system for the Helping Minds company\n- Net Zero, A Sustainability Reporting Platform, tracking progress towards 'net zero' by creating graphs of baselines and indicators.\n- Ninja Software's Client Portal, I worked on an automated emailing service to send out stats (weekly report) of projects for Ninja's clients\n\nAnd many many more...",
		techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
		projects: [
			{
				name: "Zen - Helping minds",
				tasks: [
					"Admin platform for the Helping Minds comapany",
					"Built timesheets/mileage claims PDF exporter",
					"Built admin pages to manage and view users, clients data",
				],
			},
			{
				name: "Net Zero - Impact Tracker",
				tasks: [
					"A Sustainability Reporting Platform, tracking progress towards 'net zero' by creating graphs of baselines and indicators.",
					"Built UI for data entry of baselines, indicators and measures",
					"Built tools to generate graphs based of the above data",
				],
			},
		],
	},

	// {
	// 	logo: Gca,
	// 	name: "Game Changer Awards ",
	// 	role: "Judge",
	// 	span: "2019",
	// 	description:
	// 		"As I neared the end of my internship with Ninja Software, I was given the chance to be a judge for the 2019 Game Changer Awards, a STEM showcase event where high school students presented their projects.",
	// 	techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
	// },
	// {
	// 	logo: Njs,
	// 	name: "Ninja Software Internship",
	// 	role: "Intern",
	// 	span: "2019",
	// 	description:
	// 		"About half way through my TAFE course I landed an internship role with Ninja Software. which gave me the oppurtunity to gain valuable real world experience whilst working with other great developers and mentors.",
	// 	techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
	// 	projects: [
	// 		{
	// 			name: "What I Learnt",
	// 			tasks: [
	// 				"React, how to use state, components, hooks",
	// 				"golang, how to write APIs, connect to databases",
	// 				"Postgresql, how to design schemas, write migrations",
	// 			],
	// 		},
	// 		{
	// 			name: "GyfHub",
	// 			tasks: [
	// 				"Internship group project",
	// 				"A messaging app, where you can only send Gifs",
	// 				"Learnt React, how to use state, components, hooks",
	// 				"Learnt golang, how to write APIs, connect to databases",
	// 			],
	// 		},
	// 	],
	// },
	{
		logo: Tafe,
		imageHeight: "100px",
		name: "",
		role: "Student",
		span: "2018",
		description:
			"Upon graduating high school, I made the decision to enroll into the software development diploma course at North Metro TAFE in order to gain the skills and knowledge necessary to start a career in the industry.",
		techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
		projects: [
			{
				name: "What I Learnt",
				tasks: ["C#, ASP.net, Winforms, WPF", "Game dev with Unity, VR", "Python, web scraping, data structures and algorithims"],
			},
		],
	},

	{
		logo: "",
		name: "High School",
		role: "Noob (Start of my proramming journey)",
		span: "2017",
		description:
			"Somewhere at the end of highschool I stumbled across a youtube channel called Brakeys, since watching his tutorial videos i built up a passion for programming/coding.",
		techs: ["Typscript", "React", "Baseweb UI", "Golang", "Postgresql", "REST"],
	},
]

export const ExperienceTimeline = () => {
	return (
		<div id="experience" className="content-container">
			<h2 className="content-title">EXPERIENCE</h2>

			<div className="timeline">
				{exps.map((ex, i) => {
					return <TimeLineCard experience={ex} index={i} key={ex.name} />
				})}
			</div>
		</div>
	)
}

const TimeLineCard = ({ experience, index }: { experience: Experience; index: number }) => {
	const { name, span, description, role, projects, logo, imageHeight } = experience
	return (
		<SimpleMotion>
			<div key={name} className={`container ${index % 2 === 0 ? "left" : "right"}`}>
				<div className="textbox">
					<small>{span}</small>
					<div className="name-logo">
						{logo && <img style={{ height: imageHeight ?? "50px" }} className="experience-logo" src={logo} alt="" />}
						<h2>{name}</h2>
					</div>

					<p>{role}</p>
					<p style={{ whiteSpace: "pre-line" }}>{description}</p>
					{/* 
					{projects &&
						projects.map((p) => {
							return (
								<div key={p.name}>
									<p>{p.name}</p>
									<ul>
										{p.tasks.map((t) => {
											return <li key={t}>{t}</li>
										})}
									</ul>
								</div>
							)
						})} */}
				</div>
			</div>
		</SimpleMotion>
	)
}
