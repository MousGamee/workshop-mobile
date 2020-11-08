import React, { useContext } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native'

import { SlideItem2 } from '../components/Category'


import Ionicons from 'react-native-vector-icons/Ionicons';
import { ClassContext } from '../context/ClassContext';

const Details = ({navigation, route}) => {
    const { img, cours } = useContext(ClassContext)
    const {cour} = route.params
    return (
        <ScrollView>
            <View style={{backgroundColor : 'white', flex : 1}}>
            <ImageBackground
                style={styles.image}
                source={img.id[cour.id]}
                imageStyle={{borderBottomLeftRadius : 30, borderBottomRightRadius : 30}}
            >
               <Text style={styles.tagLine}> {cour.title}</Text>
               <Text style={styles.classTitle}>{cour.teacher}</Text>

               <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{position : 'absolute', left : 20, top : 40,  padding : 10, borderRadius : 40, width : 40, height : 40, alignContent : "center"}}>
                   <Ionicons name="ios-arrow-back" size={25} color="#14AADF" />
               </TouchableOpacity>

               <TouchableOpacity style={{position : 'absolute', right : 20, top : 40, backgroundColor : '#fff', padding : 10, borderRadius : 40, width : 40, height : 40, alignContent : "center"}}>
                   <Ionicons name="ios-heart" size={25} color="#14AADF" />
               </TouchableOpacity>
           </ImageBackground>

           <TouchableOpacity style={styles.btnReseerve}>
               <Text style={styles.btnText}>Réserver</Text>
           </TouchableOpacity>

           <View style={styles.detailsContainer}>
               <View>
                   <Text style={styles.studioName}>{cour.studio}</Text>
                   <Text style={styles.stuioLocation}>Adresse du studio</Text>
               </View>
               <View>
                   <Text>{cour.description}</Text>
               </View>
           

           <View style={{
                    marginTop : 30
                }}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Recommandé pour vous</Text>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        {
                            cours.map((cour,i) => (
                                <TouchableOpacity key={i} onPress={() => navigation.push('Details', {cour})}>
                                <SlideItem2 
                                    key={i}
                                    title={cour.title}
                                    teacher={cour.teacher}
                                    studio={cour.studio}
                                    img={img.id[i]}
                                />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
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
    btnReseerve : {
        position : "absolute",
        right : 12,
        top : 350, 
        backgroundColor : '#14AADF',
        padding : 16,
        borderRadius : 40
    },
    btnText : {
        color : '#fff',
        fontSize : 14,
        fontWeight : 'bold'
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
