import React, { createContext, useState } from 'react'
import { user } from '../data'

export const AuthContext = createContext()

const AuthContextProvider = props => {
    const [islogin, setIsLogin] = useState(true)
    const [users, setUsers] = useState(user)

    const signIn = (usr, mdp) => {  
        if(users.userName.toLowerCase() === usr.toLowerCase() && users.password === mdp){
            setIsLogin(!islogin)
            }else if(users.userName.toLowerCase() != usr.toLowerCase()){
                alert('identifiant incorrect')
            }else if(users.password != mdp) alert('mot de passe incorect')
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

