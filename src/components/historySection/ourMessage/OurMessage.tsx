import testPhoto from "../../../assets/img/test-photo.jpeg";
import styles from "../ourMessage/message.module.css";

function OurMessage() {
	return (
		<div className={styles.messageMainContainer}>
			<h3>Un mensaje</h3>
			<img
				src={testPhoto}
				width="100"
				height="100"
				alt="Foto de Federico, uno de los propietarios y fundadores"
			/>
			<q className={styles.quote}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, rerum
				odio. Aut, ea dolores sequi eum assumenda et asperiores veniam.
			</q>
			<p className={styles.nameQuote}>Federico Perez - Fundador</p>
		</div>
	);
}

export default OurMessage;
