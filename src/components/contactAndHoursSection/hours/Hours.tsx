import React from "react";
import styles from "../hours/hours.module.css";

/**
 * * Sub-section component. Son of ContactSection.
 * ? Show business hours
 * @returns Hours component
 */
function Hours() {
	return (
		<div className={styles.hoursMainContainer}>
			<h2>Horarios de atención</h2>
			<div className={styles.hoursCard}>
				<div className={styles.hoursUnit}>
					<h3>Lunes a viernes</h3>
					<p>De 8:30hs a 13:00hs</p>
					<p>De 17:00hs a 20:30hs</p>
				</div>
				<div className={styles.hoursUnit}>
					<h3>Sábados</h3>
					<p>De 8:30hs a 13:00hs</p>
				</div>
			</div>
		</div>
	);
}

export default Hours;
