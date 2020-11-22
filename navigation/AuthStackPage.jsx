import React from 'react'
import ForgetPassword from '../screens/ForgetPassword'
import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator()
const AuthStackPage = () => (
    <AuthStack.Navigator
    initialRouteName="SignIn"
      screenOptions={{
        headerShown : false
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  )
  

export default AuthStackPage
