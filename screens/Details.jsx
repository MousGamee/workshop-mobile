import React, { useContext, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native'
import { SlideItem2 } from '../components/Category'
import { ClassContext } from '../context/ClassContext';

const Details = ({navigation, route}) => {

    const { cours, setFavoris } = useContext(ClassContext)
    const {item} = route.params
    return (
        <ScrollView>
            <View style={{backgroundColor : 'white', flex : 1}}>
            <ImageBackground
                style={styles.image}
                source={item.img}
                imageStyle={{borderBottomLeftRadius : 30, borderBottomRightRadius : 30}}
            >
               <Text style={styles.tagLine}> {item.title}</Text>
               <Text style={styles.classTitle}>{item.teacher}</Text>
           </ImageBackground>
           <View style={styles.detailsContainer}>
               <View>
                   <Text style={styles.studioName}>{item.studio}</Text>
                   <Text style={styles.stuioLocation}>Adresse du studio</Text>
               </View>
               <View>
                   <Text>{item.description}</Text>
               </View>
           <View style={{
                    marginTop : 30
                }}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Recommandé pour vous</Text>
                   <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={cours}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, i }) => (
                    <TouchableOpacity                   
                    onPress={() => navigation.navigate('Details', {item})}>
                      <SlideItem2  
                        title={item.title}
                        teacher={item.teacher}
                        studio={item.studio}
                        img={item.img}
                
                         />
                         </TouchableOpacity>
                   )}
                   />
                </View>  
                </View>
        </View>
        </ScrollView>

    )
}

export default Details

const styles = StyleSheet.create({

    image : {
        height : 380,
        justifyContent : "flex-end"
    },
    tagLine : {
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold',
        paddingHorizontal : 14,
        marginVertical : 6
    },
    classTitle : {
        color : 'white',
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 14,
        marginBottom : 30
    },
    detailsContainer : {
        paddingHorizontal : 10,
        marginTop : 40,
    },
    studioName : {
        fontSize : 25,
        marginBottom : 10,
        fontWeight : "bold",
        color : '#14AADF'
    },
    stuioLocation : {
        fontSize : 15,
        color : '#7E8081',
        marginBottom : 20,
    }


})
