import { SimpleMotion } from "../SimpleMotion"
import "./contact.css"
export const ContactForm = () => {
	return (
		<div className="contact">
			<form data-netlify="true" name="contact" method="post" action="/thankyou">
				<SimpleMotion>
					<div>
						<input type="hidden" name="form-name" value="contact" />
					</div>

					<h3>Get In Touch 💬</h3>

					<div>
						<p className="contact-form-label">Name</p>
						<input type="text" name="name" />
					</div>
					<div>
						<p className="contact-form-label">Email</p>
						<input name="email" />
					</div>

					<div>
						<p className="contact-form-label">Message</p>
						<textarea name="message"></textarea>
					</div>

					<div>
						<button className="contact-send" type="submit">
							Send Message
						</button>
					</div>
				</SimpleMotion>
			</form>
		</div>
	)
}
