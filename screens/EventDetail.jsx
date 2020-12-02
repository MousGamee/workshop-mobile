import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable'

const EventDetail = ({ navigation, route}) => {
    const { item } = route.params
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.bkg_event}
                source={item.bkg_picture}
            >
            <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'white']}
                        style={{
                        height: 100,
                        width : '100%',
                        position: 'absolute',
                        bottom: 0,
                        }}
            />  
            <View style={{justifyContent : 'center',  flexDirection : "row", marginTop : 100}}>
                <Animatable.View 
                animation='fadeInLeft' delay={600} duration={500}
                style={styles.imageContainer}>
                    <Image 
                    borderRadius={10}
                    style={styles.imageEvent}
                    source={item.picture}
                    />
                </Animatable.View>
                <Animatable.View 
                animation='fadeInRight' delay={600} duration={500}
                style={{marginTop : 15}}>
                    <Text
                    numberOfLines={1}
                    style={{color : 'white', fontWeight : 'bold', fontSize : 15}}>{item.name}</Text>
                    
                </Animatable.View>
            </View>
            </ImageBackground>
            <View style={{paddingHorizontal : 10}}>
                <View style={{marginTop : 15}}>
                    <Text>{item.overview}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default EventDetail

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    bkg_event : {
        width : '100%',
        height : 380,
        resizeMode : "cover"
    },
    imageContainer : {
        width : 150,
        height : 150,
        backgroundColor : 'white',
        padding : 3,
        borderRadius : 10,
        marginRight : 20
    },
    imageEvent : {
        width : null,
        height : null,
        resizeMode : "cover",
        flex : 1,
        
    }
})
