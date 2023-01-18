import React from "react";
import HistorySection from "../../components/historySection/AboutSection";
import Location from "../../components/locationSection/Location";
import MainSection from "../../components/main/MainSection";
import { GuardaPampa } from "../../components/others/GuardaPampa";
import Products from "../../components/products/Products";

function Homepage() {
	return (
		<>
			<MainSection />
			<HistorySection />
			<Products isMainPage={true} />
			<Location />
		</>
	);
}

export default Homepage;
