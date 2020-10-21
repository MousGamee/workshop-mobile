import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Search from './screens/Search'
import Option from './screens/Option'
import Login from './screens/Login'
import SignIn from './screens/SignIn'
import 'react-native-gesture-handler';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
     <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Recherche') {
          iconName = focused
            ? 'ios-search'
            : 'ios-search';
        } else if (route.name === 'Favoris') {
          iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
        } else if (route.name === 'Profil'){
          iconName = focused ? 'ios-person' : 'ios-person';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}

    tabBarOptions={{
      activeTintColor: '#1D90E8',
      inactiveTintColor : 'gray'
    }}
    >
      <Tab.Screen name="Recherche" component={Search} />
      <Tab.Screen name="Favoris" component={Home} />
      <Tab.Screen name="Profil" component={Profile} />
    </Tab.Navigator> 
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
