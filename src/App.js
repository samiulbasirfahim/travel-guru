import "./App.css"
import Header from "./shared/Header/Header"
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Register/>}></Route>
			</Routes>
		</div>
	)
}

export default App
