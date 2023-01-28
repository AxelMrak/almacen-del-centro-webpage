import { lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Location from "../../components/locationSection/Location";
import MainSection from "../../components/main/MainSection";
import { GuardaPampa } from "../../components/others/GuardaPampa";
import Products from "../../components/products/Products";

const HistorySection = lazy(
	() => import("../../components/historySection/AboutSection")
);

const ContactSection = lazy(
	() => import("../../components/contactAndHoursSection/ContactSection")
);
/**
 * * Page component
 * ? Is the principal page of the website
 * @returns HomePage
 */
const Homepage = () => (
	<>
		<Suspense fallback={<Skeleton count={6}/>}>
			{/* Main section */}
			<MainSection />
			{/* About section */}
			<HistorySection />
			<GuardaPampa />
			{/* Products section */}
			<Products isMainPage={true} />
			{/* Map section */}
			<GuardaPampa />
			<Location />
			<GuardaPampa />
			{/* Contact section */}
			<ContactSection />
		</Suspense>
	</>
);

export default Homepage;
