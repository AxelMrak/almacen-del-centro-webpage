import styles from "../contact/contact.module.css";
import phone from "../../../assets/svg/phone.svg";
import whatsapp from "../../../assets/svg/whatsapp.svg";
import email from "../../../assets/svg/email.svg";

/**
 * * Sub-section component. Son of ContactSection.
 * ? Show ways of contact
 * @returns Contact component
 */
// TODO: Change numbers and links
function Contact() {
	return (
		<div className={styles.contactMainContainer}>
			<h2>Contáctenos</h2>
			<div className={styles.contactMethods}>
				<div className={styles.contactItem}>
					<img src={email} width="40" height="40" alt="Comuniquese por Email" />
					<a
						href="mailto:elcorreoquequieres@correo.com"
						target="_blank"
						rel="noreferrer"
					>
						almacendelcentro@gmail.com
					</a>
				</div>
				<div className={styles.contactItem}>
					<img
						src={phone}
						width="30"
						height="30"
						alt="Comuniquese por telefono"
					/>
					<a href="tel:+5402657421228" target="_blank" rel="noreferrer">
						0265742-1228
					</a>
				</div>
				<div className={styles.contactItem}>
					<img
						src={whatsapp}
						width="40"
						height="40"
						alt="Comuniquese por WhatsApp"
					/>
					<a
						href={
							"https://wa.me/542657584728?text=Hola%2C%20me%20comunico%20desde%20su%20página%20web."
						}
						target="_blank"
						rel="noreferrer"
					>
						+542657584728
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
