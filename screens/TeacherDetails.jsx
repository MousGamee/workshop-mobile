import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    Image,
    Dimensions
} from 'react-native'
import TeacherTopTabNav from '../navigation/TeacherTopTabNav'
const WIDTH = Dimensions.get('window').width

const TeacherDetails = ({ navigation, route }) => {
    const {item} = route.params
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image 
                borderRadius={120}
                    source={item.picture}
                    style={styles.teacherPicture}
                />
                <View style={styles.teacherInfoSection}>
                    <Text style={styles.teacherName}>{item.name}</Text>
                    <Text style={styles.teacherStyle}> {item.style}</Text>
                    <Text style={styles.teacherDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Nisi ad ratione sunt! 
                    </Text>
                </View>
            </View>
            <TeacherTopTabNav />
        </ScrollView>
    )
}

export default TeacherDetails

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    },
    header : {
    width : '100%',
    flexDirection : 'row',
    height : 200,
    paddingTop : 55,
    paddingHorizontal : 30
    },
    teacherPicture : {
        width : 120,
        height : 120
    },
    teacherInfoSection : {
        backgroundColor : 'white',
        paddingHorizontal : 7,
        flex : 1,
        marginLeft : 15
    },
    teacherName : {
        fontSize : 25,
        fontWeight : "bold"
    },
    teacherStyle : {
        marginTop : 5,
        color : '#72CCEC',
        fontWeight : "bold"
    },
    teacherDescription : {
        marginTop : 5,
        color : 'lightgrey'
    }
})
