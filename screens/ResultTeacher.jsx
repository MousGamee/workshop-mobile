import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ClassContext } from '../context/ClassContext'

const WIDTH = Dimensions.get('window').width

const ResultTeacher = ({navigation}) => {
    
    const { teacher } = useContext(ClassContext)
    return (
        <View style={styles.container}>
           <FlatList
           data={teacher}
           keyExtractor={item => item.id.toString()}
           renderItem={( { item, i }) => (
            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Teacher')}>
                <Image 
                borderRadius={90}
                style={styles.teacherImg}
                source={item.picture}
                />
                <View style={styles.teacherInfo}>
                    <Text style={styles.teacherName}>{ item.name }</Text>
                    <Text>{ item.style }</Text>
                </View>
        </TouchableOpacity>
           )}
           />
        </View>
    )
}

export default ResultTeacher

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 10,
        backgroundColor : 'white',
        alignItems : "center"
    },
    row : {
        width : WIDTH - 20,
        height : 90,
        flexDirection : 'row',
        paddingHorizontal : 10,
        marginBottom : 10
    },
    teacherImg : {
        width : 90,
        height : 90
    }, 
    teacherInfo : {
        padding : 10
    },
    teacherName : {
        fontSize : 15,
        fontWeight : 'bold'
    }
})
