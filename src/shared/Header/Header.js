import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { NavLink } from "react-router-dom"
import auth from "../../firebase.init"
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
	const [user, loading, error] = useAuthState(auth)
	console.log(user);
	return (
		<div className="navigation-container">
			<NavLink to="/">
				<img src={logo} alt="" />
			</NavLink>
			<nav>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "active-nav" : ""
					}}
					to={"/"}
				>
					News
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "active-nav" : ""
					}}
					to="/destination"
				>
					{" "}
					Destination
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "active-nav" : ""
					}}
					to="/blog"
				>
					Blog
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return isActive ? "active-nav" : ""
					}}
					to="/contact"
				>
					Contact
				</NavLink>
				{!user ? (
					<NavLink
						className={({ isActive }) => {
							return isActive ? "active-nav" : ""
						}}
						to="/login"
					>
						Login
					</NavLink>
				) : (
					<button onClick={() => signOut(auth)}>Sign Out</button>
				)}
			</nav>
		</div>
	)
}

export default Header
