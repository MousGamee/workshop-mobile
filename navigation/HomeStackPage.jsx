import React from 'react'
import { Image, TextInput, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Details from '../screens/Details'
import Search from '../screens/Search'

import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeStack = createStackNavigator()

const HomeStackPage = ({ navigation }) => {

    return (
    <HomeStack.Navigator
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={Home} 
        options={{
          headerTitle : false,
          headerStyle : {
            backgroundColor : '#72CCEC',
          },
          headerLeft : () => (
            <Image
                style={{width : 100, height : 50, marginLeft : 20, marginTop :10 }}
                source={require('../assets/Workshop.png')}
            />
          ),
          headerRight : () => (
            <Ionicons name='ios-search' size={25} color='#ffffff' style={{marginRight : 20, padding : 10}} onPress={() => navigation.navigate('Search')}/>
          ) 
        }}/>
      <HomeStack.Screen name="Details" component={Details} options={{
        headerTitle : false,
        headerBackTitleVisible : false,
        headerTransparent : true, 
        headerTintColor : '#ffffff',
      }}/>
      <HomeStack.Screen name="Search" component={Search} options={{
        headerTitle : false,
        headerTintColor : '#ffffff',
        headerRight : () => (
          <TextInput 
          style={styles.SearchBar} 
          placeholder='Que recherches tu ?' 
          onSubmitEditing={() => alert('executer la recherche')}
          />
        ),
        headerStyle : {
          backgroundColor : '#72CCEC',
        }
  
      }}/>
    </HomeStack.Navigator>
    )
}

export default HomeStackPage

const styles = StyleSheet.create({
  SearchBar : {
      width : 300,
      height : 40,
      marginRight : 15,
      borderRadius : 10,
      backgroundColor : 'white',
      borderColor : 'rgba(0, 0, 0, .2)',
      borderWidth : 1,
      paddingHorizontal : 15
    }
})
