import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList  } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { ClassContext } from '../context/ClassContext'

const ResultTeacher = () => {
    const { teacher } = useContext(ClassContext)
    return (
        <View style={{flex : 1}}>
            <FlatList
            data={teacher}
            keyExtractor={item => item.id}
            renderItem={item => (
                <ListItem  bottomDivider>
                    <Avatar source={item.picture} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>un sous titre</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )}
            />
        </View>
    )
}

export default ResultTeacher

const styles = StyleSheet.create({})
