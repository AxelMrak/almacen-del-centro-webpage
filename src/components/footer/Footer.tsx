import logo from "../../assets/img/logo.webp";
import facebook from "../../assets/svg/facebook96.svg";
import whatsapp from "../../assets/svg/whatsapp96.svg";
import phone from "../../assets/svg/phone.svg";
import styles from "../footer/footer.module.css";

/**
 * * Component global footer
 * ? This is visible in all app
 * @returns Component footer
 */
function Footer() {
	return (
		<footer className={styles.footerMain}>
			<img src={logo} width="100" height="100" alt="Logo Almacen del Centro" loading="lazy"/>
			<div className={styles.address}>
				<p>Lavalle 100, Villa Mercedes, San Luis</p>
			</div>
			<div className={styles.socialMedia}>
				<a
					href="https://www.facebook.com/AlmacendelCentro/"
					target="_blank"
					rel="noopener noreferrer"
					title="Estamos en Facebook"
				>
					<img
						src={facebook}
						width="70"
						height="70"
						alt="Encuentrenos en Facebook" loading="lazy"
					/>
				</a>
				<a
					href={
						"https://wa.me/542657584728?text=Hola%2C%20me%20comunico%20desde%20su%20página%20web."
					}
					target="_blank"
					rel="noreferrer"
					title="Comunicate con nosotros"
				>
					<img
						src={whatsapp}
						width="70"
						height="70"
						alt="Comuniquese en WhatsApp" loading="lazy"
					/>
				</a>
				<a
					href="tel:+5402657421228"
					target="_blank"
					rel="noreferrer"
					title="Llamanos"
				>
					<img
						src={phone}
						width="50"
						height="50"
						alt="Comuniquese a nuestro telefono" loading="lazy"
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
