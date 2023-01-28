import { animated, useScroll, useSpring } from "@react-spring/web";
import styles from "../historySection/aboutSection.module.css";
import Gallery from "./gallery/Gallery";
import History from "./history/History";
import OurMessage from "./ourMessage/OurMessage";

/**
 * * Section component History or about
 * ? This section contains information and media of brand
 * @returns History component
 */
// TODO: In this component, I added a new animation. But I should improve the animation and the logic behind or remove it.
function HistorySection() {
	return (
		<section
			className={styles.aboutMainContainer}
		>
			<h2>Sobre nosotros</h2>
			<History />
			<OurMessage />
			<Gallery />
		</section>
	);
}

export default HistorySection;
