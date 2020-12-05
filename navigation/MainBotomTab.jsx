import React from 'react'
import Favoris from '../screens/Favoris'
import HomeStackPage from './HomeStackPage'
import ProfileStackPage from './ProfileStackPage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainBotomTab = () => {
  return (
            <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Favoris') {
                iconName = focused ? 'ios-list' : 'ios-list';
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
        inactiveTintColor : 'gray',
        keyboardHidesTabBar : true,
        style : {
        paddingHorizontal : 40
        }

        }}
        >
        <Tab.Screen name="Home" component={HomeStackPage} />
        <Tab.Screen name="Favoris" component={Favoris} />
        <Tab.Screen name="Profil" component={ProfileStackPage} />
      </Tab.Navigator>
  )
}

export default MainBotomTab
