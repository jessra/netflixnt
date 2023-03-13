import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../views/Inicio";
import Navbar from "../components/Navbar";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Inicio />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
