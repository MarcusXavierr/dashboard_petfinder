import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Index from "./Components/DashBoard/Index";
import FormIndex from "./Components/forms/Index";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={<FormIndex />}
				/>
				<Route
					path='/dashboard'
					element={<Index />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
