import styles from "../contactAndHoursSection/contactSection.module.css";
import Contact from "./contact/Contact";
import Hours from "./hours/Hours";

/**
 * * Contact section component
 * ? Shows contact and business hours.
 * @returns Contact section component
 */
function ContactSection() {
	return (
		<div className={styles.contactSectionContainer}>
			<Contact />
			<Hours />
		</div>
	);
}

export default ContactSection;
