import React from 'react'
import { useState, useEffect } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])
    return (
        <div>
            {authUser ? (
                <p>Signed in as {authUser.email}</p>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    )
}

export default AuthDetails
