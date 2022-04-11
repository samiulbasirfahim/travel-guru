import "./App.css"
import Header from "./shared/Header/Header"
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import RecquireAuth from "./RecquireAuth/RecquireAuth"
import Destination from "./Pages/Destination/Destination"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/destination"
					element={
						<RecquireAuth>
							<Destination></Destination>
						</RecquireAuth>
					}
				></Route>
			</Routes>
		</div>
	)
}

export default App
