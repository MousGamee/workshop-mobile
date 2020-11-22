import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ResultClass from '../screens/ResultClass'
import ResultTeacher from '../screens/ResultTeacher'
import ResultEvent from '../screens/ResultEvent'

const Tab = createMaterialTopTabNavigator()

const TopTabNavigation = () => {
    return (
        <Tab.Navigator style={{
            paddingRight : 100,
            backgroundColor : 'white'
        }}
        tabBarOptions={{
            style : {
                elevation : 0,
                shadowOpacity : 0,
                borderWidth : 0,
            }
        }}
        >
            <Tab.Screen name="Cours" component={ResultClass} />
            <Tab.Screen name="Prof" component={ResultTeacher} />
            <Tab.Screen name="Event" component={ResultEvent} />
        </Tab.Navigator>
    )
}

export default TopTabNavigation

const styles = StyleSheet.create({})
