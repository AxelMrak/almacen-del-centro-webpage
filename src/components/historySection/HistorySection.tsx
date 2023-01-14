import React from "react";
import styles from "../historySection/historySection.module.css";
import { GuardaPampa } from "../others/GuardaPampa";
import antiquePhoto from "../../assets/img/history-img.webp";

function HistorySection() {
	return (
		<section className={styles.historyMainContainer}>
			<GuardaPampa />
			<h2>Sobre nosotros</h2>
			<div className={styles.ourHistoryContainer}>
				<div className={styles.ourHistoryContainerTexts}>
					<h3>Nuestra historia</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
						molestias facere maxime, facilis ullam neque nemo tempora in harum,
						praesentium adipisci quos dolor possimus consectetur!
					</p>
				</div>
				<img
					src={antiquePhoto}
					alt="Frente del almacen antes de nuestra adquisición del mismo, en ese momento llevaba el nombre de Viejo Almacen."
				/>
			</div>
		</section>
	);
}

export default HistorySection;
