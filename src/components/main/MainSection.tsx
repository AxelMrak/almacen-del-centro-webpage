import styles from "../main/mainSection.module.css";
import arrow from "../../assets/svg/expand.svg";

function MainSection() {
	return (
		<main className={styles.mainSectionContainer}>
			<h1>Almacén del Centro</h1>
			<div className={styles.arrowMainContainer}>
				<p>Conócenos</p>
				<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
					<path d="M24 29.4 13.4 18.8l1.1-1.1 9.5 9.5 9.5-9.5 1.1 1.1Z" />
				</svg>
			</div>
		</main>
	);
}

export default MainSection;
