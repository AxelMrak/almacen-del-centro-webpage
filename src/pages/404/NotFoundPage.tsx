import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import styles from "../../pages/404/notFound.module.css";

function NotFoundPage() {
	return (
		<div className={styles.notFoundContainer}>
			<img src={logo} alt="Logo de Almacen del centro" />
			<h2>404: Página no encontrada</h2>
			<Link to="/">Volver a inicio</Link>
		</div>
	);
}

export default NotFoundPage;
