import { useParams } from "react-router"
import { GetProject } from "./Projects"
import { SimpleMotion } from "../SimpleMotion"
import "./project.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useMediaQuery } from "react-responsive"

export const ProjectPage = () => {
	const { id } = useParams()
	const project = GetProject(`${id}`)
	const smallerScreens = useMediaQuery({
		query: "(max-width: 1600px)",
	})

	const smol = useMediaQuery({
		query: "(max-width: 600px)",
	})

	if (!project) return <div>no project</div>

	const responsive2 = {
		desktop: {
			breakpoint: {
				max: 4000,
				min: 0,
			},
			items: 1,
		},
	}

	return (
		<div className="project-page">
			<SimpleMotion>
				<div
					className="project-hero"
					style={{
						backgroundImage: `url(${project?.altImageURL ?? project?.imageURL})`,
						backgroundSize: smallerScreens ? "cover" : "contain",
						imageRendering: "-webkit-optimize-contrast",
						backgroundRepeat: "no-repeat",
						backgroundPosition: smallerScreens ? project.backgroundPos ?? "center" : "center",
						width: smol ? "100%" : "none",
					}}
				></div>
			</SimpleMotion>

			<div className="project-content">
				<div className="project-content-inner">
					<SimpleMotion>
						<div className="project-name">
							<h3>{project.name}</h3>
							{project.url && (
								<a target="_blank" href={project.url}>
									VIEW PROJECT
								</a>
							)}
						</div>

						<div className="skills-container">
							{project.techs.map((s) => {
								return (
									<div key={s} className="skill-tag">
										{s}
									</div>
								)
							})}
						</div>

						<p>{project.description}</p>
						{project.images.length > 0 && (
							<SimpleMotion>
								<div className="project-images">
									<Carousel infinite responsive={responsive2} arrows showDots>
										{project.images.map((img) => (
											<div
												className="project-img"
												key={img}
												style={{
													height: "600px",
													width: "100%",
													backgroundImage: `url(${img})`,
													backgroundSize: "contain",
													backgroundRepeat: "no-repeat",
													backgroundPosition: "center",
												}}
											></div>
										))}
									</Carousel>
								</div>
							</SimpleMotion>
						)}

						{project.tasks.length > 0 && (
							<>
								<h3>WHAT I WORKED ON</h3>
								<ul>
									{project.tasks.map((t) => {
										return <li key={t}>{t}</li>
									})}
								</ul>
							</>
						)}
					</SimpleMotion>
				</div>
			</div>
		</div>
	)
}
