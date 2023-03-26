import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/login";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

