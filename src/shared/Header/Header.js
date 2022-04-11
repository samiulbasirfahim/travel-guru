import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
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
					to={'/'}
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
				<NavLink
					className={({ isActive }) => {
						return isActive ? "active-nav" : ""
					}}
					to="/login"
				>
					Login
				</NavLink>
			</nav>
		</div>
	)
}

export default Header
