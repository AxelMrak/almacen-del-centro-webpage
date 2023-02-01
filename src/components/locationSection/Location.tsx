import styles from "../locationSection/location.module.css";
import { lazy, Suspense } from "react";
import LazyLoad from "react-lazy-load";

const Map = lazy(() => import("./map/Map"));

/**
 * * Section component
 * ? Shows address and map
 * @returns Location section component
 */
function Location() {
	return (
		<LazyLoad>
			<section className={styles.locationSectionContainer}>
				<h2>Encuéntrenos</h2>
				<p>Lavalle 100, Villa Mercedes, San Luis</p>
				<Suspense>
					<Map />
				</Suspense>
			</section>
		</LazyLoad>
	);
}

export default Location;
