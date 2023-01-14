import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
				{/* <Route path="/" element={<HomePage />} /> */}
				{/* TODO: Historia */}
				<Route path="/historia" element={<h1>Pendiente...</h1>} />
				{/* TODO: Productos */}
				<Route path="/productos" element={<h1>Pendiente...</h1>} />
				{/* Ubicacion y contacto */}
				<Route path="/contacto" element={<h1>Pendiente...</h1>} />
				{/* 404 */}
				<Route path="*" element={<h1>Pendiente...</h1>} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
