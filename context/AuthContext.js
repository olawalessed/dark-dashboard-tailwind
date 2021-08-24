import { createContext, useEffect, useState } from 'react';
import NEXT_URL from '@/config/index'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)


    //Methods

    //Register
    const register = async (user) => {
        console.log(user)
    }
    //Login
    const login = async ({email, password}) => {
      //console.log({email, password});
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await res.json()

        console.log(data)

        if (res.ok) {

        }
    }
    //Logout
    const logout = async () => {
      console.log('Logout');
    }

    //Check user logged in
    const checkUserLoggedIn = async (user) => {
      console.log('Check');
    }


    return (
        <AuthContext.Provider value={{user,error,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext