import styles from "../ourMessage/message.module.css";

/**
 * * Sub-section component. Son of About/History section
 * @returns Message sub-section component
 */
// TODO: Change texts
function OurMessage() {
	return (
		<div className={styles.messageMainContainer}>
			<h3>Un mensaje</h3>
			<q className={styles.quote}>
				¡Hola! En Almacén del Centro, una empresa familiar con raíces en
				San Luis, Argentina. Podemos ofrecerte desde cueros y cuchillos de alta
				calidad hasta objetos decorativos y souvenirs.
				Además, en nuestra tienda, podrás disfrutar de una selección de
				antigüedades relacionadas con los gauchos que podrás observar y aprender
				sobre su historia y significado. No sólo es una tienda sino un lugar
				donde podrás sumergirte en la verdadera esencia de la cultura gaucha y
				la historia de San Luis. ¡Te esperamos para que te unas a nuestra
				familia y vivas una experiencia única en Almacén del Centro!
			</q>
		</div>
	);
}

export default OurMessage;
