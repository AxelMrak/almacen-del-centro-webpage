import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "../../pages/404/NotFoundPage";
import ContactPage from "../../pages/contactPage/ContactPage";
import HistoryPage from "../../pages/history/HistoryPage";
import Homepage from "../../pages/home/Homepage";
import ProductsPage from "../../pages/products/ProductsPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import WhatsappGlobal from "../others/WhatsappGlobal";
import "./App.css";

/**
 * * Main Component who contains all app
 * ? Shows header, page in route and footer
 * @returns Main Component
 */
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
			</div>
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
		</Router>
	);
}

export default App;
