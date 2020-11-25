import React from 'react'
import { StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TeacherClass from '../components/TeacherClass'
import TeacherReview from '../components/TeacherReview'
import TeacherPicture from '../components/TeacherPicture'

const Tab = createMaterialTopTabNavigator()

const TopTabNavigation = () => {
    return (
        <Tab.Navigator style={{
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
            <Tab.Screen name="Resumé" component={TeacherReview} />
            <Tab.Screen name="Cours" component={TeacherClass} />
            <Tab.Screen name="Photos" component={TeacherPicture} />
        </Tab.Navigator>
    )
}

export default TopTabNavigation

const styles = StyleSheet.create({})
