import React from "react";
import HistorySection from "../../components/historySection/AboutSection";
import MainSection from "../../components/main/MainSection";
import { GuardaPampa } from "../../components/others/GuardaPampa";
import Products from "../../components/products/Products";

function Homepage() {
	return (
		<>
			<MainSection />
			<HistorySection />
			<Products />
		</>
	);
}

export default Homepage;
