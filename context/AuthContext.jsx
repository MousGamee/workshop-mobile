import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = props => {
    const [islogin, setIsLogin] = useState(false)

    const signIn = () => {  
        setIsLogin(!islogin)  
    }

    const logOut = () => {
        setIsLogin(!islogin)
    }

    return(
        <AuthContext.Provider value={{islogin, logOut, signIn}} >
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider

