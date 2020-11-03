import React, { useContext, useState } from 'react'
//Screens
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import SearchResult from '../screens/SearchResult'
import Favoris from '../screens/Favoris'
import ForgetPassword from '../screens/ForgetPassword'
import Login from '../screens/Login'
import SignIn from '../screens/SignIn'
import Details from '../screens/Details'
import Help from '../screens/Help'
import MyClass from '../screens/MyClass'
import MyPurchase from '../screens/MyPurchase'
import MyAccount from '../screens/MyAccount'
import Notification from '../screens/Notification'


//Context

import { AuthContext } from '../context/AuthContext'
import ClassContextProvider from '../context/ClassContext'

import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Navigation
import {  NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//StackNavigation

const AuthStack = createStackNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const SearchStack = createStackNavigator()
const Tab = createBottomTabNavigator();

const HomeStackPage = () => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown : false
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
)

const ProfileStackPage = () => (
  <ProfileStack.Navigator
  initialRouteName="Profile"
  screenOptions={{
    headerShown : false
  }}>
    <ProfileStack.Screen name="Profile" component={Profile} /> 
    <ProfileStack.Screen name="MyAccount" component={MyAccount} /> 
    <ProfileStack.Screen name="MyClass" component={MyClass} /> 
    <ProfileStack.Screen name="MyPurchase" component={MyPurchase} /> 
    <ProfileStack.Screen name="Help" component={Help} /> 
    <ProfileStack.Screen name="Notification" component={Notification} /> 
  </ProfileStack.Navigator>
)

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

const SearchStackPage = () => (
  <SearchStack.Navigator
    initialRouteName="Search"
    screenOptions={{
      headerShown : false
    }}
  >
     <SearchStack.Screen name="Search" component={Search} />
     <SearchStack.Screen name="SearchResult" component={SearchResult} />
  </SearchStack.Navigator>
)


const MainNavigation = () => {

    const { islogin } = useContext(AuthContext)

    return (
        <NavigationContainer>
      {
        islogin ? (
        <ClassContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
              if (route.name === 'Recherche') {
                iconName = focused
                  ? 'ios-search'
                  : 'ios-search';
              } else if (route.name === 'Favoris') {
                iconName = focused ? 'ios-heart' : 'ios-heart';
              } else if (route.name === 'Profil'){
                iconName = focused ? 'ios-person' : 'ios-person';
              }
              else if (route.name === 'Home'){
                iconName = focused ? 'ios-home' : 'ios-home';
              }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1D90E8',
      inactiveTintColor : 'gray'
    }}
    >
      <Tab.Screen name="Home" component={HomeStackPage} />
      <Tab.Screen name="Recherche" component={SearchStackPage} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Profil" component={ProfileStackPage} />
    </Tab.Navigator>
        </ClassContextProvider>
        ) : (
          <AuthStackPage />
        )
      }    
    </NavigationContainer>
    )
}
export default MainNavigation
