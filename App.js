import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Search from './screens/Search'
import 'react-native-gesture-handler';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor : 'gray'
    }}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
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
