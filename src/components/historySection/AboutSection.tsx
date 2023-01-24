import { useEffect, useState } from "react";
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
	const [show, setShow] = useState<boolean>();

	useEffect(() => {
		const handleScroll = () => {
			// If the scroll overlaps an percentage of top, the arrow dissapears with the state is false.
			if (window.scrollY > window.innerHeight * 0.6) {
				setShow(true);
			} else {
				setShow(false);
			}
		};
		// Add event
		window.addEventListener("scroll", handleScroll);
		// Remove event
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className={show  ? `${styles.aboutMainContainer} ${styles.animation}` : styles.aboutMainContainer}>
			<h2>Sobre nosotros</h2>
			<History />
			<OurMessage />
			<Gallery />
		</section>
	);
}

export default HistorySection;
