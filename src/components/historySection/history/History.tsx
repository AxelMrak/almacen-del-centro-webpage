import styles from "../history/history.module.css";
import antiquePhoto from "../../../assets/img/history-img.webp";

function History() {
	return (
		<div className={styles.ourHistoryContainer}>
			<div className={styles.ourHistoryContainerTexts}>
				<h3>Nuestra historia</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias
					facere maxime, facilis ullam neque nemo tempora in harum, praesentium
					adipisci quos dolor possimus consectetur!
				</p>
			</div>
			<img
				src={antiquePhoto}
				width="500"
				height="auto"
				alt="Frente del almacen antes de nuestra adquisición del mismo, en ese momento llevaba el nombre de Viejo Almacen."
			/>
		</div>
	);
}

export default History;
