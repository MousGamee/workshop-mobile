import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    ScrollView,
    TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { classItems } from '../data'

const Search = () => {

    useEffect(() => {
        
    }, [value])

    const classImage = {
        id : {
          0 : require('../assets/image1.png'),
          1 : require('../assets/image2.png'),
          2 : require('../assets/image3.png'),
          3 : require('../assets/image4.png'),
          4 : require('../assets/image5.png'),
          5 : require('../assets/image6.png'),
        }
      }

    const [value, setValue] = useState('')
    return (
        <View style={{flex : 1, backgroundColor : 'white'}}>
            <View style={{
                marginTop : 10,
                height : 100,
                flexDirection : "row",
                justifyContent : "center", 
                alignItems : 'center'
            }}>
                <Ionicons name="ios-search" size={20} style={{color : "#72CCEC", marginRight : 10}} 
                    onPress={() => alert(value)}
                />
                <TextInput
                onChangeText={(text) => setValue(text)}
                value={value}
                style={{
                    backgroundColor : "white",
                    width : '75%',
                    height : '45%',
                    borderRadius : 20,
                    paddingLeft : 20,
                }}
                placeholder="Que recherches tu ?" />
            </View>

            <ScrollView style={{paddingHorizontal : 5}}>

            {
                classItems.map((item, i) => (
                    <TouchableOpacity  key={i}>
                    <View style={styles.searchCardContainer}>
                    <View style={styles.imageContainer}>
                        <Image 
                        borderBottomLeftRadius={20}
                        borderTopLeftRadius={20}
                            style={styles.image}
                            source={classImage.id[i]}
                        />
                    </View>
                    <View style={styles.classInfoContainer}>
                        <Text style={styles.classTitle}>{item.title}</Text>
                        <Text style={styles.classTeacher}>{item.teacher}</Text>
                        <Text style={styles.classStudio}>{item.studio}</Text>
                    </View>
                </View>
                </TouchableOpacity>
                ))
            }
           
            </ScrollView>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection : "row",
        padding : 5,  
        height : 80,
        alignItems : "center",
        justifyContent : 'space-around', 
        elevation : 5,
        
    },
    searchBar : {
        width : '70%',
        height : '70%',
        backgroundColor : "#fefefe"
    },
    searchCardContainer : {
        flexDirection : "row",
        width : "100%",
        width : 350,
        height : 150
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
