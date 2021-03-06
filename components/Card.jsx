import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    Dimensions
} from 'react-native'
const WIDTH = Dimensions.get('window').width

const Card = ({title, teacher, studio, img, genre}) => {
    return (    
        <View style={styles.searchCardContainer}>
            <View style={styles.imageContainer}>
                <Image 
                borderBottomLeftRadius={20}
                borderRadius={20}
                    style={styles.image}
                    source={img}
                />
            </View>
            <View style={styles.classInfoContainer}>
                <Text style={styles.classTitle}>{title}</Text>
                <Text style={styles.classTeacher}>{teacher}</Text>
                <Text style={styles.classStudio}>{studio}</Text>
                <View style={styles.genres}>
                    {genre.map((g, i) => {
                        return (
                        <View key={g} style={styles.genre}>
                            <Text style={{fontSize: 9, opacity: 0.4, color : '#000000'}}>{g}</Text>
                        </View>
                        );
                    })}
                </View>
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
    },
    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 4,
      },
      genre: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        marginRight: 4,
      },
})
