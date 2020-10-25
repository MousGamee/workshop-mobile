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
const Tab = createBottomTabNavigator();

const HomeStackPage = () => (
  <HomeStack.Navigator
    initialRouteName="Details"
    screenOptions={{
      headerShown : false
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
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
      <Tab.Screen name="Profil" component={Profile} />
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
