import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Help from '../screens/Help'
import MyClass from '../screens/MyClass'
import Profile from '../screens/Profile'
import MyAccount from '../screens/MyAccount'
import Notification from '../screens/Notification'

const ProfileStack = createStackNavigator()

const ProfileStackPage = () => (
    <ProfileStack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown : false
    }}>
      <ProfileStack.Screen name="Profile" component={Profile} /> 
      <ProfileStack.Screen name="MyAccount" component={MyAccount} /> 
      <ProfileStack.Screen name="MyClass" component={MyClass} /> 
      <ProfileStack.Screen name="Help" component={Help} /> 
      <ProfileStack.Screen name="Notification" component={Notification} /> 
    </ProfileStack.Navigator>
  )

export default ProfileStackPage
