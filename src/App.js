import "./App.css"
import Header from "./shared/Header/Header"
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/login" element={<Login></Login>}></Route>
			</Routes>
		</div>
	)
}

export default App
