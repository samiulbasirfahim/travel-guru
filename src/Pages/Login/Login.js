import React, { useState } from "react"
import "./Login.css"
import {
	useAuthState,
	useSignInWithFacebook,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth"
import googleLogo from "../../images/google.png"
import facebookLogo from "../../images/fb.png"
import auth from "../../firebase.init"
import { Link, useNavigate } from "react-router-dom"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [signInWithGoogle] = useSignInWithGoogle(auth)
	const [SignInWithFacebook] = useSignInWithFacebook(auth)
	const [createUserWithEmailAndPassword, error] =
		useCreateUserWithEmailAndPassword(auth)
	const navigate = useNavigate()
	const [user] = useAuthState(auth)
	if(user?.email){
		navigate('/')
	}

	const handleLogin = (event) => {
		event.preventDefault()
		createUserWithEmailAndPassword(email, password)
		console.log(error)
	}
	return (
		<div className="login-container">
			<form onSubmit={handleLogin}>
				<h1>Login</h1>
				<input
					onClick={(e) => setEmail(e.target.value)}
					placeholder="Username or Email"
					type="email"
					name="email"
					id="email"
					required
				/>
				<input
					onClick={(e) => setPassword(e.target.value)}
					placeholder="Password"
					type="password"
					name="password"
					id="password"
					required
				/>
				<div className="input-container">
					<p>
						<input type="checkbox" name="checkbox" id="checkbox" />
						Remember me?
					</p>
					<p className="forgot-password">Forgot password?</p>
				</div>
				<input type="submit" value="Login" id="login-btn" />
				<div className="create-account-redirect">
					<p> Don't have an account?</p>
					<Link to="/register">Create an account</Link>
				</div>
			</form>
			<p className="or">Or</p>
			<div className="button-container">
				<button onClick={() => signInWithGoogle()}>
					<img src={googleLogo} alt="" width="37" height="37" />
					Continue with Facebook
				</button>
				<button onClick={() => SignInWithFacebook()}>
					<img src={facebookLogo} alt="" width="37" height="37" />
					Continue with Google
				</button>
			</div>
		</div>
	)
}

export default Login
