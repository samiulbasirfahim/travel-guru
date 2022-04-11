import React from "react"
import "./Login.css"

const Login = () => {
	return (
		<div className="login-container">
			<form>
				<h1>Login</h1>
				<input
					placeholder="Username or Email"
					type="email"
					name="email"
					id="email"
				/>
				<input
					placeholder="Password"
					type="password"
					name="password"
					id="password"
				/>
				<div className="input-container">
					<p>
						<input type="checkbox" name="checkbox" id="checkbox" />{" "}
						Remember me?
					</p>
					<p className="forgot-password">Forgot password?</p>
				</div>
				<input type="submit" value="Login" id="login-btn" />
				<div className="create-account-redirect">
					<p>Don't have an account?</p>
					<p>Create an account</p>
				</div>
			</form>
		</div>
	)
}

export default Login
