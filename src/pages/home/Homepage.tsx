import ContactSection from "../../components/contactAndHoursSection/ContactSection";
import HistorySection from "../../components/historySection/AboutSection";
import Location from "../../components/locationSection/Location";
import MainSection from "../../components/main/MainSection";
import Products from "../../components/products/Products";

function Homepage() {
	return (
		<>
			<MainSection />
			<HistorySection />
			<Products isMainPage={true} />
			<Location />
			<ContactSection />
		</>
	);
}

export default Homepage;
