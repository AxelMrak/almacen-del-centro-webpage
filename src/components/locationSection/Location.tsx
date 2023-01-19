import Map from "./map/Map";
import styles  from '../locationSection/location.module.css';

/**
 * * Section component
 * ? Shows address and map
 * @returns Location section component
 */
function Location() {
	return (
		<section className={styles.locationSectionContainer}>
			<h2>Encuéntrenos</h2>
			<p>Lavalle 100, Villa Mercedes, San Luis</p>
			<Map />
		</section>
	);
}

export default Location;
