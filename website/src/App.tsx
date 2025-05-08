import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Contract } from "./pages/contract/Contract";
import DummyGrid from "./pages/contract/NewChecklist";
import Home from "./pages/Home";
import { Passport } from "./pages/Passport";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/landing" element={<LandingPage />} />
				<Route path="/contract" element={<Contract />} />
				<Route path="/new-checklist" element={<DummyGrid />} />
				<Route path="/passport" element={<Passport />} />
			</Routes>
		</BrowserRouter>
	);
}
