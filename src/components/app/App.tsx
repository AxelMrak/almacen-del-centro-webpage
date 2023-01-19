import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "../../pages/404/NotFoundPage";
import ContactPage from "../../pages/contactPage/ContactPage";
import HistoryPage from "../../pages/history/HistoryPage";
import Homepage from "../../pages/home/Homepage";
import ProductsPage from "../../pages/products/ProductsPage";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
			</div>
			<Routes>
				{/* TODO:  HomePage */}
				<Route path="/" element={<Homepage />} />
				{/* TODO: Historia */}
				<Route path="/historia" element={<HistoryPage />} />
				{/* TODO: Productos */}
				<Route path="/productos" element={<ProductsPage />} />
				{/* Ubicacion y contacto */}
				<Route path="/contacto" element={<ContactPage />} />
				{/* 404 */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
