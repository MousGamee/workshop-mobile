import React, {useState, useEffect, useContext} from 'react'
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
import Card from '../components/Card';
import { ClassContext } from '../context/ClassContext';

const Search = () => {

    const { cours, img } = useContext(ClassContext)
    const [search, setSearch] = useState('')

    const searchClass = search => {
        setSearch(search)
    }
    
    const row = []
    cours.forEach((cour, i) => {
        if(cour.teacher.indexOf(search) === -1 ||  search === '' ){
            return 
        }
        row.push(<Card 
            key={i}
            title={cour.title}
            teacher={cour.teacher}
            studio={cour.studio}
            img={img.id[i]}
        />)
    })

    return (
        <View style={{flex : 1, backgroundColor : 'white'}}>
            <View style={styles.inputContainer}>
                <Ionicons name="ios-search" size={20} style={{color : "#72CCEC", marginRight : 10}}  />
                <Ionicons 
                    name="ios-close" 
                    size={35} 
                    style={{color : "#72CCEC", position : "absolute", right : 50, elevation : 6, display : 'none'}}  
                />
                <TextInput
                onChangeText={(text) => searchClass(text)}
                value={search}
                style={styles.searchBar}
                placeholder="Que recherches tu ?" />
               
            </View>

            <ScrollView style={{paddingHorizontal : 5}}>
              {row}
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
        flexDirection : "row",
        justifyContent : "center", 
        alignItems : 'center',
    },
    searchBar : {
        backgroundColor : "white",
        width : '75%',
        height : '70%',
        borderRadius : 20,
        paddingLeft : 20,
        borderColor : "#FFFFFF",
        borderWidth : 1,
        elevation : 5,
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
