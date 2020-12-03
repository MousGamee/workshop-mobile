import React, { useContext } from 'react'
import { Image, TextInput, StyleSheet, Dimensions, View } from 'react-native'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/Home'
import Details from '../screens/Details'
import Search from '../screens/Search'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ClassContext } from '../context/ClassContext'
import TeacherDetails from '../screens/TeacherDetails';
import EventDetail from '../screens/EventDetail';

const WIDTH = Dimensions.get('window').width

const HomeStack = createStackNavigator()

const HomeStackPage = ({ navigation }) => {
  const { search, textSearch, setTextSearch } = useContext(ClassContext)

    return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureDirection : "vertical-inverted",
        gestureEnabled : true,
        cardStyleInterpolator : 
          CardStyleInterpolators.forScaleFromCenterAndroid
      }}
    >
      <HomeStack.Screen name="Home" component={Home} 
        options={{
          headerTitle : false,
          headerTransparent : true,
          // headerStyle : {
          //   backgroundColor : '#72CCEC',
          // },
          headerLeft : () => (
            <View style={{width : 80, height : 80, marginLeft : 20, marginTop :35,}}>
              <Image
                style={{ resizeMode : "contain", flex : 1, width : null, height : null }}
                source={require('../assets/logo-w.png')}
            />
            </View>
            
          ),
          headerRight : () => (
            <Ionicons 
            name='ios-search' size={25} color='#ffffff' 
            style={{marginRight : 20, padding : 10}} onPress={() => navigation.navigate('Search')}/>
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
          placeholder='Cous, Event, Professeur...?' 
          onChangeText={(text) => search(text)}
          value={textSearch}
          />
        ),
        headerStyle : {
          backgroundColor : '#72CCEC',
        }
      }}/>
      <HomeStack.Screen name="Teacher" component={TeacherDetails} options={{
        headerTitle : false,
        headerBackTitleVisible : false,
        headerTransparent : true, 
        headerTintColor : '#72CCEC',
      }}/>

      <HomeStack.Screen name="EventDetail" component={EventDetail} options={{
        headerTitle : false,
        headerBackTitleVisible : false,
        headerTransparent : true,
        headerTintColor : '#FFFFFF',
      }}/>
      
    </HomeStack.Navigator>
    )
}

export default HomeStackPage

const styles = StyleSheet.create({
  SearchBar : {
      width : WIDTH -60,
      height : 40,
      marginRight : 15,
      borderRadius : 10,
      backgroundColor : 'white',
      borderColor : 'rgba(0, 0, 0, .2)',
      borderWidth : 1,
      paddingHorizontal : 15
    }
})
