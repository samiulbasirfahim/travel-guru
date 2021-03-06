import React, { useState } from "react"
import "../Login/Login.css"
import {
	useAuthState,
	useCreateUserWithEmailAndPassword,
	useSignInWithFacebook,
	useSignInWithGoogle,
	useUpdateProfile,
} from "react-firebase-hooks/auth"
import googleLogo from "../../images/google.png"
import facebookLogo from "../../images/fb.png"
import auth from "../../firebase.init"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from "@mui/material"

const Register = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [rePassword, setRePassword] = useState("")
	const [signInWithGoogle] = useSignInWithGoogle(auth)
	const [SignInWithFacebook] = useSignInWithFacebook(auth)
	const [updateProfile] = useUpdateProfile(auth)
	const [error, setError] = useState("")
	const [user] = useAuthState(auth)
	const navigate = useNavigate()
	const [createUserWithEmailAndPassword, userSu] =
		useCreateUserWithEmailAndPassword(auth)
	const handleSignUp = (e) => {
		e.preventDefault()

		if (password !== rePassword) {
			setError("Password mismatch")
		} else if (password.length < 7) {
			setError("Password too short")
		} else {
			createUserWithEmailAndPassword(email, password)
			
		}
	}
	if (user?.email) {
		navigate("/")
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSignUp}>
				<h1>Create an account</h1>
				<input
					onBlur={(e) => setFirstName(e.target.value)}
					placeholder="First Name"
					type="text"
					name="first-name"
					id="first-name"
					required
				/>
				<input
					onBlur={(e) => setLastName(e.target.value)}
					placeholder="Last Name"
					type="text"
					name="last-name"
					id="last-name"
					required
				/>
				<input
					onBlur={(e) => setEmail(e.target.value)}
					placeholder="Username or Email"
					type="email"
					name="email"
					id="email"
					required
				/>
				<input
					onBlur={(e) => setPassword(e.target.value)}
					placeholder="Password"
					type="password"
					name="password"
					id="password"
					required
				/>
				<input
					onBlur={(e) => setRePassword(e.target.value)}
					placeholder="Confirm Password"
					type="Password"
					name="rePassword"
					id="rePassword"
					required
				/>
				<div className="input-container">
					<p>
						<input type="checkbox" name="checkbox" id="checkbox" />
						Remember me?
					</p>
					<p className="forgot-password">Forgot password?</p>
				</div>
				{error && <Alert severity="error">{error}</Alert>}

				<input type="submit" value="Create an account" id="login-btn" />
				<div className="create-account-redirect">
					<p> Don't have an account?</p>
					<Link to="/login">Create an account</Link>
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

export default Register
