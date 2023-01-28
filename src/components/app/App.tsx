import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Spinner } from "../others/Spinner";
import WhatsappGlobal from "../others/WhatsappGlobal";
import "./App.css";

const Homepage = lazy(() => import("../../pages/home/Homepage"));
const HistoryPage = lazy(() => import("../../pages/history/HistoryPage"));
const ProductsPage = lazy(() => import("../../pages/products/ProductsPage"));
const ContactPage = lazy(() => import("../../pages/contactPage/ContactPage"));
const NotFoundPage = lazy(() => import("../../pages/404/NotFoundPage"));
/**
 * * Main Component who contains all app
 * ? Shows header, page in route and footer
 * @returns Main Component
 */
function App() {
	return (
		<div className="App">
			<Router>
				<Suspense fallback={<Spinner />}>
					<Header />
					<Routes>
						{/*  HomePage */}
						<Route path="/" element={<Homepage />} />
						{/* Historia */}
						<Route path="/historia" element={<HistoryPage />} />
						{/* Productos */}
						<Route path="/productos" element={<ProductsPage />} />
						{/* Ubicacion y contacto */}
						<Route path="/contacto" element={<ContactPage />} />
						{/* 404 */}
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<WhatsappGlobal />
					<Footer />
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
