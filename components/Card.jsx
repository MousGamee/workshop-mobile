import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity ,
    Image
} from 'react-native'

const Card = ({title, teacher, studio, img}) => {
    return (    
        <View style={styles.searchCardContainer}>
        <View style={styles.imageContainer}>
            <Image 
            borderBottomLeftRadius={20}
            borderTopLeftRadius={20}
                style={styles.image}
                source={img}
            />
        </View>
        <View style={styles.classInfoContainer}>
            <Text style={styles.classTitle}>{title}</Text>
            <Text style={styles.classTeacher}>{teacher}</Text>
            <Text style={styles.classStudio}>{studio}</Text>
        </View>
    </View>
    )
}

export default Card

const styles = StyleSheet.create({
    searchCardContainer : {
        flexDirection : "row",
        width : "100%",
        width : 350,
        height : 150,
        marginBottom : 10
    },
    imageContainer : {
        width : '40%',
        height : "100%"
    },
    image : {
        resizeMode : "cover",
        flex : 1,
        width : null,
        height : null,
    },
    classInfoContainer : {
        paddingLeft : 10
    },
    classTeacher : {
        fontSize : 15,
        fontWeight : "bold",
        color : "#676767"
    },
    classTitle : {
        color : "#72CCEC"
    }
})
