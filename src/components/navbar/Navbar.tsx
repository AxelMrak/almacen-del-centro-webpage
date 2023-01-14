import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/navbar.module.css";

interface Props {
	desktop: boolean;
}
/**
 * ? Navbar global component
 * @param Desktop indicates if the app is running in Desktop or mobile. Desktop is provided from Header component.
 * @returns Navbar
 */
const Navbar: FC<Props> = ({ desktop }) => {
	return (
		<nav className={desktop ? styles.navDesktop : styles.navMobile}>
			<Link className={styles.navItem} to="/">
				Inicio
			</Link>
			<Link className={styles.navItem} to="/inicio">
				Nuestra historia
			</Link>
			<Link className={styles.navItem} to="/inicio">
				Productos
			</Link>
			<Link className={styles.navItem} to="/inicio">
				Contacto
			</Link>
		</nav>
	);
};

export default Navbar;
