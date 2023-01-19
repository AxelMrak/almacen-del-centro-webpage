import styles from "../historySection/aboutSection.module.css";
import { GuardaPampa } from "../others/GuardaPampa";
import Gallery from "./gallery/Gallery";
import History from "./history/History";
import OurMessage from "./ourMessage/OurMessage";

/**
 * * Section component History or about
 * ? This section contains information and media of brand
 * @returns History component
 */
function HistorySection() {
	return (
		<section className={styles.aboutMainContainer}>
			<h2>Sobre nosotros</h2>
			<History />
			<GuardaPampa />
			<OurMessage />
			<GuardaPampa />
			<Gallery />
		</section>
	);
}

export default HistorySection;
