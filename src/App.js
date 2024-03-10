import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Teams from "./components/Teams";
import Anveshan from "./components/Anveshan";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/" element={<Hero />} />
			<Route path="/events" element={<Events />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/teams" element={<Teams />} />
			<Route path="/anveshan" element={<Anveshan />} />
		</Routes>
	);
}

export default App;
