import styles from "../header/header.module.css";
import logo from "../../assets/img/logo.png";
import navIco from "../../assets/svg/menu-ico.svg";
import Navbar from "../navbar/Navbar";
import { useEffect, useMemo, useState } from "react";

/** 
 * ? Global component Header 
 * @returns Header
 */
function Header() {

	// * State Screen's width
	const [width, setWidth] = useState<number>(0);
	//* State of Show nav or not
	const [isShowNav, setIsShowNav] = useState<boolean>(false);

	const memoizedWidth = useMemo((): number => innerWidth, [width]);

	//? When the component is mounted, we will obtain the width of screen and set it in the state.
	useEffect(() => {
		setWidth(memoizedWidth);
		if (width >= 700) {
			setIsShowNav(false);
		}
	});

	// Change state
	const showHiddenNav = () => setIsShowNav(!isShowNav);

	return (
		<header className={styles.mainContainer}>
			<div className={styles.logoContainer}>
				<img
					src={logo}
					width={width <= 700 ? "80" : "100"}
					height={width <= 700 ? "80" : "100"}
					alt="Nuestro imagotipo"
				/>
			</div>
			<div className="navContainer">
				{/* If the screen's width is less than 700 the navbar collapsible is hidden and We will can see the navbar normally */}
				{width <= 700 ? (
					<img
						src={navIco}
						width="40"
						height="40"
						onClick={showHiddenNav}
						alt="Ver menú"
					/>
				) : (
					<Navbar desktop={true} />
				)}
			</div>
			{/* If state showNav is true We will can see the collapsible */}
			{isShowNav === true ? <Navbar desktop={false} /> : null}
		</header>
	);
}

export default Header;
