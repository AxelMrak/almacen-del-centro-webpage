import styles from "../map/map.module.css";

/**
 * * Sub-section component. Son of Location section
 * ? Shows map embeded
 * @returns Map component
 */
function Map() {
	return (
		<iframe
			title="Google's map"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d596.2889632970009!2d-65.4666931232315!3d-33.69114572011433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0d9f9a60d5aed02!2sAlmac%C3%A9n%20del%20Centro!5e0!3m2!1ses-419!2sar!4v1674076155277!5m2!1ses-419!2sar"
			className={styles.map}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
}

export default Map;
