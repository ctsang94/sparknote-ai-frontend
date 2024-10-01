import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './LoginPage.scss'

const LoginPage = ({ isSignIn, setIsSignIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
        setIsSignIn(true)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="login_email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="login_password">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="login_buttons">
                    <button type="submit">Login</button>
                    <button type="submit" onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
