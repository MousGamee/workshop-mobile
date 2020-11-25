import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList  } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { ClassContext } from '../context/ClassContext'

const ResultTeacher = () => {
    const { teacher } = useContext(ClassContext)
    return (
        <View style={styles.container}>
            
        </View>
    )
}

export default ResultTeacher

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }
})
