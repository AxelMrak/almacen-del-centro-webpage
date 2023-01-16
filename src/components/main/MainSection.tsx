import styles from "../main/mainSection.module.css";
import arrow from "../../assets/svg/expand.svg";
import { useEffect, useState } from "react";

function MainSection() {
	/**
	 * * State defines when the div disappears. Type Boolean.
	 */
	const [show, setShow] = useState<boolean>();

	/**
	 * ? When the top's page is near of arrowMainContainer this dissapear.
	 */
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > window.innerHeight * 0.6) {
				setShow(false);
			} else {
				setShow(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className={styles.mainSectionContainer}>
			<h1>Almacén del Centro</h1>
			{/* Condition: If show is true the div is rendered  */}
			{ show ? (
				<div className={styles.arrowMainContainer}>
					<p>Conócenos</p>
					<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
						<path d="M24 29.4 13.4 18.8l1.1-1.1 9.5 9.5 9.5-9.5 1.1 1.1Z" />
					</svg>
				</div>
			) : null}
		</main>
	);
}

export default MainSection;
