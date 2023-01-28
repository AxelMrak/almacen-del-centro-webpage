import { lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import MainSection from "../../components/main/MainSection";
import { GuardaPampa } from "../../components/others/GuardaPampa";

const HistorySection = lazy(
	() => import("../../components/historySection/AboutSection")
);
const Products = lazy(() => import("../../components/products/Products"));
const Location = lazy(
	() => import("../../components/locationSection/Location")
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
