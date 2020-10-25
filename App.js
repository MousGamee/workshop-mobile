import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//Screens
import Home from './screens/Home'
import Profile from './screens/Profile'
import Search from './screens/Search'
import Favoris from './screens/Favoris'
import ForgetPassword from './screens/ForgetPassword'
import Login from './screens/Login'
import SignIn from './screens/SignIn'
import Details from './screens/Details'
import Help from './screens/Help'
import MyClass from './screens/MyClass'
import MyAccount from './screens/MyAccount'
import Notification from './screens/Notification'


import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Navigation
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
} from 'react-native';





const AuthStack = createStackNavigator()
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
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
    <ProfileStack.Screen name="Help" component={Help} /> 
    <ProfileStack.Screen name="Notification" component={Notification} /> 
  </ProfileStack.Navigator>
)

const AuthStackPage = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
  </AuthStack.Navigator>
)


const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  return(
    <NavigationContainer>
      {
        isLogin ? (
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
      <Tab.Screen name="Recherche" component={Search} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Profil" component={ProfileStackPage} />
    </Tab.Navigator>
        ) : (
          <AuthStackPage />
        )
      }
 

    
    </NavigationContainer>
    

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
