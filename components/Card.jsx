import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    Dimensions
} from 'react-native'
const WIDTH = Dimensions.get('window').width

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
        width : WIDTH - 20,
        height : 170,
        marginBottom : 10,
        elevation : 2,
        shadowOpacity : 2, 
        borderTopLeftRadius : 20,
        borderBottomLeftRadius : 20
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
        paddingLeft : 10,
        paddingTop : 10
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
