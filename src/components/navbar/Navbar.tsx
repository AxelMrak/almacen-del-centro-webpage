import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/navbar.module.css";

/**
 * ? Interface who indicates types of properties in the component
 */
interface Props {
	desktop: boolean;
}
/**
 * ? Navbar global component
 * @param Desktop indicates if the app is running in Desktop or mobile. Desktop is provided from Header component.
 * @returns Navbar component
 */
const Navbar: FC<Props> = ({ desktop }) => {
	return (
		<nav className={desktop ? styles.navDesktop : styles.navMobile}>
			<Link className={styles.navItem} to="/">
				Inicio
			</Link>
			<Link className={styles.navItem} to="/historia">
				Nuestra historia
			</Link>
			<Link className={styles.navItem} to="/productos">
				Productos
			</Link>
			<Link className={styles.navItem} to="/contacto">
				Contacto
			</Link>
		</nav>
	);
};

export default Navbar;
