import { lazy, Suspense } from "react";
import styles from "../historySection/aboutSection.module.css";
import LazyLoad from "react-lazy-load";

const History = lazy(() => import("./history/History"));
const Gallery = lazy(() => import("./gallery/Gallery"));
const OurMessage = lazy(() => import("./ourMessage/OurMessage"));

/**
 * * Section component History or about
 * ? This section contains information and media of brand
 * @returns History component
 */
// TODO: In this component, I added a new animation. But I should improve the animation and the logic behind or remove it.
function HistorySection() {
	return (
		<LazyLoad>
			<section className={styles.aboutMainContainer}>
				<h2>Sobre nosotros</h2>
				<Suspense>
					<History />
					<OurMessage />
					<Gallery />
				</Suspense>
			</section>
		</LazyLoad>
	);
}

export default HistorySection;
