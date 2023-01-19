import ContactSection from "../../components/contactAndHoursSection/ContactSection";
import HistorySection from "../../components/historySection/AboutSection";
import Location from "../../components/locationSection/Location";
import MainSection from "../../components/main/MainSection";
import Products from "../../components/products/Products";

/**
 * * Page component
 * ? Is the principal page of the website
 * @returns HomePage
 */
const Homepage = () => (
	<>
		{/* Main section */}
		<MainSection />
		{/* About section */}
		<HistorySection />
		{/* Products section */}
		<Products isMainPage={true} />
		{/* Map section */}
		<Location />
		{/* Contact section */}
		<ContactSection />
	</>
);

export default Homepage;
