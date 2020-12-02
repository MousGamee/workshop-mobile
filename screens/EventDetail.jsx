import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

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
            <View>
                <View>

                </View>
                <View>

                </View>
            </View>
            </ImageBackground>
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
    }
})
