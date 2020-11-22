import React, { useContext } from 'react'
//Screens
import AuthStackPage from './AuthStackPage'
//Context
import { AuthContext } from '../context/AuthContext'
import ClassContextProvider from '../context/ClassContext'
//Navigation
import {  NavigationContainer } from '@react-navigation/native';
import MainBotomTab from './MainBotomTab'
import 'react-native-gesture-handler';
const MainNavigation = () => {

    const { islogin } = useContext(AuthContext)
    return (
        <NavigationContainer>
      {
        islogin ? (
        <ClassContextProvider>
            <MainBotomTab />
        </ClassContextProvider>
        ) : (
          <AuthStackPage />
        )
      }    
    </NavigationContainer>
    )
}
export default MainNavigation
