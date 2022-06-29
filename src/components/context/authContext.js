import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth } from './fire'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error('there is not auth provider')
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  //crete new User
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  //login with user and password
  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  //login with google
  const signinWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  // logout
  const signout = () => {
    signOut(auth)
  }

  const resetPassword = (email) => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <authContext.Provider
      value={{
        resetPassword,
        signinWithGoogle,
        loading,
        signup,
        signin,
        user,
        signout,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
