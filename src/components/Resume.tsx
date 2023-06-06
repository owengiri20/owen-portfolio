import { Page, Document, pdfjs } from "react-pdf"
import ResumeFile from "./owen_giri_resume_2023.pdf"

export const Resume = () => {
	return (
		<div>
			<Document file={ResumeFile}>
				<Page pageNumber={1} />
				<Page pageNumber={2} />
			</Document>
		</div>
	)
}
