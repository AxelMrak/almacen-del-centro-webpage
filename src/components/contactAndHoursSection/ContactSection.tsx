import React from "react";
import styles from "../contactAndHoursSection/contactSection.module.css";
import Contact from "./contact/Contact";
import Hours from "./hours/Hours";

function ContactSection() {
	return (
		<div className={styles.contactSectionContainer}>
			<Contact />
			<Hours />
		</div>
	);
}

export default ContactSection;
