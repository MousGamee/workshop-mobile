import React, { createContext, useState } from 'react'
import { user } from '../data'

export const AuthContext = createContext()

const AuthContextProvider = props => {
    const [islogin, setIsLogin] = useState(false)
    const [users, setUsers] = useState(user)

    const signIn = () => {  
        setIsLogin(!islogin)  
    }

    const logOut = () => {
        setIsLogin(!islogin)
    }

    return(
        <AuthContext.Provider value={{islogin, logOut, signIn, users}} >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider

