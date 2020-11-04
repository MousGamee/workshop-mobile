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

    useEffect(() => {
         getClass()
    }, [currentSearch])
    const { cours, img } = useContext(ClassContext)
    const [search, setSearch] = useState('')
    const [currentSearch, setCurrentSearch] = useState([])
    const [noData, setNoData] = useState(true)

    const getClass = () => {
        setCurrentSearch([])
        if(cours[0].teacher === search){
             setCurrentSearch(cours)
             setNoData(false)
        }
        else setNoData(true)
        console.log(currentSearch)
    }

    const searchClass = search => {
        setSearch(search)
    }
    
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
                    onPress={() => getClass()}
                />
                <TextInput
                onChangeText={(text) => searchClass(text)}
                value={search}
                style={{
                    backgroundColor : "white",
                    width : '75%',
                    height : '45%',
                    borderRadius : 20,
                    paddingLeft : 20,
                    borderColor : '#000000'
                }}
                placeholder="Que recherches tu ?" />
            </View>

            <ScrollView style={{paddingHorizontal : 5}}>
                { 
                noData ? ( <View style={{flex : 1, justifyContent : "center", alignItems : "center"}} >
                                <Text >Aucun resultat pour cette recherche</Text>
                            </View>
                                
                                )
                :
                (  currentSearch.map((cour, i) => (
                        <Card 
                            key={i}
                            title={cour.title}
                            teacher={cour.teacher}
                            studio={cour.studio}
                            img={img.id[i]}
                        />
            )))
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
