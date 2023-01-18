import Map from "./map/Map";
import styles  from '../locationSection/location.module.css';

function Location() {
	return (
		<section className={styles.locationSectionContainer}>
			<h2>Encuentrenos</h2>
			<p>Lavalle 100, Villa Mercedes, San Luis</p>
			{/* <Map /> */}
		</section>
	);
}

export default Location;
