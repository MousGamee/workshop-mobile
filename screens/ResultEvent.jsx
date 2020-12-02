import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { ClassContext } from '../context/ClassContext'

const ResultEvent = ({ navigation }) => {
    const { event } = useContext(ClassContext)
    return (
        <FlatList 
            data={event}
            contentContainerStyle={{ alignItems: 'center' }}
            key={'_'}
            numColumns={3}
            keyExtractor={item => '_' + item.id.toString()}
            renderItem={({ item , i}) => {
                return(
                    <TouchableOpacity style={{width : '33%', height : 130, padding : 2}} onPress={() => navigation.navigate('EventDetail', { item })}>
                        <Image
                            source={item.picture}
                            style={{width : null, height : null, resizeMode : "cover", flex : 1}} />
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default ResultEvent

const styles = StyleSheet.create({})
