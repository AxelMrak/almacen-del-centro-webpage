import styles from "../history/history.module.css";
import antiquePhoto from "../../../assets/img/history-img.webp";
/**
 * This component will be included in About
 * @returns History sub-section component
 * TODO: I will review the text
 */
function History() {
	return (
		<div className={styles.ourHistoryContainer}>
			<div className={styles.ourHistoryContainerTexts}>
				<h3>Nuestra historia</h3>
				<p>
					El Almacén del Centro es mucho más que un simple negocio, es una
					historia de familia y dedicación. Todo comenzó hace varios años,
					cuando nuestro padre adquirió un viejo almacen en el centro de San
					Luis, con el sueño de convertirlo en un lugar que reflejara nuestra
					tradición.
				</p>
				<p>
					Fue un arduo trabajo, lleno de sacrificios y dedicación, pero
					finalmente logramos darle vida a este lugar.
				</p>
				<p>
					Pero el verdadero corazón de este lugar son las personas que lo
					hicimos posible. Somos una familia unida y apasionada, cada uno
					aportando nuestros propios conocimientos y habilidades para hacer de
					este lugar algo especial.
				</p>
				<p>
					Es un honor y una alegría para nosotros poder continuar con esta
					tradición familiar, y esperamos darle la bienvenida a nuestra familia
					a todos los que nos visiten.
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
